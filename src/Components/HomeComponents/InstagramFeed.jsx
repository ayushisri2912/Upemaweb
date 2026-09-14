// import React from 'react';
// import { FiInstagram, FiHeart, FiMessageCircle, FiExternalLink } from 'react-icons/fi';
// import insta1 from "../../assets/images/insta1.jpeg";
// import insta2 from "../../assets/images/insta2.jpeg";
// import stats from "../../assets/images/stats.jpeg";


// // Yahan aap UPEMA Instagram account ke actual posts ke images aur captions laga sakte hain
// const instaPosts = [
//   {
//     id: 1,
//     image:insta1,
//     likes: '342',
//     comments: '48',
//     caption: 'Grand inauguration ceremony of UPEMA at Lucknow! Empowering UP Event Industry. 🏛️✨',
//     link: 'https://www.instagram.com/upemaofficial/'
//   },
//   {
//     id: 2,
//     image: insta2,
//     likes: '289',
//     comments: '31',
//     caption: 'State-wide masterclass on event stage rigging & electrical safety benchmarks.',
//     link: 'https://www.instagram.com/upemaofficial/'
//   },
//   {
//     id: 3,
//     image: stats,
//     likes: '415',
//     comments: '56',
//     caption: 'Purvanchal luxury wedding & floral decor exhibition at Varanasi.',
//     link: 'https://www.instagram.com/upemaofficial/'
//   },
//   {
//     id: 4,
//     image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=600&q=80',
//     likes: '520',
//     comments: '64',
//     caption: 'Executive meeting on single-window permissions and trade advocacy across UP.',
//     link: 'https://www.instagram.com/upemaofficial/'
//   }
// ];

// const InstagramFeed = () => {
//   return (
//     // <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-200/70">
//         <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F0F6FB] border-t border-blue-100/60 transition-colors duration-300">

//       <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
//         {/* Header with Profile Tag */}
//         <div className="text-center max-w-3xl mx-auto mb-12">
//           <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-blue-100/80 text-[#1279CF] border border-blue-200 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-3.5">
//             <FiInstagram className="w-4 h-4" />
//             <span>@upemaofficial</span>
//           </div>

//           <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
//             Follow Our <span className="text-[#1279CF]">Instagram Buzz</span>
//           </h2>

//           <p className="mt-2 text-slate-600 text-sm sm:text-base">
//             Catch backstage glimpses, event summits, and fraternity highlights from across Uttar Pradesh.
//           </p>

//           {/* Direct Profile Link Button */}
//           <div className="mt-6 flex justify-center">
//             <a
//               href="https://www.instagram.com/upemaofficial/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] text-white text-xs sm:text-sm font-bold uppercase tracking-wider shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
//             >
//               <FiInstagram className="w-4 h-4" />
//               <span>Follow @upemaofficial</span>
//               <FiExternalLink className="w-3.5 h-3.5" />
//             </a>
//           </div>
//         </div>

//         {/* 4-Columns Grid */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
//           {instaPosts.map((post) => (
//             <a
//               key={post.id}
//               href={post.link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="group relative aspect-square rounded-2xl overflow-hidden shadow-sm bg-slate-200 block"
//             >
//               {/* Post Picture */}
//               <img
//                 src={post.image}
//                 alt={post.caption}
//                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//               />

//               {/* Hover Dark Overlay with Stats & Icon */}
//               <div className="absolute inset-0 bg-slate-950/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-white text-center">
//                 <FiInstagram className="w-8 h-8 text-[#FCAF45] mb-3 transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-300" />
                
//                 <div className="flex items-center gap-4 text-xs font-bold mb-2">
//                   <span className="flex items-center gap-1">
//                     <FiHeart className="fill-white w-3.5 h-3.5" /> {post.likes}
//                   </span>
//                   <span className="flex items-center gap-1">
//                     <FiMessageCircle className="fill-white w-3.5 h-3.5" /> {post.comments}
//                   </span>
//                 </div>

//                 <p className="text-[11px] text-slate-200 line-clamp-2 leading-tight">
//                   {post.caption}
//                 </p>
//               </div>

