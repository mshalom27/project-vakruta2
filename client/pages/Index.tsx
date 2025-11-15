import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";

export default function Index() {
  return (
    <div className="min-h-screen bg-[#e2d0bb] flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section id="hero" className="flex-1 relative overflow-hidden py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 z-10">
            <h1 className="font-display text-5xl md:text-7xl font-bold text-blue-900 mb-6 leading-tight">
              Welcome to
              <br />
              <span className="text-amber-600">Vakruta</span>
            </h1>
            <p className="font-cinzel text-lg md:text-xl text-blue-800 mb-8 leading-relaxed max-w-lg">
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
          <div className="flex-1 relative">
            <div className="relative w-full h-96 md:h-full flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-amber-400/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-white/40 backdrop-blur-sm rounded-3xl p-8 border-2 border-blue-900/20 shadow-2xl">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F7c19d5750a434083a19dfc82c5f593f4%2F2b1a5895495e4fb98781781147a0dfc0?format=webp&width=400"
                  alt="Vakruta Pattern"
                  className="w-full h-auto max-h-80 object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 right-10 w-32 h-32 border-2 border-amber-400/30 rounded-full opacity-50"></div>
        <div className="absolute bottom-20 left-5 w-24 h-24 border border-blue-400/30 rounded-lg opacity-30 transform rotate-45"></div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 md:py-32 bg-gradient-to-b from-[#e2d0bb] to-[#d9c3a8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-5xl md:text-6xl font-bold text-blue-900 mb-4">
              About Vakruta
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-blue-900/10 shadow-lg">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F7c19d5750a434083a19dfc82c5f593f4%2F14012f80d4794515a0272d68adccc272?format=webp&width=500"
                alt="Indian Architecture"
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>

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
                <div className="bg-amber-100 rounded-lg p-4 text-center border-l-4 border-amber-600">
                  <p className="font-display text-2xl font-bold text-blue-900">1000+</p>
                  <p className="font-cinzel text-sm text-blue-800">Members</p>
                </div>
                <div className="bg-amber-100 rounded-lg p-4 text-center border-l-4 border-amber-600">
                  <p className="font-display text-2xl font-bold text-blue-900">50+</p>
                  <p className="font-cinzel text-sm text-blue-800">Events</p>
                </div>
                <div className="bg-amber-100 rounded-lg p-4 text-center border-l-4 border-amber-600">
                  <p className="font-display text-2xl font-bold text-blue-900">25</p>
                  <p className="font-cinzel text-sm text-blue-800">Years</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Past Statistics Section */}
      <section id="statistics" className="py-20 md:py-32 bg-gradient-to-b from-[#d9c3a8] to-[#e2d0bb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <div
                key={idx}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-amber-600/10 rounded-2xl group-hover:from-blue-900/20 group-hover:to-amber-600/20 transition-all"></div>
                <div className="relative bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-900/10 shadow-lg hover:shadow-xl transition-all">
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

          {/* Growth Chart Visual */}
          <div className="mt-16 bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-blue-900/10 shadow-lg">
            <h3 className="font-display text-2xl font-bold text-blue-900 mb-8">
              Growth Trajectory
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "2020", registrations: "40%", sponsorship: "30%" },
                { label: "2021", registrations: "65%", sponsorship: "55%" },
                { label: "2022", registrations: "85%", sponsorship: "75%" },
                { label: "2023", registrations: "100%", sponsorship: "100%" },
              ].map((year, idx) => (
                <div key={idx} className="space-y-4">
                  <p className="font-cinzel font-bold text-blue-900 text-center">
                    {year.label}
                  </p>
                  <div className="space-y-2">
                    <div>
                      <div className="text-xs font-cinzel text-blue-700 mb-1">
                        Registrations
                      </div>
                      <div className="bg-blue-200 rounded-full h-3 overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-blue-600 to-blue-900 h-full"
                          style={{ width: year.registrations }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="text-xs font-cinzel text-amber-700 mb-1">
                        Sponsorship
                      </div>
                      <div className="bg-amber-200 rounded-full h-3 overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-amber-500 to-amber-700 h-full"
                          style={{ width: year.sponsorship }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Brochure Section */}
      <section id="brochure" className="py-20 md:py-32 bg-gradient-to-b from-[#e2d0bb] via-[#e2d0bb] to-blue-900/5">
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

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Logo Showcase */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 to-amber-400/30 rounded-3xl blur-2xl"></div>
                <div className="relative bg-white rounded-3xl p-12 shadow-2xl border-2 border-amber-500">
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
              <div className="bg-gradient-to-br from-blue-50 to-amber-50 rounded-2xl p-8 border border-blue-200">
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

              <button className="w-full bg-gradient-to-r from-blue-900 to-blue-800 hover:from-blue-800 hover:to-blue-700 text-white font-display text-lg font-bold py-4 px-8 rounded-xl shadow-lg transition-all transform hover:scale-105">
                Download Brochure
              </button>

              <p className="text-center font-cinzel text-sm text-blue-700">
                PDF format • 5.2 MB • Available in English & Hindi
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gradient Section at Bottom */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F7c19d5750a434083a19dfc82c5f593f4%2F7bd6f9d19eb849b583b1cfc21fd88993?format=webp&width=1200"
            alt="Gradient Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#e2d0bb]/50 to-[#e2d0bb]"></div>
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
