'use client'

import { useEffect, useMemo, useState } from 'react'

type Reading = {
  id: number
  temp: number | string
  fukt: number | string
  created_at: string
}

export default function ClimatePreview() {
  const [rows, setRows] = useState<Reading[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch('/api/readings', { cache: 'no-store' })

        if (!res.ok) {
          throw new Error('Failed to fetch readings')
        }

        const data = await res.json()
        setRows(data)
      } catch (err) {
        console.error(err)
        setError('Kunne ikke laste måledata')
      } finally {
        setLoading(false)
      }
    }

    load()
  }, [])

  const stats = useMemo(() => {
    if (!rows.length) return null

    const temps = rows.map((r) => Number(r.temp))
    const fukts = rows.map((r) => Number(r.fukt))

    const latest = rows[rows.length - 1]
    const prev = rows.length > 1 ? rows[rows.length - 2] : null

    const latestTemp = Number(latest.temp)
    const latestFukt = Number(latest.fukt)

    const tempMin = Math.min(...temps)
    const tempMax = Math.max(...temps)
    const fuktMin = Math.min(...fukts)
    const fuktMax = Math.max(...fukts)

    const tempTrend = prev ? latestTemp - Number(prev.temp) : 0
    const fuktTrend = prev ? latestFukt - Number(prev.fukt) : 0

    const tempStatus =
      latestTemp < 20 ? 'Kjølig' : latestTemp > 25 ? 'Varm' : 'Stabil'

    const fuktStatus =
      latestFukt < 30 ? 'Tørr' : latestFukt > 60 ? 'Fuktig' : 'Normal'

    return {
      latestTemp,
      latestFukt,
      tempMin,
      tempMax,
      fuktMin,
      fuktMax,
      tempTrend,
      fuktTrend,
      tempStatus,
      fuktStatus,
      updatedAt: latest.created_at,
    }
  }, [rows])

  const formatTrend = (value: number, unit: string) => {
    if (value === 0) return `0${unit}`
    return `${value > 0 ? '+' : ''}${value.toFixed(1)}${unit}`
  }

  const formatUpdated = (date: string) => {
    return new Date(date).toLocaleString('no-NO', {
      day: '2-digit',
      month: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  if (loading) {
    return (
      <div className="relative rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
        <div className="text-white/70">Laster måledata...</div>
      </div>
    )
  }

  if (error || !stats) {
    return (
      <div className="relative rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
        <div className="text-red-300">{error || 'Ingen data tilgjengelig'}</div>
      </div>
    )
  }

  return (
    <div className="relative">
      <div className="absolute -left-8 top-8 h-28 w-28 rounded-full bg-violet-500/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-28 w-28 rounded-full bg-cyan-400/20 blur-3xl" />

      <div className="relative rounded-[32px] border border-white/10 bg-white/5 p-4 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
        <div className="grid gap-4">
          <div className="rounded-[28px] border border-white/10 bg-[linear-gradient(135deg,rgba(108,71,255,0.22),rgba(255,255,255,0.04))] p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-white/50">
                  Temperatur
                </p>
                <div className="mt-4 flex items-end gap-2">
                  <span className="text-6xl font-semibold leading-none">
                    {stats.latestTemp.toFixed(1)}
                  </span>
                  <span className="mb-1 text-2xl text-white/70">°C</span>
                </div>
                <p className="mt-3 text-sm text-emerald-300">
                  Siste måling fra databasen
                </p>
              </div>

              <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-white/10 bg-white/5">
                <div className="absolute inset-2 rounded-full border-4 border-violet-400/40" />
                <div className="absolute inset-0 rounded-full shadow-[0_0_40px_rgba(108,71,255,0.25)]" />
                <span className="text-lg font-medium text-white/90">
                  {stats.tempStatus}
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              <div className="rounded-2xl bg-black/20 p-3">
                <p className="text-xs text-white/45">Min</p>
                <p className="mt-1 text-lg font-medium">
                  {stats.tempMin.toFixed(1)}°C
                </p>
              </div>
              <div className="rounded-2xl bg-black/20 p-3">
                <p className="text-xs text-white/45">Maks</p>
                <p className="mt-1 text-lg font-medium">
                  {stats.tempMax.toFixed(1)}°C
                </p>
              </div>
              <div className="rounded-2xl bg-black/20 p-3">
                <p className="text-xs text-white/45">Trend</p>
                <p className="mt-1 text-lg font-medium">
                  {formatTrend(stats.tempTrend, '°C')}
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-[linear-gradient(135deg,rgba(34,211,238,0.18),rgba(255,255,255,0.04))] p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-white/50">
                  Luftfuktighet
                </p>
                <div className="mt-4 flex items-end gap-2">
                  <span className="text-6xl font-semibold leading-none">
                    {stats.latestFukt.toFixed(1)}
                  </span>
                  <span className="mb-1 text-2xl text-white/70">%</span>
                </div>
                <p className="mt-3 text-sm text-cyan-200">
                  Siste måling fra databasen
                </p>
              </div>

              <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-white/10 bg-white/5">
                <div className="absolute inset-2 rounded-full border-4 border-cyan-300/40" />
                <div className="absolute inset-0 rounded-full shadow-[0_0_40px_rgba(34,211,238,0.22)]" />
                <span className="text-lg font-medium text-white/90">
                  {stats.fuktStatus}
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              <div className="rounded-2xl bg-black/20 p-3">
                <p className="text-xs text-white/45">Min</p>
                <p className="mt-1 text-lg font-medium">
                  {stats.fuktMin.toFixed(1)}%
                </p>
              </div>
              <div className="rounded-2xl bg-black/20 p-3">
                <p className="text-xs text-white/45">Maks</p>
                <p className="mt-1 text-lg font-medium">
                  {stats.fuktMax.toFixed(1)}%
                </p>
              </div>
              <div className="rounded-2xl bg-black/20 p-3">
                <p className="text-xs text-white/45">Trend</p>
                <p className="mt-1 text-lg font-medium">
                  {formatTrend(stats.fuktTrend, '%')}
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-black/20 p-5 backdrop-blur-xl">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm text-white/50">Siste oppdatering</p>
                <p className="mt-1 text-lg font-medium">
                  {formatUpdated(stats.updatedAt)}
                </p>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-300">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                Sensor aktiv
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}