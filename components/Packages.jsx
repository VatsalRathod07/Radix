import Link from 'next/link'
import React from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import { BsCalendarDate } from 'react-icons/bs'

const PakagesData = [
  {
    id: 1,
    img: 'https://assets.isu.pub/document-structure/230424065209-93b9a472898d270bf5b0be8544b0f4cb/v1/4a115288289e5f07a372bea691b7fa96.jpeg',
    title: 'PORT BLAIR AND HAVELOCK ISLAND 3 STAR PACKAGE FOR 5 DAYS(CODE : 73552)',
    price: 'Rs. 15493.00',
    date: 'Valid Till 10-01-2023',
    person: 'Package Per Person (1 Person)',
    description: `Ac Accommodation in mentioned hotels or Similar category hotel Daily Breakfast All transfers & Site Seeing by a AC Vehicle at Port Blair as per itinerary All transfers & Site Seeing at Havelock Island by Ac Vehicle as per itinerary Tour Coordinator for assistance on Day Tour on Daily Basis. Return Trip to Havelock from Port Blair included Makruzz/ Green Ocean/ Aashi/ Sea Link/ ITT Mejestic All Taxes. Except 5% GST`
  },
  {
    id: 2,
    img: 'https://www.tourmyindia.com/states/goa/image/beaches-goa.webp',
    title: 'GOA 2 STAR PACKAGE FOR 4 DAYS WITH BREAKFAST(CODE : 84394)',
    price: 'Rs. 6294.00',
    date: 'Valid Till 02-01-2023',
    person: 'Package Per Person (1 Person)',
    description: `Â Package Includes 3 nights’ accommodation on twin sharing basis in well appointed air-conditioned rooms Transfers in air-conditioned vehicle either from Mapusa or Panjim bus stand / Thivim or Karmali railway station / Airport (0800am to 0800PM) Early / Late Transfers before 0800am and After 0800pm addittional Rs.500/- will be Charged. With 03 Breakfast Two half day sightseeing by Ac coach to South Goa & North Goa No extra charge for children below the age of 5 on package plans Free use of swimming pool (with proper swim wear) Inclusive of taxes (GST EXTRA)?`
  },
  {
    id: 3,
    img: 'https://digitalnomads.world/wp-content/uploads/2021/01/bali-for-digital-nomads.jpg',
    title: 'ENJOY BALI FOR 3 NIGHTS 4 DAYS AT CLUB MED BALI(CODE : 100286)',
    price: 'Rs. 41031.00',
    date: 'Valid Till 30-11-2022',
    person: 'Package Per Person (1 Person)',
    description: `AReturn airport transfers Premium accommodation with adjustable rooms for large families Room Category Superior Room Access to private beach, gym and swimming pool, Complementary Wi-Fi All day gourmet cuisine (breakfast, lunch, snacks & dinner) at a restaurant of your choice Unlimited alcoholic drinks everyday including a large variety of branded spirits, international beers and signature cocktails A large selection of unlimited fresh juices, soft drinks, mock tails Exciting Activities Unlimited land, air and water sport activities like sailing, snorkelling, glass bottom kayak, cooking demo, beach volley ball, bocce ball and more Learn a new sport with professional GO's - Flying trapeze, sailing, aqua fitness and more`
  },
  {
    id: 4,
    img: 'https://images.unsplash.com/photo-1549810197-0cf0fa18ae82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80',
    title: 'SHIMLA, MANALI AND CHANDIGARH 3 STAR PACKAGE FOR 07 DAYS(CODE : 76808)',
    price: 'Rs. 19415.00',
    date: 'Valid Till 19-12-2022',
    person: 'Package Per Person (1 Person)',
    description: `Accommodation in well appointed rooms on Twin sharing basis Breakfast and dinner at hotel All Transfersand sightseeing as per the itinerary from Chandigarh (ac will not work in hills) Rohtang is on direct payment basis. All Applicable taxes (GST Extra)`
  },
  {
    id: 5,
    img: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80',
    title: 'KERALA 3 STAR PACKAGE FOR 7 DAYS(CODE : 95006)',
    price: 'Rs. 22725.00',
    date: 'Valid Till 31-03-2023',
    person: 'Package Per Person (1 Person)',
    description: `2 nights accommodation in mentioned or similar hotel in Munnar 1 nights accommodation in mentioned or similar hotel in Thekkady. 1 nights accommodation in mentioned or similar hotel in Alleppey. 2 nights accommodation in mentioned or similar hotel in Kovalam, Daily breakfast, Transfer & sightseeing as per the itinerary by Individual A/C Vehicle, All toll tax, parking fees & driver allowances, All applicable hotel taxes(GST extra)?`
  },
  {
    id: 6,
    img: 'https://images.unsplash.com/photo-1566830646346-908d87490bba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    title: 'THAILAND - BANGKOK AND PATTAYA 4 STAR PACKAGE FOR 5 DAYS(CODE : 100402)',
    price: 'Rs. 13042.00',
    date: 'Valid Till 31-03-2023',
    person: 'Package Per Person (1 Person)',
    description: `2 night's hotel accommodation in Pattaya 2 night's hotel accommodation in Bangkok, Bangkok Airport to Pattaya Hotel Transfer, Pattaya Hotel to Bangkok Transfer + Enroute Bangkok City Tour ( Golden Buddha & Marble Buddha), Coral Island Tour with Indian Lunch, All Transfers on SIC, Bangkok Hotel to Bangkok Airport Transfer, All hotel Taxes (GST extra)`
  },
]

const Packages = () => {

  const truncateDescription = (text, maxLength) => {
    const words = text.split(' ');
    if (words.length <= maxLength) {
      return text;
    }
    const truncatedText = words.slice(0, maxLength).join(' ');
    return `${truncatedText}...`;
  };

  return (
    <section className="container mx-auto px-5 py-10 flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-Oswald text-CharcoalGray">OUR SPECIAL PACKAGES</h3>
        <h1 className="text-black text-4xl font-Oswald font-semibold">SPECIAL PACKAGES OFFER</h1>
      </div>

      <div className="grid grid-cols-3 gap-5">
        {PakagesData.map((data) => {
          return (
            <div className="shadow-md" key={data.id}>
              <img src={data.img} alt="" className="w-[500px] h-[200px] object-cover" />
              <div className="flex flex-col gap-3 p-3">
                <div className=" flex flex-col gap-3">
                  <div>
                    <p className="font-Oswald text-xl font-medium">{data.title}</p>
                  </div>

                  <div>
                    <p className="font-Oswald text-xl text-CharcoalGray font-medium">{data.price}</p>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex gap-2 items-center text-CharcoalGray">
                    <BsCalendarDate />
                    <p className="font-DMSans font-medium">{data.date}</p>
                  </div>

                  <div className="flex gap-2 items-center text-CharcoalGray">
                    <AiOutlineUser />
                    <p className="font-DMSans font-medium">{data.person}</p>
                  </div>
                </div>

                <div>
                  <p className="text-CharcoalGray text-sm font-DMSans font-medium">{truncateDescription(data.description, 20)}</p>
                </div>

                <Link href="#" className="bg-blue-600 text-white cursor-pointer p-2 text-center w-[150px]">
                  View Details
                </Link>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Packages