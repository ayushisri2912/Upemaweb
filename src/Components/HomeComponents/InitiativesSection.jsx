// // import React from 'react';
// // import { FiShield, FiUsers, FiBookOpen, FiAward } from 'react-icons/fi';

// // const initiatives = [
// //   {
// //     id: 1,
// //     title: 'Standardized Safety & Labor Protocols',
// //     description:
// //       'Implementing strict electrical, structural rigging, and crowd safety benchmarks across event setups in Uttar Pradesh.',
// //     icon: FiShield,
// //   },
// //   {
// //     id: 2,
// //     title: 'Fraternity Advocacy & Single-Window Licences',
// //     description:
// //       'Representing wedding planners and event firms before government authorities for simplified event permissions and trade policies.',
// //     icon: FiAward,
// //   },
// //   {
// //     id: 3,
// //     title: 'Advanced Masterclasses & Skill Labs',
// //     description:
// //       'Continuous training workshops for sound/light engineers, stage fabricators, and wedding managers on global event tech.',
// //     icon: FiBookOpen,
// //   },
// //   {
// //     id: 4,
// //     title: 'Inter-City Vendor Collaboration Network',
// //     description:
// //       'Connecting Lucknow, Noida, Varanasi, and Agra vendors to facilitate seamless resource sharing and business expansion.',
// //     icon: FiUsers,
// //   }
// // ];

// // const InitiativesSection = () => {
// //   return (
// //     <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-100">
// //       <div className="max-w-7xl mx-auto">
        
// //         {/* Section Header */}
// //         <div className="text-center max-w-3xl mx-auto mb-16">
// //           <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-amber-50 border border-amber-200/60 text-[#D49A24] text-xs sm:text-sm font-semibold tracking-wider uppercase mb-3">
// //             <span>🤝</span>
// //             <span>OUR STRATEGIC COMMITMENT</span>
// //           </div>

// //           <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
// //             UPEMA <span className="text-[#1279CF]">Industry Initiatives</span>
// //           </h2>

// //           <p className="mt-3 text-slate-600 text-sm sm:text-base">
// //             Driving professional excellence, regulatory ease, and safety across the event and wedding landscape of Uttar Pradesh.
// //           </p>
// //         </div>

// //         {/* 4 Cards Grid with Flip & Color Transition */}
// //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
// //           {initiatives.map((item) => {
// //             const IconComponent = item.icon;
// //             return (
// //               <div
// //                 key={item.id}
// //                 className="group relative bg-white border border-slate-200/80 hover:border-[#1279CF] rounded-2xl p-7 flex flex-col items-center text-center shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 cursor-pointer"
// //               >
// //                 {/* 3D Flip Icon Wrapper */}
// //                 <div className="[perspective:1000px] mb-6">
// //                   <div className="w-16 h-16 rounded-full bg-blue-50 text-[#1279CF] group-hover:bg-[#1279CF] group-hover:text-white flex items-center justify-center shadow-inner transition-all duration-500 transform-gpu group-hover:[transform:rotateY(180deg)]">
// //                     <IconComponent className="w-7 h-7" />
// //                   </div>
// //                 </div>

// //                 {/* Card Title */}
// //                 <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-[#1279CF] transition-colors duration-200">
// //                   {item.title}
// //                 </h3>

// //                 {/* Card Description */}
// //                 <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
// //                   {item.description}
// //                 </p>

// //                 {/* Bottom Accent Bar on Hover */}
// //                 <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-[#1279CF] to-[#241c5a] rounded-full group-hover:w-50 transition-all duration-300" />
// //               </div>
// //             );
// //           })}
// //         </div>

// //       </div>
// //     </section>
// //   );
// // };

// // export default InitiativesSection;

// // src/Components/HomeComponents/InitiativesSection.jsx
// import React from 'react';
// import { 
//   FiShield, 
//   FiAward, 
//   FiBookOpen, 
//   FiUsers, 
//   FiLayers, 
//   FiMapPin 
// } from 'react-icons/fi';

