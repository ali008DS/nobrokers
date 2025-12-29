'use client';

import Link from 'next/link';
import SimilarProperties from './SimilarProperties';

interface PropertyCardProps {
  id: string;
  title: string;
  location: string;
  price: string;
  pricePerSqft: string;
  emi: string;
  area: string;
  facing: string;
  bhk: string;
  bathrooms: string;
  parking: string;
  imageUrl?: string;
  photoCount?: number;
  underLoan?: boolean;
  showSimilarProperties?: boolean;
}

export default function PropertyCard({
  id,
  title,
  location,
  price,
  pricePerSqft,
  emi,
  area,
  facing,
  bhk,
  bathrooms,
  parking,
  imageUrl,
  photoCount = 7,
  underLoan = false,
  showSimilarProperties = false,
}: PropertyCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm mb-4 overflow-hidden">
      {/* 1. Header Section */}
      <div className="p-4 pb-2 bg-[#f5f5f5] border-b border-gray-200">
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <Link href="/property/1" className="block w-full">
              <h3 className="text-[16px] font-semibold text-gray-800 mb-1 flex items-center gap-2 hover:text-red-500 transition-colors">
                {title}
                <svg className="w-4 h-4 text-gray-400 cursor-pointer hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </h3>
            </Link>
            <p className="text-[13px] text-gray-500 flex items-center gap-1">
              <span>{location}</span>
              <span className="text-gray-400">
                <svg className="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Explore Nearby
              </span>
            </p>
          </div>
          <button className="p-1 border border-transparent hover:border-red-500 hover:text-red-500 rounded-sm transition-colors text-gray-300">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
            </svg>
          </button>
        </div>
      </div>

      {/* 2. Stats Bar */}
      <div className="px-4 py-3 bg-white border-b border-gray-100 flex items-center justify-between">
        <div className="flex-1 border-r border-gray-200 pr-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-gray-500">₹</div>
            <div>
              <div className="text-[16px] font-bold text-gray-800">{price}</div>
              <div className="text-[11px] text-gray-500">{pricePerSqft}</div>
            </div>
          </div>
        </div>
        <div className="flex-1 border-r border-gray-200 px-4">
          <div className="text-[16px] font-bold text-gray-800">{emi}</div>
          <div className="text-[11px] text-gray-500">Estimated EMI</div>
        </div>
        <div className="flex-1 pl-4">
          <div className="text-[16px] font-bold text-gray-800">{area}</div>
          <div className="text-[11px] text-gray-500">Builtup</div>
        </div>
      </div>

      {/* 3. Main Content Split */}
      <div className="p-4 flex flex-col sm:flex-row gap-4">
        {/* Left: Image */}
        <div className="w-full sm:w-[40%] h-[180px] relative rounded overflow-hidden">
          <Link href={`/property/${id}`}>
            {imageUrl ? (
              <img src={imageUrl} alt={title} className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-500" />
            ) : (
              <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400 cursor-pointer">No Image</div>
            )}
          </Link>
          <div className="absolute bottom-2 right-2 bg-black/60 text-white text-[10px] px-1.5 py-0.5 rounded">
            4/10
          </div>
          {/* Gradient Overlay for logo watermark effect if needed */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30">
            <span className="text-white font-bold text-xl rotate-[-20deg]">NOBROKER</span>
          </div>
        </div>

        {/* Right: Amenities & CTA */}
        <div className="flex-1 flex flex-col justify-between">
          {/* Grid */}
          {/* Custom Grid Layout as requested */}
          <div className="border-[3px] border-double border-gray-200 flex flex-col mb-4 bg-white">
            {/* Row 1 */}
            <div className="flex p-0.5 border-b border-b-solid border-b-gray-200 items-center min-h-[60px]">
              {/* Col 1: Facing */}
              <div className="flex-1 border-r border-r-solid border-r-gray-200 flex items-center pl-2">
                <div className="mr-3 text-gray-500">
                  {/* Compass Icon */}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M16.2 7.8l-2 6.4-6.4 2 2-6.4z"></path>
                  </svg>
                </div>
                <div className="flex">
                  <div>
                    <div className="font-semibold text-sm text-gray-700">{facing}</div>
                    <div className="text-[10px] text-gray-400 mt-0.5">Facing</div>
                  </div>
                </div>
              </div>
              {/* Col 2: Apartment Type */}
              <div className="flex flex-1 pl-2 items-center">
                <div className="mr-3 text-gray-500">
                  {/* Building Icon (House style) */}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    <path d="M10 2h4"></path> {/* Chimney-like detail or roof accent */}
                    <path d="M7 6l2-2"></path>
                    <circle cx="12" cy="7" r="1.5"></circle>
                    <rect x="5.5" y="14" width="3" height="3"></rect>
                    <rect x="15.5" y="14" width="3" height="3"></rect>
                  </svg>
                </div>
                <div>
                  <div className="font-semibold whitespace-nowrap text-sm text-gray-700">{bhk}</div>
                  <div className="text-[10px] text-gray-400 mt-0.5">Apartment Type</div>
                </div>
              </div>
            </div>
            {/* Row 2 */}
            <div className="flex p-0.5 items-center min-h-[60px]">
              {/* Col 1: Bathrooms */}
              <div className="flex flex-1 border-r border-r-solid border-r-gray-200 items-center pl-2">
                <div className="mr-3 text-gray-500">
                  {/* Shower & Tub Icon */}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    {/* Tub */}
                    <path d="M4 16v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3" />
                    <line x1="4" y1="16" x2="20" y2="16" />
                    {/* Shower head */}
                    <path d="M10 5l-2-2" />
                    <path d="M8 3h3.5A1.5 1.5 0 0 1 13 4.5V11" />
                    <path d="M11 11h4l1 3H10l1-3z" /> {/* Shower head nozzle */}
                    {/* Drops */}
                    <line x1="11" y1="15" x2="11" y2="15.5" />
                    <line x1="13" y1="15" x2="13" y2="15.5" />
                    <line x1="15" y1="15" x2="15" y2="15.5" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-sm text-gray-700">{bathrooms}</div>
                  <div className="text-[10px] text-gray-400 mt-0.5">Bathrooms</div>
                </div>
              </div>
              {/* Col 2: Parking */}
              <div className="flex flex-1 pl-2 items-center">
                <div className="mr-3 text-gray-500">
                  {/* Parking Icon (Circled P) */}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M10 8h2.5a2.5 2.5 0 0 1 0 5H10v4" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-sm text-gray-700">{parking}</div>
                  <div className="text-[10px] text-gray-400 mt-0.5">Parking</div>
                </div>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-3 mt-auto">
            <Link href={`/property/${id}`} className="flex-1 bg-[#fd3752] hover:bg-[#e62e46] text-white font-bold py-2.5 px-4 rounded text-[14px] transition-colors text-center inline-block">
              Get Owner Details
            </Link>
            <button className="p-2 border border-gray-300 rounded text-gray-400 hover:text-red-500 hover:border-red-500 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* 4. Footer */}
      <div className="p-4 pt-0">
        <div className="bg-[#e7f7f7] px-3 py-2 flex items-center justify-between border border-[#e7f7f7] rounded-[2px]">
          <div className="flex items-center gap-2">
            <style jsx>{`
              @keyframes blink {
                0% { opacity: 1; }
                50% { opacity: 0; }
                100% { opacity: 1; }
              }
              .blink-dot {
                animation: blink 1s infinite;
              }
            `}</style>
            <div className="w-2 h-2 rounded-full bg-[rgb(51,138,91)] blink-dot"></div>
            <span className="text-[rgb(51,138,91)] text-[13px] font-semibold">Owner is available to chat now</span>
          </div>
          <button className="flex items-center gap-1.5 text-[rgb(51,138,91)] hover:underline">
            <span className="text-[13px] font-bold">Start Chat</span>
            <div
              style={{
                backgroundImage: 'url("https://assets.nobroker.in/nb-new/public/List-Page/list_page_sprite_latest3.svg")',
                height: '19px',
                width: '19px',
                backgroundPosition: '-233px -273px',
                backgroundSize: '553px'
              }}
            ></div>
          </button>
        </div>
      </div>
      {showSimilarProperties && <SimilarProperties />}
    </div>
  );
}

