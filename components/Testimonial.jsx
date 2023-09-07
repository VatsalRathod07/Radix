"use client"
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ClientTestimonial = [
    {
        id: 1,
        name: 'Charlotte',
        package: 'Egypt',
        feedback: 'I am very happy of service given by radix group. I am realy appreciate to them for it. Thanks'
    },
    {
        id: 2,
        name: 'Lena',
        package: 'Isle of Man',
        feedback: 'reach bill breakfast date due shine early hand slope solar electricity limited song grabbed flat horn motion receive job uncle larger park instead pilot.'
    },
    {
        id: 3,
        name: 'Sara',
        package: 'Tuvalu',
        feedback: 'post engineer else yet play send attempt voice poem myself choice type college ourselves prize people power score while bus sharp team pink before.'
    },
    {
        id: 4,
        name: 'Ernest',
        package: 'Estonia',
        feedback: 'trunk over class position torn jar perfect captain nine pot believed ought settlers atom frequently member purple mean cage rose doubt herself prove real.'
    },
]

const Testimonial = () => {
    const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            // Increment the testimonial index with wrapping logic
            setCurrentTestimonialIndex((prevIndex) =>
                prevIndex === ClientTestimonial.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000); // 5000 milliseconds (5 seconds)

        return () => {
            clearInterval(interval); // Cleanup the interval on unmount
        };
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000, // 5 seconds
        afterChange: (current) => {
            setCurrentTestimonialIndex(current);
        },
    };

    return (
        <section className="container mx-auto px-5 py-10">
            <div className="flex flex-col gap-10">
                <h1 className="text-black text-4xl font-Oswald font-semibold uppercase">
                    CLIENT SUCCESS STORIES
                </h1>

                <div className="flex flex-col gap-20">
                    <Slider {...settings}>
                        {ClientTestimonial.map((testimonial) => (
                            <div key={testimonial.id} className="grid grid-cols-2 items-center p-6">
                                <img src="https://www.radixgroup.in/images/logo-1.png" alt="" className="w-[120px] h-[50px]"/>
                                <div className="flex flex-col gap-3">
                                    <p className="text-lg font-Oswald">
                                        {testimonial.name} - <span className="text-sm">{testimonial.package}</span>
                                    </p>
                                    <p className="text-base text-CharcoalGray font-DMSans capitalize">
                                        {testimonial.feedback}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>

            </div>
        </section>
    );
};

export default Testimonial;

