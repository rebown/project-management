import React from 'react'
import Navbar from '@/app/(components)/Navbar'
import Sidebar from '@/app/(components)/Sidebar'

const dashboardWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='flex min-h-screen w-full bg-gray-50 text-gray-900'>
            {/* sidebar */}
            <Sidebar />
            <main className='flex flex-col w-full bg-gray dark:bg-dark-bg md:pl-64'>
                {/* navbar */}
                <Navbar />
                {/* content */}
                navbar
            </main>
        </div>
    )
}

export default dashboardWrapper