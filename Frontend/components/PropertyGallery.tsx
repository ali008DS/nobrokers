'use client';

interface PropertyGalleryProps {
    imageUrl?: string;
}

export default function PropertyGallery({ imageUrl }: PropertyGalleryProps) {
    return (
        <div className="flex gap-1 h-[400px]">
            {/* Main Large Image */}
            <div className="w-2/3 relative group cursor-pointer overflow-hidden rounded-l-lg">
                <img src={imageUrl || "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80"} alt="Living Room" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute top-4 left-4 flex gap-2">
                    <button className="bg-black/60 text-white text-[12px] px-3 py-1.5 rounded flex items-center gap-2 hover:bg-black/80 transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                        Photos
                    </button>
                    <button className="bg-black/60 text-white text-[12px] px-3 py-1.5 rounded flex items-center gap-2 hover:bg-black/80 transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                        Location
                    </button>
                </div>
            </div>

            {/* Right Side Grid */}
            <div className="w-1/3 flex flex-col gap-1">
                <div className="h-1/2 relative overflow-hidden rounded-tr-lg">
                    <img src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&q=80" alt="Bedroom" className="w-full h-full object-cover" />
                    <div className="absolute top-4 right-4">
                        <button className="bg-black/60 text-white text-[12px] px-3 py-1.5 rounded flex items-center gap-2 hover:bg-black/80 transition-colors">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                            Shortlist
                        </button>
                    </div>
                </div>
                <div className="h-1/2 relative overflow-hidden rounded-br-lg cursor-pointer group">
                    <img src="https://images.unsplash.com/photo-1484154218962-a1c002085d2f?w=400&q=80" alt="Kitchen" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <span className="text-white text-[24px] font-bold">+3</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
