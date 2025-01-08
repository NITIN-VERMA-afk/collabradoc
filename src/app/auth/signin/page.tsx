import { Metadata } from 'next'
import SignInForm from './sign-in-form'

export const metadata: Metadata = {
  title: 'Sign In | Collaborative Editor',
  description: 'Sign in or sign up to start collaborating',
}

export default function SignInPage() {
  return (
    <div className="container mx-auto px-4 py-16 flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-8">Welcome to Collaborative Editor</h1>
        <SignInForm />
      </div>
    </div>
  )
}