"use client"
import Link from 'next/link'
import React from 'react'
import { IoCallSharp } from 'react-icons/io5'
import { GrMailOption } from 'react-icons/gr'
import { BiLogoWhatsapp, BiLogoFacebookSquare, BiLogoTwitter } from 'react-icons/bi'
import { FaLinkedinIn } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'

const Footer = () => {
    return (
        <footer className="container mx-auto bg-[#f2f2f2] p-2 lg:p-4 flex flex-col justify-center items-center">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 justify-center sm:justify-items-start py-7 items-start gap-5">
                <div className="flex flex-col gap-5">
                    {/* <img src="https://www.radixgroup.in/images/logo-1.png" alt="" className="w-[200px]" /> */}
                    <h1 className="font-Oswald text-2xl font-semibold uppercase">Radix Group</h1>
                    <p className="font-DMSans text-lg">601 Shreeji Plaza, Nr Laxmi Sky City, Dastan Circle, S.P Ring Road , Nava Naroda, Ahmedabad. 382330</p>

                    <div>
                        <h1 className="font-Oswald text-lg">OFFICE TIMING:</h1>
                        <p>Monday-Saturday 8:30am To 8:30pm</p>
                    </div>
                </div>

                <div className="flex flex-col gap-5">
                    <h1 className="font-Oswald text-2xl font-semibold">OUR SERVICES</h1>

                    <div className="flex flex-col gap-2 font-DMSans">
                        <Link href="/services/passport-services" className="font-DMSans">Passport Services</Link>
                        <Link href="/services/flight-and-hotel-booking" className="font-DMSans">Flight And Hotel Booking</Link>
                        <Link href="/services/holiday-tours" className="font-DMSans">Holiday's Tours</Link>
                        <Link href="/services/stock-and-commodity-market" className="font-DMSans">Stock And Commodity Market</Link>
                        <Link href="/services/insurance" className="font-DMSans">Insurance</Link>
                    </div>
                </div>

                <div className="flex flex-col gap-5">
                    <h1 className="font-Oswald text-2xl font-semibold">QUICK LINKS</h1>

                    <div className="flex flex-col gap-2 font-DMSans">
                        <div className="flex flex-col gap-2 font-DMSans">
                            <Link href="/services/passport-services" className="font-DMSans">About Us</Link>
                            <Link href="/services/flight-and-hotel-booking" className="font-DMSans">Inquiry</Link>
                            <Link href="/services/holiday-tours" className="font-DMSans">Packages</Link>
                            <Link href="/services/stock-and-commodity-market" className="font-DMSans">Contact Us</Link>
                            <Link href="/services/insurance" className="font-DMSans">Privacy Policy</Link>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-5">
                    <h1 className="font-Oswald text-2xl font-semibold">CONTACT</h1>

                    <div className="flex flex-col gap-2 font-DMSans">
                        <div className="flex gap-3 items-center">
                            <IoCallSharp size={20}/>
                            <div className="flex flex-col gap-1">
                                <Link href="tel:+91 99984 31474" className="font-DMSans">+91 99984 31474</Link>
                                <Link href="tel:+91 99048 32413" className="font-DMSans">+91 99048 32413</Link>
                            </div>
                        </div>
                        <div className="flex gap-3 items-center">
                            <BiLogoWhatsapp size={20}/>
                            <div className="flex flex-col gap-1">
                                <Link href="https://wa.me/919998431474" className="font-DMSans">+91 9998431474</Link>
                            </div>
                        </div>
                        <div className="flex gap-3 items-center">
                            <GrMailOption size={20}/>
                            <div className="flex flex-col gap-1">
                                <Link href="mailto:info@radixgroup.in" className="font-DMSans">info@radixgroup.in</Link>
                                <Link href="mailto:radixgroup2000@gmail.com" className="font-DMSans">radixgroup2000@gmail.com</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-5 items-center pt-5">
                <div className="flex flex-col gap-5 items-center justify-center">
                    <h1 className="font-Oswald text-2xl font-semibold">FOLLOW US</h1>

                    <div className="flex gap-5">
                        <Link href="https://www.facebook.com/RADIX-GROUP-551250555384127" className="text-CharcoalGray hover:text-black cursor-pointer">
                            <BiLogoFacebookSquare size={25}/>
                        </Link>
                        <Link href="https://twitter.com/GroupRadix" className="text-CharcoalGray hover:text-black cursor-pointer">
                            <BiLogoTwitter size={25}/>
                        </Link>
                        <Link href="https://www.instagram.com/radix.group/" className="text-CharcoalGray hover:text-black cursor-pointer">
                            <FiInstagram size={25}/>
                        </Link>
                        <Link href="https://www.linkedin.com/in/radix-group-66b43a18b" className="text-CharcoalGray hover:text-black cursor-pointer">
                            <FaLinkedinIn size={25}/>
                        </Link>
                    </div>
                </div>
                <p className="text-center text-sm lg:text-lg text-neutral-600">© 2023, All Rights Reserved, Developed By Vatsal Rathod</p>
            </div>
        </footer>
    )
}

export default Footer