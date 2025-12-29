'use client';

import { useState } from 'react';

interface PropertyDescriptionProps {
    description?: string;
}

export default function PropertyDescription({ description }: PropertyDescriptionProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    // Hardcoded text to match the reference image exactly for the demo
    const fullText = [
        "This affordable 2 BHK for sale in Adhunik Serenity, BEML Layout Main Rd, Thubarahalli, Brookefield, Bengaluru, Karnataka 560066, India is perfect for those looking for a budget home. This West facing home is over 1150 sqft. & is in a convenient location. Situated on the 1st floor this home can comfortably serve your parking facility for car and bike needs.",
        "When you need community centre, children playing zone & well equipped gym, all you have to do is step out of the door as the apartment complex has what you're looking for. If you need amenities such as intercom, security & lift you'll be happy to note that this home has this & more. As this home comes with servant room, visitor parking, fire fighting equipment & sewage treatment plant & more such amenities, living here would make life more pleasant.",
        "With Ekya School ITPL, Government Primary School Doddanekundi and KLAY Prep Schools and Day Care close to this home, you'll be able to provide your children with many options to choose from. Being situated near BEST SERVICES, Dr Syamala Reddy Dental College Hospital and Research Centre and Sankara Eye Hospital, emergency care is very easily available at any time.",
        "With a petrol pump & super market your daily needs are easily fulfilled The ATM & bus stop are close by, you will find having money in hand & access to public transport very easy.",
        "With Tulsi Theatre, Srivinayaka Theatre & Mastiii close by, you can catch your favourite movies running & never worry about missing a show because of traffic. Never miss out on lifestyle as Brookefield Mall Bangalore, Unlimited and Traxx Shoes are so close by."
    ];

    const toggleExpand = () => setIsExpanded(!isExpanded);

    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
            <div className="flex justify-between items-start mb-4">
                <h2 className="text-[20px] font-bold text-gray-800 border-b-[3px] border-[#fd3752] pb-1 inline-block">Description</h2>

                {/* NBEstimate Scores */}
                <div className="flex flex-col items-end">
                    <div className="flex gap-2">
                        {/* Green Leaf Score */}
                        <div className="w-12 h-12 rounded bg-[#8bc34a] flex flex-col items-center justify-center text-white relative">
                            <svg className="w-5 h-5 mb-0.5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17,8C8,10,5.9,16.17,3.82,21.34L5.71,22l1-2.3A4.49,4.49,0,0,0,8,20C19,20,22,3,22,3,21,5,14,5.25,9,6.25S2,11.5,2,13.5a6.22,6.22,0,0,0,1.75,3.75C7,8,17,8,17,8Z" />
                            </svg>
                            <div className="bg-white w-full text-center text-[#8bc34a] text-[11px] font-bold absolute bottom-0.5 h-[14px] leading-[14px]">8.2</div>
                        </div>

                        {/* Red Car Score */}
                        <div className="w-12 h-12 rounded bg-[#d32f2f] flex flex-col items-center justify-center text-white relative">
                            <svg className="w-5 h-5 mb-0.5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" />
                            </svg>
                            <div className="bg-white w-full text-center text-[#d32f2f] text-[11px] font-bold absolute bottom-0.5 h-[14px] leading-[14px]">8.7</div>
                        </div>
                    </div>
                    <div className="text-[10px] text-gray-500 mt-1 font-medium">Powered By: NBEstimate</div>
                </div>
            </div>

            <div className="mb-4">
                <h3 className="text-[14px] text-gray-500 mb-2">two bedroom apartment</h3>
                <div className={`text-[14px] text-gray-600 leading-relaxed space-y-4 ${!isExpanded ? 'max-h-[180px] overflow-hidden relative' : ''}`}>
                    {fullText.map((paragraph, idx) => (
                        <p key={idx}>{paragraph}</p>
                    ))}
                    {!isExpanded && (
                        <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
                    )}
                </div>
            </div>

            <button
                onClick={toggleExpand}
                className="w-full flex items-center justify-center gap-1 text-[#fd3752] text-[14px] font-medium hover:text-red-600 transition-colors pt-4 border-t border-gray-100 mt-2"
            >
                {isExpanded ? 'Show Less' : 'Show More'}
                <svg
                    className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>
        </div>
    );
}
