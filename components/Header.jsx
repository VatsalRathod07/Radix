"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

const Header = () => {
    const pathname = usePathname()
    const [sidebarOpen, setSidebarOpen] = useState(false);


    const routes = [
        {
            path: '/',
            name: 'Home'
        },
        {
            path: '',
            name: 'About Us'
        },
        {
            path: '',
            name: 'Packages',
            subroutes: [
                {
                    path: '/packages/singapore-3-star-package-for-5-days-hotel-ibis-novena-code-100445',
                    name: 'SINGAPORE 3 STAR PACKAGE FOR 5 DAYS- HOTEL IBIS NOVENA(CODE : 100445)'
                },
                {
                    path: '/packages/delights-of-dubai-4night-4star-code-99628',
                    name: 'DELIGHTS OF DUBAI - 4NIGHT(4STAR)(CODE : 99628)'
                },
                {
                    path: '/packages/thailand-bangkok-and-pattaya-4-star-package-for-5-days-code-100402',
                    name: 'THAILAND - BANGKOK AND PATTAYA 4 STAR PACKAGE FOR 5 DAYS(CODE : 100402)'
                },
                {
                    path: '/packages/goa-2-star-package-for-4-days-with-breakfast-code-84394',
                    name: 'GOA 2 STAR PACKAGE FOR 4 DAYS WITH BREAKFAST(CODE : 84394)'
                },
                {
                    path: '/packages/kerala-3-star-package-for-7-days-code-95006',
                    name: 'KERALA 3 STAR PACKAGE FOR 7 DAYS(CODE : 95006)'
                },
                {
                    path: '/packages/shimla-manali-and-chandigarh-3-star-package-for-07-days-code-76808',
                    name: 'SHIMLA, MANALI AND CHANDIGARH 3 STAR PACKAGE FOR 07 DAYS(CODE : 76808)'
                },
                {
                    path: '/packages/enjoy-bali-for-3-nights-4-days-at-club-med-bali-code-100286',
                    name: 'ENJOY BALI FOR 3 NIGHTS 4 DAYS AT CLUB MED BALI(CODE : 100286)'
                },
                {
                    path: '/packages/port-blair-and-havelock-island-3-star-package-for-5-days-code-73552',
                    name: 'PORT BLAIR AND HAVELOCK ISLAND 3 STAR PACKAGE FOR 5 DAYS(CODE : 73552)'
                },
            ]
        },
        {
            path: '',
            name: 'Services',
            subroutes: [
                {
                    path: '/services/passport-services',
                    name: 'Passport Services'
                },
                {
                    path: '/services/flight-and-hotel-booking',
                    name: 'Flight And Hotel Booking'
                },
                {
                    path: '/services/holiday-tours',
                    name: `Holiday's Tours`
                },
                {
                    path: '/services/stock-and-commodity-market',
                    name: 'Stock And Commodity Market'
                },
                {
                    path: '/services/insurance',
                    name: 'Insurance'
                },
            ]
        },
        {
            path: '',
            name: 'Inquiry'
        },
        {
            path: '',
            name: 'Contact Us'
        },
        {
            path: '',
            name: 'Agent Login'
        },
    ]

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };


    return (
        <div>
            {/* Sidebar for smaller screens */}
            <div className={`fixed inset-0 z-50 bg-black bg-opacity-30 transition-opacity ${sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <div className="w-52 h-full bg-white bg-opacity-50 backdrop-blur-lg transform translate-x-full overflow-y-auto transition-transform ease-in-out duration-300">
                    <div className="p-4">
                        <button onClick={toggleSidebar} className="text-2xl">×</button>
                    </div>
                    <div className="divide-y">
                        {routes.map((route) => (
                            <Link key={route.name} href={route.path} onClick={toggleSidebar} className={`block p-4 hover:bg-gray-200 ${pathname === route.path ? 'font-bold' : ''}`}>
                                {route.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* Header */}
            <nav className="container mx-auto sticky top-0 left-0 z-10 bg-white shadow-sm">
                <div className="flex justify-between p-4 items-center">
                    <img src="https://www.radixgroup.in/images/logo-1.png" alt="" className="w-[100px]" />
                    <div className="flex gap-6 items-center">
                        {/* Hamburger menu button for smaller screens */}
                        <button onClick={toggleSidebar} className="md:hidden text-2xl">
                            ☰
                        </button>
                        {/* Navigation links for larger screens */}
                        <div className="hidden md:flex gap-5">
                            {routes.map((route) => (
                                <div key={route.name}>
                                    <Link href={route.path} className={`font-Oswald text-lg uppercase font-normal ${pathname === route.path ? 'active-link' : ''}`}>
                                        {route.name}
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;