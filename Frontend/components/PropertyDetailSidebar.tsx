'use client';

export default function PropertyDetailSidebar() {
    return (
        <div className="space-y-6">
            {/* Contact Card */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                <div className="border border-gray-200 rounded mb-6">
                    {/* Row 1 */}
                    <div className="flex border-b border-gray-200">
                        <div className="flex-1 p-3 border-r border-gray-200 flex items-center gap-3">
                            <div className="w-[24px] h-[24px] scale-[0.8] origin-left" style={{ backgroundImage: 'url("https://assets.nobroker.in/nb-new/public/Property-Details/rent_resale_spriteV2.png")', backgroundPosition: '-20px -213px' }}></div>
                            <div>
                                <div className="text-[14px] font-bold text-gray-800">2 Bedroom</div>
                                <div className="text-[10px] text-gray-400">No. of Bedroom</div>
                            </div>
                        </div>
                        <div className="flex-1 p-3 flex items-center gap-3">
                            <div className="w-[24px] h-[24px] scale-[0.8] origin-left" style={{ backgroundImage: 'url("https://assets.nobroker.in/nb-new/public/Property-Details/rent_resale_spriteV2.png")', backgroundPosition: '-20px -408px' }}></div>
                            <div>
                                <div className="text-[14px] font-bold text-gray-800">Dec 24, 2025</div>
                                <div className="text-[10px] text-gray-400">Posted On</div>
                            </div>
                        </div>
                    </div>
                    {/* Row 2 */}
                    <div className="flex border-b border-gray-200">
                        <div className="flex-1 p-3 border-r border-gray-200 flex items-center gap-3">
                            <div className="w-[24px] h-[24px] scale-[0.8] origin-left" style={{ backgroundImage: 'url("https://assets.nobroker.in/nb-new/public/Property-Details/rent_resale_spriteV2.png")', backgroundPosition: '-20px -147px' }}></div>
                            <div>
                                <div className="text-[14px] font-bold text-gray-800">2 Bathroom</div>
                                <div className="text-[10px] text-gray-400">No. of Bathroom</div>
                            </div>
                        </div>
                        <div className="flex-1 p-3 flex items-center gap-3">
                            <div className="w-[24px] h-[24px] scale-[0.8] origin-left" style={{ backgroundImage: 'url("https://assets.nobroker.in/nb-new/public/Property-Details/rent_resale_spriteV2.png")', backgroundPosition: '-20px -1268px' }}></div>
                            <div>
                                <div className="text-[14px] font-bold text-gray-800">Immediately</div>
                                <div className="text-[10px] text-gray-400">Possession</div>
                            </div>
                        </div>
                    </div>
                    {/* Row 3 */}
                    <div className="flex border-b border-gray-200">
                        <div className="flex-1 p-3 border-r border-gray-200 flex items-center gap-3">
                            <div className="w-[24px] h-[24px] scale-[0.8] origin-left" style={{ backgroundImage: 'url("https://assets.nobroker.in/nb-new/public/Property-Details/rent_resale_spriteV2.png")', backgroundPosition: '-20px -81px' }}></div>
                            <div>
                                <div className="text-[14px] font-bold text-gray-800">2</div>
                                <div className="text-[10px] text-gray-400">Balcony</div>
                            </div>
                        </div>
                        <div className="flex-1 p-3 flex items-center gap-3">
                            <div className="w-[24px] h-[24px] scale-[0.8] origin-left" style={{ backgroundImage: 'url("https://assets.nobroker.in/nb-new/public/Property-Details/rent_resale_spriteV2.png")', backgroundPosition: '-20px -664px' }}></div>
                            <div>
                                <div className="text-[14px] font-bold text-gray-800">Adhunik Serenity</div>
                                <div className="text-[10px] text-gray-400">Apartment</div>
                            </div>
                        </div>
                    </div>
                    {/* Row 4 */}
                    <div className="flex">
                        <div className="flex-1 p-3 border-r border-gray-200 flex items-center gap-3">
                            <div className="w-[24px] h-[24px] scale-[0.8] origin-left" style={{ backgroundImage: 'url("https://assets.nobroker.in/nb-new/public/Property-Details/rent_resale_spriteV2.png")', backgroundPosition: '-20px -1204px' }}></div>
                            <div>
                                <div className="text-[14px] font-bold text-gray-800">Bike and Car</div>
                                <div className="text-[10px] text-gray-400">Parking</div>
                            </div>
                        </div>
                        <div className="flex-1 p-3 flex items-center gap-3">
                            <div className="w-[24px] h-[24px] scale-[0.8] origin-left" style={{ backgroundImage: 'url("https://assets.nobroker.in/nb-new/public/Property-Details/rent_resale_spriteV2.png")', backgroundPosition: '-20px -1337px' }}></div>
                            <div>
                                <div className="text-[14px] font-bold text-gray-800">Full</div>
                                <div className="text-[10px] text-gray-400">Power Backup</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex gap-4">
                    <button className="flex-1 bg-[#fd3752] text-white font-bold py-3 rounded text-[16px] hover:bg-[#e62e46] transition-colors">Contact</button>
                    <button className="flex-1 bg-[#fd3752] text-white font-bold py-3 rounded text-[16px] hover:bg-[#e62e46] transition-colors">Schedule Visit</button>
                </div>

                <div className="mt-4 p-4 bg-gray-50 border border-dotted border-gray-300 rounded flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#009587] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <div className="w-full">
                        <p className="font-semibold text-gray-700 text-[13px] mb-3">Report what was not correct in this property</p>
                        <div className="flex gap-2">
                            <button className="flex-1 bg-white border border-gray-300 py-1.5 rounded text-[11px] text-gray-600 hover:border-gray-400">Listed by Broker</button>
                            <button className="flex-1 bg-white border border-gray-300 py-1.5 rounded text-[11px] text-gray-600 hover:border-gray-400">Sold Out</button>
                            <button className="flex-1 bg-white border border-gray-300 py-1.5 rounded text-[11px] text-gray-600 hover:border-gray-400">Wrong Info</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Activity Stats */}
            <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="font-bold text-gray-700 mb-4 text-[15px]">Activity On This Property</h3>
                <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                        <div className="text-gray-400 text-[18px] mb-1"><svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg></div>
                        <div className="font-bold text-gray-800 text-[16px]">351</div>
                        <div className="text-[11px] text-gray-500">Unique Views</div>
                    </div>
                    <div>
                        <div className="text-gray-400 text-[18px] mb-1"><svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg></div>
                        <div className="font-bold text-gray-800 text-[16px]">16</div>
                        <div className="text-[11px] text-gray-500">Shortlists</div>
                    </div>
                    <div>
                        <div className="text-gray-400 text-[18px] mb-1"><svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg></div>
                        <div className="font-bold text-gray-800 text-[16px]">4</div>
                        <div className="text-[11px] text-gray-500">Contacted</div>
                    </div>
                </div>
                <div className="text-right text-[10px] text-gray-400 mt-2">Powered By: NBEstimate</div>
            </div>

            {/* Similar Properties */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                <h3 className="text-[16px] font-bold text-gray-800 border-b-2 border-red-500 pb-2 mb-4 inline-block">Similar Properties</h3>

                <div className="space-y-3">
                    {/* Card 1 */}
                    <div className="border border-gray-200 rounded p-2 flex gap-3">
                        <div className="w-24 h-24 shrink-0 relative bg-gray-200 rounded overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1600596542815-400fb52e3334?w=200" className="w-full h-full object-cover" alt="property" />
                            <div className="absolute bottom-1 right-1">
                                <img src="/logo-small.png" className="w-8 opacity-50" />
                            </div>
                        </div>
                        <div className="flex-1 min-w-0">
                            <h4 className="font-bold text-[13px] text-gray-800 leading-tight mb-1 truncate">2 BHK Flat In Ds Max Symphony For Sal...</h4>
                            <p className="text-[10px] text-gray-400 mb-1 truncate">DS Max Symphony, Kumarapalli, Thubarahalli, Whitefi...</p>
                            <p className="text-[10px] text-red-500 mb-2">Within a km</p>
                            <div className="flex justify-between items-end">
                                <div>
                                    <div className="text-[10px] text-gray-400">Price</div>
                                    <div className="text-[14px] font-bold text-gray-800">₹85 Lacs</div>
                                </div>
                                <div className="text-right">
                                    <div className="text-[10px] text-gray-400">Builtup Area</div>
                                    <div className="text-[12px] font-bold text-gray-800">1100 sqft</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="border border-gray-200 rounded p-2 flex gap-3">
                        <div className="w-24 h-24 shrink-0 relative bg-gray-200 rounded overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=200" className="w-full h-full object-cover" alt="property" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <h4 className="font-bold text-[13px] text-gray-800 leading-tight mb-1 truncate">2 BHK Flat In Ds Max Symphony For Sal...</h4>
                            <p className="text-[10px] text-gray-400 mb-1 truncate">XP3C+F7R, Kumarapalli, Thubarahalli, Whitefield, Ben...</p>
                            <p className="text-[10px] text-red-500 mb-2">Within a km</p>
                            <div className="flex justify-between items-end">
                                <div>
                                    <div className="text-[10px] text-gray-400">Price</div>
                                    <div className="text-[14px] font-bold text-gray-800">₹85 Lacs</div>
                                </div>
                                <div className="text-right">
                                    <div className="text-[10px] text-gray-400">Builtup Area</div>
                                    <div className="text-[12px] font-bold text-gray-800">1030 sqft</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="border border-gray-200 rounded p-2 flex gap-3">
                        <div className="w-24 h-24 shrink-0 relative bg-gray-200 rounded overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1484154218962-a1c002085d2f?w=200" className="w-full h-full object-cover" alt="property" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <h4 className="font-bold text-[13px] text-gray-800 leading-tight mb-1 truncate">2 BHK Flat In Gayatri Ocean Blue, Thub...</h4>
                            <p className="text-[10px] text-gray-400 mb-1 truncate">Sy No. 70, Kundalahalli Gate, Whitefield Main Rd, Thub...</p>
                            <p className="text-[10px] text-red-500 mb-2">Within a km</p>
                            <div className="flex justify-between items-end">
                                <div>
                                    <div className="text-[10px] text-gray-400">Price</div>
                                    <div className="text-[14px] font-bold text-gray-800">₹89 Lacs</div>
                                </div>
                                <div className="text-right">
                                    <div className="text-[10px] text-gray-400">Builtup Area</div>
                                    <div className="text-[12px] font-bold text-gray-800">1125 sqft</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <button className="w-full bg-[#009587] text-white font-bold py-3 rounded mt-4 text-[14px] hover:bg-[#00796b] transition-colors shadow-sm">
                    More 2 BHK Properties for buy in Brookefield
                </button>
            </div>
        </div>
    );
}
