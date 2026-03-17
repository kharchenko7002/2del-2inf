// app/sign-in/[[...sign-in]]/page.tsx
import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <main className="flex min-h-[calc(100vh-80px)] items-center justify-center px-6 py-10 bg-[#050816]">
      <SignIn />
    </main>
  )
}