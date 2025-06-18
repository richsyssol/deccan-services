import React from "react";
import { motion } from "framer-motion";
import {
  ToolOutlined,
  ClockCircleOutlined,
  DollarOutlined,
  ShoppingOutlined,
  SafetyCertificateOutlined,
  TeamOutlined,
} from "@ant-design/icons";

function WhyChoose() {
  const benefits = [
    {
      id: 1,
      title: "Expert Technicians",
      description:
        "Our highly trained and certified technicians have years of experience in repairing various appliances, ensuring top-notch service.",
      icon: <ToolOutlined className="text-2xl" />,
      color: "bg-blue-100",
    },
    {
      id: 2,
      title: "Quick & Reliable Service",
      description:
        "We value your time. Our team ensures quick diagnosis and efficient repairs, so you can get your appliance up and running as soon as possible.",
      icon: <ClockCircleOutlined className="text-2xl" />,
      color: "bg-green-100",
    },
    {
      id: 3,
      title: "Affordable Pricing",
      description:
        "We offer competitive pricing with no hidden fees. Our transparent pricing policy ensures you get value for your money.",
      icon: <DollarOutlined className="text-2xl" />,
      color: "bg-yellow-100",
    },
    {
      id: 4,
      title: "Genuine Spare Parts",
      description:
        "We use only genuine and high-quality spare parts for repairs, ensuring long-lasting performance and reliability of your appliances.",
      icon: <ShoppingOutlined className="text-2xl" />,
      color: "bg-purple-100",
    },
    {
      id: 5,
      title: "Quality Guarantee",
      description:
        "All repairs come with a 90-day warranty on parts and labor. We stand behind our work.",
      icon: <SafetyCertificateOutlined className="text-2xl" />,
      color: "bg-red-100",
    },
    {
      id: 6,
      title: "Customer Focus",
      description:
        "Your satisfaction is our priority. We listen carefully and explain all repair options clearly.",
      icon: <TeamOutlined className="text-2xl" />,
      color: "bg-indigo-100",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-gray-50">
      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1554F3] mb-4">
              Reasons to Choose Our Repair Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We go above and beyond to ensure your complete satisfaction with
              every service call.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {benefits.map((benefit) => (
              <motion.div
                key={benefit.id}
                variants={itemVariants}
                whileHover="hover"
                className={`p-6 rounded-xl shadow-sm hover:shadow-md transition-all ${benefit.color}`}
              >
                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-full shadow-sm">
                    <div className="text-[#1554F3]">{benefit.icon}</div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-6 h-6 rounded-full bg-[#1554F3] text-white flex items-center justify-center text-sm font-bold">
                        {benefit.id}
                      </span>
                      <h3 className="text-xl font-semibold text-gray-800">
                        {benefit.title}
                      </h3>
                    </div>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              { value: "5000+", label: "Happy Customers" },
              { value: "15+", label: "Years Experience" },
              { value: "24/7", label: "Emergency Service" },
              { value: "100%", label: "Satisfaction Guarantee" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-xl shadow-sm text-center"
              >
                <div className="text-3xl font-bold text-[#1554F3] mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default WhyChoose;
