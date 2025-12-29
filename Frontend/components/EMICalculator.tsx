'use client';

import { useState } from 'react';

export default function EMICalculator({ price }: { price: string }) {
    // Convert "₹60 Lacs" or "₹1.5 Crores" to a rough number
    const basePrice = 6000000; // Mock default

    const [amount, setAmount] = useState(basePrice);
    const [rate, setRate] = useState(8.5);
    const [tenure, setTenure] = useState(20);

    const calculateEMI = () => {
        const r = rate / 12 / 100;
        const n = tenure * 12;
        const emi = amount * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
        return Math.round(emi).toLocaleString('en-IN');
    }

    return (
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h2 className="text-[18px] font-bold text-gray-800 border-b-2 border-red-500 pb-2 inline-block mb-6">EMI Calculator</h2>

            <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1 space-y-6">
                    {/* Amount Slider */}
                    <div>
                        <div className="flex justify-between mb-2">
                            <label className="text-sm text-gray-600">Loan Amount</label>
                            <span className="font-bold text-gray-800">₹ {amount.toLocaleString('en-IN')}</span>
                        </div>
                        <input
                            type="range" min="100000" max="10000000" step="10000"
                            value={amount} onChange={(e) => setAmount(Number(e.target.value))}
                            className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#fd3752]"
                        />
                    </div>

                    {/* Rate Slider */}
                    <div>
                        <div className="flex justify-between mb-2">
                            <label className="text-sm text-gray-600">Interest Rate</label>
                            <span className="font-bold text-gray-800">{rate} %</span>
                        </div>
                        <input
                            type="range" min="5" max="15" step="0.1"
                            value={rate} onChange={(e) => setRate(Number(e.target.value))}
                            className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#fd3752]"
                        />
                    </div>

                    {/* Tenure Slider */}
                    <div>
                        <div className="flex justify-between mb-2">
                            <label className="text-sm text-gray-600">Loan Tenure</label>
                            <span className="font-bold text-gray-800">{tenure} Years</span>
                        </div>
                        <input
                            type="range" min="1" max="30" step="1"
                            value={tenure} onChange={(e) => setTenure(Number(e.target.value))}
                            className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#fd3752]"
                        />
                    </div>
                </div>

                <div className="w-full md:w-[250px] bg-gray-50 rounded p-4 flex flex-col justify-center items-center">
                    <div className="text-sm text-gray-500 mb-1">Monthly Payment</div>
                    <div className="text-[28px] font-bold text-[#fd3752] mb-4">₹ {calculateEMI()}</div>
                    <button className="w-full bg-[#fd3752] text-white font-bold py-2 rounded hover:bg-[#e62e46] transition-colors">
                        Apply for Loan
                    </button>
                </div>
            </div>
        </div>
    );
}
