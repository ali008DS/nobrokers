'use client';

import { useState } from 'react';

export default function LeftSidebar() {
  const [selectedBHK, setSelectedBHK] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'filters' | 'premium'>('filters');
  const [priceRange, setPriceRange] = useState(100000000);
  const [propertyStatus, setPropertyStatus] = useState<string>('');
  const [furnishing, setFurnishing] = useState<string[]>([]);
  const [propertyType, setPropertyType] = useState<string[]>([]);
  const [newBuilderProjects, setNewBuilderProjects] = useState(false);

  const bhkOptions = ['1 RK', '1 BHK', '2 BHK', '3 BHK', '4 BHK', '4+ BHK'];

  const toggleBHK = (bhk: string) => {
    setSelectedBHK(prev =>
      prev.includes(bhk) ? prev.filter(b => b !== bhk) : [...prev, bhk]
    );
  };

  const toggleFurnishing = (item: string) => {
    setFurnishing(prev =>
      prev.includes(item) ? prev.filter(f => f !== item) : [...prev, item]
    );
  };

  const togglePropertyType = (type: string) => {
    setPropertyType(prev =>
      prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
    );
  };

  return (
    <aside className="w-full lg:w-[325px] bg-white shadow-sm lg:h-[calc(100vh-100px)] sticky top-[80px] flex flex-col font-sans">
      {/* Tabs Header */}
      <div className="flex border-b border-gray-200">
        <button
          onClick={() => setActiveTab('filters')}
          className={`flex-1 py-3 text-[14px] font-bold border-b-2 transition-colors ${activeTab === 'filters' ? 'text-[#009587] border-[#009587]' : 'text-gray-500 border-transparent hover:bg-gray-50'}`}
        >
          Filters
        </button>
        <button
          onClick={() => setActiveTab('premium')}
          className={`flex-1 py-3 text-[14px] font-medium relative transition-colors ${activeTab === 'premium' ? 'text-[#009587] border-b-2 border-[#009587]' : 'text-gray-500 border-transparent hover:bg-gray-50'}`}
        >
          Premium Filters
          <span className="absolute top-2 right-2 bg-[#fd3752] text-white text-[9px] px-1.5 py-[1px] rounded transition-transform transform scale-90">New</span>
        </button>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto px-5 py-4 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full">

        {/* Reset Button */}
        <div className="flex justify-end mb-5">
          <button className="flex items-center gap-1 text-[12px] text-gray-500 hover:text-gray-900 font-medium transition-colors">
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Reset
          </button>
        </div>

        {activeTab === 'filters' ? (
          <>
            {/* BHK Type */}
            <div className="mb-6">
              <h3 className="text-[13px] font-bold text-gray-700 mb-3">BHK Type</h3>
              <div className="grid grid-cols-4 gap-2">
                {bhkOptions.map(bhk => (
                  <button
                    key={bhk}
                    onClick={() => toggleBHK(bhk)}
                    className={`py-2 text-[12px] rounded border transition-all truncate flex justify-center items-center ${selectedBHK.includes(bhk)
                      ? 'bg-white text-gray-900 border-gray-400 font-medium shadow-sm'
                      : 'bg-white text-gray-500 border-gray-200 hover:border-gray-300'
                      }`}
                  >
                    {bhk}
                  </button>
                ))}
              </div>
            </div>

            {/* New Builder Projects */}
            <div className="mb-6">
              <label className="flex items-center cursor-pointer group select-none">
                <input
                  type="checkbox"
                  checked={newBuilderProjects}
                  onChange={(e) => setNewBuilderProjects(e.target.checked)}
                  className="peer h-4 w-4 cursor-pointer appearance-none rounded-sm border border-gray-300 transition-all checked:border-[#009587] checked:bg-[#009587] hover:border-[#009587]"
                />
                <span className="ml-3 text-[13px] text-gray-600 group-hover:text-gray-900">New Builder Projects</span>
                <span className="ml-2 bg-[#fd3752] text-white text-[9px] px-1.5 py-[1px] rounded-sm font-bold">Offer</span>
                {/* Checkmark Icon */}
                <svg className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none left-[2px] top-[5px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} style={{ top: 'calc(50% - 6px)', left: '2px' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </label>
            </div>

            {/* Price Range */}
            <div className="mb-6">
              <h3 className="text-[13px] font-bold text-gray-700 mb-4">Price Range: ₹ 0 to ₹ 10 Cr</h3>
              <div className="px-1">
                <div className="relative h-1 bg-[#009587] rounded-full mb-6 mx-2">
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-5 h-5 bg-white border-2 border-[#009587] rounded-full shadow cursor-pointer z-10 hover:scale-110 transition-transform">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 border-r border-t border-gray-300 rotate-45 transform" style={{ marginLeft: '-1px' }}></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 border-l border-b border-gray-300 rotate-45 transform" style={{ marginLeft: '2px' }}></div>
                  </div>
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-5 h-5 bg-white border-2 border-[#009587] rounded-full shadow cursor-pointer z-10 hover:scale-110 transition-transform">
                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-300 text-[10px] font-light">||</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Property Status */}
            <div className="mb-6">
              <h3 className="text-[13px] font-bold text-gray-700 mb-3">Property Status</h3>
              <div className="flex gap-4">
                {['Under Construction', 'Ready'].map(status => (
                  <label key={status} className="flex items-center cursor-pointer group">
                    <div className="relative flex items-center">
                      <input
                        type="radio"
                        name="propertyStatus"
                        value={status}
                        checked={propertyStatus === status}
                        onChange={(e) => setPropertyStatus(e.target.value)}
                        className="peer h-4 w-4 cursor-pointer appearance-none rounded-full border border-gray-300 transition-all checked:border-[#009587] hover:border-[#009587]"
                      />
                      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#009587] rounded-full opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                    </div>
                    <span className="ml-2 text-[13px] text-gray-600 group-hover:text-gray-900">{status}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Furnishing */}
            <div className="mb-6">
              <h3 className="text-[13px] font-bold text-gray-700 mb-3">Furnishing</h3>
              <div className="flex gap-6">
                {['Full', 'Semi', 'None'].map(item => (
                  <label key={item} className="flex items-center cursor-pointer group select-none">
                    <div className="relative flex items-center">
                      <input
                        type="checkbox"
                        checked={furnishing.includes(item)}
                        onChange={() => toggleFurnishing(item)}
                        className="peer h-4 w-4 cursor-pointer appearance-none rounded-sm border border-gray-300 transition-all checked:border-[#009587] checked:bg-[#009587] hover:border-[#009587]"
                      />
                      <svg className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none left-[2px] top-[5px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} style={{ top: 'calc(50% - 6px)', left: '2px' }}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <span className="ml-2 text-[13px] text-gray-600 group-hover:text-gray-900">{item}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Property Type */}
            <div className="mb-6">
              <h3 className="text-[13px] font-bold text-gray-700 mb-3">Property Type</h3>
              <div className="space-y-2">
                {['Apartment', 'Independent House/Villa', 'Gated Community Villa', 'Standalone Building'].map(type => (
                  <label key={type} className="flex items-center cursor-pointer group select-none">
                    <div className="relative flex items-center">
                      <input
                        type="checkbox"
                        checked={propertyType.includes(type)}
                        onChange={() => togglePropertyType(type)}
                        className="peer h-4 w-4 cursor-pointer appearance-none rounded-sm border border-gray-300 transition-all checked:border-[#009587] checked:bg-[#009587] hover:border-[#009587]"
                      />
                      <svg className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none left-[2px] top-[5px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} style={{ top: 'calc(50% - 6px)', left: '2px' }}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <span className="ml-2 text-[13px] text-gray-600 group-hover:text-gray-900">{type}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Parking */}
            <div className="mb-6">
              <h3 className="text-[13px] font-bold text-gray-700 mb-3">Parking</h3>
              <div className="space-y-2">
                {['2 Wheeler', '4 Wheeler'].map(parking => (
                  <label key={parking} className="flex items-center cursor-pointer group select-none">
                    <div className="relative flex items-center">
                      <input
                        type="checkbox"
                        className="peer h-4 w-4 cursor-pointer appearance-none rounded-sm border border-gray-300 transition-all checked:border-[#009587] checked:bg-[#009587] hover:border-[#009587]"
                      />
                      <svg className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none left-[2px] top-[5px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} style={{ top: 'calc(50% - 6px)', left: '2px' }}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <span className="ml-2 text-[13px] text-gray-600 group-hover:text-gray-900">{parking}</span>
                  </label>
                ))}
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Built Up Area */}
            <div className="mb-7">
              <h3 className="text-[14px] font-bold text-gray-800 mb-4">Built Up Area(sq. ft.): 0 to 1,00,000 sq.ft.</h3>
              <div className="px-1">
                <div className="relative h-1 bg-[#009587] rounded-full mb-6">
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-5 bg-white border-2 border-[#009587] rounded-full shadow cursor-pointer">
                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-300 text-[10px]">||</span>
                  </div>
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-5 h-5 bg-white border-2 border-[#009587] rounded-full shadow cursor-pointer">
                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-300 text-[10px]">||</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Property Age */}
            <div className="mb-7">
              <h3 className="text-[14px] font-bold text-gray-800 mb-3">Property Age</h3>
              <div className="grid grid-cols-2 gap-y-3 gap-x-2">
                {['< 1 year', '< 3 years', '< 5 years', '< 10 years'].map(age => (
                  <label key={age} className="flex items-center cursor-pointer group">
                    <div className="relative flex items-center">
                      <input
                        type="checkbox"
                        className="peer h-4 w-4 cursor-pointer appearance-none rounded border border-gray-300 transition-all checked:border-[#009587] checked:bg-[#009587] hover:border-[#009587]"
                      />
                      <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <span className="ml-3 text-[13px] text-gray-600 group-hover:text-gray-900">{age}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Show Only */}
            <div className="mb-7">
              <h3 className="text-[14px] font-bold text-gray-800 mb-3">Show Only</h3>
              <div className="flex gap-3">
                <button className="flex-1 py-2 bg-gray-50 text-[13px] text-gray-700 font-medium rounded hover:bg-gray-100 transition-colors">With Photo</button>
                <button className="flex-1 py-2 bg-gray-50 text-[13px] text-gray-700 font-medium rounded hover:bg-gray-100 transition-colors">Gym</button>
              </div>
            </div>

            {/* Bathroom */}
            <div className="mb-7">
              <h3 className="text-[14px] font-bold text-gray-800 mb-3">Bathroom</h3>
              <div className="flex flex-wrap gap-4">
                {['1 or more', '2 or more', '3 or more'].map(bath => (
                  <label key={bath} className="flex items-center cursor-pointer gap-2">
                    <div className="w-5 h-5 rounded-full border border-gray-300 hover:border-gray-400"></div>
                    <span className="text-[13px] text-gray-600">{bath}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Remove Seen Properties */}
            <div className="mb-7">
              <label className="flex items-center cursor-pointer group">
                <div className="relative flex items-center">
                  <input
                    type="checkbox"
                    className="peer h-4 w-4 cursor-pointer appearance-none rounded border border-gray-300 transition-all checked:border-[#009587] checked:bg-[#009587] hover:border-[#009587]"
                  />
                  <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <div className="ml-3 flex items-center gap-2">
                  <span className="text-[13px] text-gray-600 group-hover:text-gray-900">Remove Seen Properties</span>
                  <span className="bg-[#fd3752] text-white text-[9px] px-1.5 py-0.5 rounded-sm font-bold">New</span>
                </div>
              </label>
            </div>

            {/* Floors */}
            <div className="mb-7">
              <h3 className="text-[14px] font-bold text-gray-800 mb-3">Floors</h3>
              <div className="grid grid-cols-3 gap-2">
                {['Ground', '1 to 3', '4 to 6', '7 to 9', '10 & above', 'Custom'].map(floor => (
                  <button key={floor} className="py-2.5 bg-gray-50 hover:bg-gray-100 text-[12px] text-gray-700 font-medium rounded transition-colors text-center">
                    {floor}
                  </button>
                ))}
              </div>
            </div>

          </>
        )}

      </div>
    </aside>
  );
}