// const initiatives = [
//   {
//     id: 1,
//     title: 'Standardized Safety & Rigging Protocols',
//     description:
//       'Implementing strict structural truss engineering, high-voltage electrical safety, and crowd control standards across all event venues in Uttar Pradesh.',
//     icon: FiShield,
//   },
//   {
//     id: 2,
//     title: 'Single-Window Licensing & Trade Advocacy',
//     description:
//       'Liaising with tourism, police, municipal, and fire authorities to establish transparent single-window permissions and fair industry taxation.',
//     icon: FiAward,
//   },
//   {
//     id: 3,
//     title: 'Technical Masterclasses & Skill Labs',
//     description:
//       'Conducting continuous state-certified training workshops for stage fabricators, acoustic engineers, and wedding management teams.',
//     icon: FiBookOpen,
//   },
//   {
//     id: 4,
//     title: 'Inter-City Vendor Synergy Network',
//     description:
//       'Connecting decor fabricators, sound/light rental houses, and floral suppliers across Lucknow, Noida, Varanasi, and Agra for seamless resource sharing.',
//     icon: FiUsers,
//   },
//   {
//     id: 5,
//     title: 'Heritage & Destination Wedding Promotion',
//     description:
//       'Positioning Uttar Pradesh’s royal palaces, ghats, and luxury convention arenas as preferred global destinations for luxury events.',
//     icon: FiMapPin,
//   },
//   {
//     id: 6,
//     title: 'B2B Procurement & Tender Directory',
//     description:
//       'Providing verified member listings, direct corporate leads, equipment exchange, and transparent dispute-resolution mechanisms.',
//     icon: FiLayers,
//   },
// ];

// const InitiativesSection = () => {
//   return (
//     <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F0F6FB] border-t border-blue-100/60 transition-colors duration-300">
//       <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
//         {/* Section Header (Radiance Style) */}
//         <div className="text-center max-w-3xl mx-auto mb-16">
//           <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#1279CF] block mb-2">
//             Our Commitments & Initiatives
//           </span>

//           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
//             Empowering Event Excellence in <span className="text-[#1279CF]">Uttar Pradesh</span>
//           </h2>

//           <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
//             Looking for standardized excellence? From venue safety and single-window permissions to skill development and vendor collaboration, UPEMA drives end-to-end industry advancement.
//           </p>
//         </div>

//         {/* 6-Card Grid (3 Columns on Desktop) */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8">
//           {initiatives.map((item) => {
//             const IconComponent = item.icon;
//             return (
//               <div
//                 key={item.id}
//                 className="group relative bg-[#E6F0F8]/70 hover:bg-white border border-[#D5E5F2] hover:border-transparent rounded-3xl p-8 sm:p-9 flex flex-col items-center text-center shadow-sm hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-300 hover:-translate-y-1.5 cursor-pointer"
//               >
//                 {/* 3D Flip Icon Container */}
//                 <div className="[perspective:1000px] mb-6">
//                   <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#0D3B66] text-[#F8C54E] group-hover:bg-[#1279CF] group-hover:text-white flex items-center justify-center shadow-md transition-all duration-500 transform-gpu group-hover:[transform:rotateY(180deg)]">
//                     <IconComponent className="w-8 h-8 sm:w-9 sm:h-9 transition-transform" />
//                   </div>
//                 </div>

//                 {/* Title */}
//                 <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-[#1279CF] transition-colors duration-200 mb-3 tracking-tight">
//                   {item.title}
//                 </h3>

//                 {/* Description */}
//                 <p className="text-slate-600 group-hover:text-slate-700 text-xs sm:text-sm leading-relaxed font-normal">
//                   {item.description}
//                 </p>

//                 {/* Subtle Bottom Gold Accent Dot on Hover */}
//                 <span className="w-0 h-1 bg-[#F8C54E] rounded-full mt-4 group-hover:w-8 transition-all duration-300" />
//               </div>
//             );
//           })}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default InitiativesSection;


