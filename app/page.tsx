import Link from 'next/link'
import { Show, UserButton } from '@clerk/nextjs'

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050816] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(108,71,255,0.22),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(0,194,255,0.18),transparent_30%),linear-gradient(to_bottom,#050816,#0a1023,#050816)]" />
      <div className="absolute left-[-120px] top-20 h-72 w-72 rounded-full bg-[#6c47ff]/20 blur-3xl" />
      <div className="absolute bottom-10 right-[-80px] h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:60px_60px] opacity-20" />

      <section className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 py-12 sm:px-8 lg:px-10">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_16px_rgba(74,222,128,0.9)]" />
              Smart overvåking av inneklima
            </div>

            <h1 className="mt-6 text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Temperatur og
              <span className="block bg-gradient-to-r from-white via-cyan-200 to-violet-300 bg-clip-text text-transparent">
                luftfuktighet
              </span>
              i elegant oversikt
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
              Følg målingene dine i sanntid med en ren, moderne og lettlest
              visning. Perfekt for hjem, kontor, lager og tekniske rom.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/70 backdrop-blur-xl">
                Live oppdateringer
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/70 backdrop-blur-xl">
                Enkle måledata
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/70 backdrop-blur-xl">
                Sikker innlogging
              </div>
            </div>

            <Show when="signed-out">
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/sign-in"
                  className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#6c47ff] to-[#7f5cff] px-7 py-3.5 text-base font-medium text-white shadow-[0_10px_40px_rgba(108,71,255,0.35)] transition duration-300 hover:scale-[1.02] hover:shadow-[0_14px_50px_rgba(108,71,255,0.45)]"
                >
                  Logg inn
                </Link>

                <Link
                  href="/sign-up"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-base font-medium text-white/90 backdrop-blur-xl transition duration-300 hover:border-white/25 hover:bg-white/10 hover:text-white"
                >
                  Opprett konto
                </Link>
              </div>
            </Show>

            <Show when="signed-in">
              <div className="mt-10 inline-flex items-center gap-4 rounded-3xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-2xl shadow-[0_10px_50px_rgba(0,0,0,0.25)]">
                <UserButton />
                <div>
                  <p className="text-base font-medium">Du er logget inn</p>
                  <p className="text-sm text-white/60">
                    Kontoen din er klar for å vise sensorverdier.
                  </p>
                </div>
              </div>
            </Show>

            <div className="mt-12 grid max-w-2xl gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                <p className="text-sm text-white/50">Status</p>
                <p className="mt-2 text-2xl font-semibold">Stabil</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                <p className="text-sm text-white/50">Oppdatert</p>
                <p className="mt-2 text-2xl font-semibold">Nå</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                <p className="text-sm text-white/50">Miljø</p>
                <p className="mt-2 text-2xl font-semibold">Komfort</p>
              </div>
            </div>
          </div>

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
                          22.4
                        </span>
                        <span className="mb-1 text-2xl text-white/70">°C</span>
                      </div>
                      <p className="mt-3 text-sm text-emerald-300">
                        Behagelig nivå for innemiljø
                      </p>
                    </div>

                    <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-white/10 bg-white/5">
                      <div className="absolute inset-2 rounded-full border-4 border-violet-400/40" />
                      <div className="absolute inset-0 rounded-full shadow-[0_0_40px_rgba(108,71,255,0.25)]" />
                      <span className="text-lg font-medium text-white/90">Stabil</span>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-3 gap-3">
                    <div className="rounded-2xl bg-black/20 p-3">
                      <p className="text-xs text-white/45">Min</p>
                      <p className="mt-1 text-lg font-medium">21.8°C</p>
                    </div>
                    <div className="rounded-2xl bg-black/20 p-3">
                      <p className="text-xs text-white/45">Maks</p>
                      <p className="mt-1 text-lg font-medium">23.1°C</p>
                    </div>
                    <div className="rounded-2xl bg-black/20 p-3">
                      <p className="text-xs text-white/45">Trend</p>
                      <p className="mt-1 text-lg font-medium">+0.2°C</p>
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
                          48
                        </span>
                        <span className="mb-1 text-2xl text-white/70">%</span>
                      </div>
                      <p className="mt-3 text-sm text-cyan-200">
                        Balansert nivå for god komfort
                      </p>
                    </div>

                    <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-white/10 bg-white/5">
                      <div className="absolute inset-2 rounded-full border-4 border-cyan-300/40" />
                      <div className="absolute inset-0 rounded-full shadow-[0_0_40px_rgba(34,211,238,0.22)]" />
                      <span className="text-lg font-medium text-white/90">Normal</span>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-3 gap-3">
                    <div className="rounded-2xl bg-black/20 p-3">
                      <p className="text-xs text-white/45">Min</p>
                      <p className="mt-1 text-lg font-medium">44%</p>
                    </div>
                    <div className="rounded-2xl bg-black/20 p-3">
                      <p className="text-xs text-white/45">Maks</p>
                      <p className="mt-1 text-lg font-medium">51%</p>
                    </div>
                    <div className="rounded-2xl bg-black/20 p-3">
                      <p className="text-xs text-white/45">Trend</p>
                      <p className="mt-1 text-lg font-medium">−1%</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-[28px] border border-white/10 bg-black/20 p-5 backdrop-blur-xl">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm text-white/50">Siste oppdatering</p>
                      <p className="mt-1 text-lg font-medium">Akkurat nå</p>
                    </div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-300">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                      Sensor aktiv
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}