import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Index() {
  const heroHeadingRef = useRef<HTMLHeadingElement>(null);
  const heroParagraphRef = useRef<HTMLParagraphElement>(null);
  const heroImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only hero animation on page load
    gsap.from(heroHeadingRef.current, {
      duration: 0.8,
      opacity: 0,
      y: 20,
      ease: "power2.out",
    });

    gsap.from(heroParagraphRef.current, {
      duration: 0.8,
      opacity: 0,
      y: 20,
      delay: 0.1,
      ease: "power2.out",
    });

    gsap.from(heroImageRef.current, {
      duration: 0.8,
      opacity: 0,
      scale: 0.95,
      delay: 0.2,
      ease: "power2.out",
    });
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section id="hero" className="flex-1 relative overflow-hidden py-20 md:py-32 bg-white">
        {/* Background pattern decorations */}
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-blue-100/30 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-amber-100/30 blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
          {/* Left Content */}
          <div className="flex-1">
            <h1
              ref={heroHeadingRef}
              className="font-display text-5xl md:text-7xl font-bold text-blue-900 mb-6 leading-tight"
            >
              Welcome to
              <br />
              <span className="text-amber-600">Vakruta</span>
            </h1>
            <p
              ref={heroParagraphRef}
              className="font-cinzel text-lg md:text-xl text-blue-800 mb-8 leading-relaxed max-w-lg"
            >
              Discover the magnificence of Indian heritage through a celebration of tradition,
              innovation, and timeless elegance inspired by the grandeur of the Mughal Empire.
            </p>
            <div className="flex gap-4">
              <button className="bg-blue-900 hover:bg-blue-800 text-white font-cinzel font-semibold px-8 py-3 rounded-lg transition-colors shadow-lg">
                Explore More
              </button>
              <button className="border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white font-cinzel font-semibold px-8 py-3 rounded-lg transition-colors">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Visual Element */}
          <div ref={heroImageRef} className="flex-1 relative">
            <div className="relative w-full h-96 md:h-full flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-amber-400/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-white rounded-3xl p-8 border-2 border-blue-900/10 shadow-lg">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F7c19d5750a434083a19dfc82c5f593f4%2F2b1a5895495e4fb98781781147a0dfc0?format=webp&width=400"
                  alt="Vakruta Pattern"
                  className="w-full h-auto max-h-80 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Divider with Image */}
      <section className="relative py-12 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F7c19d5750a434083a19dfc82c5f593f4%2F7c400c91cb1d418f949810b8a3a64fdf?format=webp&width=800"
            alt="Decorative pattern"
            className="w-full h-32 md:h-48 object-cover rounded-2xl shadow-md opacity-90"
          />
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 md:py-32 bg-white border-t border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              ref={heroHeadingRef}
              className="font-display text-5xl md:text-6xl font-bold text-blue-900 mb-4"
            >
              About Vakruta
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="font-cinzel text-lg text-blue-900 leading-relaxed">
                Vakruta stands as a testament to the rich cultural heritage of India, drawing
                inspiration from the magnificent Mughal Empire. Our mission is to celebrate the
                artistic excellence, architectural grandeur, and timeless traditions that have
                shaped Indian civilization.
              </p>

              <p className="font-cinzel text-lg text-blue-900 leading-relaxed">
                We bring together scholars, artisans, and enthusiasts who appreciate the intricate
                craftsmanship, elaborate geometric patterns, and profound symbolism that characterize
                Mughal art and architecture.
              </p>

              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="bg-blue-50 rounded-lg p-4 text-center border-l-4 border-blue-600">
                  <p className="font-display text-2xl font-bold text-blue-900">1000+</p>
                  <p className="font-cinzel text-sm text-blue-800">Members</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-4 text-center border-l-4 border-blue-600">
                  <p className="font-display text-2xl font-bold text-blue-900">50+</p>
                  <p className="font-cinzel text-sm text-blue-800">Events</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-4 text-center border-l-4 border-blue-600">
                  <p className="font-display text-2xl font-bold text-blue-900">25</p>
                  <p className="font-cinzel text-sm text-blue-800">Years</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F7c19d5750a434083a19dfc82c5f593f4%2F14012f80d4794515a0272d68adccc272?format=webp&width=500"
                alt="Indian Architecture"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F7c19d5750a434083a19dfc82c5f593f4%2F44f9c2e36d114d12b1641fa1fd6f858b?format=webp&width=500"
                alt="Mughal Architecture"
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pattern Section Divider */}
      <section className="relative py-12 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F7c19d5750a434083a19dfc82c5f593f4%2F353e5083de13499684ae328314192af4?format=webp&width=800"
            alt="Floral pattern"
            className="w-full h-32 md:h-40 object-cover rounded-2xl shadow-md opacity-90"
          />
        </div>
      </section>

      {/* Past Statistics Section */}
      <section id="statistics" className="py-20 md:py-32 bg-white border-t border-blue-100 relative">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5 z-0">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F7c19d5750a434083a19dfc82c5f593f4%2F1881e1af68a940969a211c22d36c72f2?format=webp&width=800"
            alt="Background pattern"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-display text-5xl md:text-6xl font-bold text-blue-900 mb-4">
              Our Legacy
            </h2>
            <p className="font-cinzel text-xl text-blue-800">
              Celebrating Years of Excellence and Growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { year: "2023", label: "Registrations", value: "2,847", icon: "👥" },
              { year: "2023", label: "Sponsorships", value: "₹2.5 Cr", icon: "💼" },
              { year: "2022", label: "Registrations", value: "1,923", icon: "👥" },
              { year: "2022", label: "Sponsorships", value: "₹1.8 Cr", icon: "💼" },
            ].map((stat, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 to-amber-600/5 rounded-2xl group-hover:from-blue-900/10 group-hover:to-amber-600/10 transition-all"></div>
                <div className="relative bg-white rounded-2xl p-8 border border-blue-100 shadow-md hover:shadow-lg transition-all">
                  <div className="text-4xl mb-4">{stat.icon}</div>
                  <p className="font-cinzel text-sm text-blue-700 uppercase tracking-wider">
                    {stat.year} - {stat.label}
                  </p>
                  <p className="font-display text-4xl font-bold text-blue-900 mt-2">
                    {stat.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architectural Pattern Divider */}
      <section className="relative py-12 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F7c19d5750a434083a19dfc82c5f593f4%2F9776c5b8bab042139d8581060bd3eadc?format=webp&width=800"
            alt="Architectural pattern"
            className="w-full h-32 md:h-48 object-cover rounded-2xl shadow-md opacity-90"
          />
        </div>
      </section>

      {/* Brochure Section */}
      <section id="brochure" className="py-20 md:py-32 bg-white border-t border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="font-display text-5xl md:text-6xl font-bold text-blue-900 mb-6">
              Discover Our Brochure
            </h2>
            <p className="font-cinzel text-lg text-blue-800 max-w-2xl">
              Explore the complete story of Vakruta through our comprehensive brochure,
              featuring detailed information about our heritage, achievements, and vision.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Left - Logo Showcase */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/15 to-amber-400/15 rounded-3xl blur-2xl"></div>
                <div className="relative bg-white rounded-3xl p-12 shadow-lg border-2 border-amber-500">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F7c19d5750a434083a19dfc82c5f593f4%2F2b1a5895495e4fb98781781147a0dfc0?format=webp&width=600"
                    alt="Vakruta Logo"
                    className="w-80 h-80 object-contain mx-auto"
                  />
                  <p className="text-center font-cinzel text-blue-900 font-semibold mt-6">
                    Vakruta - Symbol of Heritage
                  </p>
                </div>
              </div>
            </div>

            {/* Right - Brochure Info */}
            <div className="space-y-6">
              <div className="bg-blue-50 rounded-2xl p-8 border border-blue-200">
                <h3 className="font-display text-2xl font-bold text-blue-900 mb-4">
                  What's Inside
                </h3>
                <ul className="space-y-4 font-cinzel text-blue-800">
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 font-bold text-xl">✦</span>
                    <span>Complete History and Heritage of Vakruta</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 font-bold text-xl">✦</span>
                    <span>Detailed Architectural and Artistic Inspirations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 font-bold text-xl">✦</span>
                    <span>Member Benefits and Opportunities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 font-bold text-xl">✦</span>
                    <span>Sponsorship and Partnership Programs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 font-bold text-xl">✦</span>
                    <span>Upcoming Events and Initiatives</span>
                  </li>
                </ul>
              </div>

              <button className="w-full bg-gradient-to-r from-blue-900 to-blue-800 hover:from-blue-800 hover:to-blue-700 text-white font-display text-lg font-bold py-4 px-8 rounded-xl shadow-lg transition-all">
                Download Brochure
              </button>

              <p className="text-center font-cinzel text-sm text-blue-700">
                PDF format • 5.2 MB • Available in English & Hindi
              </p>
            </div>
          </div>

          {/* Gallery of Images */}
          <div className="mt-16">
            <h3 className="font-display text-3xl font-bold text-blue-900 text-center mb-8">
              Visual Heritage
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F7c19d5750a434083a19dfc82c5f593f4%2Fb1479fc524a048b99b0a4b1fd359f851?format=webp&width=500"
                alt="Heritage imagery"
                className="w-full h-80 object-cover rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F7c19d5750a434083a19dfc82c5f593f4%2F3d2f8fde9eab4b9a9de13befee07b2df?format=webp&width=500"
                alt="Pattern imagery"
                className="w-full h-80 object-cover rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F7c19d5750a434083a19dfc82c5f593f4%2F14012f80d4794515a0272d68adccc272?format=webp&width=500"
                alt="Architecture imagery"
                className="w-full h-80 object-cover rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gradient Section at Bottom */}
      <section className="relative py-20 overflow-hidden bg-white border-t border-blue-100">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F7c19d5750a434083a19dfc82c5f593f4%2F7bd6f9d19eb849b583b1cfc21fd88993?format=webp&width=1200"
            alt="Gradient Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/30 to-white"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Join the Vakruta Movement
          </h2>
          <p className="font-cinzel text-lg text-blue-800 max-w-2xl mx-auto mb-8">
            Be part of a growing community dedicated to preserving and celebrating
            the magnificent heritage of Indian civilization.
          </p>
          <button className="bg-amber-600 hover:bg-amber-700 text-white font-display font-bold text-lg px-10 py-4 rounded-lg shadow-lg transition-colors">
            Get Involved Today
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
