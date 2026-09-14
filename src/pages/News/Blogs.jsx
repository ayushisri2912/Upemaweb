import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Swal from "sweetalert2";
import {
  FiCalendar,
  FiClock,
  FiX,
  FiCheckCircle,
  FiArrowRight,
  FiUser,
  FiMail
} from "react-icons/fi";

const categories = [
  "All",
  "Industry Insights",
  "Event Stories",
  "UPEMA Updates",
  "Trends",
  "Expert Opinions",
];

const blogs = [
  {
    id: 1,
    category: "Event Stories",
    title: "Why Destination Weddings Are the Next Big Thing",
    description:
      "From breathtaking locations to unique experiences, destination weddings are redefining how we celebrate love across Uttar Pradesh.",
    date: "10 September 2026",
    readTime: "4 min read",
    author: "UPEMA Editorial Team",
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1000&q=85",
    fullContent: `
      Destination weddings have evolved from simple weekend getaways into meticulously curated multi-day cultural immersions.

      In cities like Varanasi, Agra, and Prayagraj, planners are weaving classical Shehnai recitals, authentic Awadhi banquets, and grand Ganga Aarti backdrops into wedding itineraries.

      UPEMA's accredited wedding planners are bridging the gap between local artisans, municipal permissions, and world-class luxury production standards, ensuring every guest experiences the rich heritage of Uttar Pradesh seamlessly.
    `,
    highlights: [
      "Bespoke cultural integrations with local artisanal crafts and live heritage performances.",
      "Dedicated logistics coordination for high-profile guest transfers and hotel blocks.",
      "Access to verified UPEMA decorators, light designers, and security personnel."
    ],
    relatedPage: "/member-directory",
    relatedLabel: "View Verified Member Directory"
  },
  {
    id: 2,
    category: "Industry Insights",
    title: "The Role of Technology in Modern Events",
    description:
      "From virtual platforms to AI-driven planning, technology is transforming the way events are designed and experienced.",
    date: "08 September 2026",
    readTime: "3 min read",
    author: "Tech & Innovation Cell",
    image:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1000&q=85",
    fullContent: `
      Technology is now the cornerstone of modern event execution. From 3D stage pre-visualization to automated RFID registration desks, technology streamlines management.

      Drone light shows and synchronized kinetic lighting are redefining stage aesthetics while eliminating fire hazards and noise pollution.
    `,
    highlights: [
      "Drone show integration for eco-friendly, spectacular celebrations.",
      "3D spatial mapping allowing clients to preview decor setups beforehand.",
      "Automated guest accreditation systems reducing queue times."
    ],
    relatedPage: "/events/upcoming",
    relatedLabel: "Explore Upcoming Events"
  },
  {
    id: 3,
    category: "UPEMA Updates",
    title: "UPEMA Hosts Successful Annual Meet 2026",
    description:
      "The event brought together industry leaders, members and partners to discuss growth, collaboration and future opportunities.",
    date: "04 September 2026",
    readTime: "5 min read",
    author: "UPEMA Secretariat",
    image:
      "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=1000&q=85",
    fullContent: `
      The UPEMA Annual Meet 2026 convened in Lucknow, marking a historic gathering of 350+ certified event professionals across Uttar Pradesh.

      Key resolutions included the adoption of standardized client-vendor contracts, the establishment of a Zonal Payment Dispute Settlement Cell, and specialized training programs for event safety.
    `,
    highlights: [
      "350+ certified agency heads, venue owners, and technical vendors present.",
      "Rollout of UPEMA Zonal Arbitration Desk for payment disputes.",
      "Announcement of certified masterclasses in rigging and stage safety."
    ],
    relatedPage: "/executive-committee",
    relatedLabel: "View Executive Committee"
  },
  {
    id: 4,
    category: "Trends",
    title: "Emerging Trends Shaping India's Event Industry",
    description:
      "Discover the trends that are influencing event experiences and setting new standards across the industry.",
    date: "01 September 2026",
    readTime: "4 min read",
    author: "Trends Research Desk",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1000&q=85",
    fullContent: `
      Contemporary event aesthetics have shifted decisively toward thoughtful minimalism, authentic craftsmanship, and architectural lighting.

      Locally sourced brass accents, terracotta installations, and sustainable handloom fabrics are now central to luxury wedding decor in North India.
    `,
    highlights: [
      "Shift towards zero-single-use-plastic decor setups.",
      "Incorporation of traditional UP handicrafts in luxury sets.",
      "Kinetic moving lights and laser projection mapping."
    ],
    relatedPage: "/events/gallery",
    relatedLabel: "Browse Photo Gallery"
  },
  {
    id: 5,
    category: "Expert Opinions",
    title: "Building Meaningful Event Experiences",
    description:
      "Industry experts share their perspectives on creating memorable, engaging and meaningful experiences.",
    date: "28 August 2026",
    readTime: "4 min read",
    author: "Advisory Council",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1000&q=85",
    fullContent: `
      Managing 10,000+ attendee gatherings requires precision planning, multi-agency communication, and continuous contingency readiness.

      Structural layout design — wide egress corridors, dedicated VIP security rings, and redundant power systems — ensure seamless execution.
    `,
    highlights: [
      "Pre-event crowd simulation modeling for high-footfall events.",
      "Dual-line safety backups on all overhead rigging equipment.",
      "Dedicated emergency response teams on-site."
    ],
    relatedPage: "/news/circulars",
    relatedLabel: "View Safety Circulars"
  },
  {
    id: 6,
    category: "Industry Insights",
    title: "The Future of Professional Event Management",
    description:
      "A closer look at how professionalism, technology and collaboration are shaping the future of events.",
    date: "24 August 2026",
    readTime: "3 min read",
    author: "Trade Affairs Desk",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=85",
    fullContent: `
      The transition from unorganized event planning to formalized agency management is creating immense value for business owners in Uttar Pradesh.

      Agencies adopting formal GST billing, standardized insurance coverage, and UPEMA member seals enjoy higher credibility with corporate clients and government bodies.
    `,
    highlights: [
      "Standardized bidding norms and escrow-secured payment milestones.",
      "UPEMA member seal establishing verified trade trust.",
      "Inter-agency resource sharing for high-demand wedding dates."
    ],
    relatedPage: "/membership/why-become-member",
    relatedLabel: "Learn Member Benefits"
  },
];

