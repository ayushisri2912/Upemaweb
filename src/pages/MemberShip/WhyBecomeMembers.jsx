// src/pages/Membership/WhyBecomeMember.jsx
import React, { useState } from 'react';
import {
  FiAward,
  FiShield,
  FiUsers,
  FiTrendingUp,
  FiCheckCircle,
  FiFileText,
  FiBookOpen,
  FiArrowRight,
  FiChevronDown,
  FiStar,
  FiCheck,
  FiBriefcase,
  FiGlobe,
  FiDollarSign,
  FiMic,
  FiZap,
  FiTarget
} from 'react-icons/fi';
import { Link } from 'react-router-dom';
import CTASection from '../../Components/HomeComponents/CTASection';

/* ---------------- 10 EXCLUSIVE BENEFITS (from PDF) ---------------- */

const coreAdvantages = [
  {
    icon: FiBriefcase,
    title: 'Business Opportunities Among Members',
    desc: 'Business leads and projects are shared first within the UPEMA network. Get access to verified vendors, clients, and service providers across multiple event categories, plus opportunities to collaborate on large-scale government, corporate, and private events.',
  },
  {
    icon: FiUsers,
    title: 'Networking & Collaboration Platform',
    desc: 'Regular meet-ups, mixers, and conferences to connect with industry professionals. Collaborate with planners, decorators, production houses, artists, and suppliers — and build long-term business alliances with top names in the event industry.',
  },
  {
    icon: FiBookOpen,
    title: 'Workshops, Training & Skill Development',
    desc: 'Exclusive access to industry-specific workshops on event design & decor trends, lighting, sound & stage setup, client servicing & budgeting, safety protocols & event licensing, and digital marketing. Learn directly from industry experts and celebrity planners — with UPEMA-certified recognition.',
  },
  {
    icon: FiAward,
    title: 'Professional Recognition & Credibility',
    desc: 'Use the UPEMA Member Seal on your branding and proposals for instant credibility. Get official listing in the UPEMA Member Directory shared with corporate clients, hotels, and government bodies, plus recognition at UPEMA events and annual awards.',
  },
  {
    icon: FiFileText,
    title: 'Access to Tenders & Government Projects',
    desc: 'Priority updates on government, PSU, and institutional event tenders. Receive guidance on registration, documentation, and compliance for official projects to help you win high-value contracts.',
  },
  {
    icon: FiTrendingUp,
    title: 'Business Development Support',
    desc: 'Connect with potential clients, exhibitors, and sponsors through UPEMA\'s network. Benefit from business referrals and lead sharing among members, plus joint participation in expos, trade fairs, and festivals organized or supported by UPEMA.',
  },
  {
    icon: FiGlobe,
    title: 'Brand Visibility & Marketing Promotion',
    desc: 'Get featured on UPEMA\'s website, newsletters, and social media pages. Showcase your work in UPEMA exhibitions, awards, and roadshows — and boost brand trust as part of a reputed state-level industry association.',
  },
  {
    icon: FiShield,
    title: 'Industry Representation & Advocacy',
    desc: 'UPEMA acts as the official voice of the event industry in Uttar Pradesh. Get representation in front of local authorities and trade boards to protect member interests, plus dedicated support during crises, policy changes, or operational challenges.',
  },
  {
    icon: FiDollarSign,
    title: 'Exclusive Member Discounts',
    desc: 'Enjoy discounted rates on event rentals, fabrication, branding materials, and partner services. Special pricing for participation in expos, workshops, and training sessions organized by UPEMA.',
  },
  {
    icon: FiZap,
    title: 'Knowledge Exchange & Industry Updates',
    desc: 'Access regular updates on event regulations, new technology, and emerging trends. Receive monthly newsletters, resource sharing among members, and access to online discussion forums to share queries and ideas.',
  },
];

/* ---------------- WHO CAN JOIN (from PDF) ---------------- */

