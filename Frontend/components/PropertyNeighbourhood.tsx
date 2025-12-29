'use client';

import { useState } from 'react';

export default function PropertyNeighbourhood() {
    const [activeTab, setActiveTab] = useState('Transit');

    const tabs = ['Transit', 'Essentials', 'Utility'];

    const transitData = [
        { name: 'Kundalhalli Gate Bus Stop', distance: '92 m', time: '1 min', icon: 'bus' },
        { name: 'Kundalahalli Gate', distance: '0.2 km', time: '2 mins', icon: 'bus' },
        { name: 'Kundalahalli Gate', distance: '0.2 km', time: '3 mins', icon: 'bus' },
        { name: 'Kundalahalli', distance: '0.9 km', time: '12 mins', icon: 'bus' },
        { name: 'Munnekolalu Cross', distance: '0.6 km', time: '7 mins', icon: 'bus' },
    ];

    return (
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h2 className="text-[20px] font-bold text-gray-800 border-b-[3px] border-[#fd3752] pb-1 inline-block mb-8">Neighbourhood</h2>

            {/* Top Controls */}
            <div className="flex flex-col md:flex-row gap-4 items-center mb-6">
                <div className="flex items-center gap-2 text-gray-700 font-medium whitespace-nowrap min-w-[140px]">
                    <div className="w-8 h-8 rounded-full bg-[#ffecec] flex items-center justify-center">
                        <svg className="w-4 h-4 text-[#fd3752]" fill="currentColor" viewBox="0 0 20 20"><path d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" /></svg>
                    </div>
                    <span className="text-[14px]">Your Location -</span>
                </div>
                <div className="flex-1 w-full relative border-r border-gray-200 pr-4">
                    <input
                        type="text"
                        placeholder="Type in place to get direction"
                        className="w-full border border-gray-300 rounded-sm px-4 py-2 text-[14px] outline-none focus:border-gray-400 placeholder:text-gray-400 font-light h-[42px]"
                    />
                </div>
                <div className="pl-2">
                    <button className="border border-[#fd3752] text-[#fd3752] font-bold px-8 py-2 rounded-sm hover:bg-red-50 transition-colors text-[14px] h-[42px]">
                        Get Directions
                    </button>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-0 h-[500px] border border-gray-200 rounded overflow-hidden">
                {/* Map Section */}
                <div className="flex-1 bg-gray-100 relative h-full">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.069695679549!2d77.71120897484136!3d12.96739458734763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae12250280d967%3A0x6b43391d1790234a!2sThubarahalli%2C%20Brookefield%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1709470000000!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                    {/* Custom Overlays for demo look (simulated markers) */}
                    <div className="absolute top-[30%] right-[30%]">
                        <div className="w-8 h-8 rounded-full bg-[#009587] flex items-center justify-center text-white shadow-lg border-2 border-white">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" /><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" /></svg>
                        </div>
                    </div>
                </div>

                {/* Info Sidebar */}
                <div className="w-full lg:w-[400px] flex flex-col h-full bg-white border-l border-gray-200">
                    {/* Tabs */}
                    <div className="flex border-b border-gray-200 mb-0">
                        {tabs.map(tab => (
                            <button
                                key={tab}
                                className={`flex-1 py-4 text-[14px] font-medium border-b-[3px] transition-colors ${activeTab === tab ? 'border-[#009587] text-[#009587]' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
                                onClick={() => setActiveTab(tab)}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* Scrollable Content */}
                    <div className="flex-1 overflow-y-auto px-4 custom-scrollbar">
                        <div className="mt-4 space-y-4">
                            {/* Bus Stations (Expanded) */}
                            <div>
                                <div className="flex justify-between items-center gap-2 text-[#009587] font-bold text-[14px] mb-4 cursor-pointer">
                                    <div className="flex items-center gap-3">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" /><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" /></svg>
                                        Bus Stations
                                    </div>
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" /></svg>
                                </div>

                                <div className="space-y-0 text-[13px]">
                                    {transitData.map((item, idx) => (
                                        <div key={idx} className="flex justify-between items-start py-4 border-b border-gray-100 last:border-0 hover:bg-gray-50 px-1 transition-colors">
                                            <span className="text-gray-700 font-medium">{item.name}</span>
                                            <span className="text-gray-500 text-[12px] whitespace-nowrap ml-4">{item.distance} | {item.time}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Collapsed Sections with Icons */}
                            {['Airport', 'Metro Stations'].map((label, i) => (
                                <div key={i} className="border-t border-gray-100 pt-4 pb-2">
                                    <div className="flex justify-between items-center cursor-pointer text-gray-700 hover:text-[#009587] group">
                                        <div className="flex items-center gap-3 font-bold text-[14px]">
                                            <div className="w-5 flex justify-center text-gray-400 group-hover:text-[#009587]">
                                                {label === 'Airport' ? (
                                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" /></svg>
                                                ) : (
                                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 13a1 1 0 011-1h2a1 1 0 011 1v3a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3z" /></svg>
                                                )}
                                            </div>
                                            {label}
                                        </div>
                                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
