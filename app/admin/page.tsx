import React from 'react'
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation'


import AdminProjects from '../components/AdminProjects';

const page = () => {
  return (
    <div>
        <h1 className='font-medium text-2xl text-white tracking-tighter'>
            Welcome to the Admin Dashboard
        </h1>
        <AdminProjects />
    </div>
  )
}

export async function generateMetadata() {
    const cookieStore = cookies();
    const token = cookieStore.get('token');

    if (!token || token.value !== 'admin-token') {
        return redirect("/admin/login")
    }
}

export default page