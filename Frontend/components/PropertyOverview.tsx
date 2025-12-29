'use client';

interface PropertyOverviewProps {
    property: {
        overview?: {
            age: string;
            maintenance: string;
            flooring: string;
            furnishing: string;
            security: string;
        };
        area: string;
        facing: string;
        parking: string;
        bhk: string;
    };
}

// Helper to get specific icons based on the label/key
const getIcon = (iconName: string) => {
    switch (iconName) {
        case 'age':
            return <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.718 2.718 0 01-3 0 2.704 2.704 0 01-1.5-.454c-.523-.302-1.046-.454-1.5-.454s-.977.151-1.5.454a2.718 2.718 0 01-3 0 2.704 2.704 0 01-1.5-.454 2.724 2.724 0 01-1.5.454c-.453.001-.976-.151-1.5-.454a2.718 2.718 0 01-3 0 2.704 2.704 0 01-1.5-.454c-.422-.328-1-.546-1.5-.546V10l3-3 3 3 3-3 3 3 3-3 3 3V15.55c.421.002.846.151 1.25.454zM7 7v3m10-3v3" /></svg>; // Cake/Building Age
        case 'user':
            return <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>; // User
        case 'maintenance':
            return <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>; // Tools/Repair (Using Edit/Pen as proxy or finding tool) - let's use a hammer/wrench if possible. Trying simple Hammer:
        case 'flooring':
            return <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>; // Grid
        case 'area':
            return <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>; // Building
        case 'furnishing':
            return <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 12V8H4v4M4 12v8m16-8v8M6 20h12" /><path d="M4 12h16v-3c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v3z" /></svg>; // Sofa/Couch basic shape
        case 'facing':
            return <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>; // Compass/Direction
        case 'floor':
            return <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5" /></svg>; // Building Floor
        case 'parking':
            return <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>; // Car/Exchange (using simple car path would be better but simple paths are complex string). Using existing car proxy or generic.
        case 'security':
            return <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>; // Shield
        default:
            return null;
    }
};

export default function PropertyOverview({ property }: PropertyOverviewProps) {
    const details = [
        { label: 'Age of Building', value: property.overview?.age || '5-10 Years', icon: 'age' },
        { label: 'Ownership Type', value: 'Self Owned', icon: 'user' },
        { label: 'Maintenance Charges', value: property.overview?.maintenance || '₹2.6 Per Sq.Ft/M', icon: 'maintenance' }, // Fixed value from screenshot
        { label: 'Flooring', value: property.overview?.flooring || 'Vitrified Tiles', icon: 'flooring' },
        { label: 'Builtup Area', value: property.area || '1,150 Sq.Ft', icon: 'area' },
        { label: 'Furnishing Status', value: property.overview?.furnishing || 'Semi', icon: 'furnishing' },
        { label: 'Facing', value: property.facing || 'West', icon: 'facing' },
        { label: 'Floor', value: '1/6', icon: 'floor' },
        { label: 'Parking', value: property.parking || 'Bike And Car', icon: 'parking' },
        { label: 'Gated Security', value: property.overview?.security || 'Yes', icon: 'security' },
    ];

    return (
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h2 className="text-[20px] font-bold text-gray-800 border-b-[3px] border-[#fd3752] pb-1 inline-block mb-8">Overview</h2>

            <div className="grid grid-cols-2 gap-x-12 gap-y-6">
                {details.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center border-b border-dotted border-gray-300 pb-3">
                        <div className="flex items-center gap-4">
                            {getIcon(item.icon)}
                            <span className="text-[14px] text-gray-500 font-normal">{item.label}</span>
                        </div>
                        <span className="text-[14px] font-semibold text-gray-700">{item.value}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
