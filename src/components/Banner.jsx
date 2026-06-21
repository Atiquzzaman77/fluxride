import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <section className="relative overflow-hidden bg-[#0F0F17]">
      {/* Background Glow */}
      <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-purple-700/20 blur-3xl"></div>
      <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-violet-700/20 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-2 rounded-full border border-purple-500/30 bg-purple-900/10 text-purple-400 text-sm font-medium mb-6">
              Premium Car Rental Experience
            </span>

            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white">
              Drive Your Dream Car
              <span className="block text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-violet-500">
                Anytime, Anywhere
              </span>
            </h1>

            <p className="mt-6 text-lg text-gray-400 leading-relaxed max-w-xl">
              Discover a wide range of premium vehicles for every journey.
              Book effortlessly, travel comfortably, and enjoy the road with
              FLUXRIDE.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/cars"
                className="px-8 py-3 rounded-xl bg-linear-to-r from-purple-700 to-violet-600 text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-700/40"
              >
                Explore Cars
              </Link>

              <Link
                href="/add-car"
                className="px-8 py-3 rounded-xl border border-purple-700/40 text-gray-300 transition-all duration-300 hover:border-purple-500 hover:text-white hover:bg-purple-900/20"
              >
                Add Your Car
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative group">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-600/20 to-violet-600/20 blur-2xl scale-95 group-hover:scale-105 transition-all duration-700"></div>

            <div className="relative overflow-hidden rounded-3xl border border-purple-900/30">
              <Image
                src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1200"
                alt="Luxury Car"
                width={800}
                height={500}
                priority
                className="w-full h-auto object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
              />
            </div>

            {/* Premium Hover Glow */}
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 shadow-[0_0_80px_rgba(168,85,247,0.35)]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;