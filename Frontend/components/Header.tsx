'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [activeTab, setActiveTab] = useState<'Location' | 'Metro'>('Location');
  const [showLocationChip, setShowLocationChip] = useState(true);
  const [viewMode, setViewMode] = useState<'List' | 'Map'>('List');
  const pathname = usePathname();
  const isDetailPage = pathname?.startsWith('/property/');

  return (
    <>
      {/* Top Header Bar */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-[1440px] mx-auto px-[5px] h-16 flex items-center justify-between">
          {/* Left Section */}
          <div className="flex items-center gap-6">
            <div className="flex items-center">
              <img
                src="https://assets.nobroker.in/static/img/logos/nb_logo_new_trans.svg"
                alt="NoBroker"
                className="w-[175px] h-[50px]"
              />
            </div>
            <nav className="hidden md:flex items-center gap-1">
              <button className="text-gray-700 font-medium hover:text-gray-900 flex items-center gap-1">
                Buy
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </nav>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-3">
            <button className="hidden md:flex items-center border border-gray-300 rounded-sm h-9 px-3 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
              <img src="/pay-rent-icon.png" alt="Pay Rent" className="w-5 h-5 mr-2 object-contain" />
              Pay Rent
            </button>
            <button className="hidden md:block px-4 py-2 text-sm font-medium text-white bg-teal-600 rounded hover:bg-teal-700">
              Post Your Property
            </button>
            <div className="relative flex items-center justify-center mx-3 cursor-pointer group">
              <div className="absolute -top-4 -right-2 bg-[#009587] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-sm shadow-sm z-10">
                New
                <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-[3px] w-0 h-0 border-l-[3px] border-l-transparent border-r-[3px] border-r-transparent border-t-[3px] border-t-[#009587]"></div>
              </div>
              <img src="/n-logo.png" alt="N" className="w-8 h-8 rounded-full border-2 border-white shadow-md relative z-0 object-cover" />
            </div>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                <div className="w-[34px] h-[34px] rounded-full border border-[#8d9bb3] p-[2px] flex items-center justify-center">
                  <div className="w-full h-full rounded-full bg-[#8d9bb3] flex items-center justify-center text-white overflow-hidden">
                    <svg className="w-6 h-6 transform translate-y-[2px]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                  </div>
                </div>
                <span className="hidden lg:inline text-sm text-gray-700">pikachu</span>
                <svg className="w-4 h-4 hidden lg:inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <button className="relative p-2 text-gray-600 hover:text-gray-900">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <button className="p-2 text-gray-600 hover:text-gray-900">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </button>
              <button className="flex items-center gap-1 text-gray-600 hover:text-gray-900 md:hidden">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <span className="text-sm">Menu</span>
              </button>
            </div>
          </div>
        </div>

        {/* Search Bar Section - Hidden on Detail Pages */}
        {!isDetailPage && (
          <nav className="w-full bg-white left-0 right-0 top-16 py-2 pl-10 pr-12 border-b border-gray-300 fixed -mt-[1px]" style={{ zIndex: 6 }}>
            <div className="flex justify-between items-center">
              <div style={{ flex: 3 }} className="flex mt-0.5 mb-0.5">
                <section className="flex">
                  <div className="flex-1 relative cursor-pointer">
                    <span>
                      <aside className="flex items-center relative">
                        <div className="flex items-center relative flex-1">
                          {showLocationChip && (
                            <span title="Green Avenue" className="selected-locality-item absolute left-0 top-1/2 -translate-y-1/2 flex items-center gap-1.5 bg-gray-500 px-3 py-1.5 rounded-full z-10 ml-0">
                              <span className="text-sm text-white font-medium">Green Avenue</span>
                              <button
                                onClick={() => setShowLocationChip(false)}
                                className="text-white hover:text-gray-200"
                              >
                                <svg className="mr-0.5" style={{ width: '10px', height: '10px', margin: 0 }} viewBox="0 0 24 24" color="#fff" height="10" width="10">
                                  <path className="" fill="#fff" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"></path>
                                </svg>
                              </button>
                            </span>
                          )}
                          <input
                            type="text"
                            id="listPageSearchLocality"
                            placeholder="Add more..."
                            style={{
                              paddingLeft: showLocationChip ? '130px' : '12px',
                              borderWidth: '1px 0px 1px 1px',
                              borderTopStyle: 'solid',
                              borderBottomStyle: 'solid',
                              borderLeftStyle: 'solid',
                              borderTopColor: 'rgb(102, 102, 102)',
                              borderBottomColor: 'rgb(102, 102, 102)',
                              borderLeftColor: 'rgb(102, 102, 102)',
                              borderImage: 'initial',
                              borderTopLeftRadius: '12px',
                              borderBottomLeftRadius: '12px',
                              borderRightStyle: 'none',
                              borderRightColor: 'transparent',
                              cursor: 'auto',
                              paddingRight: '110px',
                              pointerEvents: 'auto',
                              height: '40px',
                              backgroundColor: 'white',
                            }}
                            className="w-full text-sm text-gray-700 placeholder-gray-400 focus:outline-none"
                            autoComplete="off"
                          />
                          <div className="absolute right-2 top-1/2 -translate-y-1/2 text-xs p-1 rounded-md flex bg-gray-100 cursor-pointer gap-1">
                            <button
                              onClick={() => setActiveTab('Location')}
                              className={`px-2.5 rounded-md py-1 text-xs font-medium ${activeTab === 'Location'
                                ? 'bg-red-500 text-white'
                                : 'bg-transparent text-gray-700 hover:bg-gray-200'
                                }`}
                            >
                              Location
                            </button>
                            <button
                              onClick={() => setActiveTab('Metro')}
                              className={`px-2.5 rounded-md py-1 text-xs font-medium ${activeTab === 'Metro'
                                ? 'bg-red-500 text-white'
                                : 'bg-transparent text-gray-700 hover:bg-gray-200'
                                }`}
                            >
                              Metro
                            </button>
                          </div>
                        </div>
                      </aside>
                    </span>
                  </div>
                  <button className="rounded-lg -ml-0.5 btn btn-primary px-6 py-2 bg-red-500 text-white text-sm font-medium hover:bg-red-600 h-10" id="search" type="button">
                    Search
                  </button>
                </section>
                <span className="cursor-pointer ml-5 self-center whitespace-nowrap underline mt-2.5 text-sm text-gray-700 hover:text-gray-900" id="saveSearch">
                  Save Search
                </span>
              </div>
              <div className="flex justify-between text-center items-center" style={{ width: '360px' }}>
                <div className="ml-auto mr-4">
                  <div className="flex text-center items-center w-48 h-10 justify-center">
                    <div style={{ boxShadow: '0px 4px 10px rgba(69, 91, 99, 0.19)' }} className="flex h-full w-full m-auto justify-center items-center rounded-xl relative bg-white">
                      <div style={{ backgroundColor: 'white' }} className="flex p-1 w-full h-full rounded-xl justify-between gap-1">
                        <button
                          onClick={() => setViewMode('List')}
                          className="w-1/2 leading-none flex items-center justify-center"
                          style={{
                            backgroundColor: viewMode === 'List' ? '#008387' : 'transparent',
                            borderRadius: '10px',
                            height: '100%',
                            transition: 'all 0.2s'
                          }}
                          type="button"
                        >
                          <div className="flex text-xs font-semibold items-center justify-center gap-1.5" style={{ color: viewMode === 'List' ? 'white' : '#008387' }}>
                            {viewMode === 'List' ? (
                              <img
                                src="https://assets.nobroker.in/nb-new/public/BuilderProjectsListPage/listIconWhite.svg"
                                alt="list-icon"
                                height="16"
                                width="16"
                              />
                            ) : (
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#008387' }}>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                              </svg>
                            )}
                            List
                          </div>
                        </button>
                        <button
                          onClick={() => setViewMode('Map')}
                          className="w-1/2 leading-none flex items-center justify-center"
                          style={{
                            backgroundColor: viewMode === 'Map' ? '#008387' : 'white',
                            borderRadius: '10px',
                            height: '100%',
                            transition: 'all 0.2s'
                          }}
                          type="button"
                        >
                          <div className="flex text-xs font-semibold items-center justify-center gap-1.5" style={{ color: viewMode === 'Map' ? 'white' : '#008387' }}>
                            {viewMode === 'Map' ? (
                              <img
                                src="https://assets.nobroker.in/nb-new/public/BuilderProjectsListPage/mapIcon.svg"
                                alt="map-icon"
                                height="16"
                                width="16"
                                style={{ filter: 'brightness(0) invert(1)' }}
                              />
                            ) : (
                              <img
                                src="https://assets.nobroker.in/nb-new/public/BuilderProjectsListPage/mapIcon.svg"
                                alt="map-icon"
                                height="16"
                                width="16"
                              />
                            )}
                            Map
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        )}
      </header>
    </>
  );
}

