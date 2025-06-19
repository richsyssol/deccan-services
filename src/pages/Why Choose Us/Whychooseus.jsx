import { motion } from "framer-motion";
import {
  ShieldCheck,
  Clock,
  Wrench,
  Award,
  Users,
  DollarSign,
  ThumbsUp,
  Truck,
} from "lucide-react";
import PageSection from "../../components/Herosection/PageSection";

// Sample images (replace with your actual image paths)
// import techTeam from "../images/technician-team.jpg";
// import emergencyService from "../images/24-7-service.jpg";
// import tools from "../images/repair-tools.jpg";
//import warranty from "../images/warranty-document.jpg";

const Whychooseus = () => {
  const reasons = [
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Certified Technicians",
      description:
        "Our team consists of fully certified and experienced professionals trained to handle all AC models.",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2023/11/364285120/MS/NV/GA/48749394/air-conditioner-repair-maintenance-service-1000x1000.jpg",
      imageAlt: "Our certified technician team",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "24/7 Emergency Service",
      description:
        "We offer round-the-clock emergency repairs to keep your home comfortable at all times.",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2023/11/364285120/MS/NV/GA/48749394/air-conditioner-repair-maintenance-service-1000x1000.jpg",
      imageAlt: "24/7 emergency AC repair service",
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Advanced Tools & Equipment",
      description:
        "We use state-of-the-art diagnostic tools for precise and efficient repairs.",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2023/11/364285120/MS/NV/GA/48749394/air-conditioner-repair-maintenance-service-1000x1000.jpg",
      imageAlt: "Professional AC repair tools",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "5 Years Warranty",
      description:
        "We stand by our work with an industry-leading warranty on parts and labor.",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2023/11/364285120/MS/NV/GA/48749394/air-conditioner-repair-maintenance-service-1000x1000.jpg",
      imageAlt: "Warranty documentation",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <PageSection page="whyChooseUs" />
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
            Why Choose <span className="text-green-600">Deccan AC Repair?</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We go above and beyond to deliver exceptional service that keeps
            your cooling systems running smoothly all year round.
          </p>
        </motion.div>

        {/* Reasons with Images - Alternating Layout */}
        <div className="space-y-20">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-8 md:gap-12`}
            >
              {/* Image Section */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="w-full md:w-1/2 rounded-xl overflow-hidden shadow-lg"
              >
                <img
                  src={reason.image}
                  alt={reason.imageAlt}
                  className="w-full h-64 md:h-96 object-cover hover:scale-105 transition-transform duration-500"
                />
              </motion.div>

              {/* Content Section */}
              <div className="w-full md:w-1/2">
                <motion.div
                  initial={{ x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="bg-white p-8 rounded-xl shadow-md border border-gray-100"
                >
                  <div className="flex items-center justify-center w-14 h-14 mb-4 rounded-full bg-gradient-to-r from-blue-100 to-green-100 text-blue-600">
                    {reason.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{reason.description}</p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-2 bg-gradient-to-r from-blue-600 to-green-500 text-white rounded-lg shadow-md"
                  >
                    Learn More
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Compact Benefits Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
            More Reasons to Choose Us
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Users className="w-8 h-8" />,
                title: "Customer-Centric",
                desc: "Your satisfaction is our top priority",
              },
              {
                icon: <DollarSign className="w-8 h-8" />,
                title: "Fair Pricing",
                desc: "No hidden charges, transparent quotes",
              },
              {
                icon: <ThumbsUp className="w-8 h-8" />,
                title: "Satisfaction Guarantee",
                desc: "We don't stop until you're happy",
              },
              {
                icon: <Truck className="w-8 h-8" />,
                title: "Fast Response",
                desc: "Same-day service available",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all"
              >
                <div className="flex items-center justify-center w-12 h-12 mb-3 rounded-full bg-blue-50 text-blue-600">
                  {item.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section with Image Background */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 rounded-xl overflow-hidden relative"
        >
          <div className="absolute inset-0 bg-blue-900/70 z-10"></div>
          <img
            src="https://5.imimg.com/data5/SELLER/Default/2023/11/364285120/MS/NV/GA/48749394/air-conditioner-repair-maintenance-service-1000x1000.jpg"
            alt="Our professional AC repair team"
            className="w-full h-64 md:h-96 object-cover"
          />
          <div className="relative z-20 p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Our Service in Numbers
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { number: "10K+", label: "Happy Customers" },
                { number: "15+", label: "Years Experience" },
                { number: "98%", label: "Success Rate" },
                { number: "45 min", label: "Avg. Response" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold mb-2">
                    {stat.number}
                  </div>
                  <div className="text-blue-200">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Whychooseus;
