'use client';

import { useRef } from 'react';

const similarProperties = [
    {
        id: 1,
        title: '2 BHK Flat In Phoenix Boulevard In Aecs Layout',
        price: '₹ 85 Lacs',
        image: '/images/similar/sim1.png',
    },
    {
        id: 2,
        title: '2 BHK Flat In Neeladri Deo Bliss In Whitefield, Bengaluru',
        price: '₹ 87 Lacs',
        image: '/images/similar/sim2.png',
    },
    {
        id: 3,
        title: '2 BHK Flat In Excel Stone Florence Apartments In...',
        price: '₹ 85 Lacs',
        image: '/images/similar/sim3.png',
    },
    {
        id: 4,
        title: '3 BHK Flat In Prestige Shantiniketan In Whitefield',
        price: '₹ 1.5 Crores',
        image: '/images/similar/sim1.png',
    },
    {
        id: 5,
        title: '2 BHK Flat In Rohan Vasantha In Marathahalli',
        price: '₹ 95 Lacs',
        image: '/images/similar/sim2.png',
    }
];

export default function SimilarProperties() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const scrollAmount = 300; // Width of card + gap
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className="bg-white pt-4 pb-2 border-t border-gray-100 mt-4">
            <h2 className="text-[16px] font-semibold text-gray-800 mb-4 px-1">More properties similar to this</h2>

            <div className="relative group px-1">
                {/* Left Arrow */}
                <button
                    onClick={() => scroll('left')}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-md border border-gray-200 opacity-0 group-hover:opacity-100 transition-opacity -ml-3"
                >
                    <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                {/* Carousel Container */}
                <div
                    ref={scrollRef}
                    className="flex gap-4 overflow-x-auto scrollbar-hide pb-2"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {similarProperties.map((item) => (
                        <div key={item.id} className="min-w-[260px] w-[260px] flex-shrink-0 bg-white border border-gray-200 rounded-lg overflow-hidden flex flex-col hover:shadow-lg transition-shadow bg-[#fcfcfc]">
                            <div className="h-[150px] w-full relative">
                                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                                <div className="absolute bottom-2 left-2 flex items-center gap-1 opacity-70">
                                    <img src="https://assets.nobroker.in/nb-new/public/List-Page/nobroker_watermark.png" alt="watermark" className="h-4" />
                                </div>
                                <button className="absolute bottom-2 left-2 bg-white rounded-full p-1 shadow-sm opacity-0" /> {/* Placeholder for alignment if needed */}
                                <button className="absolute left-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-1 opacity-0 group-hover/card:opacity-100 shadow transition-opacity">
                                    <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                            </div>
                            <div className="p-3 flex flex-col flex-1 bg-[#fcfcfc]">
                                <h3 className="text-[14px] font-semibold text-gray-800 mb-1 leading-snug h-[42px] overflow-hidden">{item.title}</h3>
                                <p className="text-[14px] text-gray-600 mb-3">{item.price}</p>

                                <div className="flex gap-2 mt-auto">
                                    <button className="flex-1 bg-[#fd3752] text-white text-sm font-bold py-2 rounded hover:bg-[#e62e46] transition-colors">
                                        Contact
                                    </button>
                                    <button className="w-[36px] flex items-center justify-center border border-gray-300 rounded hover:border-gray-400 text-gray-400 hover:text-red-500 transition-colors">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right Arrow */}
                <button
                    onClick={() => scroll('right')}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-md border border-gray-200 opacity-0 group-hover:opacity-100 transition-opacity -mr-3"
                >
                    <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>
    );
}
