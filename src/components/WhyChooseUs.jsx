import { FaCar, FaShieldAlt } from "react-icons/fa";
import { RiMoneyPoundCircleLine } from "react-icons/ri";
const WhyChooseUs = () => {
  const features = [
    {
      title: "Premium Vehicles",
      description:
        "Choose from a curated collection of luxury, sports, and family cars.",
      icon: <FaCar />,
    },
    {
      title: "Best Price Guarantee",
      description:
        "Competitive pricing with transparent costs and no hidden charges.",
      icon: <RiMoneyPoundCircleLine />,
    },
    {
      title: "24/7 Support",
      description:
        "Our dedicated team is available anytime to assist your journey.",
      icon: <FaShieldAlt />,
    },
  ];

  return (
    <section className="bg-[#0F0F17] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-white">
            Why Choose
            <span className="text-purple-500"> FLUXRIDE</span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Experience comfort, reliability, and premium service every
            time you rent a vehicle.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group bg-[#171722] border border-purple-900/30 rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 hover:border-purple-500/40 hover:shadow-[0_0_35px_rgba(168,85,247,0.18)]"
            >
              <div className="text-5xl mb-5">{feature.icon}</div>

              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

