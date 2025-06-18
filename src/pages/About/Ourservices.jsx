import React from "react";
import { motion } from "framer-motion";
import { Row, Col, Card } from "antd";
import { ToolOutlined } from "@ant-design/icons";

// Import your service images

function Ourservices() {
  const services = [
    {
      title: "AC Repair & Maintenance",
      icon: <ToolOutlined className="text-4xl" />,
      description:
        "Our certified technicians provide expert repair and maintenance for all types of air conditioners.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgKQuUizyYTkx6Dr3oOrEqOMoFk6yuEqCwl1jle-HwUUJc-CG2c_P_b9qz5kAYMT0huF8&usqp=CAU",
      color: "#1554F3",
    },
    {
      title: "Washing Machine Repair",
      icon: <ToolOutlined className="text-4xl" />,
      description:
        "Reliable and fast washing machine repairs, fixing everything from leaks to electrical issues.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgKQuUizyYTkx6Dr3oOrEqOMoFk6yuEqCwl1jle-HwUUJc-CG2c_P_b9qz5kAYMT0huF8&usqp=CAU",
      color: "#2e86de",
    },
    {
      title: "Water Purifier Repair",
      icon: <ToolOutlined className="text-4xl" />,
      description:
        "We ensure your water purifier works effectively, providing clean water with expert diagnostics.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgKQuUizyYTkx6Dr3oOrEqOMoFk6yuEqCwl1jle-HwUUJc-CG2c_P_b9qz5kAYMT0huF8&usqp=CAU",
      color: "#10ac84",
    },
    {
      title: "Microwave Oven Repair",
      icon: <ToolOutlined className="text-4xl" />,
      description:
        "Skilled technicians repair all brands of microwave ovens, restoring full functionality.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgKQuUizyYTkx6Dr3oOrEqOMoFk6yuEqCwl1jle-HwUUJc-CG2c_P_b9qz5kAYMT0huF8&usqp=CAU",
      color: "#ee5253",
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const imageVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <div className="bg-white">
      {/* Our Services */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-[#1554F3] mb-4">
              What We Offer
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive repair services for all your home
              appliances with the highest standards of quality.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <Row gutter={[24, 24]} justify="center">
              {services.map((service, index) => (
                <Col xs={24} sm={12} md={6} key={index}>
                  <motion.div variants={itemVariants} whileHover="hover">
                    <Card
                      className="h-full rounded-lg overflow-hidden border-0 shadow-sm hover:shadow-lg transition-all duration-300"
                      bodyStyle={{ padding: 0 }}
                    >
                      <motion.div
                        className="h-48 overflow-hidden"
                        variants={imageVariants}
                      >
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                      <div className="p-6 text-center">
                        <div
                          className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4"
                          style={{ backgroundColor: service.color }}
                        >
                          {service.icon}
                        </div>
                        <h3 className="text-xl font-semibold mb-3">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 mb-4">
                          {service.description}
                        </p>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-6 py-2 rounded-full text-white font-medium"
                          style={{ backgroundColor: service.color }}
                        >
                          Learn More
                        </motion.button>
                      </div>
                    </Card>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Ourservices;
