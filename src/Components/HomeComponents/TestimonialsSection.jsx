// src/Components/HomeComponents/TestimonialsSection.jsx
import React from 'react';
import { FiStar, FiCheckCircle } from 'react-icons/fi';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    quote:
      'Joining UPEMA gave our Lucknow wedding planning firm direct access to certified sound and stage fabricators across Noida and Varanasi. The single-window government advocacy has solved major licensing roadblocks for our large-scale destination events.',
    name: 'Anurag Srivastava',
    role: 'Founder & Director',
    company: 'Awadh Imperial Weddings',
    city: 'Lucknow',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    rating: 5,
  },
  {
    id: 2,
    quote:
      'The technical rigging and monsoon safety masterclasses conducted by UPEMA standardise our ground production. Our clients now trust us even more because we follow officially certified safety protocols.',
    name: 'Priyanka Verma',
    role: 'Managing Partner',
    company: 'Varanasi Lights & Acoustic Kraft',
    city: 'Varanasi',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
    rating: 5,
  },
  {
    id: 3,
    quote:
      'UPEMA is not just an association; it is a true trade union that protects local event entrepreneurs. The inter-city vendor directory alone has brought us over 20+ corporate exhibition inquiries this year.',
    name: 'Vikramaditya Chauhan',
    role: 'Chief Executive',
    company: 'Royal Canvas Decor & Expos',
    city: 'Noida',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F0F6FB] border-t border-blue-100/60 relative overflow-hidden">
      
      {/* Decorative Subtle Background Shapes */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-blue-100/80 text-[#1279CF] border border-blue-200 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-3.5">
            <span>💬</span>
            <span>VOICES OF THE FRATERNITY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            What Our <span className="text-[#1279CF]">Members Say</span>
          </h2>

          <p className="mt-3 text-slate-600 text-sm sm:text-base md:text-lg">
            Hear from leading wedding planners, technical engineers, and decor pioneers thriving with the UPEMA network.
          </p>
        </div>

        {/* 3-Cards Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-8 sm:p-9 shadow-sm hover:shadow-xl border border-slate-200/80 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 relative"
            >
              {/* Quote Icon */}
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#1279CF] group-hover:bg-[#0D3B66] group-hover:text-[#F8C54E] flex items-center justify-center mb-6 transition-colors duration-300">
                <FaQuoteLeft className="w-5 h-5" />
              </div>

              {/* Star Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(item.rating)].map((_, i) => (
                  <FiStar key={i} className="w-4 h-4 fill-[#F8C54E] text-[#F8C54E]" />
                ))}
              </div>

              {/* Quote Body */}
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic mb-8 flex-grow">
                "{item.quote}"
              </p>

              {/* Author / Member Profile */}
              <div className="pt-6 border-t border-slate-100 flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-13 h-13 rounded-full object-cover border-2 border-[#1279CF] shadow-sm"
                />

                <div className="flex-grow">
                  <div className="flex items-center gap-1.5">
                    <h4 className="text-sm sm:text-base font-bold text-slate-900 leading-tight">
                      {item.name}
                    </h4>
                    <FiCheckCircle className="w-4 h-4 text-[#1279CF]" title="Verified Member" />
                  </div>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">
                    {item.role}, <span className="text-[#0D3B66] font-semibold">{item.company}</span>
                  </p>
                  <span className="inline-block mt-1 text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
                    📍 {item.city}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;