const featuredArticleData = {
  id: "featured-1",
  category: "Industry Insights",
  title: "The Future of Event Management in India",
  description:
    "As India's event industry continues to grow, innovation, technology and creativity are shaping the next generation of experiences. Explore the key trends, challenges and opportunities defining the future of event management.",
  date: "12 September 2026",
  readTime: "5 min read",
  author: "UPEMA Team",
  image:
    "https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=1400&q=85",
  fullContent: `
    Uttar Pradesh is undergoing a profound cultural and economic renaissance in luxury hospitality and experiential events. With state-of-the-art expressway connectivity, airport expansions in Jewar and Ayodhya, and single-window NOC approvals, UP has unlocked high-yield destination weddings.

    ### 1. The Rise of Heritage Palace & Riverfront Venues
    Agra, Varanasi, Ayodhya, and Lucknow have recorded a remarkable 35% year-on-year surge in royal wedding bookings. High-net-worth families are choosing authentic heritage architectures and riverfront setups.

    ### 2. Standardizing High-Load Stage & Rigging Safety
    As production scales grow, UPEMA's Technical Cell is rolling out compulsory structural audits for outdoor German truss stages, ensuring safety during extreme weather.

    ### 3. Sustainable & Zero-Waste Event Frameworks
    Through joint initiatives with municipal corporations and FSSAI, UPEMA member caterers are pioneering eco-friendly buffet models and surplus food redistribution.
  `,
  highlights: [
    "35% YoY increase in luxury destination wedding bookings across UP heritage hubs.",
    "Implementation of UPEMA single-window clearance protocol across 25 districts.",
    "Mandatory safety audits for outdoor staging and sound curfew compliance.",
    "Creation of over 50,000 seasonal jobs in floral, decor, sound, and hospitality."
  ],
  relatedPage: "/membership",
  relatedLabel: "Apply for UPEMA Membership"
};

