'use client'

import { LockIcon } from 'lucide-react';
import Image from 'next/image';
import React from 'react'

const Sidebar = () => {
    const [showProjects, setShowProjects] = React.useState(true);
    const [showPriority, setShowPriority] = React.useState(true);

    const sidebarClassNames = `fixed flex  flex-col h-[100%] justify-between shadow-xl
    transition-all duration-300 h-full z-40 dark:bg-black overflow-y-auto bg-white w-64`
    return (
        <div className={sidebarClassNames}>
            {/* logo */}
            <div className='flex h-[100%] w-full flex-col justify-start'>
                <div className='z-50 flex min-h-[56px] w-full items-center justify-between bg-white px-6'>
                    <div className='text-xl font-bold text-gray-800 dark:text-white'>KDLIST</div>
                </div>
                {/* team */}
                <div className='flex items-center gap-5 px-7 py-4 border-y-[1.5px] border-gray-200 dark:border-white'>
                    <Image src='/logo.png' alt='logo' width={40} height={40} />
                    <div>
                        <h3 className='text-md font-bold tracking-wide dark:text-gray-200'>KD TEAM</h3>
                        <div className='flex items-center gap-2'>
                            <LockIcon className='mt-[0.1rem] h3 w-3 text-gray-500 dark:text-gray-400' />
                            <p className='text-sm text-gray-500 dark:text-gray-400'>Private</p>
                        </div>
                    </div>
                </div>
                {/* navbar links */}
            </div>
        </div>
    )
}

export default Sidebar