import React from 'react'

const ImageGallery = [
    {
        id: 1,
        img: 'https://images.unsplash.com/photo-1555400038-63f5ba517a47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        title: 'Bali'
    },
    {
        id: 2,
        img: 'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
        title: 'Dubai'
    },
    {
        id: 3,
        img: 'https://static.independent.co.uk/2022/04/26/15/Bangkok-Wat%20Arun%20Ratchawararam%20Ratchaworamahawihan%20%28%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%AD%E0%B8%A3%E0%B8%B8%E0%B8%93%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%A7%E0%B8%A3%E0%B8%B2%E0%B8%A3%E0%B8%B2%E0%B8%A1%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%A7%E0%B8%A3%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%A7%E0%B8%B4%E0%B8%AB%E0%B8%B2%E0%B8%A3%29%20191054MC.jpg',
        title: 'Bangkok'
    },
    {
        id: 4,
        img: 'https://images.unsplash.com/photo-1504214208698-ea1916a2195a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGhhaWxhbmR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60',
        title: 'Thailand'
    },
    {
        id: 5,
        img: 'https://images.unsplash.com/photo-1555217851-6141535bd771?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
        title: 'Singapore'
    },
    {
        id: 6,
        img: 'https://images.unsplash.com/photo-1581258601964-0e8879fdeb08?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
        title: 'Goa'
    },
    {
        id: 7,
        img: 'https://images.unsplash.com/photo-1596337323475-d2bf40338c8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        title: 'Kerala'
    },
    {
        id: 8,
        img: 'https://images.unsplash.com/photo-1613935461248-8dd5b651951f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
        title: 'Manali'
    },
]

const Gallery = () => {
    return (
        <section className="container mx-auto px-2 lg:px-5 py-10">
            <div className="flex flex-col gap-5">
                <h1 className="text-black text-2xl md:text-4xl lg:text-4xl font-Oswald font-semibold">RADIX GROUP GALLERY</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
                    {ImageGallery.map((image) => {
                        return (
                            <div className="relative group overflow-hidden cursor-pointer" key={image.id}>
                                <img src={image.img} alt={image.title} className="w-full h-[200px] object-cover transition duration-500 ease-in-out group-hover:scale-110 text-black" />
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-70 transition duration-500 ease-in-out"></div>
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out">
                                    <div className="text-white text-lg font-semibold font-Oswald text-center p-2">
                                        {image.title}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Gallery