const popularReads = [
  {
    number: "01",
    id: 2,
    title: "How Technology is Changing Modern Events",
    date: "05 Sep 2026",
    category: "Industry Insights",
    image:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=500&q=80",
  },
  {
    number: "02",
    id: 1,
    title: "Building Better Event Experiences",
    date: "29 Aug 2026",
    category: "Event Stories",
    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=500&q=80",
  },
  {
    number: "03",
    id: 4,
    title: "Future Trends in Event Management",
    date: "21 Aug 2026",
    category: "Trends",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=500&q=80",
  },
];

const Blogs = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeModalArticle, setActiveModalArticle] = useState(null);
  const [emailInput, setEmailInput] = useState("");

  const storiesRef = useRef(null);

  const filteredBlogs =
    activeCategory === "All"
      ? blogs
      : blogs.filter((blog) => blog.category === activeCategory);

  const openArticleModal = (article) => {
    setActiveModalArticle(article);
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    if (storiesRef.current) {
      storiesRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!emailInput || !emailInput.includes("@")) {
      Swal.fire({
        icon: "warning",
        title: "Please enter a valid email",
        text: "Please provide a valid email address to subscribe to the UPEMA Journal.",
        confirmButtonColor: "#C9A45C",
      });
      return;
    }

    Swal.fire({
      icon: "success",
      title: "Subscribed Successfully!",
      text: `Thank you for subscribing with ${emailInput}. You will receive UPEMA Journal updates in your inbox.`,
      confirmButtonColor: "#081A2B",
    });

    setEmailInput("");
  };

  return (
    <main className="bg-[#FAF8F2] text-[#172333] font-sans selection:bg-[#C9A45C] selection:text-[#081A2B]">

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative min-h-[430px] md:min-h-[480px] flex items-center overflow-hidden bg-[#081A2B]">

        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=2000&q=85"
          alt="UPEMA Events"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#081A2B] via-[#0F2742]/95 to-[#0F2742]/40" />

        {/* Decorative Gold Line */}
        <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#C9A45C]" />

        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-10 lg:px-16 pt-20">

          <div className="max-w-3xl">

            <span className="inline-block text-[#D9B873] text-sm md:text-base tracking-[0.3em] uppercase font-semibold mb-5">
              UPEMA Journal
            </span>

            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white leading-[1.05] mb-6">
              Blogs &{" "}
              <span className="italic text-[#D9B873]">
                Articles
              </span>
            </h1>

            <div className="w-20 h-[2px] bg-[#C9A45C] mb-6" />

            <p className="text-white/80 text-base md:text-lg max-w-xl leading-8">
              Discover stories, ideas and insights shaping the event
              management industry across Uttar Pradesh and beyond.
            </p>

          </div>

          {/* Breadcrumb - Connected to proper routes */}
          <div className="absolute bottom-8 right-6 md:right-10 lg:right-16 text-sm text-white/70 flex items-center gap-2">
            <Link to="/" className="hover:text-[#D9B873] transition-colors">
              Home
            </Link>
            <span className="text-[#C9A45C]">›</span>
            <Link to="/news/latest" className="hover:text-[#D9B873] transition-colors">
              News & Announcements
            </Link>
            <span className="text-[#C9A45C]">›</span>
            <span className="text-[#D9B873] font-semibold">Blogs</span>
          </div>

        </div>
      </section>


      {/* =====================================================
          FEATURED ARTICLE
      ====================================================== */}
      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* Content */}
            <div className="order-2 lg:order-1">

              <span className="text-[#B28B3C] uppercase tracking-[0.2em] text-xs font-bold">
                Featured Article
              </span>

              <h2 
                onClick={() => openArticleModal(featuredArticleData)}
                className="font-serif text-4xl md:text-5xl lg:text-[52px] leading-[1.08] text-[#0F2742] mt-4 mb-6 cursor-pointer hover:text-[#9A762F] transition-colors"
              >
                The Future of Event
                <br />
                Management in India
              </h2>

              <div className="flex flex-wrap items-center gap-5 text-sm text-[#68717C] mb-6">

                <span className="flex items-center gap-2">
                  <span className="text-[#C9A45C]">▣</span>
                  12 September 2026
                </span>

                <span className="hidden sm:block w-1 h-1 rounded-full bg-[#C9A45C]" />

                <span>By UPEMA Team</span>

                <span className="hidden sm:block w-1 h-1 rounded-full bg-[#C9A45C]" />

                <span className="text-[#B28B3C] font-semibold">Industry Insights</span>

              </div>

              <p className="text-[#59636F] leading-8 text-base md:text-lg max-w-xl mb-8">
                As India's event industry continues to grow, innovation,
                technology and creativity are shaping the next generation
                of experiences. Explore the key trends, challenges and
                opportunities defining the future of event management.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <button 
                  onClick={() => openArticleModal(featuredArticleData)}
                  className="group inline-flex items-center gap-3 bg-[#C9A45C] hover:bg-[#D9B873] text-[#081A2B] px-7 py-3.5 font-semibold text-sm transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md"
                >
                  Read Full Article
                  <span className="text-lg transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </button>

                <Link
                  to="/membership"
                  className="inline-flex items-center gap-2 bg-transparent hover:bg-[#0F2742] text-[#0F2742] hover:text-white border border-[#0F2742] px-6 py-3.5 font-semibold text-sm transition-all duration-300"
                >
                  Join UPEMA
                </Link>
              </div>

            </div>


            {/* Image */}
            <div 
              onClick={() => openArticleModal(featuredArticleData)}
              className="order-1 lg:order-2 relative cursor-pointer group"
            >

              <div className="absolute -top-3 -right-3 w-24 h-24 border-t-2 border-r-2 border-[#C9A45C] z-10" />

              <div className="relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=1400&q=85"
                  alt="Featured Event"
                  className="w-full h-[320px] md:h-[400px] lg:h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute top-5 right-5 bg-[#C9A45C] text-[#081A2B] px-4 py-2 text-xs font-bold tracking-wider shadow">
                  ★ FEATURED
                </div>
              </div>

              <div className="absolute -bottom-3 -left-3 w-24 h-24 border-b-2 border-l-2 border-[#C9A45C]" />

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          CATEGORY FILTER
      ====================================================== */}
      <section ref={storiesRef} className="border-y border-[#E4DED2] bg-[#F5F1E8]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-8">

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">

            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-[#0F2742]">
                Explore Our Stories
              </h2>

              <div className="w-12 h-[2px] bg-[#C9A45C] mt-3" />
            </div>


            <div className="flex gap-2 flex-wrap">

              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-medium border transition-all duration-300 cursor-pointer ${
                    activeCategory === category
                      ? "bg-[#0F2742] text-white border-[#0F2742]"
                      : "bg-transparent text-[#304052] border-[#D6D0C5] hover:border-[#C9A45C] hover:text-[#8E6B2B]"
                  }`}
                >
                  {category}
                </button>
              ))}

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          LATEST STORIES
      ====================================================== */}
      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">

          <div className="mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4">

            <div>
              <span className="text-[#B28B3C] uppercase tracking-[0.25em] text-xs font-bold">
                Latest From UPEMA
              </span>

              <h2 className="font-serif text-4xl md:text-5xl text-[#0F2742] mt-3">
                Latest Stories
              </h2>
            </div>

            <span className="text-xs text-[#7B838C]">
              Showing {filteredBlogs.length} articles
            </span>

          </div>


          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {filteredBlogs.map((blog) => (

              <article
                key={blog.id}
                className="group relative bg-white rounded-2xl overflow-hidden border border-[#E8E1D5] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_35px_-8px_rgba(8,26,43,0.12),0_0_15px_rgba(201,164,92,0.18)] hover:border-[#C9A45C] hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between"
              >

                {/* Top Subtle Gold Reveal Line */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#C9A45C] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

                {/* Top Section */}
                <div>
                  {/* Image Container with Zoom & Vignette */}
                  <div 
                    onClick={() => openArticleModal(blog)}
                    className="relative h-[240px] overflow-hidden cursor-pointer bg-slate-100"
                  >

                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />

                    {/* Dark Luxury Vignette Overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#081A2B]/80 via-[#081A2B]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-between p-4" />

                    {/* Glassmorphic Category Badge */}
                    <span className="absolute top-4 left-4 backdrop-blur-md bg-[#081A2B]/85 text-[#D9B873] border border-[#C9A45C]/40 px-3.5 py-1.5 rounded-full text-[10px] font-bold tracking-wider uppercase shadow-md flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C9A45C] animate-pulse" />
                      {blog.category}
                    </span>

                    {/* Read Time Tag */}
                    <span className="absolute top-4 right-4 backdrop-blur-md bg-black/60 text-white/90 px-2.5 py-1 rounded-full text-[10px] font-medium flex items-center gap-1 shadow-sm">
                      <FiClock className="text-[#C9A45C] w-3 h-3" />
                      {blog.readTime || "4 min read"}
                    </span>

                  </div>


                  {/* Card Content Body */}
                  <div className="p-6 sm:p-7">

                    {/* Meta Row */}
                    <div className="flex items-center justify-between text-xs text-[#7B838C] mb-3">
                      <span className="flex items-center gap-1.5 font-medium">
                        <FiCalendar className="text-[#C9A45C] w-3.5 h-3.5" />
                        {blog.date}
                      </span>
                      <span className="text-[11px] text-[#B28B3C] font-semibold flex items-center gap-1">
                        By {blog.author || "UPEMA"}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 
                      onClick={() => openArticleModal(blog)}
                      className="font-serif text-xl sm:text-[22px] font-bold text-[#0F2742] leading-[1.3] group-hover:text-[#9A762F] transition-colors duration-300 cursor-pointer line-clamp-2"
                    >
                      {blog.title}
                    </h3>

                    {/* Expanding Accent Divider */}
                    <div className="w-8 group-hover:w-16 h-[2px] bg-[#C9A45C] transition-all duration-500 my-3.5" />

                    {/* Excerpt */}
                    <p className="text-xs sm:text-sm text-[#59636F] leading-[1.65] line-clamp-3 font-normal">
                      {blog.description}
                    </p>

                  </div>
                </div>


                {/* Card Footer */}
                <div className="px-6 sm:px-7 pb-6 pt-0">
                  <div className="flex items-center justify-between border-t border-[#EFE9DF] pt-4">

                    <button 
                      onClick={() => openArticleModal(blog)}
                      className="group/btn inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-[#0F2742] group-hover:text-[#9A762F] transition-colors cursor-pointer py-1"
                    >
                      <span>Read Story</span>
                      <span className="w-7 h-7 rounded-full bg-[#FAF8F2] group-hover:bg-[#C9A45C] text-[#0F2742] group-hover:text-[#081A2B] flex items-center justify-center transition-all duration-300 shadow-sm border border-[#E6E0D5] group-hover:border-[#C9A45C]">
                        <FiArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                      </span>
                    </button>

                    <Link
                      to={blog.relatedPage || "/membership"}
                      className="text-[11px] font-semibold text-[#8E6B2B] hover:text-[#0F2742] flex items-center gap-0.5 transition-colors"
                    >
                      <span>{blog.relatedLabel ? "Details" : blog.category}</span>
                      <span className="text-[#C9A45C]">↗</span>
                    </Link>

                  </div>
                </div>

              </article>

            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          EDITORIAL QUOTE & QUICK READS
      ====================================================== */}
      <section className="relative overflow-hidden bg-[#081A2B] text-white border-y border-[#C9A45C]/30 py-14 lg:py-16">

        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#C9A45C]/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 relative z-10">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

            {/* Left Side: Quote with elegant typography */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-4">

              <div className="text-[#C9A45C] text-5xl sm:text-6xl font-serif leading-none">
                “
              </div>

              <blockquote className="font-serif italic text-2xl sm:text-3xl lg:text-4xl text-[#F5F1E8] leading-[1.25] max-w-xl">
                Ideas shape the events we create, and collaboration turns them into lasting legacies.
              </blockquote>

              <div className="flex items-center gap-4 pt-3">
                <div className="w-12 h-[2px] bg-[#C9A45C]" />
                <span className="text-[#D9B873] text-xs tracking-[0.25em] uppercase font-bold">
                  UPEMA Journal • Thought Leadership
                </span>
              </div>

            </div>


            {/* Right Side: Luxury Quick Reads Panel */}
            <div className="lg:col-span-5">

              <div className="bg-gradient-to-b from-white/[0.08] to-white/[0.03] border border-[#C9A45C]/35 rounded-2xl p-6 sm:p-7 backdrop-blur-md shadow-2xl space-y-4">

                {/* Panel Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-3.5">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#C9A45C] animate-pulse" />
                    <h4 className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#D9B873]">
                      Quick Reads & Topics
                    </h4>
                  </div>
                  <span className="text-[10px] text-white/50 tracking-wider font-semibold uppercase bg-white/10 px-2.5 py-0.5 rounded">
                    EXPLORE
                  </span>
                </div>

                {/* Structured Links Sequence */}
                <div className="space-y-2.5">

                  <button
                    onClick={() => handleCategoryClick("Trends")}
                    className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-white/[0.04] hover:bg-[#C9A45C] text-white/90 hover:text-[#081A2B] border border-white/5 hover:border-[#C9A45C] transition-all duration-300 font-medium text-xs sm:text-sm group cursor-pointer text-left"
                  >
                    <span className="flex items-center gap-2.5 whitespace-nowrap">
                      <span className="text-[#C9A45C] group-hover:text-[#081A2B] transition-colors font-bold">✦</span>
                      <span>Event Trends & Decor</span>
                    </span>
                    <FiArrowRight className="w-4 h-4 text-[#C9A45C] group-hover:text-[#081A2B] group-hover:translate-x-1 transition-transform" />
                  </button>

                  <Link
                    to="/news/latest"
                    className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-white/[0.04] hover:bg-[#C9A45C] text-white/90 hover:text-[#081A2B] border border-white/5 hover:border-[#C9A45C] transition-all duration-300 font-medium text-xs sm:text-sm group text-left"
                  >
                    <span className="flex items-center gap-2.5 whitespace-nowrap">
                      <span className="text-[#C9A45C] group-hover:text-[#081A2B] transition-colors font-bold">✦</span>
                      <span>Industry News & Press</span>
                    </span>
                    <FiArrowRight className="w-4 h-4 text-[#C9A45C] group-hover:text-[#081A2B] group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <button
                    onClick={() => handleCategoryClick("Expert Opinions")}
                    className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-white/[0.04] hover:bg-[#C9A45C] text-white/90 hover:text-[#081A2B] border border-white/5 hover:border-[#C9A45C] transition-all duration-300 font-medium text-xs sm:text-sm group cursor-pointer text-left"
                  >
                    <span className="flex items-center gap-2.5 whitespace-nowrap">
                      <span className="text-[#C9A45C] group-hover:text-[#081A2B] transition-colors font-bold">✦</span>
                      <span>Expert Opinions & Voices</span>
                    </span>
                    <FiArrowRight className="w-4 h-4 text-[#C9A45C] group-hover:text-[#081A2B] group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={() => handleCategoryClick("Event Stories")}
                    className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-white/[0.04] hover:bg-[#C9A45C] text-white/90 hover:text-[#081A2B] border border-white/5 hover:border-[#C9A45C] transition-all duration-300 font-medium text-xs sm:text-sm group cursor-pointer text-left"
                  >
                    <span className="flex items-center gap-2.5 whitespace-nowrap">
                      <span className="text-[#C9A45C] group-hover:text-[#081A2B] transition-colors font-bold">✦</span>
                      <span>Member Stories & Showcases</span>
                    </span>
                    <FiArrowRight className="w-4 h-4 text-[#C9A45C] group-hover:text-[#081A2B] group-hover:translate-x-1 transition-transform" />
                  </button>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          MOST READ
      ====================================================== */}
      <section className="py-20 bg-[#FAF8F2]">

        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">

          <div className="flex items-end justify-between mb-10">

            <div>

              <span className="text-[#B28B3C] uppercase tracking-[0.25em] text-xs font-bold">
                Popular Reads
              </span>

              <h2 className="font-serif text-4xl md:text-5xl text-[#0F2742] mt-2">
                Most Read Articles
              </h2>

            </div>

            <button 
              onClick={() => handleCategoryClick("All")}
              className="hidden sm:flex items-center gap-2 text-sm font-semibold text-[#0F2742] hover:text-[#9A762F] cursor-pointer"
            >
              View All Blogs
              <span className="text-[#C9A45C]">→</span>
            </button>

          </div>


          <div className="border-t border-[#DCD6CA]">

            {popularReads.map((article) => {
              const fullArticle = blogs.find((b) => b.id === article.id) || featuredArticleData;

              return (
                <div
                  key={article.number}
                  onClick={() => openArticleModal(fullArticle)}
                  className="group py-6 border-b border-[#DCD6CA] grid grid-cols-[55px_100px_1fr] md:grid-cols-[70px_150px_1fr] gap-5 md:gap-8 items-center cursor-pointer"
                >

                  {/* Number */}
                  <span className="font-serif text-2xl md:text-3xl text-[#C9A45C]">
                    {article.number}
                  </span>

                  {/* Image */}
                  <div className="overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-[65px] md:h-[85px] object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">

                    <div>

                      <h3 className="font-serif text-lg md:text-xl text-[#0F2742] group-hover:text-[#9A762F] transition-colors">
                        {article.title}
                      </h3>

                      <p className="text-xs text-[#7B838C] mt-2">
                        {article.date}
                      </p>

                    </div>

                    <span className="text-[#C9A45C] text-lg group-hover:translate-x-1 transition-transform">
                      →
                    </span>

                  </div>

                </div>
              );
            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          NEWSLETTER CTA
      ====================================================== */}
      <section className="relative overflow-hidden bg-[#0F2742]">

        {/* Decorative Pattern */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
          <div className="absolute -right-20 -top-20 w-80 h-80 border border-[#C9A45C] rounded-full" />
          <div className="absolute -right-10 -top-10 w-60 h-60 border border-[#C9A45C] rounded-full" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-14">

          <div className="grid lg:grid-cols-2 gap-10 items-center">

            <div>

              <span className="text-[#D9B873] uppercase tracking-[0.2em] text-xs font-bold">
                Stay Connected With UPEMA
              </span>

              <h2 className="font-serif text-3xl md:text-4xl text-white mt-3 mb-3">
                Never Miss an Insight
              </h2>

              <p className="text-white/65 max-w-lg leading-7 text-sm md:text-base">
                Get the latest industry insights, announcements and
                stories from the UPEMA community directly in your inbox.
              </p>

            </div>


            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3">

              <input
                type="email"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 bg-transparent border border-white/25 focus:border-[#C9A45C] outline-none px-5 py-4 text-white placeholder:text-white/40 text-sm"
              />

              <button 
                type="submit"
                className="bg-[#C9A45C] hover:bg-[#D9B873] text-[#081A2B] px-7 py-4 font-semibold text-sm transition-colors whitespace-nowrap cursor-pointer"
              >
                Subscribe →
              </button>

            </form>

          </div>

        </div>

      </section>


      {/* =====================================================
          ARTICLE READER LIGHTBOX MODAL
      ====================================================== */}
      <AnimatePresence>
        {activeModalArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#C9A45C] text-[#172333]"
            >
              {/* Modal Top Header */}
              <div className="bg-[#081A2B] text-white p-6 sm:p-8 relative border-b border-[#C9A45C]">
                <button
                  onClick={() => setActiveModalArticle(null)}
                  className="absolute top-5 right-5 text-slate-300 hover:text-white p-2 cursor-pointer"
                  aria-label="Close article modal"
                >
                  <FiX className="w-6 h-6" />
                </button>

                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[10px] bg-[#C9A45C] text-[#081A2B] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded">
                    {activeModalArticle.category}
                  </span>
                  <span className="text-xs text-slate-300">
                    ⏱ {activeModalArticle.readTime || "4 min read"}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif text-white mt-1 leading-snug">
                  {activeModalArticle.title}
                </h3>

                <div className="flex items-center gap-4 text-xs text-slate-300 mt-3 pt-3 border-t border-white/10">
                  <span className="text-[#D9B873] font-medium">
                    By {activeModalArticle.author || "UPEMA Team"}
                  </span>
                  <span>•</span>
                  <span>📅 {activeModalArticle.date}</span>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 sm:p-8 space-y-6">
                
                {/* Image */}
                <div className="h-64 sm:h-80 rounded overflow-hidden bg-slate-100 border border-slate-200">
                  <img
                    src={activeModalArticle.image}
                    alt={activeModalArticle.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Excerpt / Summary */}
                <p className="text-base text-[#0F2742] font-semibold leading-relaxed border-l-2 border-[#C9A45C] pl-4 italic">
                  "{activeModalArticle.description}"
                </p>

                {/* Main Article Body */}
                <div className="text-sm text-[#59636F] leading-relaxed space-y-4 whitespace-pre-line">
                  {activeModalArticle.fullContent || activeModalArticle.description}
                </div>

                {/* Highlights */}
                {activeModalArticle.highlights && activeModalArticle.highlights.length > 0 && (
                  <div className="bg-[#FAF8F2] border border-[#E6E0D5] p-5 rounded-lg space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F2742] flex items-center gap-2">
                      <FiCheckCircle className="text-[#C9A45C]" /> Key Highlights & Directives:
                    </h4>
                    <ul className="space-y-2 text-xs text-[#59636F]">
                      {activeModalArticle.highlights.map((hl, i) => (
                        <li key={i} className="flex items-start gap-2 bg-white p-2.5 rounded border border-[#E9E4DA]">
                          <span className="text-[#C9A45C] font-bold">✔</span>
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

              </div>

              {/* Modal Footer */}
              <div className="bg-[#FAF8F2] p-5 sm:p-6 border-t border-[#E9E4DA] flex flex-col sm:flex-row items-center justify-between gap-4">
                
                <div className="flex items-center gap-3">
                  <Link
                    to={activeModalArticle.relatedPage || "/membership"}
                    onClick={() => setActiveModalArticle(null)}
                    className="bg-[#C9A45C] hover:bg-[#D9B873] text-[#081A2B] font-semibold text-xs uppercase tracking-wider px-5 py-2.5 transition-colors flex items-center gap-1.5"
                  >
                    <span>{activeModalArticle.relatedLabel || "Explore UPEMA"}</span>
                    <FiArrowRight />
                  </Link>

                  <Link
                    to="/contact"
                    onClick={() => setActiveModalArticle(null)}
                    className="text-xs font-semibold text-[#0F2742] hover:text-[#C9A45C] transition-colors"
                  >
                    Contact UPEMA Desk
                  </Link>
                </div>

                <button
                  onClick={() => setActiveModalArticle(null)}
                  className="bg-[#081A2B] hover:bg-[#0F2742] text-white font-semibold text-xs uppercase tracking-wider px-6 py-2.5 rounded transition-colors cursor-pointer"
                >
                  Close
                </button>

              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </main>
  );
};

export default Blogs;
