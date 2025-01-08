import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { signOut } from '@/app/actions/auth'

export default function DashboardPage() {
  const user = cookies().get('user')

  if (!user) {
    redirect('/auth/signin')
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">Welcome to your Dashboard</h1>
      <p className="mb-4">You are signed in as: {user.value}</p>
      <form action={signOut}>
        <Button type="submit">Sign Out</Button>
      </form>
    </div>
  )
}