'use client';

export default function PriceTrends() {
    return (
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-[18px] font-bold text-gray-800 border-b-2 border-red-500 pb-2 inline-block">Price Trends</h2>
                <select className="border border-gray-300 rounded px-2 py-1 text-sm outline-none">
                    <option>Sale</option>
                    <option>Rent</option>
                </select>
            </div>

            <div className="h-[250px] w-full flex items-end justify-between gap-2 px-4 pb-4 border-l border-b border-gray-200 relative">

                {/* Mock Chart Bars */}
                {[40, 45, 42, 55, 60, 58, 65, 70, 75, 72, 80, 85].map((height, idx) => (
                    <div key={idx} className="flex-1 flex flex-col justify-end items-center group relative">
                        <div
                            className="w-full bg-[#e8f5f6] hover:bg-[#009587] transition-all duration-300 rounded-t-sm"
                            style={{ height: `${height}%` }}
                        ></div>
                        {/* Tooltip */}
                        <div className="absolute -top-8 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity">
                            ₹{5000 + (height * 50)}/sqft
                        </div>
                    </div>
                ))}

                {/* Labels */}
                <div className="absolute -bottom-6 left-0 right-0 flex justify-between text-[10px] text-gray-500 px-4">
                    <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
                    <span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
                </div>
            </div>

            <p className="mt-8 text-sm text-gray-500">
                Showing average price trends for flats in this locality.
                <span className="text-[#009587] font-semibold ml-1 cursor-pointer">View detailed insights</span>
            </p>
        </div>
    );
}