const whoCanJoinList = [
  'Event Planners',
  'Production Houses',
  'Fabricators',
  'Decorators',
  'Caterers',
  'Venues',
  'Artists',
  'Sound & Light Vendors',
  'Rental Companies',
  'Wedding Planners',
  'Corporate Event Managers',
  'Freelancers',
];

/* ---------------- MEMBERSHIP TIERS ---------------- */

const tiers = [
  {
    name: 'Associate / Vendor Member',
    badge: 'Fabricators & Tech',
    forWhom: 'Sound, lighting, truss fabricators, decorators, florists & rental houses.',
    features: [
      'Official Directory Listing',
      'Technical Safety Masterclasses',
      'Zonal Vendor Networking Meets',
      'Standardized Contract Templates',
    ],
    popular: false,
  },
  {
    name: 'Corporate Event Agency',
    badge: 'Most Popular',
    forWhom: 'Established event planning agencies, experiential firms & production houses.',
    features: [
      'Priority Single-Window Liaison',
      'Government Tender Recommendations',
      'Legal & Payment Dispute Cell',
      'Annual Royal Conclave VIP Passes',
      'Voting Rights in Biennial Elections',
    ],
    popular: true,
  },
  {
    name: 'Institutional / Venue Partner',
    badge: 'Hotels & Venues',
    forWhom: 'Heritage palaces, luxury convention resorts, lawns, and banquet properties.',
    features: [
      'Exclusive Venue Directory Feature',
      'Direct Access to 300+ Planners',
      'Joint Tourism Promotion Board',
      'Advisory Council Representation',
    ],
    popular: false,
  },
];

/* ---------------- ONBOARDING STEPS ---------------- */

const steps = [
  { step: '01', title: 'Submit Application', desc: 'Fill the online membership portal with GST, portfolio & district registration details.' },
  { step: '02', title: 'Document Verification', desc: 'UPEMA Scrutiny Committee verifies track record and trade credentials.' },
  { step: '03', title: 'Council Approval', desc: 'Zonal Secretariat reviews and approves membership formal admission.' },
  { step: '04', title: 'Certificate Issuance', desc: 'Receive your verified UPEMA Seal, official ID badge, and directory live link.' },
];

/* ---------------- FAQS ---------------- */

const faqs = [
  {
    q: 'Who is eligible to apply for UPEMA Membership?',
    a: 'Any registered business entity operating in event planning, wedding management, sound/light production, venue hospitality, catering, or decor fabrication in Uttar Pradesh with valid GST/MSME credentials. This includes event planners, production houses, fabricators, decorators, caterers, venues, artists, sound & light vendors, rental companies, wedding planners, corporate event managers, and freelancers.',
  },
  {
    q: 'How does the single-window clearance support work?',
    a: 'UPEMA office bearers act as the apex liaison desk to expedite police, fire, noise, and municipal permissions for large-scale conclaves and weddings across the state.',
  },
  {
    q: 'How long does the verification process take?',
    a: 'The initial documentation review is completed within 3 to 5 business days, followed by the formal issuance of your verified trade certificate.',
  },
  {
    q: 'What kind of business leads will I receive as a member?',
    a: 'Business leads and projects are shared first within the UPEMA network. You get access to verified vendors, clients, and service providers across multiple event categories, plus opportunities to collaborate on large-scale government, corporate, and private events.',
  },
  {
    q: 'Can I use the UPEMA Member Seal on my proposals?',
    a: 'Yes. Members can use the UPEMA Member Seal on their branding and proposals for instant credibility, and also receive an official listing in the UPEMA Member Directory shared with corporate clients, hotels, and government bodies.',
  },
  {
    q: 'What kind of workshops and training do members get?',
    a: 'Exclusive access to industry-specific workshops on event design & decor trends, lighting, sound & stage setup, client servicing & budgeting, safety protocols & event licensing, and digital marketing for event businesses. Members receive certificates and recognition for attending UPEMA-certified programs.',
  },
  {
    q: 'Do I get discounts on event rentals and services?',
    a: 'Yes. UPEMA members enjoy discounted rates on event rentals, fabrication, branding materials, and partner services, along with special pricing for participation in expos, workshops, and training sessions.',
  },
];

