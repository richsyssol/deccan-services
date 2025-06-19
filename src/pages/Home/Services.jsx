import React from "react";
import { motion } from "framer-motion";
import { Wrench, Droplets, Microwave, Snowflake } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Snowflake className="h-8 w-8 text-white" />,
      title: "AC Repair",
      description:
        "Professional repair and maintenance for all types of air conditioners including split, window, and central AC units.",
      link: "#ac-repair",
      image:
        "https://plus.unsplash.com/premium_photo-1682126009570-3fe2399162f7?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      icon: <Droplets className="h-8 w-8 text-white" />,
      title: "Washing Machine Repair",
      description:
        "Expert repair services for top load, front load, and semi-automatic washing machines.",
      link: "#washing-machine-repair",
      image:
        "https://plus.unsplash.com/premium_photo-1661342474567-f84bb6959d9f?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      icon: <Wrench className="h-8 w-8 text-white" />,
      title: "Water Purifier Repair",
      description:
        "Comprehensive repair and maintenance for RO, UV, and UF water purifiers.",
      link: "#water-purifier-repair",
      image:
        "https://plus.unsplash.com/premium_photo-1664910060201-317928125230?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      icon: <Microwave className="h-8 w-8 text-white" />,
      title: "Microwave Oven Repair",
      description:
        "Repair services for all microwave oven brands including convection and grill models.",
      link: "#microwave-oven-repair",
      image:
        "https://images.unsplash.com/photo-1592771583287-71f7b4df0d40?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Our <span className="text-blue-600">Expert Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Comprehensive repair solutions for all your home appliances by
            certified technicians
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{
                y: -10,
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"></div>
                <div className="absolute top-4 right-4 flex items-center justify-center h-12 w-12 rounded-full bg-blue-600/90 backdrop-blur-sm">
                  {service.icon}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-5">{service.description}</p>
                <motion.a
                  href={service.link}
                  className="inline-flex items-center text-blue-600 font-medium group-hover:text-blue-800 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  Learn more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1 transition-transform group-hover:translate-x-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="/contactus"
            className="inline-block px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-blue-500/20"
          >
            Book Service Now
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
