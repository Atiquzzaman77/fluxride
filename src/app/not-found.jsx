import React from "react";
import Link from "next/link";
import Image from "next/image";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-[#0F0F17] flex items-center justify-center px-6">
      <div className="text-center max-w-xl">
        
        {/* Car Image */}
        <div className="flex justify-center mb-6">
          <Image
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800"
            alt="Car not found"
            width={500}
            height={300}
            className="rounded-xl shadow-lg shadow-purple-900/30 border border-purple-900/30"
          />
        </div>

        {/* Error Text */}
        <h1 className="text-6xl font-bold text-white mb-3">
          404
        </h1>

        <h2 className="text-2xl font-semibold text-purple-400 mb-4">
          Page Not Found
        </h2>

        <p className="text-gray-400 mb-8">
          The page you are looking for doesn’t exist or has been moved.
        </p>

        {/* Home Button */}
        <Link
          href="/"
          className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-purple-700 to-violet-600 text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-700/30"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;