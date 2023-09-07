'use client';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselImage = [
    {
        id: 1,
        img: 'https://images.unsplash.com/photo-1552790920-0ba96dc99d01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
        title: 'Explore your destination place '
    },
    {
        id: 2,
        img: 'https://images.unsplash.com/photo-1501263025405-af2cd1ee2c73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1981&q=80',
        title: 'Flight ticket booking'
    },
    {
        id: 3,
        img: 'https://images.unsplash.com/photo-1586441133374-ed1cb4007a47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
        title: 'Apply for new passport'
    },
    {
        id: 4,
        img: 'https://images.unsplash.com/photo-1637763723578-79a4ca9225f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
        title: 'all types of insurance'
    },
    {
        id: 5,
        img: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        title: 'Stock & commodity market',
    },
    {
        id: 6,
        img: 'https://images.unsplash.com/photo-1518378379207-3418372afea3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        title: 'Work Form Home & Earn 5000 - 20,000'
    },
    {
        id: 7,
        img: 'https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        title: 'Hotel Booking! book your stay'
    }
]

const Home = () => {

    const gradientOverlayStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        background: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        textAlign: 'center',
        padding: '20px',
    };

    return (
        <section className="container mx-auto">
            <Carousel
                autoPlay={true}
                infiniteLoop={true}
                showStatus={false}
                showThumbs={false}
                showIndicators={false}
                interval={2500}
            >
                {CarouselImage.map((carousel) => {
                    return (
                        <div key={carousel.id}>
                            <img src={carousel.img} alt="image" className="w-full h-[400px] lg:h-[600px] object-cover" />
                            <div style={gradientOverlayStyle}>
                                <p className="lg:text-3xl font-Oswald capitalize">{carousel.title}</p>
                            </div>
                        </div>
                    )
                })}
            </Carousel>
        </section>
    );
};

export default Home;
