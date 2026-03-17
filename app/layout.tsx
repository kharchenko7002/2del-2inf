import type { Metadata } from 'next'
import {
  ClerkProvider,
  Show,
  SignInButton,
  SignUpButton,
  UserButton,
} from '@clerk/nextjs'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'TemperaturSensor',
  description: 'Overvåking av temperatur og luftfuktighet',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="no">
        <body
          className={`${geistSans.variable} ${geistMono.variable} bg-[#050816] text-white antialiased`}
        >
          <div className="relative min-h-screen overflow-hidden">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(108,71,255,0.16),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.12),transparent_30%)]" />

            <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050816]/70 backdrop-blur-2xl">
              <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-10">
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 shadow-[0_0_30px_rgba(108,71,255,0.18)] backdrop-blur-xl">
                    <span className="text-lg font-semibold text-white">T</span>
                  </div>

                  <div>
                    <p className="text-base font-semibold tracking-tight">
                      TemperaturSensor
                    </p>
                    <p className="text-sm text-white/45">
                      Temperatur og luftfuktighet
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Show when="signed-out">
                    <SignInButton mode="redirect">
                      <button className="rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-white/85 backdrop-blur-xl transition duration-300 hover:border-white/20 hover:bg-white/10 hover:text-white">
                        Logg inn
                      </button>
                    </SignInButton>

                    <SignUpButton mode="redirect">
                      <button className="rounded-full bg-gradient-to-r from-[#6c47ff] to-[#8b5cf6] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_40px_rgba(108,71,255,0.35)] transition duration-300 hover:scale-[1.02] hover:shadow-[0_12px_50px_rgba(108,71,255,0.45)]">
                        Opprett konto
                      </button>
                    </SignUpButton>
                  </Show>

                  <Show when="signed-in">
                    <div className="rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur-xl">
                      <UserButton />
                    </div>
                  </Show>
                </div>
              </div>
            </header>

            {children}
          </div>
        </body>
      </html>
    </ClerkProvider>
  )
}