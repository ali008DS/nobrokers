'use client';

import { useRef } from 'react';

const societies = [
    {
        id: 1,
        title: 'Sobha Dream Acres',
        count: '10 Apartments',
        image: '/images/projects/project1.png',
    },
    {
        id: 2,
        title: 'Divyasree Republic Of',
        count: '9 Apartments',
        image: '/images/projects/project2.png',
    },
    {
        id: 3,
        title: 'Goyal Orchid Bloomsberry',
        count: '8 Apartments',
        image: '/images/projects/project3.png',
    },
    {
        id: 4,
        title: 'Prestige Lakeside Habitat',
        count: '15 Apartments',
        image: '/images/projects/project1.png',
    },
    {
        id: 5,
        title: 'Brigade Cosmopolis',
        count: '12 Apartments',
        image: '/images/projects/project2.png',
    }
];

export default function TopSocieties() {
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
        <div className="bg-white p-4 mb-4 rounded-lg shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-[16px] font-semibold text-gray-800">Top Societies in your Search</h2>
            </div>

            <div className="relative group">
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
                    {societies.map((item) => (
                        <div key={item.id} className="min-w-[260px] w-[260px] flex-shrink-0 bg-white border border-gray-200 rounded-lg overflow-hidden flex flex-col hover:shadow-lg transition-shadow bg-[#fcfcfc]">
                            <div className="h-[180px] w-full relative">
                                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                            </div>
                            <div className="p-3 text-center flex flex-col flex-1 bg-[#fcfcfc]">
                                <h3 className="text-[14px] font-semibold text-gray-800 mb-1 truncate">{item.title}</h3>
                                <p className="text-[13px] text-gray-500 mb-3">{item.count}</p>
                                <button className="bg-[#009587] text-white text-sm font-semibold py-2 px-8 rounded hover:bg-[#007a6e] transition-colors w-fit mx-auto mt-auto">
                                    View
                                </button>
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
