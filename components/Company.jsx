import React from 'react'

const expertiseData = [
    {
        id: 1,
        title: 'Decades of Expertise',
        img: 'https://img.icons8.com/?size=160&id=58798&format=png'
    },
    {
        id: 2,
        title: 'EXPERT TOUR GUIDE',
        img: 'https://img.icons8.com/?size=128&id=43942&format=png'
    },
    {
        id: 3,
        title: 'BEAUTIFUL TOUR PLACE',
        img: 'https://img.icons8.com/?size=100&id=53514&format=png'
    },
]

const Company = () => {
    return (
        <section className="container mx-auto px-5 py-14 gap-20">
            <div className="flex flex-col justify-items-center items-center gap-14">
                <div className="grid grid-cols-2 gap-7 justify-center items-center">
                    <div className="flex flex-col gap-5">
                        <h1 className="font-Oswald text-4xl font-bold">WELCOME TO RADIX GROUP</h1>
                        <p className="text-base font-medium text-CharcoalGray font-DMSans">Established in 2014, Radix Group is Reputed Firm Offering Good Quality & Services with Stock & Commodities Market Services and Wealth Management to Retail Client. These include Equity, Currency and Commodity Trading. We Also Provide Tours & Travel Services, Passport Services, Flight & Hotel Booking, Insurance as well as Portfolio Management Services. We continue to focus on what we do best, Delivering Powerful Services and Easy-to-use Technology.</p>
                    </div>

                    <img src="https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njl8fHNtYWxsJTIwb2ZmaWNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60" alt="" className="w-full h-[300px] object-cover"/>
                </div>

                {/* <div className="flex flex-col gap-10 justify-center items-center">
                    <h1 className="font-Oswald text-4xl font-bold">WHY CHOOSE RADIX GROUP</h1>

                    <div className="grid grid-cols-3 gap-10">
                        {expertiseData.map((data) => {
                            return(
                            <div className="flex flex-col gap-2 text-center items-center bg-[whitesmoke] p-3 w-full cursor-pointer rounded-lg">
                                <img src={data.img} alt={data.title} className="w-[60px]" />
                                <p className="font-Oswald text-lg">{data.title}</p>
                            </div>
                            )
                        })}
                    </div>
                </div> */}
            </div>

        </section>
    )
}

export default Company