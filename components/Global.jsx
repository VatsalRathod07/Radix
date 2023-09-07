import React from 'react'

const Global = () => {
    return (
        <section className="container mx-auto px-2 lg:px-5 py-10">
            <div className="grid lg:grid-cols-2 justify-items-center items-center gap-5 p-2">
                <div className="flex flex-col gap-5">
                    <h1 className="text-black text-2xl md:text-4xl lg:text-4xl font-Oswald font-semibold">NOW WE ARE GLOBALY EVERYWHARE</h1>
                    <p className="font-DMSans text-base text-CharcoalGray">We are radix group working for to support for search best tour place and easy to book hotel and fight. We also support our customer to make passport and renew passport. Our best services get our customer to enjoy life in every moment of holidays. Our motto is to provide best and reliable service to our customer for Passport Making, Flight and Hotel Booking, Holiday's tour plan, Stock and Commodity Market and Insurance.</p>
                </div>
                {/* <img src="https://img.freepik.com/premium-vector/world-map-silhouette-digital-simple-grey-map-flat-style-vector-realistic-illustration-earth-isolated-white-background_176516-1332.jpg?w=2000" alt="" className="w-full object-cover"/> */}
                <img src="https://images.freeimages.com/365/images/previews/f00/free-vector-world-map-30721.png" alt="" className="w-full object-cover" />
            </div>
        </section>
    )
}

export default Global