// src/Components/HomeComponents/InitiativesSection.jsx
import React from 'react';
import { 
  FiShield, 
  FiAward, 
  FiBookOpen, 
  FiUsers, 
  FiLayers, 
  FiMapPin 
} from 'react-icons/fi';

const initiatives = [
  {
    id: 1,
    title: 'Standardized Safety & Rigging Protocols',
    description:
      'Implementing strict structural truss engineering, high-voltage electrical safety, and crowd control standards across all event venues in Uttar Pradesh.',
    icon: FiShield,
  },
  {
    id: 2,
    title: 'Single-Window Licensing & Trade Advocacy',
    description:
      'Liaising with tourism, police, municipal, and fire authorities to establish transparent single-window permissions and fair industry taxation.',
    icon: FiAward,
  },
  {
    id: 3,
    title: 'Technical Masterclasses & Skill Labs',
    description:
      'Conducting continuous state-certified training workshops for stage fabricators, acoustic engineers, and wedding management teams.',
    icon: FiBookOpen,
  },
  {
    id: 4,
    title: 'Inter-City Vendor Synergy Network',
    description:
      'Connecting decor fabricators, sound/light rental houses, and floral suppliers across Lucknow, Noida, Varanasi, and Agra for seamless resource sharing.',
    icon: FiUsers,
  },
  {
    id: 5,
    title: 'Heritage & Destination Wedding Promotion',
    description:
      'Positioning Uttar Pradesh’s royal palaces, ghats, and luxury convention arenas as preferred global destinations for luxury events.',
    icon: FiMapPin,
  },
  {
    id: 6,
    title: 'B2B Procurement & Tender Directory',
    description:
      'Providing verified member listings, direct corporate leads, equipment exchange, and transparent dispute-resolution mechanisms.',
    icon: FiLayers,
  },
];

const InitiativesSection = () => {
  return (
    <section className="pt-10 sm:pt-14 pb-16 sm:pb-20 bg-[#F0F6FB] border-t border-blue-100/60 transition-colors duration-300">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50/90 border border-blue-200/70 text-[#1279CF] text-xs font-semibold tracking-wider uppercase mb-3 shadow-sm">
            <span>🤝</span>
            <span>OUR COMMITMENTS & INITIATIVES</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-extrabold text-slate-900 tracking-tight leading-tight">
            Empowering Event Excellence in{' '}
            <span className=" text-[#1279CF]">Uttar Pradesh</span>
          </h2>

          <p className="mt-2.5 text-slate-600 text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Looking for standardized excellence? From venue safety and single-window permissions to skill development and vendor collaboration, UPEMA drives end-to-end industry advancement.
          </p>
        </div>

        {/* 6-Card Grid (3 Columns on Desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {initiatives.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className="group relative bg-[#E6F0F8]/60 hover:bg-white border border-[#D5E5F2] hover:border-blue-200/80 rounded-3xl p-7 sm:p-8 flex flex-col items-center text-center shadow-sm hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                {/* 3D Flip Icon Container */}
                <div className="[perspective:1000px] mb-5">
                  <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-[#0D3B66] text-[#F8C54E] group-hover:bg-[#1279CF] group-hover:text-white flex items-center justify-center shadow-md transition-all duration-500 transform-gpu group-hover:[transform:rotateY(180deg)]">
                    <IconComponent className="w-7 h-7 sm:w-8 sm:h-8 transition-transform" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#1279CF] transition-colors duration-200 mb-2.5 tracking-tight">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 group-hover:text-slate-700 text-xs sm:text-sm leading-relaxed font-normal">
                  {item.description}
                </p>

                {/* Subtle Bottom Gold Accent Dot/Line on Hover */}
                <span className="w-0 h-1 bg-[#D4A359] rounded-full mt-4 group-hover:w-10 transition-all duration-300" />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default InitiativesSection;