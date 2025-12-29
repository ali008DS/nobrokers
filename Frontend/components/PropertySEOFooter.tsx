'use client';

export default function PropertySEOFooter() {
    const sections = [
        {
            title: 'Nearby Localities',
            type: 'tags',
            items: [
                '2 BHK Flats for sale in East Bangalore', '2 BHK Flats for sale in Chinnapanna Halli', '2 BHK Flats for sale in Munnekollal',
                '2 BHK Flats for sale in Karthik Nagar', '2 BHK Flats for sale in Marathahalli', '2 BHK Flats for sale in Borewell Road',
                '2 BHK Flats for sale in Kasavanahalli Village', '2 BHK Flats for sale in Doddanekundi', '2 BHK Flats for sale in Kartik Nagar',
                '2 BHK Flats for sale in Hoodi', '2 BHK Flats for sale in ITPL Main Road', '2 BHK Flats for sale in Balagere',
                '2 BHK Flats for sale in Hudi', '2 BHK Flats for sale in Whitefield Main Road', '2 BHK Flats for sale in Whitefield'
            ]
        },
        {
            title: 'People Also Searched For',
            type: 'tags',
            items: [
                '1 BHK Flats for sale in Brookefield', '3 BHK Flats for sale in Brookefield', '4 BHK Flats for sale in Brookefield',
                '1 RK Flats for sale in Brookefield', '4+ BHK Flats for sale in Brookefield', 'Villas for sale in Brookefield',
                'New Flats for Sale in Brookefield', 'Fully Furnished Flats for sale in Brookefield', 'UnFurnished Flats for sale in Brookefield'
            ]
        },
        {
            title: 'Top Localities',
            type: 'tags',
            items: [
                '2 BHK Flats for sale in BTM Layout', '2 BHK Flats for sale in Hebbal', '2 BHK Flats for sale in Koramangala',
                '2 BHK Flats for sale in BTM Layout 2nd Stage', '2 BHK Flats for sale in Rajajinagar', '2 BHK Flats for sale in Bellandur',
                '2 BHK Flats for sale in Vijayanagar', '2 BHK Flats for sale in Kadubeesanahalli', '2 BHK Flats for sale in Jayanagar',
                '2 BHK Flats for sale in Marathahalli', '2 BHK Flats for sale in Electronic City', '2 BHK Flats for sale in Whitefield'
            ]
        },
        {
            title: 'Popular projects',
            type: 'tags',
            items: [
                'Century Mirai in Marathahalli', 'Trendsquares World of Gardens in Sadaramangala', 'Vaswani Starlight in Whitefield',
                'SBR One Residence in Hope Farm', 'Codename Super Varthur in Varthur', 'Sai Raghavendras Tiara in Whitefield',
                'Brigade Avalon in Whitefield', 'Sumadhura Solace in Whitefield', 'Mahindra Blossom in Whitefield'
            ]
        }
    ];

    const cityLinks = [
        {
            title: 'Flats for Sale in Bangalore',
            links: [
                'Flats for Sale in Koramangala', 'Flats for Sale in Marathahalli', 'Flats for Sale in HSR Layout',
                'Flats for Sale in Whitefield', 'Flats for Sale in Indira Nagar', 'Flats for Sale in Bellandur',
                'Flats for Sale in Chandra Layout', 'Flats for Sale in J. P. Nagar', 'Flats for Sale in BTM Layout'
            ]
        },
        {
            title: 'Flats for Sale in Mumbai',
            links: [
                'Flats for Sale in Andheri West', 'Flats for Sale in Andheri East', 'Flats for Sale in Malad West',
                'Flats for Sale in Navi Mumbai', 'Flats for Sale in Powai', 'Flats for Sale in Thane West'
            ]
        },
        {
            title: 'Flats for Sale in Chennai',
            links: [
                'Flats for Sale in Velachery', 'Flats for Sale in Thiruvanmiyur', 'Flats for Sale in Madipakkam',
                'Flats for Sale in Thoraipakkam'
            ]
        }
    ];

    return (
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            {sections.map((section, idx) => (
                <div key={idx} className="mb-6">
                    <h3 className="font-bold text-gray-800 mb-3 text-[14px]">{section.title}</h3>
                    <div className="flex flex-wrap gap-2">
                        {section.items.map((item, i) => (
                            <span key={i} className="bg-gray-100 text-gray-600 text-[12px] px-3 py-1.5 rounded hover:bg-gray-200 cursor-pointer transition-colors">
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            ))}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10 pt-8 border-t border-gray-100">
                {cityLinks.map((city, idx) => (
                    <div key={idx}>
                        <h4 className="font-bold text-gray-800 mb-4 text-[14px]">{city.title}</h4>
                        <ul className="space-y-2">
                            {city.links.map((link, i) => (
                                <li key={i}>
                                    <a href="#" className="text-gray-500 text-[12px] hover:text-gray-800 hover:underline">{link}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}
