'use client';

interface PropertyAmenitiesProps {
    amenities?: string[];
}

// Helper to get specific icons based on the label/key
const getAmenityIcon = (name: string) => {
    switch (name.toLowerCase()) {
        case 'intercom':
            return (
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="7" y="4" width="10" height="16" rx="2" stroke="#4b5563" strokeWidth="1.5" />
                    <path d="M10 16h4" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M12 7v2" stroke="#4b5563" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M6 8h-1a1 1 0 0 0 -1 1v4a1 1 0 0 0 1 1h1" stroke="#4b5563" strokeWidth="1.5" />
                    <path d="M18 8h1a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-1" stroke="#4b5563" strokeWidth="1.5" />
                </svg>
            );
        case 'lift':
            return (
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="5" y="4" width="14" height="16" stroke="#4b5563" strokeWidth="1.5" />
                    <path d="M12 4v16" stroke="#4b5563" strokeWidth="1.5" />
                    <path d="M9 11v2" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M15 11v2" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M12 2v2" stroke="#4b5563" strokeWidth="1.5" />
                    <path d="M12 20v2" stroke="#4b5563" strokeWidth="1.5" />
                </svg>
            );
        case 'club house':
            return (
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="4" y="6" width="10" height="14" rx="1" transform="rotate(-15 4 6)" stroke="#4b5563" strokeWidth="1.5" fill="white" />
                    <rect x="10" y="6" width="10" height="14" rx="1" transform="rotate(10 10 6)" stroke="#4b5563" strokeWidth="1.5" fill="white" />
                    <path d="M15 11l-2 2-2-2 2-2 2 2z" fill="#f59e0b" stroke="none" />
                </svg>
            );
        case 'fire safety':
            return (
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22a4 4 0 0 0 4-4v-7h-8v7a4 4 0 0 0 4 4z" stroke="#4b5563" strokeWidth="1.5" />
                    <path d="M12 11v-4" stroke="#4b5563" strokeWidth="1.5" />
                    <path d="M12 7h3l2 3" stroke="#f59e0b" strokeWidth="1.5" />
                    <circle cx="9" cy="8" r="1" fill="#f59e0b" />
                </svg>
            );
        case 'sewage treatment plant':
            return (
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 16c0 2 2 4 16 4 2 0 2-2 2-4" stroke="#4b5563" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M4 16c0-1 4-1 4 0s4 1 4 0 4-1 4 0 4 1 4 0" stroke="#4b5563" strokeWidth="1.5" />
                    <path d="M7 6v6" stroke="#4b5563" strokeWidth="1.5" />
                    <ellipse cx="7" cy="6" rx="3" ry="2" stroke="#4b5563" strokeWidth="1.5" />
                    <path d="M14 6l4 8" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
                </svg>
            );
        case 'shopping center':
            return (
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 10h16v10H4z" stroke="#4b5563" strokeWidth="1.5" />
                    <path d="M4 10l8-6 8 6" stroke="#4b5563" strokeWidth="1.5" />
                    <path d="M9 15h6" stroke="#f59e0b" strokeWidth="1.5" />
                    <path d="M12 13v4" stroke="#f59e0b" strokeWidth="1.5" />
                    <rect x="10" y="6" width="4" height="2" fill="#f59e0b" />
                </svg>
            );
        default:
            return <div className="w-6 h-6 bg-gray-200 rounded-full"></div>;
    }
};

export default function PropertyAmenities({ amenities }: PropertyAmenitiesProps) {
    // Exact list from reference image
    const displayAmenities = [
        'Intercom',
        'Lift',
        'Club house',
        'Fire safety',
        'Sewage treatment plant',
        'Shopping center'
    ];

    return (
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h2 className="text-[20px] font-bold text-gray-800 border-b-[3px] border-[#fd3752] pb-1 inline-block mb-6">Amenities</h2>

            <div className="flex items-center gap-6 overflow-x-auto pb-2 scrollbar-none">
                {displayAmenities.map((item, idx) => (
                    <div key={idx} className="flex flex-col items-center gap-3 min-w-[100px] shrink-0">
                        <div className="w-[80px] h-[80px] bg-[#fafafa] hover:bg-gray-100 rounded flex items-center justify-center transition-colors">
                            {getAmenityIcon(item)}
                        </div>
                        <span className="text-[13px] text-gray-700 text-center font-normal leading-tight h-[32px] flex items-start justify-center w-full px-1">{item}</span>
                    </div>
                ))}

                {/* +4 Button */}
                <div className="flex flex-col items-center justify-start gap-3 min-w-[60px] h-[120px] pt-4 cursor-pointer">
                    <div className="w-12 h-12 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-[#009587] font-bold text-[14px] hover:bg-gray-50 transition-colors">
                        +4
                    </div>
                </div>
            </div>
        </div>
    );
}
