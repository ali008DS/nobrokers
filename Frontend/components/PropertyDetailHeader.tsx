'use client';

interface PropertyDetailHeaderProps {
    property: any;
}

export default function PropertyDetailHeader({ property }: PropertyDetailHeaderProps) {
    if (!property) return null;

    return (
        <div className="p-4 flex items-center bg-white border border-gray-100 rounded-lg shadow-sm">
            {/* Resale Icon Section */}
            <div className="flex flex-col items-center justify-center pr-6 border-r border-gray-200">
                <div className="border-2 border-red-500 p-1 rounded-md mb-1 relative">
                    <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <div className="absolute -inset-1 border border-red-200 rounded-lg -z-10 animate-pulse"></div>
                </div>
                <span className="text-[12px] text-gray-600 font-medium">Resale</span>
            </div>

            {/* Title Section */}
            <div className="flex-1 px-6 border-r border-gray-200">
                <div className="flex items-start gap-3">
                    <h1 className="text-[18px] font-bold text-gray-800 leading-tight mb-1">{property.title}</h1>
                    <div className="flex items-center gap-1 bg-yellow-400 text-white px-2 py-0.5 rounded-full text-[11px] font-bold shrink-0 mt-1 shadow-sm">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Loan Verified
                    </div>
                </div>
                <div className="text-[13px] text-gray-500">{property.location}</div>
            </div>

            {/* Stats Section */}
            <div className="flex items-center">
                {/* Price */}
                <div className="px-6 text-center border-r border-gray-200 min-w-[120px]">
                    <div className="text-[18px] font-bold text-gray-800">
                        {property.price ? `₹ ${property.price.replace('₹', '').trim()}` : ''}
                    </div>
                    <div className="text-[12px] text-gray-500">Negotiable</div>
                </div>

                {/* EMI */}
                <div className="px-6 text-center border-r border-gray-200 min-w-[140px]">
                    <div className="text-[18px] font-bold text-gray-800">{property.emi}</div>
                    <div className="text-[12px] text-gray-500 flex items-center justify-center gap-1 cursor-pointer hover:text-red-500 transition-colors">
                        Estimated EMI
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </div>

                {/* Sq Ft */}
                <div className="px-6 text-center border-r border-gray-200 min-w-[100px]">
                    <div className="text-[18px] font-bold text-gray-800">{property.area ? property.area.split(' ')[0] : ''}</div>
                    <div className="text-[12px] text-gray-500">Sq.Ft</div>
                </div>

                {/* Apply Loan */}
                <div className="pl-6 text-center">
                    <div className="text-[10px] text-gray-500 mb-1">Need Home Loan ?</div>
                    <button className="bg-[#fd3752] text-white text-[13px] font-bold px-4 py-2 rounded hover:bg-[#e62e46] transition-colors shadow-sm">
                        Apply Loan
                    </button>
                </div>
            </div>
        </div>
    );
}