const WhyBecomeMembers = () => {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="bg-slate-50 font-sans min-h-screen text-slate-900 selection:bg-[#D4A359] selection:text-white">

      {/* 1. Uniform Hero Banner (Matching Navy & Gold Theme) */}
      <section
        className="relative bg-[#071322] border-b border-[#0D3B66]/60 pt-20 pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden text-white font-[Poppins]"
        style={{
          backgroundImage: 'radial-gradient(ellipse at top center, #0F2D4E 0%, #081B2B 55%, #050E18 100%)',
        }}
      >
        <div
          className="absolute inset-0 opacity-15 bg-cover bg-center pointer-events-none mix-blend-luminosity"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1900&q=80')",
          }}
        />

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-[#C9A45C]/12 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute -bottom-10 right-10 w-96 h-96 bg-[#1279CF]/15 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">

          <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-[#FAF8F2] border border-[#E7E0D3] text-[#081A2B] text-xs font-bold uppercase tracking-widest mb-7 shadow-lg">
            <span className="text-[#C9A45C] text-sm">🏛️</span>
            <span className="tracking-[0.15em] text-[10px] sm:text-xs">
              UNITING THE EVENT INDUSTRY
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-[62px] font-extrabold tracking-tight leading-[1.18] mb-5">
            <span className="bg-gradient-to-r from-[#FFEBB0] via-[#DDB063] to-[#C99846] bg-clip-text text-transparent drop-shadow-sm">
              Why Become a
            </span>{' '}
            <span className="font-serif italic font-bold bg-gradient-to-r from-[#FFEBB0] via-[#E2B768] to-[#C99846] bg-clip-text text-transparent">
              Member?
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-slate-300 text-xs sm:text-sm md:text-base font-normal leading-relaxed mb-12">
            Joining UPEMA means being part of a recognized, professional body that connects the entire event ecosystem of Uttar Pradesh. From business networking to learning opportunities, UPEMA ensures that its members grow professionally, financially, and collectively.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <div className="flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-[#0F2742]/70 hover:bg-[#0F2742]/90 backdrop-blur-md border border-[#C9A45C]/40 shadow-[0_4px_20px_rgba(0,0,0,0.35)] transition-all">
              <span className="w-3.5 h-3.5 rounded-full bg-gradient-to-br from-[#FFE4A0] to-[#C9A45C] shadow-sm" />
              <span className="text-white text-xs sm:text-sm font-bold tracking-wide">
                Business Opportunities Among Members
              </span>
            </div>

            <div className="flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-[#0F2742]/70 hover:bg-[#0F2742]/90 backdrop-blur-md border border-[#C9A45C]/40 shadow-[0_4px_20px_rgba(0,0,0,0.35)] transition-all">
              <span className="w-3.5 h-3.5 rounded-full bg-gradient-to-br from-[#FFE4A0] to-[#C9A45C] shadow-sm" />
              <span className="text-white text-xs sm:text-sm font-bold tracking-wide">
                Industry Representation & Advocacy
              </span>
            </div>

            <div className="flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-[#0F2742]/70 hover:bg-[#0F2742]/90 backdrop-blur-md border border-[#C9A45C]/40 shadow-[0_4px_20px_rgba(0,0,0,0.35)] transition-all">
              <span className="w-3.5 h-3.5 rounded-full bg-gradient-to-br from-[#FFE4A0] to-[#C9A45C] shadow-sm" />
              <span className="text-white text-xs sm:text-sm font-bold tracking-wide">
                Professional Recognition & Credibility
              </span>
            </div>
          </div>

        </div>

        <div className="absolute -bottom-8 right-16 text-white/20 text-5xl pointer-events-none select-none">
          ✦
        </div>
      </section>

      {/* 2. 10 Exclusive Member Benefits */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#1279CF] text-xs font-semibold tracking-wider uppercase mb-3 shadow-sm">
              <FiStar className="w-3.5 h-3.5" />
              <span>EXCLUSIVE MEMBER BENEFITS</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0D2238] tracking-tight leading-tight">
              Ten Ways UPEMA <br />
              <span className="text-[#1279CF]">Empowers Your Enterprise</span>
            </h2>

            <p className="mt-3 text-slate-600 text-xs sm:text-sm md:text-base">
              From business leads to skill development, advocacy to exclusive discounts — explore the concrete advantages of joining Uttar Pradesh's apex event industry body.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreAdvantages.map((adv, idx) => {
              const Icon = adv.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#FAF8F2] rounded-3xl p-8 border border-[#E7E0D3] shadow-sm hover:shadow-xl hover:border-[#C9A45C] transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between relative"
                >
                  <span className="absolute top-6 right-6 text-[10px] font-bold text-slate-400 tracking-widest">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <div className="w-13 h-13 rounded-2xl bg-white text-[#0D2238] border border-[#E7E0D3] group-hover:bg-[#0D2238] group-hover:text-[#D4A359] flex items-center justify-center text-2xl mb-6 shadow-sm transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-[#0D2238] group-hover:text-[#1279CF] transition-colors mb-3">
                      {adv.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {adv.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 3. Who Can Join */}
      <section className="py-20 sm:py-24 bg-[#F0F6FB] border-t border-blue-100/60">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#1279CF] text-xs font-semibold tracking-wider uppercase mb-3 shadow-sm">
              <FiTarget className="w-3.5 h-3.5" />
              <span>WHO CAN JOIN</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0D2238] tracking-tight leading-tight">
              Built for Every <span className="text-[#1279CF]">Event Industry Professional</span>
            </h2>

            <p className="mt-2 text-slate-600 text-xs sm:text-sm md:text-base">
              UPEMA welcomes professionals across the entire event value chain in Uttar Pradesh.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
            {whoCanJoinList.map((role, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white border border-[#D5E5F2] text-[#0D2238] text-xs sm:text-sm font-semibold shadow-sm hover:border-[#C9A45C] hover:shadow-md transition-all"
              >
                <FiCheck className="w-3.5 h-3.5 text-[#1279CF]" />
                {role}
              </span>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Membership Categories / Tiers */}
      <section className="py-20 sm:py-24 bg-white border-t border-slate-100">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-[#9E7A32] text-xs font-semibold tracking-wider uppercase mb-3 shadow-sm">
              <FiAward className="w-3.5 h-3.5" />
              <span>MEMBERSHIP TIERS</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0D2238] tracking-tight leading-tight">
              Select Your <span className="text-[#1279CF]">Fraternity Category</span>
            </h2>

            <p className="mt-2 text-slate-600 text-xs sm:text-sm md:text-base">
              Tailored accreditation tracks for wedding agencies, technical fabricators, and luxury venues.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {tiers.map((t, idx) => (
              <div
                key={idx}
                className={`relative rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 ${
                  t.popular
                    ? 'bg-[#0D2238] text-white shadow-2xl lg:scale-105 border-2 border-[#C9A45C]'
                    : 'bg-white text-slate-900 border border-[#D5E5F2] shadow-md hover:shadow-xl'
                }`}
              >
                {t.popular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#D4A359] to-[#C2934A] text-[#071322] text-[10px] font-extrabold px-4 py-1 rounded-full uppercase tracking-wider shadow-md">
                    {t.badge}
                  </span>
                )}

                <div>
                  {!t.popular && (
                    <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-[#1279CF] text-[10px] font-bold uppercase tracking-wider mb-4">
                      {t.badge}
                    </span>
                  )}

                  <h3 className={`text-xl sm:text-2xl font-extrabold ${t.popular ? 'text-white' : 'text-[#0D2238]'}`}>
                    {t.name}
                  </h3>

                  <p className={`text-xs mt-2 leading-relaxed ${t.popular ? 'text-slate-300' : 'text-slate-500'}`}>
                    {t.forWhom}
                  </p>

                  <div className="my-6 border-t border-slate-200/20" />

                  <div className="space-y-3">
                    {t.features.map((f, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm">
                        <FiCheck className={`w-4 h-4 flex-shrink-0 ${t.popular ? 'text-[#D4A359]' : 'text-[#1279CF]'}`} />
                        <span className={t.popular ? 'text-slate-200' : 'text-slate-700'}>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6">
                  <Link
                    to="/register"
                    state={{ tier: t.name }}
                    className={`w-full py-3.5 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                      t.popular
                        ? 'bg-gradient-to-r from-[#D4A359] to-[#C2934A] hover:from-[#e2b56e] hover:to-[#b5833b] text-[#071322] shadow-lg shadow-amber-500/25'
                        : 'bg-[#0D2238] hover:bg-[#1279CF] text-white shadow-md'
                    }`}
                  >
                    <span>Apply for Membership</span>
                    <FiArrowRight className="w-4 h-4" />
                  </Link>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Simple 4-Step Onboarding Process */}
      <section className="py-20 sm:py-24 bg-[#F0F6FB] border-t border-blue-100/60">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#1279CF] text-xs font-semibold tracking-wider uppercase mb-3">
              <FiCheckCircle className="w-3.5 h-3.5" />
              <span>ONBOARDING ROADMAP</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0D2238] tracking-tight leading-tight">
              4 Steps to Obtain Your <span className="text-[#1279CF]">UPEMA Accreditation</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, idx) => (
              <div
                key={idx}
                className="bg-white p-7 rounded-2xl border border-[#D5E5F2] shadow-sm relative group hover:border-[#1279CF]/50 transition-all"
              >
                <span className="text-3xl font-black text-[#D4A359] block mb-3 font-serif">
                  {s.step}
                </span>
                <h4 className="text-base font-bold text-[#0D2238] mb-2">
                  {s.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. Frequently Asked Questions Accordion */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto">

          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#1279CF] text-xs font-semibold tracking-wider uppercase mb-3">
              <FiMic className="w-3.5 h-3.5" />
              <span>FAQ</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0D2238]">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Everything you need to know regarding membership norms and benefits.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-[#F0F6FB] rounded-2xl border border-[#D5E5F2] overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 cursor-pointer font-bold text-sm sm:text-base text-[#0D2238]"
                >
                  <span>{faq.q}</span>
                  <FiChevronDown
                    className={`w-5 h-5 text-[#1279CF] transition-transform duration-300 flex-shrink-0 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 border-t border-slate-200/70 leading-relaxed font-normal bg-white">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. Contact / Closing Line */}
      <section className="py-10 sm:py-12 bg-[#F0F6FB] border-t border-blue-100/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            <span className="font-bold text-[#0D2238]">UPEMA — Together, We Create Opportunities.</span>{' '}
            Join today and be part of Uttar Pradesh's most dynamic community of event professionals. Grow your network, upskill your team, and multiply your business through collaboration over competition.
          </p>
          <p className="mt-4 text-xs sm:text-sm text-slate-500">
            For Membership Enquiries:{' '}
            <a href="mailto:registration.upema@gmail.com" className="text-[#1279CF] font-semibold hover:underline">
              registration.upema@gmail.com
            </a>{' '}
            |{' '}
            <a href="tel:9250000210" className="text-[#1279CF] font-semibold hover:underline">
              9250000210
            </a>
          </p>
        </div>
      </section>

      {/* 8. Bottom CTA Section */}
      <CTASection />

    </div>
  );
};

export default WhyBecomeMembers;