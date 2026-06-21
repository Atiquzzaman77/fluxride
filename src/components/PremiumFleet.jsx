import Image from "next/image";

const PremiumFleet = () => {
  const cars = [
    {
      name: "Luxury Sedan",
      image:
        "https://images.unsplash.com/photo-1555215695-3004980ad54e",
    },
    {
      name: "Sports Car",
      image:
        "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7",
    },
    {
      name: "SUV Collection",
      image:
        "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b",
    },
  ];

  return (
    <section className="bg-[#11111A] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-white">
            Explore Our
            <span className="text-purple-500"> Premium Fleet</span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Discover vehicles designed for luxury, adventure, and everyday journeys.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {cars.map((car) => (
            <div
              key={car.name}
              className="group overflow-hidden rounded-3xl border border-purple-900/30 bg-[#171722]"
            >
              <div className="overflow-hidden">
                <Image
                  src={car.image}
                  alt={car.name}
                  width={500}
                  height={350}
                  className="w-full h-72 object-cover transition-all duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold text-white">
                  {car.name}
                </h3>

                <p className="text-gray-400 mt-3">
                  Premium comfort, exceptional performance, and unforgettable driving experiences.
                </p>

                <button className="mt-5 px-5 py-2 rounded-xl bg-linear-to-r from-purple-700 to-violet-600 text-white transition-all duration-300 hover:shadow-lg hover:shadow-purple-700/40">
                  Explore
                </button>
              </div>

              <div className="absolute"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PremiumFleet;