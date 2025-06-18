import React from "react";
import { motion } from "framer-motion";
import { Check, Shield, Users, Clock } from "lucide-react";

const AboutUs = () => {
  const features = [
    {
      icon: <Check className="h-6 w-6 text-blue-600" />,
      title: "Quality Service",
      description:
        "We use only genuine parts and provide the highest quality repairs.",
    },
    {
      icon: <Shield className="h-6 w-6 text-blue-600" />,
      title: "Warranty",
      description: "All our repairs come with a 90-day service warranty.",
    },
    {
      icon: <Users className="h-6 w-6 text-blue-600" />,
      title: "Expert Technicians",
      description:
        "Our team consists of certified and experienced professionals.",
    },
    {
      icon: <Clock className="h-6 w-6 text-blue-600" />,
      title: "Quick Response",
      description: "We provide same-day service for most repair requests.",
    },
  ];

  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-last lg:order-first"
          >
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              alt="About Deccan Services"
              className="rounded-lg shadow-xl w-full"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              About <span className="text-blue-600">Deccan Services</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Deccan Services has been serving the Nashik community for over 10
              years, providing reliable appliance repair services you can trust.
              We take pride in our work and treat every customer's appliance as
              if it were our own.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Our mission is to deliver exceptional service with honesty and
              integrity, ensuring your appliances are repaired quickly and
              correctly the first time.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-lg shadow-md"
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0">{feature.icon}</div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">
                        {feature.title}
                      </h3>
                      <p className="mt-1 text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
