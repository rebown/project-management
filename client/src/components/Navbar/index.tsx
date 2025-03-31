'use client'

import React from 'react'
import { Menu, Moon, Search, Sun } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '@/app/redux';
import { setDarkMode, setSidebarOpen } from '@/state';

const Navbar = () => {
    const dispatch = useAppDispatch();
    const { isDarkMode } = useAppSelector((state) => state.global);
    const { isSidebarOpen } = useAppSelector((state) => state.global);

    return (
        <div className='flex items-center justify-between bg-white px-4 py-3 dark:bg-black'>
            {/* Search Bar */}
            <div className='flex items-center gap-8'>
                {/* menu icon */}
                {isSidebarOpen
                    ? null
                    : (
                        <button
                            onClick={() => dispatch(setSidebarOpen(!isSidebarOpen))}>
                            <Menu className='h-6 w-6 cursor-pointer' />
                        </button>
                    )
                }
                <div className='relative flex h-min w-[200px]'>
                    <Search className='absolute left-[4px] top-1/2 -translate-y-1/2' />
                    <input className='w-full rounded border-none bg-gray-100 p-2 pl-8 placeholder-gray-400'
                        placeholder='Search...'
                        type='search' />
                </div>
            </div>
            {/* dark mode icon */}
            <button
                onClick={() => dispatch(setDarkMode(!isDarkMode))}
                className={isDarkMode ? 'dark:hover:bg-gray-700' : 'hover:bg-gray-100'}
            >
                {isDarkMode
                    ? <Sun className='h-6 w-6 cursor-pointer' />
                    : <Moon className='h-6 w-6 cursor-pointer' />}
            </button>
        </div>
    )
}

export default Navbar