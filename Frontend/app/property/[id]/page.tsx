'use client';

import Header from '@/components/Header';
import PropertyDetailHeader from '@/components/PropertyDetailHeader';
import PropertyGallery from '@/components/PropertyGallery';
import PropertyOverview from '@/components/PropertyOverview';
import NoBrokerServices from '@/components/NoBrokerServices';
import PropertyAmenities from '@/components/PropertyAmenities';
import PropertyDetailSidebar from '@/components/PropertyDetailSidebar';
import PropertyNeighbourhood from '@/components/PropertyNeighbourhood';
import PropertySEOFooter from '@/components/PropertySEOFooter';
import ChatWidget from '@/components/ChatWidget';
import EMICalculator from '@/components/EMICalculator';
import PriceTrends from '@/components/PriceTrends';
import PropertyDescription from '@/components/PropertyDescription';
import { properties, Property } from '@/data/properties'; // Updated import
import { notFound } from 'next/navigation';

interface PageProps {
    params: {
        id: string;
    };
}

export default function PropertyDetail({ params }: PageProps) {
    const property = properties.find(p => p.id === params.id) as unknown as Property; // Cast to Property

    if (!property) {
        return notFound();
    }

    return (
        <div className="min-h-screen bg-white font-sans">
            <Header />

            {/* Full Width Property Header Strip */}
            <div className="w-full border-b border-gray-200 mt-16">
                <div className="w-[98%] max-w-[1440px] mx-auto">
                    <PropertyDetailHeader property={property} />
                </div>
            </div>

            <main className="w-[98%] max-w-[1440px] mx-auto px-0 py-4">
                {/* Breadcrumbs */}
                <div className="text-[12px] text-gray-500 mb-4 py-2">
                    <span>Home</span> / <span>Flats for Sale in Bangalore</span> / <span>Flats for Sale in Brookefield</span> / <span>2bhk Flat for Sale in Brookefield</span> / <span className="text-gray-800">Property Details</span>
                </div>

                <div className="flex gap-4 mb-6">
                    {/* Left Content */}
                    <div className="w-[65%] min-w-0">
                        <div className="mb-6">
                            <PropertyGallery imageUrl={property.imageUrl} />
                        </div>

                        <PropertyOverview property={property} />

                        {/* NoBroker Services */}
                        <NoBrokerServices />

                        <PropertyAmenities amenities={property.amenities} />

                        {/* Description Section */}
                        <PropertyDescription description={property.description} />

                        {/* Calculator & Trends */}
                        <PriceTrends />
                        <EMICalculator price={property.price} />

                        {/* Neighbourhood Section */}
                        <PropertyNeighbourhood />
                    </div>

                    {/* Right Sidebar */}
                    <div className="w-[35%] shrink-0">
                        <PropertyDetailSidebar />
                    </div>
                </div>

                {/* SEO Footer */}
                <PropertySEOFooter />
            </main>

            <ChatWidget />
        </div>
    );
}
