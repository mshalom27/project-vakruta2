import { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Islamic Geometric Pattern Background
const IslamicPattern = ({
  children,
  className = "",
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`relative ${className}`}>
      {/* Complex Islamic Star Pattern */}
      <div
        className="absolute inset-0 opacity-8"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% 50%, rgba(245, 196, 34, 0.4) 1px, transparent 1px),
            radial-gradient(circle at 0% 0%, rgba(56, 134, 151, 0.4) 1px, transparent 1px),
            radial-gradient(circle at 100% 100%, rgba(245, 196, 34, 0.4) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px, 60px 60px, 50px 50px',
          backgroundPosition: '0 0, 20px 20px, 10px 10px'
        }}
      />
      {/* Interlocking circles (common in Islamic art) */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full">
          <defs>
            <pattern id="islamic-circles" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <circle cx="40" cy="40" r="30" fill="none" stroke="#388697" strokeWidth="1.5" />
              <circle cx="40" cy="40" r="20" fill="none" stroke="#f5c422" strokeWidth="1" />
              <circle cx="40" cy="40" r="10" fill="none" stroke="#388697" strokeWidth="0.5" />
              <path d="M 40,10 L 45,30 L 65,30 L 50,42 L 55,62 L 40,50 L 25,62 L 30,42 L 15,30 L 35,30 Z"
                fill="none" stroke="#f5c422" strokeWidth="0.8" opacity="0.6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#islamic-circles)" />
        </svg>
      </div>
      {children}
    </div>
  );
};

