import Link from 'next/link'
import { Show, UserButton } from '@clerk/nextjs'
import ClimatePreview from '@/components/ClimatePreview'

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

          <ClimatePreview />
        </div>
      </section>
    </main>
  )
}