import { motion } from "framer-motion";
import { Button } from "antd";
import { Card, Row, Col } from "antd";
import {
  CheckCircleOutlined,
  TeamOutlined,
  ToolOutlined,
  SafetyCertificateOutlined,
} from "@ant-design/icons";
import PageSection from "../../components/Herosection/PageSection";

const AboutUs = () => {
  const features = [
    "15+ Years of Experience",
    "Certified Technicians",
    "Same-Day Service Available",
    "Genuine Parts Guarantee",
    "90-Day Service Warranty",
    "24/7 Emergency Support",
  ];

  // Animation variants
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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
    hover: {
      y: -5,
      boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)",
      transition: {
        type: "spring",
        stiffness: 300,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        delay: 0.4,
      },
    },
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.3,
      },
    },
  };

  const statCardVariants = {
    hover: {
      scale: 1.05,
      rotate: -2,
      transition: {
        type: "spring",
        stiffness: 400,
      },
    },
  };

  const services = [
    {
      title: "AC Repair & Maintenance",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
          />
        </svg>
      ),
      description:
        "Our certified technicians provide expert repair and maintenance for all types of air conditioners to ensure optimal performance.",
    },
    {
      title: "Washing Machine Repair",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
          />
        </svg>
      ),
      description:
        "We offer reliable and fast washing machine repairs, fixing everything from leaks to electrical issues.",
    },
    {
      title: "Water Purifier Repair",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
          />
        </svg>
      ),
      description:
        "We ensure your water purifier works effectively, providing clean water with expert diagnostics and repairs.",
    },
    {
      title: "Microwave Oven Repair",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      ),
      description:
        "Our skilled technicians repair all brands of microwave ovens, restoring them to full functionality.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-12">
      <PageSection />

      {/* Hero Section with Split Layout */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left Side - Content */}
          <motion.div
            className="md:w-1/2 space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover="hover"
                className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#1554F3]"
              >
                <div className="flex items-start">
                  <motion.div
                    className="bg-[#1554F3] p-2 rounded-full mr-4"
                    whileHover={{ rotate: 15 }}
                    transition={{ type: "spring" }}
                  >
                    {service.icon}
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1554F3] mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            className="md:w-1/2"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              className="relative rounded-xl overflow-hidden shadow-xl"
              whileHover="hover"
            >
              <motion.img
                src="https://serviceninjas.in/wp-content/uploads/2020/03/ac5.jpeg"
                alt="Our technician repairing an AC unit"
                className="w-full h-auto object-cover rounded-xl"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              />
              <motion.div
                variants={statCardVariants}
                whileHover="hover"
                className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg border border-gray-200 hidden md:block"
              >
                <div className="flex items-center">
                  <motion.div
                    className="bg-[#1554F3] p-3 rounded-full mr-4"
                    animate={{
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1.1, 1],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 4,
                      ease: "easeInOut",
                    }}
                  >
                    <TeamOutlined className="text-white text-2xl" />
                  </motion.div>
                  <div>
                    <div className="text-2xl font-bold text-[#1554F3]">
                      5000+
                    </div>
                    <div className="text-gray-600">Happy Customers</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
