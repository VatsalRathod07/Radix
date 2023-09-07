import Link from 'next/link'
import React from 'react'

const ServicesData = [
    {
        id: 1,
        title: 'Passport',
        img: 'https://img.icons8.com/?size=100&id=9867&format=png',
        url: ''
    },
    {
        id: 2,
        title: 'Flight & Hotel Booking',
        img: 'https://img.icons8.com/?size=48&id=3261&format=png',
        url: ''
    },
    {
        id: 3,
        title: 'Holiday Tours',
        img: 'https://img.icons8.com/?size=96&id=uR0GgXuGH3iM&format=png',
        url: ''
    },
    {
        id: 4,
        title: 'Stock & Commodity Market',
        img: 'https://img.icons8.com/?size=48&id=92612&format=png',
        url: ''
    },
    {
        id: 5,
        title: 'Insurance',
        img: 'https://img.icons8.com/?size=60&id=59879&format=png',
        url: ''
    },
] 

const Serivces = () => {
    return (
        <section className="container mx-auto pt-10 px-2 lg:px-5">
            <div className="grid md:grid-cols-2 lg:grid-cols-5 p-5 justify-items-center items-center bg-[whitesmoke] rounded-md">
               {ServicesData.map((data) => {
                return (
                    <div className="flex flex-col gap-2 text-center items-center hover:bg-white p-3 w-full cursor-pointer rounded-lg transition duration-500 ease-in-out" key={data.id}>
                        <img src={data.img} alt={data.title} className="w-[30px]"/>
                        <p className="font-Oswald text-lg">{data.title}</p>
                        <Link href={data.url} className="font-DMSans text-blue-600 font-medium text-sm">View More</Link>
                    </div>
                )
               })}
            </div>
        </section>
    )
}

export default Serivces