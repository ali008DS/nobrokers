'use client';

export default function NoBrokerServices() {
    const services = [
        {
            label: 'Painting',
            icon: 'painting',
            isNew: true
        },
        {
            label: 'Check\nLoan Eligibility',
            icon: 'loan',
            isNew: false
        },
        {
            label: 'Estimate\nInteriors Cost',
            icon: 'interiors',
            isNew: true
        },
        {
            label: 'Book\nLegal Services',
            icon: 'legal',
            isNew: false
        },
        {
            label: 'Create\nAgreement',
            icon: 'agreement',
            isNew: false
        },
    ];

    const getIcon = (name: string) => {
        switch (name) {
            case 'painting':
                return (
                    <svg className="w-8 h-8 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        <path stroke="orange" strokeWidth="2" d="M9 14l2 2 4-4" style={{ display: 'none' }} />
                        {/* Custom roller look */}
                        <path d="M4 21v-8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8" opacity="0.1" fill="currentColor" />
                    </svg>
                );
            case 'loan':
                return (
                    <svg className="w-8 h-8 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        <path d="M12 1v22M1 12h22" stroke="transparent" />
                        {/* Hand holding money bag metaphor */}
                        <path d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                );
            case 'interiors':
                return (
                    <svg className="w-8 h-8 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                        <path d="M9 17h1" stroke="orange" />
                    </svg>
                );
            case 'legal':
                return (
                    <svg className="w-8 h-8 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16a2 2 0 01-2 2h-2.586a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                        {/* Gavel */}
                        <path d="M13.5 10.5L21 3m-5 0h5v5m0 6l-9 9-4-4 9-9" />
                    </svg>
                );
            case 'agreement':
                return (
                    <svg className="w-8 h-8 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        <path d="M15 15h.01" stroke="orange" strokeWidth="3" />
                    </svg>
                );
            default:
                return null;
        }
    }

    // Using images from NoBroker sprite positions or converting to SVGs. 
    // Since I cannot access external sprites easily to extract single icons without a strict sprite viewer,
    // I am approximating with detailed SVGs and colors as requested.
    // However, for the best match, let's look for specific SVG constructions or use the user's "match the icons and there colors" instruction carefully.
    // The user provided a screenshot. The icons are:
    // Painting: Paint roller with orange paint
    // Loan: Hand with money bag
    // Interiors: Lamp/Furniture
    // Legal: Gavel
    // Agreement: Document with stamp

    const getServicesIconImpl = (name: string) => {
        // Re-implementing with more precise geometries to match screenshot
        switch (name) {
            case 'painting':
                return (
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="20" cy="20" r="19" fill="white" stroke="#f0f0f0" strokeWidth="1" />
                        <g transform="translate(8,8) scale(0.6)">
                            <path d="M4.5 18L9 22.5L24 7.5" stroke="#F5A623" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0" />
                            <path d="M25 6H8C6.89543 6 6 6.89543 6 8V12C6 13.1046 6.89543 14 8 14H25C26.1046 14 27 13.1046 27 12V8C27 6.89543 26.1046 6 25 6Z" stroke="#333" strokeWidth="2" fill="#fff" />
                            <path d="M9 14V22" stroke="#333" strokeWidth="2" strokeLinecap="round" />
                            <path d="M9 22C9 22 9 26 13 26" stroke="#333" strokeWidth="2" strokeLinecap="round" />
                            <path d="M23 14V17C23 18.6569 21.6569 20 20 20H15" stroke="#333" strokeWidth="2" strokeLinecap="round" />
                            <rect x="7" y="5" width="20" height="6" fill="#F5A623" opacity="0.3" />
                            <path d="M10 10l5 5" stroke="#F5A623" strokeWidth="2" />
                        </g>
                    </svg>
                );
            // Simplifying: returning simple divs with backgrounds if possible, but let's stick to simple SVGs with accents
            case 'loan':
                return (
                    <div className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center bg-white shadow-sm">
                        <svg className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <div className="absolute mt-3 ml-3 w-2 h-2 rounded-full bg-orange-400 opacity-80"></div>
                    </div>
                );
            // ... actually I will revert to a cleaner implementation in the main return using standard colored SVGs
            default: return null;
        }
    }


    return (
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h2 className="text-[18px] font-bold text-gray-800 mb-8">NoBroker Services</h2>

            <div className="flex justify-between items-start px-2">
                {services.map((service, idx) => (
                    <div key={idx} className="flex flex-col items-center gap-3 relative group cursor-pointer">
                        {service.isNew && (
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#fd3752] text-white text-[10px] font-bold px-2 py-0.5 rounded-full z-10">
                                NEW
                            </div>
                        )}

                        <div className="w-14 h-14 rounded-full border border-gray-100 flex items-center justify-center bg-white shadow-sm group-hover:shadow-md transition-shadow relative">
                            {/* Render specific icons */}
                            {service.icon === 'painting' && (
                                <svg className="w-7 h-7 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M18 10V6a2 2 0 00-2-2H8a2 2 0 00-2 2v4m12 0v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4m12 0h-2m-8 0H6" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M12 16v4m0 0h3" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M9 7h6" stroke="#f5a623" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            )}
                            {service.icon === 'loan' && (
                                <svg className="w-7 h-7 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M12 21v-8m0 0V5a2 2 0 10-4 0v8a2 2 0 104 0zm0 0h5a2 2 0 012 2v2a2 2 0 01-2 2h-5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M9 13a2 2 0 11-4 0 2 2 0 014 0z" fill="#f5a623" stroke="none" opacity="0.3" />
                                    <path d="M12 11l-2 2" stroke="#f5a623" strokeWidth="1.5" />
                                </svg>
                            )}
                            {service.icon === 'interiors' && (
                                <svg className="w-7 h-7 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M4 12h16M4 12v6a1 1 0 001 1h2a1 1 0 001-1v-6m8 0v6a1 1 0 001 1h2a1 1 0 001-1v-6m-9-3h2m-1 0V5m-4 7h14" strokeLinecap="round" strokeLinejoin="round" />
                                    <rect x="11" y="5" width="2" height="4" fill="#f5a623" stroke="none" />
                                </svg>
                            )}
                            {service.icon === 'legal' && (
                                <svg className="w-7 h-7 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M3 21h18M5 21v-8a2 2 0 012-2h10a2 2 0 012 2v8M10 11V7a2 2 0 012-2h0a2 2 0 012 2v4" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M10 7L8 5m6 2l2-2" stroke="#f5a623" strokeWidth="1.5" />
                                </svg>
                            )}
                            {service.icon === 'agreement' && (
                                <svg className="w-7 h-7 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round" />
                                    <rect x="14" y="6" width="3" height="3" fill="#f5a623" stroke="none" />
                                </svg>
                            )}
                        </div>

                        <span className="text-[13px] text-gray-700 font-semibold text-center leading-tight whitespace-pre-line">
                            {service.label}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
