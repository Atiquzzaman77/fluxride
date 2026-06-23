import React from "react";
import Link from "next/link";
import Image from "next/image";

const CarsPage = async () => {
  const res = await fetch("http://localhost:5000/cars", {
    cache: "no-store",
  });

  const cars = await res.json();

  return (
    <section className="min-h-screen bg-[#0F0F17] py-16 px-4 relative overflow-hidden">
      <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-purple-700/20 blur-3xl"></div>
      <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-violet-700/20 blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">
            Available Cars
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-violet-500">
              Explore & Book
            </span>
          </h1>
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {cars?.map((car) => (
            
            <div
              key={car._id}
              
              className="flex flex-col bg-white/5 backdrop-blur-xl border border-purple-900/30 rounded-3xl overflow-hidden"
            >
              {/* IMAGE */}
              <div className="relative h-52 w-full">
                {car.imageUrl ? (
                  <Image
                    src={car.imageUrl}
                    alt={car.carName || "car"}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-4xl text-white bg-[#1a1a25]">
                    🚗
                  </div>
                )}

                {/* STATUS */}
                <div
                  className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold ${
                    car.availabilityStatus === "Available"
                      ? "bg-green-500/20 text-green-400 border border-green-500/30"
                      : "bg-red-500/20 text-red-400 border border-red-500/30"
                  }`}
                >
                  {car.availabilityStatus}
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-6 flex flex-col flex-1">
                <h2 className="text-xl font-bold text-white">
                  {car.carName}
                </h2>

                <p className="text-gray-400 text-sm mt-1">
                  {car.carType} • {car.seatCapacity} Seats
                </p>

                <p className="text-gray-400 text-sm mt-2 line-clamp-2 min-h-10">
                  {car.description}
                </p>

                <div className="flex justify-between items-center mt-5">
                  <p className="text-purple-400 font-bold">
                    ${car.rentPrice}/day
                  </p>

                  <span className="text-gray-500 text-sm">
                    📍 {car.pickupLocation}
                  </span>
                </div>

                
                <Link
                  href={`/cars/${car._id}`}
                  className="mt-auto block text-center py-3 rounded-xl bg-linear-to-r from-purple-700 to-violet-600 text-white font-semibold"
                >
                  Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarsPage;