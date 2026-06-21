import Link from "next/link";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0F0F17] border-t border-purple-900/30">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-xl bg-linear-to-r from-purple-700 to-violet-500 flex items-center justify-center font-bold text-white italic">
                F
              </div>

              <h2 className="text-2xl font-bold text-white">
                FLUX<span className="text-purple-500">RIDE</span>
              </h2>
            </div>

            <p className="text-gray-400 leading-relaxed">
              Premium car rental platform designed to help you find,
              book, and manage vehicles with ease.
            </p>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-5">
              Useful Links
            </h3>

            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "Explore Cars", href: "/cars" },
                { name: "Add Car", href: "/add-car" },
                { name: "My Bookings", href: "/my-bookings" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-purple-400 transition-all duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-5">
              Contact Information
            </h3>

            <div className="space-y-3 text-gray-400">
              <p>📍 Dhaka, Bangladesh</p>
              <p>📞 +880 1234-567890</p>
              <p>✉️ support@fluxride.com</p>
            </div>
          </div>

          {/* Social Icons */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-5">
              Follow Us
            </h3>

            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-11 h-11 rounded-full bg-[#171722] border border-purple-900/40 flex items-center justify-center text-xl text-gray-300 hover:text-white hover:border-purple-500 hover:bg-purple-900/20 transition-all duration-300 hover:scale-110"
              >
                <FaGithub />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-[#171722] border border-purple-900/40 flex items-center justify-center text-xl text-gray-300 hover:text-white hover:border-purple-500 hover:bg-purple-900/20 transition-all duration-300 hover:scale-110"
              >
                <FaTwitter />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-[#171722] border border-purple-900/40 flex items-center justify-center text-xl text-gray-300 hover:text-white hover:border-purple-500 hover:bg-purple-900/20 transition-all duration-300 hover:scale-110"
              >
                <FaFacebook />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-[#171722] border border-purple-900/40 flex items-center justify-center text-xl text-gray-300 hover:text-white hover:border-purple-500 hover:bg-purple-900/20 transition-all duration-300 hover:scale-110"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-12 pt-6 border-t border-purple-900/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} FLUXRIDE. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link
              href="/privacy-policy"
              className="text-gray-500 hover:text-purple-400 transition-colors duration-300 text-sm"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="text-gray-500 hover:text-purple-400 transition-colors duration-300 text-sm"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;