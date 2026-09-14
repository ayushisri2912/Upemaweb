// import React from 'react';

// const officeBearers = [
//   {
//     id: 1,
//     name: 'President Name',
//     role: 'President',
//     image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=700&q=80',
//   },
//   {
//     id: 2,
//     name: 'Vice President Name',
//     role: 'Vice President',
//     image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=700&q=80',
//   },
//   {
//     id: 3,
//     name: 'General Secretary Name',
//     role: 'General Secretary',
//     image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=700&q=80',
//   },
//   {
//     id: 4,
//     name: 'Treasurer Name',
//     role: 'Treasurer',
//     image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=700&q=80',
//   }
// ];

// const LeadershipSection = () => {
//   return (
//     // <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50/50 border-t border-slate-100">
//         <section className="relative z-20 bg-white py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-100">

//       <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
//         {/* Centered Section Header */}
//         <div className="text-center max-w-3xl mx-auto mb-14">
//         <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-amber-50 border border-amber-200/60 text-[#D49A24] text-xs sm:text-sm font-semibold tracking-wider uppercase mb-3">            
//             <span>🏛️</span>
//               <span>GOVERNING COUNCIL</span>
//           </div>

//           <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
//             UPEMA <span className="text-[#1279CF]">Office Bearers</span>
//           </h2>

//           <p className="mt-3 text-slate-600 text-sm sm:text-base">
//             Meet our dedicated team leading the event & wedding management fraternity in Uttar Pradesh
//           </p>

         
//         </div>

       


//         {/* 4 Cards Grid (Matching Reference Screenshot) */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {officeBearers.map((bearer) => (
//             <div
//               key={bearer.id}
//               className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col group hover:-translate-y-1"
//             >
//               {/* Leader Photo */}
//               <div className="w-full h-72 sm:h-80 bg-slate-100 overflow-hidden">
//                 <img
//                   src={bearer.image}
//                   alt={bearer.name}
//                   className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
//                 />
//               </div>

//               {/* Name and Role Only */}
//               <div className="p-5 text-center bg-white">
//                 <h3 className="text-lg font-bold text-slate-900 tracking-tight">
//                   {bearer.name}
//                 </h3>
//                 <p className="text-sm font-semibold text-[#1279CF] mt-1">
//                   {bearer.role}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default LeadershipSection;


// src/Components/HomeComponents/LeadershipSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

const officeBearers = [
  {
    id: 1,
    name: 'President Name',
    role: 'President',
    organization: 'UPEMA Apex Council',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 2,
    name: 'Vice President Name',
    role: 'Vice President',
    organization: 'UPEMA Apex Council',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 3,
    name: 'General Secretary Name',
    role: 'General Secretary',
    organization: 'UPEMA Secretariat',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 4,
    name: 'Treasurer Name',
    role: 'Treasurer',
    organization: 'Finance & Compliance',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=700&q=80',
  }
];

const LeadershipSection = () => {
  return (
    <section className="pt-10 sm:pt-14 pb-16 sm:pb-20 bg-white border-t border-slate-100">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/70 text-[#1279CF] text-xs sm:text-sm font-semibold tracking-wider uppercase mb-3 shadow-sm">
            <span>🏛️</span>
            <span>GOVERNING COUNCIL</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-extrabold text-slate-900 tracking-tight leading-tight">
            UPEMA <span className="text-[#1279CF]">Office Bearers</span>
          </h2>

          <p className="mt-2.5 text-slate-600 text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Meet our dedicated leadership team driving excellence, policy advocacy, and ethical standards across Uttar Pradesh.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {officeBearers.map((bearer) => (
            <div
              key={bearer.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 flex flex-col group hover:-translate-y-1"
            >
              {/* Leader Photo with Subtle Aspect Ratio */}
              <div className="relative w-full aspect-[4/5] bg-slate-100 overflow-hidden">
                <img
                  src={bearer.image}
                  alt={bearer.name}
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                />
                
                {/* Gradient Shadow Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Name & Designation Details */}
              <div className="p-5 text-center bg-white flex flex-col justify-between flex-grow border-t border-slate-100">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#1279CF] transition-colors leading-tight">
                    {bearer.name}
                  </h3>
                  
                  <p className="text-xs sm:text-sm font-bold text-[#1279CF] mt-1 uppercase tracking-wider">
                    {bearer.role}
                  </p>
                </div>

                <div className="mt-3 pt-3 border-t border-slate-100/80 text-[11px] font-medium text-slate-400">
                  {bearer.organization}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Committee CTA */}
        <div className="mt-10 text-center">
          <Link
            to="/executive-committee"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-slate-50 hover:bg-blue-50 text-[#0D3B66] hover:text-[#1279CF] text-xs sm:text-sm font-bold uppercase tracking-wider border border-slate-200 transition-all duration-200 group"
          >
            <span>View Complete Executive Board</span>
            <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default LeadershipSection;