//               {/* Instagram Mini Badge */}
//               <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white group-hover:opacity-0 transition-opacity">
//                 <FiInstagram className="w-3.5 h-3.5" />
//               </div>
//             </a>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default InstagramFeed;



// src/Components/HomeComponents/InstagramFeed.jsx
import React from 'react';
import { FiInstagram, FiHeart, FiMessageCircle, FiExternalLink } from 'react-icons/fi';
import insta1 from "../../assets/images/insta1.jpeg";
import insta2 from "../../assets/images/insta2.jpeg";
import stats from "../../assets/images/stats.jpeg";

const instaPosts = [
  {
    id: 1,
    image: insta1,
    likes: '342',
    comments: '48',
    caption: 'UPEMA Mega Members Meet 2026: Honoring excellence and leadership across Uttar Pradesh.',
    link: 'https://www.instagram.com/upemaofficial/'
  },
  {
    id: 2,
    image: insta2,
    likes: '289',
    comments: '31',
    caption: 'Fraternity unity on full display! State delegates gathering for technical excellence.',
    link: 'https://www.instagram.com/upemaofficial/'
  },
  {
    id: 3,
    image: stats,
    likes: '415',
    comments: '56',
    caption: 'Uttar Pradesh Level Dialogue & Expansion Meeting with key wedding industry stakeholders.',
    link: 'https://www.instagram.com/upemaofficial/'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=700&q=80',
    likes: '520',
    comments: '64',
    caption: 'Executive meeting on single-window permissions and trade advocacy across UP.',
    link: 'https://www.instagram.com/upemaofficial/'
  }
];

const InstagramFeed = () => {
  return (
    <section className="pt-10 sm:pt-14 pb-16 sm:pb-20 bg-white border-t border-slate-100">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Row (Two-column layout matching site theme) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-pink-50 border border-pink-200/80 text-[#E1306C] text-xs font-semibold tracking-wider uppercase mb-3 shadow-sm">
              <FiInstagram className="w-4 h-4" />
              <span>@upemaofficial</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-extrabold text-slate-900 tracking-tight leading-tight">
              Follow Our <span className="text-[#1279CF]">Instagram Buzz</span>
            </h2>

            <p className="mt-2 text-slate-600 text-xs sm:text-sm md:text-base max-w-xl leading-relaxed">
              Catch backstage glimpses, event summits, and fraternity highlights from across Uttar Pradesh.
            </p>
          </div>

          {/* Follow Button */}
          <a
            href="https://www.instagram.com/upemaofficial/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] text-white text-xs sm:text-sm font-bold uppercase tracking-wider shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 self-start md:self-auto"
          >
            <FiInstagram className="w-4 h-4" />
            <span>Follow @upemaofficial</span>
            <FiExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* 4-Card Instagram Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {instaPosts.map((post) => (
            <a
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-2xl overflow-hidden bg-slate-900 shadow-sm hover:shadow-xl border border-slate-200/90 transition-all duration-300 hover:-translate-y-1 block aspect-[4/5]"
            >
              {/* Post Picture */}
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Instagram Floating Icon in Top Right */}
              <div className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white border border-white/20 group-hover:opacity-0 transition-opacity duration-200">
                <FiInstagram className="w-4 h-4" />
              </div>

              {/* Hover Dark Overlay with Stats & Caption */}
              <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-white text-center">
                <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-[#FCAF45] mb-3 transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <FiInstagram className="w-6 h-6" />
                </div>
                
                {/* Likes & Comments Count */}
                <div className="flex items-center gap-4 text-xs font-bold mb-3 text-slate-200">
                  <span className="flex items-center gap-1.5">
                    <FiHeart className="fill-red-500 text-red-500 w-4 h-4" /> {post.likes}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <FiMessageCircle className="fill-white w-4 h-4" /> {post.comments}
                  </span>
                </div>

                {/* Caption Snippet */}
                <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed font-normal">
                  {post.caption}
                </p>

                {/* Bottom View Prompt */}
                <span className="mt-4 text-[11px] font-bold text-[#F8C54E] uppercase tracking-wider flex items-center gap-1">
                  View on Instagram <FiExternalLink className="w-3 h-3" />
                </span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default InstagramFeed;