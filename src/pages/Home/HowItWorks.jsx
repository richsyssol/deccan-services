import { motion } from "framer-motion";
import { Phone, Calendar, Search, CheckCircle, ArrowRight } from "lucide-react";
import { useState } from "react";

const HowItWorks = () => {
  const [hoveredStep, setHoveredStep] = useState(null);

  const steps = [
    {
      id: 1,
      title: "Contact Us",
      description:
        "Reach out to us through our website, phone, or email for appliance repair inquiries. We'll schedule a convenient time for the service.",
      icon: <Phone size={40} className="text-[#1554F3]" />,
      image: "https://images.unsplash.com/photo-1584433144859-1fc3ab64a957",
      color: "bg-blue-100",
    },
    {
      id: 2,
      title: "Appointment",
      description:
        "Choose a time slot that fits your schedule for our technicians to come to your home and inspect the appliance.",
      icon: <Calendar size={40} className="text-[#10B981]" />,
      image: "https://images.unsplash.com/photo-1506863530036-1efeddceb993",
      color: "bg-green-100",
    },
    {
      id: 3,
      title: "Analysis & Diagnosis",
      description:
        "Our skilled technicians will diagnose the issue and explain the required repairs. We ensure a clear understanding of the problem.",
      icon: <Search size={40} className="text-[#F59E0B]" />,
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf",
      color: "bg-yellow-100",
    },
    {
      id: 4,
      title: "Enjoy a Fully Functioning Appliance",
      description:
        "Once repairs are completed, we'll ensure your appliance is working like new, and you can enjoy the comfort of a fully functional home appliance!",
      icon: <CheckCircle size={40} className="text-[#EC4899]" />,
      image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115",
      color: "bg-pink-100",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
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
      transition: {
        duration: 0.3,
      },
    },
  };

  const imageVariants = {
    hover: {
      scale: 1.05,
      filter: "brightness(110%) saturate(120%)",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16 max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-[#1554F3] mb-4">
          4 Simple Steps to Get Your Appliances Repaired
        </h1>
        <p className="text-lg text-gray-600">
          Our streamlined process ensures quick and efficient appliance repairs
          with minimal disruption to your daily routine.
        </p>
      </motion.div>

      {/* Steps */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
      >
        {steps.map((step) => (
          <motion.div
            key={step.id}
            variants={itemVariants}
            whileHover="hover"
            className="relative group"
            onMouseEnter={() => setHoveredStep(step.id)}
            onMouseLeave={() => setHoveredStep(null)}
          >
            {/* Step Card */}
            <div
              className={`h-full p-6 rounded-xl shadow-md ${step.color} flex flex-col`}
            >
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-white shadow-lg mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 mb-6 flex-grow">{step.description}</p>
              <div className="flex items-center text-[#1554F3] font-medium">
                <span>Step {step.id}</span>
                <ArrowRight className="ml-2" />
              </div>
            </div>

            {/* Image Overlay */}
            {hoveredStep === step.id && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute -top-8 -right-8 w-64 h-64 rounded-xl overflow-hidden shadow-xl z-10 hidden lg:block"
              >
                <motion.img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover"
                  variants={imageVariants}
                  initial="initial"
                  whileHover="hover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-500 to-transparent opacity-30" />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                  <h4 className="text-white font-bold">{step.title}</h4>
                </div>
              </motion.div>
            )}
          </motion.div>
        ))}
      </motion.div>

      {/* Process Visualization */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-24 max-w-4xl mx-auto"
      >
        <div className="relative h-2 bg-gray-200 rounded-full mx-16 hidden lg:block">
          <div className="absolute inset-0 bg-gradient-to-r from-[#1554F3] via-[#10B981] to-[#EC4899] rounded-full" />
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.2 * index + 0.4 }}
              viewport={{ once: true }}
              className={`absolute top-1/2 -translate-y-1/2 w-8 h-8 rounded-full border-4 border-white flex items-center justify-center ${
                step.id <= 2 ? "bg-[#1554F3]" : "bg-[#10B981]"
              }`}
              style={{ left: `${index * 33.33 + 0.1}%` }}
            >
              <span className="text-white font-bold text-sm">{step.id}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        viewport={{ once: true }}
        className="text-center mt-24"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Ready to Repair Your Appliance?
        </h2>
        <button className="px-8 py-4 bg-[#1554F3] text-white rounded-full font-bold text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl flex items-center mx-auto">
          <Phone className="mr-2" />
          Contact Us Now
        </button>
      </motion.div>
    </div>
  );
};

export default HowItWorks;
