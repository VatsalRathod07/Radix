"use client"
import Link from 'next/link'
import React, { useState } from 'react';

const Header = () => {

    const [activeLink, setActiveLink] = useState(null);

    const handleLinkClick = (index) => {
        setActiveLink(index);
    };

    return (
        <nav className="container mx-auto sticky top-0 left-0 z-10 bg-white shadow-sm">
            <div className="flex justify-between p-4 items-center">
                {/* <h4 className="font-Oswald uppercase font-medium text-lg">Luxe Lineage</h4> */}
                <img src="https://www.radixgroup.in/images/logo-1.png" alt="" className="w-[100px]"/>
                <div className="flex gap-6 items-center">
                    <Link href="#" className={`font-Oswald text-lg uppercase font-normal ${activeLink === index ? 'nav-link-active' : ''}`} onClick={() => handleLinkClick(index)} >Home</Link>
                    <Link href="#" className={`font-Oswald text-lg uppercase font-normal ${activeLink === index ? 'nav-link-active' : ''}`} onClick={() => handleLinkClick(index)} >About Us</Link>
                    <Link href="#" className={`font-Oswald text-lg uppercase font-normal ${activeLink === index ? 'nav-link-active' : ''}`} onClick={() => handleLinkClick(index)} >Packages</Link>
                    <Link href="#" className={`font-Oswald text-lg uppercase font-normal ${activeLink === index ? 'nav-link-active' : ''}`} onClick={() => handleLinkClick(index)} >Services</Link>
                    <Link href="#" className={`font-Oswald text-lg uppercase font-normal ${activeLink === index ? 'nav-link-active' : ''}`} onClick={() => handleLinkClick(index)} >Inquiry</Link>
                    <Link href="#" className={`font-Oswald text-lg uppercase font-normal ${activeLink === index ? 'nav-link-active' : ''}`} onClick={() => handleLinkClick(index)} >Contact Us</Link>
                    <Link href="#" className={`font-Oswald text-lg uppercase font-normal ${activeLink === index ? 'nav-link-active' : ''}`} onClick={() => handleLinkClick(index)} >Agent Login</Link>
                </div>
            </div>
        </nav>
    )
}

export default Header