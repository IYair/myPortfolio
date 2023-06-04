'use client'

import { LayoutAccess } from '@/layouts/LayoutAccess'
import { signIn, signOut, useSession } from 'next-auth/react'

export const Dashboard = () => {
  const { data: session } = useSession()
  console.log({ session })

  return (
    <LayoutAccess>
      <div className="m-4">
      <h1>Dashboard</h1>
      </div>
    </LayoutAccess>
  )
}

export default Dashboard
