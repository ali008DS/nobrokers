import TopSocieties from './TopSocieties';
import Recommendations from './Recommendations';
import TopBuilderProjects from './TopBuilderProjects';
import PropertyCard from './PropertyCard';
import { useState } from 'react';
import { properties } from '@/data/properties';

export default function CenterContent() {
  const [sortBy, setSortBy] = useState('nbrank,desc');

  return (
    <div className="flex-1 min-w-0">
      {/* Header Container */}
      <div className="flex flex-col bg-white p-[15px] mb-4 shadow-md rounded-lg" style={{ width: '100%', height: '123px' }}>
        <section className="flex justify-between">
          {/* Breadcrumb */}
          <ul className="flex justify-start items-center w-auto p-0 list-none text-[12px] text-gray-500">
            <li className="flex items-center">
              <a href="/" className="no-underline text-gray-500 hover:text-gray-900">
                <span>Home </span>
              </a>
              <span className="mx-1">/</span>
            </li>
            <li className="flex items-center">
              <a href="#" className="no-underline text-gray-500 hover:text-gray-900">
                <span className="capitalize">Bangalore</span>
              </a>
              <span className="mx-1">/</span>
            </li>
            <li className="overflow-hidden overflow-ellipsis whitespace-nowrap max-w-[150px] text-gray-900">
              <span className="mx-1"> </span>
              <span>Kanpuri Zayka</span>
            </li>
          </ul>

          {/* Sort By */}
          <div className="flex items-center">
            <span className="text-[12px] text-gray-500 mr-2">Sort By:</span>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-[14px] text-gray-800 border border-gray-300 rounded-[2px] py-1 pl-2 pr-6 focus:outline-none bg-white cursor-pointer appearance-none"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' height='20' width='20' viewBox='0 0 20 20'%3e%3cpath d='M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z' fill='%23999'/%3e%3c/svg%3e")`,
                  backgroundPosition: `right 5px center`,
                  backgroundRepeat: `no-repeat`,
                  minWidth: '130px',
                  backgroundSize: '12px'
                }}
              >
                <option value="nbrank,desc">NoBroker Rank</option>
                <option value="price,asc">Price Low to High</option>
                <option value="price,desc">Price High to Low</option>
              </select>
            </div>
          </div>
        </section>

        {/* Heading */}
        <h1 className="text-[20px] text-[#464646] m-0 pt-[8px] pb-[3px] font-normal truncate" style={{ width: '690px' }}>
          <span className="font-semibold text-black">386</span> - Flats, Apartments for Sale in Kanpuri Zayka, Bangalore | Flats in Kanpuri Zayka
        </h1>
      </div>

      {/* Property Cards */}
      {/* Featured Project Banner */}
      <div className="relative w-full h-[250px] bg-[#221010] rounded-lg overflow-hidden mb-6 flex">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent z-0"></div>

        {/* Content */}
        <div className="relative z-10 p-6 flex-1 flex flex-col justify-center text-white">
          <h2 className="text-[22px] font-bold mb-1">Century Mirai</h2>
          <p className="text-gray-400 text-sm mb-3">Near Gilly's Restobar - Kundanahalli,Munnekollal,Marathahalli, Bangalore</p>
          <div className="text-[18px] font-bold mb-4">₹2.15Cr - ₹4.87Cr</div>

          <div className="space-y-2 mb-6 text-gray-300 text-sm">
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              850 units in 15 acres
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              2,3,4 BHK · 867-2181 Sq.Ft.
            </div>
          </div>

          <button className="bg-white text-[#008387] font-semibold py-2 px-6 rounded-md text-sm w-fit hover:bg-gray-100 transition-colors">
            View Properties
          </button>
        </div>

        {/* Image */}
        <div className="relative z-10 p-4 pl-0 w-[300px]">
          <img
            src="https://assets.nobroker.in/media/building/8a9f8a8499b934890199b94338f60478/images/8a9f8a8499b934890199b94338f60478_project_image_4jJeCA8Tfx1765262920903.jpg"
            alt="Century Mirai"
            className="h-full w-full object-cover rounded-lg border-2 border-white"
          />
        </div>
      </div>

      {/* Property Cards */}
      <div className="space-y-4">
        {properties.map((property, index) => (
          <div key={index} className="flex flex-col gap-4">
            <PropertyCard {...property} showSimilarProperties={index === 2} />
            {index === 0 && <TopBuilderProjects />}
            {index === 1 && <Recommendations />}
            {index === 3 && <TopSocieties />}
          </div>
        ))}
      </div>
    </div>
  );
}
