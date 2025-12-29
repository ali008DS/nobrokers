'use client';

const QuickLinksCard = () => (
  <div className="bg-white border border-gray-100 shadow-sm p-4 mb-6">
    {/* Quick Links Group */}
    <div className="mb-6">
      <h3 className="text-[14px] font-normal text-[#fd3752] mb-3">Quick links</h3>

      <h4 className="text-[13px] text-gray-700 mb-3 font-medium">People also searched for</h4>
      <ul className="space-y-2">
        {['Flats in Varthur for sale', 'Flats in Munnekollal for sale', 'Flats in Balagere for sale', 'Flats in Marathahalli for sale', 'Flats in Karthik Nagar for sale', 'Flats in Brookefield for sale'].map((item, i) => (
          <li key={i} className="flex items-start gap-2.5">
            <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-1.5 flex-shrink-0"></div>
            <a href="#" className="text-[13px] text-gray-500 hover:text-[#fd3752] leading-tight block transition-colors">{item}</a>
          </li>
        ))}
      </ul>
    </div>

    {/* New Projects Group */}
    <div className="mb-2">
      <h3 className="text-[14px] font-normal text-[#fd3752] mb-3">New Projects</h3>

      <ul className="space-y-2">
        {['New Projects in Varthur', 'New Projects in Munnekollal', 'New Projects in Balagere', 'New Projects in Marathahalli', 'New Projects in Karthik Nagar', 'New Projects in Brookefield'].map((item, i) => (
          <li key={i} className="flex items-start gap-2.5">
            <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-1.5 flex-shrink-0"></div>
            <a href="#" className="text-[13px] text-gray-500 hover:text-[#fd3752] leading-tight block transition-colors">{item}</a>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const TrendsBanner = () => (
  <div className="bg-white rounded-lg border border-gray-100 shadow-sm overflow-hidden mb-6">
    <img
      src="/nb-trends.png"
      alt="Latest Property Value Trends"
      className="w-full h-auto object-cover"
    />
  </div>
);

export default function RightSidebar() {
  return (
    <aside className="w-[220px] space-y-6">
      {/* Initial Content */}
      <QuickLinksCard />
      <TrendsBanner />

      {/* Repeating Pattern of Quick Links -> Trends Banner */}
      {Array.from({ length: 4 }).map((_, idx) => (
        <div key={idx} className="contents">
          <QuickLinksCard />
          <TrendsBanner />
        </div>
      ))}
    </aside>
  );
}
