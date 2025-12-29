'use client';

export default function Footer() {
    return (
        <footer className="bg-white pt-8 pb-4 border-t border-gray-200 mt-12">
            <div className="max-w-[1440px] mx-auto px-4">

                <div className="bg-[#f0f0f0] py-8 px-4 md:px-20 rounded flex flex-col md:flex-row justify-between items-center mb-10">
                    <div className="text-center md:text-left flex-1">
                        <h3 className="text-[22px] font-bold text-gray-700 mb-1">Find Property</h3>
                        <p className="text-[15px] text-gray-500 mb-4">Select from thousands of options, without brokerage.</p>
                        <button className="bg-[#464646] text-white px-6 py-2 rounded text-[14px] font-semibold hover:bg-black transition-colors">Find Now</button>
                    </div>

                    <div className="hidden md:block w-px h-24 bg-gray-300 mx-10"></div>

                    <div className="text-center md:text-right flex-1">
                        <h3 className="text-[22px] font-bold text-gray-700 mb-1">List Your Property</h3>
                        <p className="text-[15px] text-gray-500 mb-4">For Free. Without any brokerage.</p>
                        <button className="bg-[#464646] text-white px-6 py-2 rounded text-[14px] font-semibold hover:bg-black transition-colors">Free Posting</button>
                    </div>
                </div>

                {/* Links */}
                <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-8 text-[16px] text-[#464646]">
                    {['About Us', 'Careers', 'Terms & Conditions', 'Privacy Policy', 'Testimonials', 'Sitemap', 'FAQs'].map((link, idx) => (
                        <a key={idx} href="#" className="hover:text-black transition-colors">{link}</a>
                    ))}
                </div>

                {/* App Stores & Socials */}
                <div className="flex flex-col items-center gap-8 border-t border-gray-100 pt-8">
                    <div className="flex gap-4">
                        {/* Google Play */}
                        <button className="bg-black text-white px-4 py-1.5 rounded-md flex items-center gap-2 hover:bg-gray-800 transition-colors">
                            <svg className="w-6 h-6 text-[#00d0e6]" viewBox="0 0 24 24" fill="currentColor"><path d="M3.609 1.814L13.792 12 3.61 22.186a2.955 2.955 0 01-.192-.258C2.56 20.841 2 19.341 2 17.618V6.375c0-1.722.56-3.222 1.418-4.309a2.923 2.923 0 01.191-.252zM4.945.892c.67-.323 1.488-.323 2.158 0l9.873 5.702-2.147 2.147L4.945.892zM15.938 9.94l6.115-3.535a2.502 2.502 0 010 4.341l-6.104-3.528.989-1.278zM4.945 23.108l9.883-9.522 2.146 2.147-9.871 5.702c-.67.323-1.488.323-2.158 0z" /></svg>
                            <div className="text-left">
                                <div className="text-[9px] uppercase tracking-wider">Get it on</div>
                                <div className="text-[15px] font-bold leading-none font-sans">Google Play</div>
                            </div>
                        </button>
                        {/* App Store */}
                        <button className="bg-black text-white px-4 py-1.5 rounded-md flex items-center gap-2 hover:bg-gray-800 transition-colors">
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.03-.48-3.24.02-1.02.43-2.04.4-2.85-.35C2.68 14.81 1.7 8.32 6.52 7.74c1.17.15 2.05.7 2.76.71 1.04-.01 2.37-1.14 4.02-.45.83.34 1.49.88 2.04 1.52-3.8 1.9-3.2 6.88.66 8.52-.39 1.1-.96 2.1-1.95 2.24zm-1.74-13.6c.55-2.31 3.2-3.6 5.86-3.01.27 2.52-2.33 5.49-5.86 3.01z" /></svg>
                            <div className="text-left">
                                <div className="text-[9px] uppercase tracking-wider">Download on the</div>
                                <div className="text-[15px] font-bold leading-none font-sans">App Store</div>
                            </div>
                        </button>
                    </div>

                    <div className="flex gap-4">
                        {/* Facebook */}
                        <div className="w-9 h-9 bg-[#f0f0f0] rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-300 cursor-pointer transition-colors">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg>
                        </div>
                        {/* Twitter */}
                        <div className="w-9 h-9 bg-[#f0f0f0] rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-300 cursor-pointer transition-colors">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path></svg>
                        </div>
                        {/* Instagram */}
                        <div className="w-9 h-9 bg-[#f0f0f0] rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-300 cursor-pointer transition-colors">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a5 5 0 100 10 5 5 0 000-10zm-8 5a8 8 0 1116 0A8 8 0 018 13zm8-5h0V5h-3v3zM8 5a3 3 0 00-3 3v8a3 3 0 003 3h8a3 3 0 003-3V8a3 3 0 00-3-3H8z"></path><rect x="3" y="3" width="18" height="18" rx="5" ry="5" stroke="currentColor" strokeWidth="2" fill="none" /></svg>
                        </div>
                        {/* LinkedIn */}
                        <div className="w-9 h-9 bg-[#f0f0f0] rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-300 cursor-pointer transition-colors">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></svg>
                        </div>
                        {/* YouTube */}
                        <div className="w-9 h-9 bg-[#f0f0f0] rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-300 cursor-pointer transition-colors">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.33 29 29 0 00-.46-5.33zM9.75 15.02l5.75-3.27-5.75-3.27v6.54z"></path></svg>
                        </div>
                    </div>
                </div>

                <div className="text-center text-[12px] text-gray-500 mt-6">
                    © 2013-25 NoBroker Technologies Solutions Pvt. Ltd.
                </div>
            </div>
        </footer>
    );
}
