'use client';

import { useState } from 'react';

export default function ChatWidget() {
    const [isOpen, setIsOpen] = useState(true);

    if (!isOpen) return null;

    return (
        <div
            className="fixed bg-white z-40 flex flex-col justify-between font-sans transition-all duration-500"
            style={{
                width: '175px',
                height: 'auto',
                right: '10px',
                bottom: '6%',
                borderRadius: '12px',
                padding: '12px',
                boxShadow: '0px 2px 24px 0px rgba(0, 0, 0, 0.25)'
            }}
        >
            <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-2">
                    {/* Custom Avatar Icon */}
                    <div className="w-6 h-6 relative shrink-0">
                        <img src="/natasha-avatar.png" alt="NB" className="w-full h-full object-contain" />
                    </div>
                    <span className="font-bold text-gray-800 text-[13px]">Natasha</span>
                </div>
                <button
                    onClick={() => setIsOpen(false)}
                    className="text-gray-400 hover:text-gray-600 rounded-full p-0.5 hover:bg-gray-100"
                >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </div>

            <p className="text-[10px] text-gray-500 leading-tight mb-3">
                Need help? Our team is ready and waiting, chat with us now for immediate assistance and solutions.
            </p>

            <button className="w-full bg-[#fd3752] hover:bg-[#e62e46] text-white font-bold py-2 rounded text-[12px] shadow-sm transition-colors">
                Start Chat
            </button>
        </div>
    );
}
