'use server'

import { cookies } from 'next/headers'
import { createHash } from 'crypto'


const users: { [email: string]: string } = {}

function hashPassword(password: string): string {
  return createHash('sha256').update(password).digest('hex')
}

export async function signUp(email: string, password: string) {
  if (users[email]) {
    return { success: false, error: 'User already exists' }
  }

  users[email] = hashPassword(password)
  
  // In a real application, you would create a session here
  cookies().set('user', email, { httpOnly: true, secure: true })

  return { success: true }
}

export async function signIn(email: string, password: string) {
  const user = users[email]
  if (!user || user !== hashPassword(password)) {
    return { success: false, error: 'Invalid email or password' }
  }

 
  cookies().set('user', email, { httpOnly: true, secure: true })

  return { success: true }
}

export async function signOut() {
  cookies().delete('user')
  return { success: true }
}