export default function Index() {
  const heroHeadingRef = useRef<HTMLHeadingElement>(null);
  const heroParagraphRef = useRef<HTMLParagraphElement>(null);
  const heroImageRef = useRef<HTMLDivElement>(null);
  const aboutHeadingRef = useRef<HTMLHeadingElement>(null);
  const aboutImageRef = useRef<HTMLDivElement>(null);
  const aboutTextRef = useRef<HTMLDivElement>(null);
  const statsCardsRef = useRef<HTMLDivElement>(null);
  const brochureHeadingRef = useRef<HTMLHeadingElement>(null);
  const brochureLeftRef = useRef<HTMLDivElement>(null);
  const brochureRightRef = useRef<HTMLDivElement>(null);
  const ctaSectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const heroTimeline = () => {
      if (
        !heroHeadingRef.current ||
        !heroParagraphRef.current ||
        !heroImageRef.current
      )
        return;

      setTimeout(() => {
        if (heroHeadingRef.current) {
          heroHeadingRef.current.style.transition = "all 0.8s ease-out";
          heroHeadingRef.current.style.opacity = "1";
          heroHeadingRef.current.style.transform = "translateY(0)";
        }
      }, 100);

      setTimeout(() => {
        if (heroParagraphRef.current) {
          heroParagraphRef.current.style.transition = "all 0.8s ease-out";
          heroParagraphRef.current.style.opacity = "1";
          heroParagraphRef.current.style.transform = "translateY(0)";
        }
      }, 300);

      setTimeout(() => {
        if (heroImageRef.current) {
          heroImageRef.current.style.transition = "all 0.8s ease-out";
          heroImageRef.current.style.opacity = "1";
          heroImageRef.current.style.transform = "translateY(0)";
        }
      }, 500);
    };

    heroTimeline();

    const observerOptions = {
      threshold: 0.15,
      rootMargin: "0px",
    };

    const aboutObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (aboutHeadingRef.current) {
            aboutHeadingRef.current.style.transition = "all 0.8s ease-out";
            aboutHeadingRef.current.style.opacity = "1";
            aboutHeadingRef.current.style.transform = "translateY(0)";
          }

          setTimeout(() => {
            if (aboutImageRef.current) {
              aboutImageRef.current.style.transition = "all 0.8s ease-out";
              aboutImageRef.current.style.opacity = "1";
              aboutImageRef.current.style.transform = "translateY(0)";
            }
          }, 200);

          setTimeout(() => {
            if (aboutTextRef.current) {
              aboutTextRef.current.style.transition = "all 0.8s ease-out";
              aboutTextRef.current.style.opacity = "1";
              aboutTextRef.current.style.transform = "translateY(0)";
            }
          }, 300);
        }
      });
    }, observerOptions);

    if (aboutHeadingRef.current) aboutObserver.observe(aboutHeadingRef.current);

    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && statsCardsRef.current) {
          const cards = statsCardsRef.current.children;
          Array.from(cards).forEach((card, i) => {
            setTimeout(() => {
              (card as HTMLElement).style.transition = "all 0.7s ease-out";
              (card as HTMLElement).style.opacity = "1";
              (card as HTMLElement).style.transform = "translateY(0)";
            }, i * 100);
          });
        }
      });
    }, observerOptions);

    if (statsCardsRef.current) statsObserver.observe(statsCardsRef.current);

    const brochureObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (brochureHeadingRef.current) {
            brochureHeadingRef.current.style.transition = "all 0.8s ease-out";
            brochureHeadingRef.current.style.opacity = "1";
            brochureHeadingRef.current.style.transform = "translateY(0)";
          }

          setTimeout(() => {
            if (brochureLeftRef.current) {
              brochureLeftRef.current.style.transition = "all 0.8s ease-out";
              brochureLeftRef.current.style.opacity = "1";
              brochureLeftRef.current.style.transform = "translateY(0)";
            }
          }, 200);

          setTimeout(() => {
            if (brochureRightRef.current) {
              brochureRightRef.current.style.transition = "all 0.8s ease-out";
              brochureRightRef.current.style.opacity = "1";
              brochureRightRef.current.style.transform = "translateY(0)";
            }
          }, 300);
        }
      });
    }, observerOptions);

    if (brochureHeadingRef.current)
      brochureObserver.observe(brochureHeadingRef.current);

    const ctaObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && ctaSectionRef.current) {
          const section = ctaSectionRef.current;
          section.style.transition = "all 1s ease-out";
          section.style.opacity = "1";
          section.style.transform = "translateY(0)";
        }
      });
    }, observerOptions);

    if (ctaSectionRef.current) ctaObserver.observe(ctaSectionRef.current);

    return () => {
      aboutObserver.disconnect();
      statsObserver.disconnect();
      brochureObserver.disconnect();
      ctaObserver.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#f3e8dc]">
      <Navbar />

      {/* Hero Section - Compact Islamic Architecture */}
      <section id="hero" className="relative overflow-hidden pt-16 pb-12">
        {/* Islamic Arch Pattern Background */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="islamic-arch" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
                {/* Pointed Islamic Arch */}
                <path d="M 50,150 L 50,100 Q 50,50 100,20 Q 150,50 150,100 L 150,150"
                  fill="none" stroke="#388697" strokeWidth="2" opacity="0.6" />
                {/* Inner arch detail */}
                <path d="M 60,150 L 60,105 Q 60,65 100,40 Q 140,65 140,105 L 140,150"
                  fill="none" stroke="#f5c422" strokeWidth="1.5" opacity="0.4" />
                {/* Decorative star at apex */}
                <path d="M 100,15 L 103,22 L 110,22 L 105,27 L 107,34 L 100,29 L 93,34 L 95,27 L 90,22 L 97,22 Z"
                  fill="#388697" opacity="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#islamic-arch)" />
          </svg>
        </div>

        {/* Geometric Islamic Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full">
            <defs>
              <pattern id="islamic-star" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 30,5 L 35,20 L 50,20 L 38,28 L 43,43 L 30,35 L 17,43 L 22,28 L 10,20 L 25,20 Z"
                  fill="none" stroke="#f5c422" strokeWidth="1.5" />
                <circle cx="30" cy="30" r="3" fill="#388697" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#islamic-star)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-8">
            {/* Left: Title & Description */}
            <div className="text-center md:text-left">
              {/* Islamic Ornamental Header */}
              <div className="mb-6">
                <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" className="text-[#f5c422]">
                    <path d="M12,2 L14,9 L21,9 L15,14 L17,21 L12,17 L7,21 L9,14 L3,9 L10,9 Z" fill="currentColor" />
                  </svg>
                  <span className="font-cinzel text-xs uppercase tracking-[0.4em] text-[#388697]">
                    NIT Rourkela Presents
                  </span>
                  <svg width="24" height="24" viewBox="0 0 24 24" className="text-[#f5c422]">
                    <path d="M12,2 L14,9 L21,9 L15,14 L17,21 L12,17 L7,21 L9,14 L3,9 L10,9 Z" fill="currentColor" />
                  </svg>
                </div>
              </div>

              {/* Main Title with Islamic Frame */}
              <div className="relative inline-block mb-6">
                {/* Islamic corner ornaments */}
                <div className="absolute -top-4 -left-4 w-12 h-12 border-t-3 border-l-3 border-[#f5c422]">
                  <div className="absolute top-0 left-0 w-3 h-3 bg-[#f5c422]"></div>
                </div>
                <div className="absolute -top-4 -right-4 w-12 h-12 border-t-3 border-r-3 border-[#388697]">
                  <div className="absolute top-0 right-0 w-3 h-3 bg-[#388697]"></div>
                </div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 border-b-3 border-l-3 border-[#388697]">
                  <div className="absolute bottom-0 left-0 w-3 h-3 bg-[#388697]"></div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-3 border-r-3 border-[#f5c422]">
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-[#f5c422]"></div>
                </div>

                <div className="px-8 py-6 border-4 border-[#15122e]/20">
                  <h1
                    ref={heroHeadingRef}
                    className="font-display text-6xl md:text-7xl lg:text-8xl font-black text-[#15122e] leading-[0.9] opacity-0 transform translate-y-8"
                    style={{ letterSpacing: '0.08em' }}
                  >
                    VAK<span className="text-[#f5c422]">RU</span>TA
                  </h1>
                </div>
              </div>

              {/* Islamic decorative divider */}
              <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
                <div className="w-16 h-px bg-[#388697]"></div>
                <svg width="20" height="20" viewBox="0 0 20 20" className="text-[#f5c422]">
                  <path d="M 10,2 L 18,10 L 10,18 L 2,10 Z" fill="currentColor" />
                  <circle cx="10" cy="10" r="3" fill="#15122e" />
                </svg>
                <div className="w-16 h-px bg-[#388697]"></div>
              </div>

              <p
                ref={heroParagraphRef}
                className="font-cinzel text-lg md:text-xl text-[#15122e] leading-relaxed opacity-0 transform translate-y-8 italic mb-8"
              >
                Where articulation meets intellect in the grand tradition of India's royal courts
              </p>

              {/* Islamic Year Badge */}
              <div className="flex justify-center md:justify-start mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#f5c422] transform rotate-45"></div>
                  <div className="relative bg-[#15122e] m-1 px-6 py-3 border-2 border-[#f5c422]">
                    <p className="font-display text-2xl font-black text-[#f5c422]">2025</p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="flex justify-center md:justify-start">
                <button className="relative group">
                  <div className="absolute inset-0 bg-[#f5c422] transform group-hover:scale-105 transition-transform duration-300"></div>
                  <div className="relative bg-[#15122e] m-1 px-10 py-4 font-cinzel font-bold text-[#f5c422] uppercase tracking-[0.2em] group-hover:bg-[#f5c422] group-hover:text-[#15122e] transition-colors duration-300">
                    <span className="inline-flex items-center gap-3">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
                        <path d="M9,2 L11,7 L16,7 L12,11 L13,16 L9,13 L5,16 L6,11 L2,7 L7,7 Z" />
                      </svg>
                      Sponsor Us
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
                        <path d="M9,2 L11,7 L16,7 L12,11 L13,16 L9,13 L5,16 L6,11 L2,7 L7,7 Z" />
                      </svg>
                    </span>
                  </div>
                </button>
              </div>
            </div>

            {/* Right: Ornate Islamic Frame Image */}
            <div
              ref={heroImageRef}
              className="relative opacity-0 transform translate-y-8"
            >
              <div className="relative">
                {/* Multi-layered Islamic Border */}
                <div className="absolute -inset-6 border-4 border-[#f5c422] opacity-30"></div>
                <div className="absolute -inset-4 border-2 border-[#388697]"></div>
                <div className="absolute -inset-3 border border-[#f5c422] opacity-50"></div>

                {/* Corner Stars */}
                <div className="absolute -top-3 -left-3 z-10">
                  <svg width="32" height="32" viewBox="0 0 32 32" className="text-[#f5c422]">
                    <path d="M16,2 L19,12 L29,12 L21,18 L24,28 L16,22 L8,28 L11,18 L3,12 L13,12 Z" fill="currentColor" />
                  </svg>
                </div>
                <div className="absolute -top-3 -right-3 z-10">
                  <svg width="32" height="32" viewBox="0 0 32 32" className="text-[#388697]">
                    <path d="M16,2 L19,12 L29,12 L21,18 L24,28 L16,22 L8,28 L11,18 L3,12 L13,12 Z" fill="currentColor" />
                  </svg>
                </div>
                <div className="absolute -bottom-3 -left-3 z-10">
                  <svg width="32" height="32" viewBox="0 0 32 32" className="text-[#388697]">
                    <path d="M16,2 L19,12 L29,12 L21,18 L24,28 L16,22 L8,28 L11,18 L3,12 L13,12 Z" fill="currentColor" />
                  </svg>
                </div>
                <div className="absolute -bottom-3 -right-3 z-10">
                  <svg width="32" height="32" viewBox="0 0 32 32" className="text-[#f5c422]">
                    <path d="M16,2 L19,12 L29,12 L21,18 L24,28 L16,22 L8,28 L11,18 L3,12 L13,12 Z" fill="currentColor" />
                  </svg>
                </div>

                {/* Islamic arch overlay on image */}
                <div className="relative bg-[#15122e] p-4">
                  <div className="relative">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F7c19d5750a434083a19dfc82c5f593f4%2F981caa52e21948b987df073157a54df3?format=webp&width=800"
                      alt="Vakruta Pattern"
                      className="w-full h-64 md:h-80 object-cover"
                    />
                    {/* Arch overlay */}
                    <svg className="absolute top-0 left-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
                      <path d="M 0,100% L 0,30% Q 0,10% 20%,5% L 45%,5% Q 50%,5% 50%,0 Q 50%,5% 55%,5% L 80%,5% Q 100%,10% 100%,30% L 100%,100% Z"
                        fill="none" stroke="#f5c422" strokeWidth="3" opacity="0.6" />
                    </svg>
                  </div>
                </div>

                {/* Decorative side patterns */}
                <div className="absolute top-1/2 -left-6 transform -translate-y-1/2">
                  <svg width="40" height="120" viewBox="0 0 40 120">
                    <path d="M 10,20 Q 30,20 30,40 Q 30,60 10,60 Q 30,60 30,80 Q 30,100 10,100"
                      fill="none" stroke="#388697" strokeWidth="2" />
                  </svg>
                </div>
                <div className="absolute top-1/2 -right-6 transform -translate-y-1/2">
                  <svg width="40" height="120" viewBox="0 0 40 120">
                    <path d="M 30,20 Q 10,20 10,40 Q 10,60 30,60 Q 10,60 10,80 Q 10,100 30,100"
                      fill="none" stroke="#f5c422" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Islamic Border Pattern */}
        <div className="absolute bottom-0 left-0 right-0 h-4 overflow-hidden">
          <svg className="w-full h-full" preserveAspectRatio="none">
            <pattern id="bottom-pattern" x="0" y="0" width="60" height="20" patternUnits="userSpaceOnUse">
              <path d="M 0,10 L 15,0 L 30,10 L 45,0 L 60,10 L 60,20 L 0,20 Z" fill="#388697" opacity="0.2" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#bottom-pattern)" />
          </svg>
        </div>
      </section>

      {/* About Us Section - Islamic Garden Paradise */}
      <section
        id="about"
        className="py-24 md:py-32 bg-[#15122e] relative overflow-hidden"
      >
        <IslamicPattern className="absolute inset-0" />

        {/* Islamic Geometric Border - Top */}
        <div className="absolute top-0 left-0 right-0 h-8 overflow-hidden">
          <svg className="w-full h-full" preserveAspectRatio="none">
            <defs>
              <pattern id="top-islamic-border" x="0" y="0" width="80" height="40" patternUnits="userSpaceOnUse">
                {/* Interlocking arches */}
                <path d="M 0,40 L 0,20 Q 0,5 20,0 Q 40,5 40,20 L 40,40" fill="#f5c422" opacity="0.3" />
                <path d="M 40,40 L 40,20 Q 40,5 60,0 Q 80,5 80,20 L 80,40" fill="#388697" opacity="0.3" />
                {/* Stars */}
                <path d="M 20,5 L 22,10 L 27,10 L 23,13 L 25,18 L 20,15 L 15,18 L 17,13 L 13,10 L 18,10 Z"
                  fill="#f5c422" opacity="0.6" />
                <path d="M 60,5 L 62,10 L 67,10 L 63,13 L 65,18 L 60,15 L 55,18 L 57,13 L 53,10 L 58,10 Z"
                  fill="#388697" opacity="0.6" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#top-islamic-border)" />
          </svg>
        </div>

        {/* Islamic Geometric Border - Bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-8 overflow-hidden transform rotate-180">
          <svg className="w-full h-full" preserveAspectRatio="none">
            <rect width="100%" height="100%" fill="url(#top-islamic-border)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Islamic Section Header */}
          <div className="text-center mb-20">
            <div
              ref={aboutHeadingRef}
              className="opacity-0 transform translate-y-8"
            >
              <div className="flex items-center justify-center gap-6 mb-6">
                {/* Islamic 8-pointed star */}
                <svg width="40" height="40" viewBox="0 0 40 40" className="text-[#f5c422]">
                  <path d="M 20,0 L 24,12 L 36,8 L 28,20 L 40,24 L 28,28 L 36,40 L 24,36 L 20,48 L 16,36 L 4,40 L 12,28 L 0,24 L 12,20 L 4,8 L 16,12 Z"
                    fill="currentColor" opacity="0.8" />
                  <circle cx="20" cy="24" r="6" fill="#15122e" />
                </svg>
                <span className="font-cinzel text-xs uppercase tracking-[0.5em] text-[#f5c422]">
                  About the Tournament
                </span>
                <svg width="40" height="40" viewBox="0 0 40 40" className="text-[#f5c422]">
                  <path d="M 20,0 L 24,12 L 36,8 L 28,20 L 40,24 L 28,28 L 36,40 L 24,36 L 20,48 L 16,36 L 4,40 L 12,28 L 0,24 L 12,20 L 4,8 L 16,12 Z"
                    fill="currentColor" opacity="0.8" />
                  <circle cx="20" cy="24" r="6" fill="#15122e" />
                </svg>
              </div>
              <h2 className="font-display text-7xl md:text-8xl font-black text-[#f5c422] leading-tight mb-6">
                The Art of Argument
              </h2>
              {/* Islamic knot pattern divider */}
              <div className="flex items-center justify-center gap-3">
                <svg width="120" height="20" viewBox="0 0 120 20">
                  <path d="M 0,10 Q 15,0 30,10 T 60,10 T 90,10 T 120,10"
                    fill="none" stroke="#388697" strokeWidth="2" />
                  <path d="M 0,10 Q 15,20 30,10 T 60,10 T 90,10 T 120,10"
                    fill="none" stroke="#f5c422" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* Left: Islamic Archway Frame */}
            <div
              ref={aboutImageRef}
              className="opacity-0 transform translate-y-8"
            >
              <div className="relative">
                {/* Islamic pointed arch frame */}
                <div className="absolute -inset-4 z-0">
                  <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M 5,100 L 5,40 Q 5,10 25,5 L 45,5 Q 50,5 50,0 Q 50,5 55,5 L 75,5 Q 95,10 95,40 L 95,100 Z"
                      fill="none" stroke="#f5c422" strokeWidth="2" />
                    <path d="M 10,100 L 10,42 Q 10,15 27,10 L 46,10 Q 50,10 50,5 Q 50,10 54,10 L 73,10 Q 90,15 90,42 L 90,100 Z"
                      fill="none" stroke="#388697" strokeWidth="1.5" />
                  </svg>
                </div>

                <div className="relative bg-[#f5c422] p-2 border-4 border-[#388697]">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F7c19d5750a434083a19dfc82c5f593f4%2F14012f80d4794515a0272d68adccc272?format=webp&width=500"
                    alt="Indian Architecture"
                    className="w-full h-96 object-cover"
                  />
                </div>

                {/* Islamic Star Corner Ornaments */}
                <div className="absolute -top-4 -left-4 z-10">
                  <svg width="32" height="32" viewBox="0 0 32 32" className="text-[#f5c422]">
                    <path d="M 16,0 L 19,10 L 29,7 L 22,16 L 32,19 L 22,22 L 29,32 L 19,29 L 16,39 L 13,29 L 3,32 L 10,22 L 0,19 L 10,16 L 3,7 L 13,10 Z"
                      fill="currentColor" />
                  </svg>
                </div>
                <div className="absolute -top-4 -right-4 z-10">
                  <svg width="32" height="32" viewBox="0 0 32 32" className="text-[#388697]">
                    <path d="M 16,0 L 19,10 L 29,7 L 22,16 L 32,19 L 22,22 L 29,32 L 19,29 L 16,39 L 13,29 L 3,32 L 10,22 L 0,19 L 10,16 L 3,7 L 13,10 Z"
                      fill="currentColor" />
                  </svg>
                </div>
                <div className="absolute -bottom-4 -left-4 z-10">
                  <svg width="32" height="32" viewBox="0 0 32 32" className="text-[#388697]">
                    <path d="M 16,0 L 19,10 L 29,7 L 22,16 L 32,19 L 22,22 L 29,32 L 19,29 L 16,39 L 13,29 L 3,32 L 10,22 L 0,19 L 10,16 L 3,7 L 13,10 Z"
                      fill="currentColor" />
                  </svg>
                </div>
                <div className="absolute -bottom-4 -right-4 z-10">
                  <svg width="32" height="32" viewBox="0 0 32 32" className="text-[#f5c422]">
                    <path d="M 16,0 L 19,10 L 29,7 L 22,16 L 32,19 L 22,22 L 29,32 L 19,29 L 16,39 L 13,29 L 3,32 L 10,22 L 0,19 L 10,16 L 3,7 L 13,10 Z"
                      fill="currentColor" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Center & Right: Content with Islamic Calligraphy Style */}
            <div className="md:col-span-2">
              <div
                ref={aboutTextRef}
                className="space-y-8 opacity-0 transform translate-y-8"
              >
                {/* Text Blocks with Islamic Borders */}
                <div className="relative bg-gradient-to-r from-[#388697]/20 to-transparent p-8 border-l-4 border-[#f5c422]">
                  {/* Decorative Islamic corners */}
                  <div className="absolute top-0 left-0 w-8 h-8">
                    <svg viewBox="0 0 32 32" className="w-full h-full text-[#f5c422]">
                      <path d="M 0,0 L 0,16 Q 0,32 16,32 L 32,32" fill="none" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </div>
                  <p className="font-cinzel text-lg text-[#f3e8dc] leading-relaxed">
                    Vakruta is NIT Rourkela's flagship Asian Parliamentary Debate tournament, bringing together the brightest minds from institutions across India in a celebration of eloquence and intellect.
                  </p>
                  <div className="absolute bottom-0 right-0 w-8 h-8">
                    <svg viewBox="0 0 32 32" className="w-full h-full text-[#388697]">
                      <path d="M 32,32 L 32,16 Q 32,0 16,0 L 0,0" fill="none" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </div>
                </div>

                <div className="relative bg-gradient-to-l from-[#f5c422]/20 to-transparent p-8 border-r-4 border-[#388697]">
                  <div className="absolute top-0 right-0 w-8 h-8">
                    <svg viewBox="0 0 32 32" className="w-full h-full text-[#388697]">
                      <path d="M 32,0 L 32,16 Q 32,32 16,32 L 0,32" fill="none" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </div>
                  <p className="font-cinzel text-lg text-[#f3e8dc] leading-relaxed">
                    Through rigorous debate rounds, engaging workshops, and competitive spirit, Vakruta cultivates eloquence, analytical thinking, and the ability to articulate complex ideas with clarity and conviction.
                  </p>
                  <div className="absolute bottom-0 left-0 w-8 h-8">
                    <svg viewBox="0 0 32 32" className="w-full h-full text-[#f5c422]">
                      <path d="M 0,32 L 0,16 Q 0,0 16,0 L 32,0" fill="none" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </div>
                </div>

                {/* Islamic Geometric Stats */}
                <div className="grid grid-cols-3 gap-6 mt-12">
                  {[
                    { num: "100+", label: "Debaters", color: "#f5c422" },
                    { num: "20+", label: "Rounds", color: "#388697" },
                    { num: "3", label: "Days", color: "#f5c422" }
                  ].map((stat, i) => (
                    <div key={i} className="text-center relative group">
                      {/* Islamic star background */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity">
                        <svg width="100" height="100" viewBox="0 0 100 100">
                          <path d="M 50,5 L 58,35 L 88,28 L 65,50 L 95,58 L 65,66 L 88,88 L 58,81 L 50,111 L 42,81 L 12,88 L 35,66 L 5,58 L 35,50 L 12,28 L 42,35 Z"
                            fill="currentColor" style={{ color: stat.color }} />
                        </svg>
                      </div>
                      <div className="relative border-2 border-[#f3e8dc]/20 p-6 hover:border-[#f5c422] transition-colors duration-300">
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                          <svg width="20" height="20" viewBox="0 0 20 20" style={{ color: stat.color }}>
                            <path d="M 10,0 L 12,6 L 18,5 L 14,10 L 20,12 L 14,14 L 18,19 L 12,18 L 10,24 L 8,18 L 2,19 L 6,14 L 0,12 L 6,10 L 2,5 L 8,6 Z"
                              fill="currentColor" />
                          </svg>
                        </div>
                        <p className="font-display text-5xl font-black mb-2" style={{ color: stat.color }}>
                          {stat.num}
                        </p>
                        <p className="font-cinzel text-xs uppercase tracking-widest text-[#f3e8dc]">
                          {stat.label}
                        </p>
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                          <svg width="20" height="20" viewBox="0 0 20 20" className="text-[#388697]">
                            <path d="M 10,0 L 12,6 L 18,5 L 14,10 L 20,12 L 14,14 L 18,19 L 12,18 L 10,24 L 8,18 L 2,19 L 6,14 L 0,12 L 6,10 L 2,5 L 8,6 Z"
                              fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Islamic Cartouche Badge */}
                <div className="mt-12 text-center">
                  <div className="inline-block relative">
                    <div className="absolute inset-0 bg-[#f5c422] transform skew-x-12"></div>
                    <div className="relative bg-[#15122e] border-2 border-[#f5c422] px-10 py-4 skew-x-12">
                      <p className="font-cinzel text-sm uppercase tracking-[0.3em] text-[#f5c422] -skew-x-12">
                        Asian Parliamentary Format
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section - Royal Treasury */}
      <section
        id="statistics"
        className="py-24 md:py-32 bg-[#f3e8dc] relative overflow-hidden"
      >
        {/* Ornate Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `radial-gradient(circle, #388697 2px, transparent 2px)`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Ornate Title */}
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#388697]"></div>
              <div className="relative">
                <div className="absolute inset-0 border-2 border-[#f5c422] rotate-45"></div>
                <span className="relative block font-cinzel text-xs uppercase tracking-[0.5em] text-[#388697] px-8 py-3">
                  Our Legacy
                </span>
              </div>
              <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#388697]"></div>
            </div>

            <h2 className="font-display text-7xl md:text-9xl font-black text-[#15122e] leading-none mb-6">
              BY THE NUMBERS
            </h2>

            <div className="flex items-center justify-center gap-4">
              <svg width="40" height="40" viewBox="0 0 40 40" className="text-[#f5c422]">
                <path d="M20,4 L24,16 L36,16 L26,24 L30,36 L20,28 L10,36 L14,24 L4,16 L16,16 Z" fill="currentColor" />
              </svg>
              <svg width="40" height="40" viewBox="0 0 40 40" className="text-[#388697]">
                <path d="M20,4 L24,16 L36,16 L26,24 L30,36 L20,28 L10,36 L14,24 L4,16 L16,16 Z" fill="currentColor" />
              </svg>
              <svg width="40" height="40" viewBox="0 0 40 40" className="text-[#f5c422]">
                <path d="M20,4 L24,16 L36,16 L26,24 L30,36 L20,28 L10,36 L14,24 L4,16 L16,16 Z" fill="currentColor" />
              </svg>
            </div>
          </div>

          {/* Ornate Stats Cards */}
          <div
            ref={statsCardsRef}
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
          >
            {[
              {
                year: "2025",
                label: "Registrations",
                value: "2,847",
                image:
                  "https://cdn.builder.io/api/v1/image/assets%2F7c19d5750a434083a19dfc82c5f593f4%2F4324065880c44c3789e791aabb29ea65?format=webp&width=600",
                accent: "#f5c422",
              },
              {
                year: "2025",
                label: "Sponsorships",
                value: "₹1.8 Cr",
                image:
                  "https://cdn.builder.io/api/v1/image/assets%2F7c19d5750a434083a19dfc82c5f593f4%2F1028d674e84843efbbe3ef684c03bbd2?format=webp&width=600",
                accent: "#388697",
              },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="relative group opacity-0 transform translate-y-8"
              >
                {/* Ornate Frame Structure */}
                <div className="relative">
                  {/* Multi-layer Border */}
                  <div className="absolute -inset-6 border-4 border-[#15122e] opacity-20"></div>
                  <div className="absolute -inset-4 border-2" style={{ borderColor: stat.accent }}></div>
                  <div className="absolute -inset-3 border border-[#15122e] opacity-40"></div>

                  {/* Corner Ornaments */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 border-t-4 border-l-4" style={{ borderColor: stat.accent }}></div>
                  <div className="absolute -top-4 -right-4 w-12 h-12 border-t-4 border-r-4" style={{ borderColor: stat.accent }}></div>
                  <div className="absolute -bottom-4 -left-4 w-12 h-12 border-b-4 border-l-4" style={{ borderColor: stat.accent }}></div>
                  <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-4 border-r-4" style={{ borderColor: stat.accent }}></div>

                  {/* Image Container */}
                  <div className="relative h-[500px] overflow-hidden bg-[#15122e] p-3">
                    <img
                      src={stat.image}
                      alt={stat.label}
                      className="w-full h-full object-cover sepia-[0.3] group-hover:sepia-0 transition-all duration-700"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#15122e] via-[#15122e]/60 to-transparent"></div>

                    {/* Content Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <div className="relative">
                        {/* Decorative Top Border */}
                        <div className="flex items-center gap-2 mb-6">
                          <div className="w-3 h-3 rotate-45" style={{ backgroundColor: stat.accent }}></div>
                          <div className="flex-1 h-px" style={{ backgroundColor: stat.accent }}></div>
                          <div className="w-3 h-3 rotate-45" style={{ backgroundColor: stat.accent }}></div>
                        </div>

                        <p className="font-cinzel text-xs uppercase tracking-[0.4em] text-[#f3e8dc] mb-3">
                          {stat.year} — {stat.label}
                        </p>

                        <div className="relative inline-block">
                          <div className="absolute -inset-2 opacity-30" style={{ backgroundColor: stat.accent }}></div>
                          <p className="relative font-display text-7xl font-black px-4 py-2" style={{ color: stat.accent }}>
                            {stat.value}
                          </p>
                        </div>

                        {/* Ornamental Bottom */}
                        <div className="mt-6 flex items-center justify-between">
                          <div className="flex gap-2">
                            <div className="w-2 h-2 rotate-45 bg-[#f3e8dc]"></div>
                            <div className="w-2 h-2 rotate-45" style={{ backgroundColor: stat.accent }}></div>
                            <div className="w-2 h-2 rotate-45 bg-[#f3e8dc]"></div>
                          </div>
                          <svg width="30" height="30" viewBox="0 0 30 30" style={{ color: stat.accent }}>
                            <path d="M15,2 L18,12 L28,12 L20,18 L23,28 L15,22 L7,28 L10,18 L2,12 L12,12 Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brochure Section - Royal Scroll */}
      <section
        id="brochure"
        className="py-24 md:py-32 bg-[#388697] relative overflow-hidden"
      >
        {/* Ornate Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <defs>
              <pattern id="mughal-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="1.5" fill="#15122e" />
                <path d="M 10,5 L 15,10 L 10,15 L 5,10 Z" fill="none" stroke="#15122e" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#mughal-pattern)" />
          </svg>
        </div>

        {/* Decorative Border */}
        <div className="absolute top-0 left-0 right-0 flex justify-center gap-4 py-4">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="w-2 h-2 rotate-45 bg-[#f5c422] opacity-50"></div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
            {/* Left - Ornate Manuscript Frame */}
            <div
              ref={brochureLeftRef}
              className="md:col-span-2 opacity-0 transform translate-y-8"
            >
              <div className="relative">
                {/* Ornate Multi-layer Frame */}
                <div className="absolute -inset-8 border-2 border-[#f5c422]"></div>
                <div className="absolute -inset-6 border border-[#15122e]"></div>
                <div className="absolute -inset-4 border-2 border-[#f3e8dc]"></div>

                {/* Corner Decorations */}
                <div className="absolute -top-6 -left-6 w-16 h-16 border-t-4 border-l-4 border-[#f5c422]"></div>
                <div className="absolute -top-6 -right-6 w-16 h-16 border-t-4 border-r-4 border-[#f5c422]"></div>
                <div className="absolute -bottom-6 -left-6 w-16 h-16 border-b-4 border-l-4 border-[#f5c422]"></div>
                <div className="absolute -bottom-6 -right-6 w-16 h-16 border-b-4 border-r-4 border-[#f5c422]"></div>

                {/* Manuscript Image */}
                <div className="relative bg-[#f3e8dc] p-4">
                  <div className="bg-white p-3 shadow-2xl">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F7c19d5750a434083a19dfc82c5f593f4%2Fa3b9abeeff424a8d82fadf2d789e4d7a?format=webp&width=600"
                      alt="Brochure"
                      className="w-full h-auto"
                    />
                  </div>
                </div>

                {/* Ornamental Star Accents */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <svg width="30" height="30" viewBox="0 0 30 30" className="text-[#f5c422]">
                    <path d="M15,2 L18,12 L28,12 L20,18 L23,28 L15,22 L7,28 L10,18 L2,12 L12,12 Z" fill="currentColor" />
                  </svg>
                </div>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                  <svg width="30" height="30" viewBox="0 0 30 30" className="text-[#15122e]">
                    <path d="M15,2 L18,12 L28,12 L20,18 L23,28 L15,22 L7,28 L10,18 L2,12 L12,12 Z" fill="currentColor" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Right - Royal Proclamation Style */}
            <div className="md:col-span-3">
              <div
                ref={brochureHeadingRef}
                className="mb-12 opacity-0 transform translate-y-8"
              >
                {/* Ornate Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 border-2 border-[#f5c422] rotate-45"></div>
                  <div className="flex-1 h-px bg-[#f5c422]"></div>
                  <div className="w-12 h-12 border-2 border-[#f5c422] rotate-45"></div>
                </div>

                <h2 className="font-display text-7xl md:text-8xl font-black text-white leading-none mb-6">
                  COMPLETE<br />GUIDE
                </h2>

                <div className="flex items-center gap-3">
                  <svg width="40" height="40" viewBox="0 0 40 40" className="text-[#f5c422]">
                    <path d="M20,4 L24,16 L36,16 L26,24 L30,36 L20,28 L10,36 L14,24 L4,16 L16,16 Z" fill="currentColor" />
                  </svg>
                  <div className="w-32 h-1 bg-[#f5c422]"></div>
                  <svg width="40" height="40" viewBox="0 0 40 40" className="text-[#f5c422]">
                    <path d="M20,4 L24,16 L36,16 L26,24 L30,36 L20,28 L10,36 L14,24 L4,16 L16,16 Z" fill="currentColor" />
                  </svg>
                </div>
              </div>

              <div
                ref={brochureRightRef}
                className="opacity-0 transform translate-y-8"
              >
                {/* Ornate Content Box */}
                <div className="relative bg-[#15122e] border-4 border-[#f5c422] p-10 mb-8">
                  {/* Corner Ornaments */}
                  <div className="absolute -top-3 -left-3 w-6 h-6 bg-[#f5c422]"></div>
                  <div className="absolute -top-3 -right-3 w-6 h-6 bg-[#f5c422]"></div>
                  <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-[#f5c422]"></div>
                  <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-[#f5c422]"></div>

                  <p className="font-cinzel text-lg text-[#f3e8dc] leading-relaxed mb-8 italic">
                    Download our comprehensive tournament manuscript featuring complete details about Vakruta's debate format, schedule, rules, and registration information.
                  </p>

                  {/* Ornamental List */}
                  <div className="space-y-4">
                    {[
                      "Tournament Format & Asian Parliamentary Rules",
                      "Detailed Schedule & Round Breakdowns",
                      "Registration Process & Eligibility Criteria",
                      "Prize Pool & Recognition Categories",
                      "Adjudication Standards & Judging Process",
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-4 group"
                      >
                        <div className="flex-shrink-0 mt-2">
                          <div className="w-4 h-4 border-2 border-[#f5c422] rotate-45 group-hover:bg-[#f5c422] transition-colors duration-300"></div>
                        </div>
                        <span className="font-cinzel text-sm text-[#f3e8dc] leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Ornate Download Button */}
                <div className="relative group">
                  {/* Decorative Border Animation */}
                  <div className="absolute -inset-2 border-2 border-[#f5c422] group-hover:inset-0 transition-all duration-300"></div>

                  <button className="relative w-full bg-[#f5c422] text-[#15122e] font-display text-xl font-black py-6 px-8 uppercase tracking-[0.2em] group-hover:bg-[#f3e8dc] transition-all duration-300">
                    <span className="inline-flex items-center justify-center gap-4">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12,2 L15,10 L23,10 L17,15 L19,23 L12,18 L5,23 L7,15 L1,10 L9,10 Z" />
                      </svg>
                      Download Brochure
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12,2 L15,10 L23,10 L17,15 L19,23 L12,18 L5,23 L7,15 L1,10 L9,10 Z" />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Decorative Border */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-4 py-4">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="w-2 h-2 rotate-45 bg-[#f5c422] opacity-50"></div>
          ))}
        </div>
      </section>

      {/* CTA Section - Royal Decree */}
      <section
        ref={ctaSectionRef}
        className="relative py-32 md:py-48 bg-[#15122e] overflow-hidden opacity-0 transform translate-y-8"
      >
        {/* Ornate Background */}
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F7c19d5750a434083a19dfc82c5f593f4%2F7bd6f9d19eb849b583b1cfc21fd88993?format=webp&width=1400"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Decorative Pattern Overlay */}
        <IslamicPattern className="absolute inset-0 opacity-50" />

        {/* Top Border Decoration */}
        <div className="absolute top-0 left-0 right-0 flex justify-center gap-6 py-6">
          {[...Array(12)].map((_, i) => (
            <div key={i}>
              {i % 3 === 0 ? (
                <svg width="20" height="20" viewBox="0 0 20 20" className="text-[#f5c422] opacity-30">
                  <path d="M10,2 L12,8 L18,8 L13,12 L15,18 L10,14 L5,18 L7,12 L2,8 L8,8 Z" fill="currentColor" />
                </svg>
              ) : (
                <div className="w-2 h-2 rotate-45 bg-[#388697] opacity-30"></div>
              )}
            </div>
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Ornate Header */}
            <div className="mb-16">
              <div className="flex items-center justify-center gap-6 mb-8">
                <div className="w-20 h-px bg-gradient-to-r from-transparent to-[#388697]"></div>
                <div className="relative">
                  <div className="absolute inset-0 border-2 border-[#388697] rotate-45"></div>
                  <span className="relative block font-cinzel text-xs uppercase tracking-[0.6em] text-[#388697] px-10 py-3">
                    Be Part of History
                  </span>
                </div>
                <div className="w-20 h-px bg-gradient-to-l from-transparent to-[#388697]"></div>
              </div>

              {/* Grand Title with Ornate Frame */}
              <div className="relative inline-block">
                {/* Decorative Corner Elements */}
                <div className="absolute -top-10 -left-10 w-20 h-20 border-t-4 border-l-4 border-[#f5c422]"></div>
                <div className="absolute -top-10 -right-10 w-20 h-20 border-t-4 border-r-4 border-[#f5c422]"></div>
                <div className="absolute -bottom-10 -left-10 w-20 h-20 border-b-4 border-l-4 border-[#388697]"></div>
                <div className="absolute -bottom-10 -right-10 w-20 h-20 border-b-4 border-r-4 border-[#388697]"></div>

                {/* Stars in Corners */}
                <div className="absolute -top-6 -left-6">
                  <svg width="40" height="40" viewBox="0 0 40 40" className="text-[#f5c422]">
                    <path d="M20,4 L24,16 L36,16 L26,24 L30,36 L20,28 L10,36 L14,24 L4,16 L16,16 Z" fill="currentColor" />
                  </svg>
                </div>
                <div className="absolute -top-6 -right-6">
                  <svg width="40" height="40" viewBox="0 0 40 40" className="text-[#388697]">
                    <path d="M20,4 L24,16 L36,16 L26,24 L30,36 L20,28 L10,36 L14,24 L4,16 L16,16 Z" fill="currentColor" />
                  </svg>
                </div>
                <div className="absolute -bottom-6 -left-6">
                  <svg width="40" height="40" viewBox="0 0 40 40" className="text-[#388697]">
                    <path d="M20,4 L24,16 L36,16 L26,24 L30,36 L20,28 L10,36 L14,24 L4,16 L16,16 Z" fill="currentColor" />
                  </svg>
                </div>
                <div className="absolute -bottom-6 -right-6">
                  <svg width="40" height="40" viewBox="0 0 40 40" className="text-[#f5c422]">
                    <path d="M20,4 L24,16 L36,16 L26,24 L30,36 L20,28 L10,36 L14,24 L4,16 L16,16 Z" fill="currentColor" />
                  </svg>
                </div>

                <div className="px-20 py-12">
                  <h2 className="font-display text-8xl md:text-[10rem] font-black text-[#f5c422] leading-[0.9]">
                    VAKRUTA
                  </h2>
                  <div className="flex items-center justify-center gap-4 my-6">
                    <div className="w-24 h-1 bg-[#388697]"></div>
                    <div className="w-6 h-6 rotate-45 border-2 border-[#f5c422]"></div>
                    <div className="w-24 h-1 bg-[#388697]"></div>
                  </div>
                  <p className="font-display text-6xl font-black text-white">2025</p>
                </div>
              </div>
            </div>

            {/* Ornate Description Box */}
            <div className="max-w-4xl mx-auto mb-16">
              <div className="relative bg-gradient-to-b from-[#388697]/20 to-transparent border-t-2 border-b-2 border-[#f5c422] py-10 px-8">
                {/* Corner Decorations */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#f5c422]"></div>
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#f5c422]"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#388697]"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#388697]"></div>

                <p className="font-cinzel text-xl md:text-2xl text-[#f3e8dc] leading-relaxed italic">
                  Step onto the stage at NIT Rourkela's premier debate tournament. Challenge your intellect, sharpen your arguments, and compete with the nation's finest debaters in the grand tradition of scholarly discourse.
                </p>
              </div>
            </div>

            {/* Royal CTA Button */}
            <div className="relative inline-block">
              {/* Multi-layer Ornate Frame */}
              <div className="absolute -inset-8 border-2 border-[#f5c422] opacity-30"></div>
              <div className="absolute -inset-6 border border-[#388697] opacity-50"></div>
              <div className="absolute -inset-4 border-2 border-[#f5c422]"></div>

              {/* Corner Stars */}
              <div className="absolute -top-4 -left-4">
                <svg width="30" height="30" viewBox="0 0 30 30" className="text-[#f5c422]">
                  <path d="M15,2 L18,12 L28,12 L20,18 L23,28 L15,22 L7,28 L10,18 L2,12 L12,12 Z" fill="currentColor" />
                </svg>
              </div>
              <div className="absolute -top-4 -right-4">
                <svg width="30" height="30" viewBox="0 0 30 30" className="text-[#f5c422]">
                  <path d="M15,2 L18,12 L28,12 L20,18 L23,28 L15,22 L7,28 L10,18 L2,12 L12,12 Z" fill="currentColor" />
                </svg>
              </div>
              <div className="absolute -bottom-4 -left-4">
                <svg width="30" height="30" viewBox="0 0 30 30" className="text-[#f5c422]">
                  <path d="M15,2 L18,12 L28,12 L20,18 L23,28 L15,22 L7,28 L10,18 L2,12 L12,12 Z" fill="currentColor" />
                </svg>
              </div>
              <div className="absolute -bottom-4 -right-4">
                <svg width="30" height="30" viewBox="0 0 30 30" className="text-[#f5c422]">
                  <path d="M15,2 L18,12 L28,12 L20,18 L23,28 L15,22 L7,28 L10,18 L2,12 L12,12 Z" fill="currentColor" />
                </svg>
              </div>

              <button className="relative group">
                <div className="absolute inset-0 bg-[#f5c422] transform group-hover:scale-105 transition-transform duration-300"></div>
                <div className="relative bg-[#15122e] m-2 px-16 py-7 font-display font-black text-2xl text-[#f5c422] uppercase tracking-[0.3em] group-hover:bg-[#f5c422] group-hover:text-[#15122e] transition-colors duration-300">
                  <span className="inline-flex items-center gap-4">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="currentColor">
                      <path d="M14,2 L17,11 L26,11 L19,17 L22,26 L14,20 L6,26 L9,17 L2,11 L11,11 Z" />
                    </svg>
                    Register Now
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="currentColor">
                      <path d="M14,2 L17,11 L26,11 L19,17 L22,26 L14,20 L6,26 L9,17 L2,11 L11,11 Z" />
                    </svg>
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Ornate Border */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-6 py-6">
          {[...Array(12)].map((_, i) => (
            <div key={i}>
              {i % 3 === 0 ? (
                <svg width="20" height="20" viewBox="0 0 20 20" className="text-[#388697] opacity-30">
                  <path d="M10,2 L12,8 L18,8 L13,12 L15,18 L10,14 L5,18 L7,12 L2,8 L8,8 Z" fill="currentColor" />
                </svg>
              ) : (
                <div className="w-2 h-2 rotate-45 bg-[#f5c422] opacity-30"></div>
              )}
            </div>
          ))}
        </div>

        {/* Large Ornate Background Text */}
        <div className="absolute bottom-10 left-0 right-0 overflow-hidden opacity-5 pointer-events-none select-none">
          <div className="flex items-center justify-center gap-12">
            <svg width="80" height="80" viewBox="0 0 80 80" className="text-white">
              <path d="M40,8 L48,32 L72,32 L52,48 L60,72 L40,56 L20,72 L28,48 L8,32 L32,32 Z" fill="currentColor" />
            </svg>
            <p className="font-display text-[8rem] font-black text-white">
              VAKRUTA
            </p>
            <svg width="80" height="80" viewBox="0 0 80 80" className="text-white">
              <path d="M40,8 L48,32 L72,32 L52,48 L60,72 L40,56 L20,72 L28,48 L8,32 L32,32 Z" fill="currentColor" />
            </svg>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        @font-face {
          font-family: 'Display';
          src: local('Georgia'), local('serif');
        }

        .font-cinzel {
          font-family: 'Cinzel', Georgia, serif;
        }

        .clip-hexagon {
          clip-path: polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%);
        }

        /* Ornate scrollbar */
        ::-webkit-scrollbar {
          width: 12px;
        }

        ::-webkit-scrollbar-track {
          background: #15122e;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #f5c422 0%, #388697 100%);
          border-radius: 0;
        }

        /* Subtle shimmer effect on ornamental elements */
        @keyframes shimmer {
          0% { opacity: 0.3; }
          50% { opacity: 0.6; }
          100% { opacity: 0.3; }
        }

        .animate-shimmer {
          animation: shimmer 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}