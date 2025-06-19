import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import PageSection from "../../components/Herosection/PageSection";
import { useNavigate } from "react-router-dom";

const MicrowaveOvenRepair = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const navigate = useNavigate(); // Initialize the navigate function

  const serviceButtons = [
    { name: "AC Repair Service", route: "/services/ac-repair" },
    {
      name: "Washing Machine Repair Service",
      route: "/services/washing-machine-repair",
    },
    {
      name: "Water Purifier Repair Service",
      route: "/services/water-purifier-repair",
    },
    {
      name: "Microwave Oven Repair Service",
      route: "/services/microwave-oven-repair",
    },
  ];

  const handleServiceClick = (route) => {
    navigate(route); // Use the navigate function
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pt-16">
      <PageSection page="MicrowaveOvenRepair" />

      <main className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        {/* Left Content */}
        <div className="lg:w-2/3">
          {/* Video Section */}
          <section className="mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-xl overflow-hidden shadow-lg"
            >
              <iframe
                className="w-full h-64 md:h-96"
                src="https://www.youtube.com/embed/your-video-id"
                title="AC Repair Service"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </motion.div>
          </section>

          {/* Service Description */}
          <section className="mb-12">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-2xl md:text-3xl font-bold text-blue-700 mb-6"
            >
              Microwave Oven Repair Service
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="space-y-4 text-gray-700"
            >
              <p>
                Enjoy hassle-free microwave oven repair services designed to get
                your appliance back in top working condition. Our expert
                technicians specialize in diagnosing and fixing all types of
                microwave oven issues to ensure efficient and long-lasting
                results.
              </p>
              <p>
                Whether it's heating issues, unusual noises, sparking, or door
                malfunctions, we have the skills and tools to handle it all. We
                service all major microwave brands and models, providing
                reliable repairs at competitive prices.
              </p>
              <p>
                Customer satisfaction is our top priority. We offer quick
                turnarounds, transparent pricing, and expert care to ensure your
                microwave oven operates like new again. Count on us to keep your
                kitchen running smoothly.
              </p>
            </motion.div>
          </section>

          {/* Images Section */}
          <section className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3OU4jGTp7T66JU41HXy_9DvBuPJUGZJvEag&s"
                alt="AC Repair Service"
                className="w-full h-48 md:h-64 object-cover"
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src="https://t4.ftcdn.net/jpg/03/29/70/47/360_F_329704740_i0FpAgThkRmqLwCnWXxspFiade7i86Kg.jpg"
                alt="Technician Working"
                className="w-full h-48 md:h-64 object-cover"
              />
            </motion.div>
          </section>

          {/* Repair Process */}
          <section className="mb-12">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold text-green-600 mb-6"
            >
              Our Microwave Oven Repair Process
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-4 text-gray-700"
            >
              <p>
                We follow a comprehensive approach to diagnose and resolve
                microwave oven problems:
              </p>

              <ul className="list-disc pl-6 space-y-2">
                {[
                  "Diagnosing heating and power issues",
                  "Repairing or replacing faulty magnetrons",
                  "Fixing door switches and latches",
                  "Addressing electrical wiring issues",
                  "Ensuring safety and optimal performance",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.3 + index * 0.1,
                      type: "spring",
                      stiffness: 100,
                    }}
                    viewport={{ once: true, margin: "-20px" }}
                    whileHover={{
                      x: 5,
                      color: "#2563eb", // blue-600
                      transition: { duration: 0.2 },
                    }}
                    className="origin-left transform transition-colors duration-200"
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                viewport={{ once: true }}
              >
                Regular maintenance of your microwave oven can prevent
                breakdowns and extend its lifespan. Our services include
                cleaning, part inspections, and performance checks to ensure
                reliable operation.
              </motion.p>
            </motion.div>
          </section>

          {/* Final Images */}
          <section className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[3, 4, 5].map((num) => (
              <motion.div
                key={num}
                whileHover={{ scale: 1.03 }}
                className="rounded-xl overflow-hidden shadow-lg"
              >
                <img
                  src="https://callrandazzo.com/wp-content/uploads/2024/12/air-conditioning-services.webp"
                  //src={`/ac-repair-${num}.jpg`}
                  alt={`AC Service ${num}`}
                  className="w-full h-48 object-cover"
                />
              </motion.div>
            ))}
          </section>

          {/* Final CTA */}
          <section className="mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-yellow-100 to-red-50 p-6 rounded-xl shadow-lg border border-yellow-200"
            >
              <p className="text-lg text-gray-700">
                Trust our certified technicians to deliver high-quality
                microwave oven repair services tailored to your needs. Contact
                us today to schedule your repair or maintenance service and
                enjoy uninterrupted convenience in your kitchen.
              </p>
            </motion.div>
          </section>
        </div>

        {/* Right Sidebar */}
        <div className="lg:w-1/3">
          {/* Service Buttons */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="bg-white rounded-xl shadow-lg p-6 mb-8  top-8"
          >
            <h3 className="text-xl font-bold text-blue-700 mb-4">
              Our Services
            </h3>
            <ul className="space-y-3">
              {serviceButtons.map((service, index) => (
                <motion.li
                  key={index}
                  onHoverStart={() => setHoveredItem(index)}
                  onHoverEnd={() => setHoveredItem(null)}
                  className="relative overflow-hidden"
                >
                  <motion.div
                    animate={{
                      x: hoveredItem === index ? 0 : -100,
                      opacity: hoveredItem === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-red-500"
                    style={{ zIndex: 0 }}
                  />
                  <button
                    onClick={() => handleServiceClick(service.route)}
                    className="relative z-10 w-full text-left px-4 py-3 rounded-lg bg-blue-50 hover:bg-transparent transition-colors duration-300"
                  >
                    <span className="font-medium text-gray-800 hover:text-white transition-colors duration-300">
                      {service.name}
                    </span>
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <h3 className="text-xl font-bold text-green-600 mb-4">
              Contact Info
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-blue-100 rounded-full text-blue-600">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Phone Number</h4>
                  <a
                    href="tel:+919325860758"
                    className="text-blue-600 hover:underline"
                  >
                    +91 9325860758
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-green-100 rounded-full text-green-600">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Address</h4>
                  <p className="text-gray-600">
                    Flat No. 7, Building No. 2, Datar Society, Mumbai - Agra
                    Hwy, near Tractor House, Tigraniya Corner, Dwarka, Nashik,
                    Maharashtra 422001
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-red-100 rounded-full text-red-600">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Email</h4>
                  <a
                    href="mailto:info@vaishnaviacrepairandservice.co.in"
                    className="text-blue-600 hover:underline"
                  >
                    info@vaishnaviacrepairandservice.co.in
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default MicrowaveOvenRepair;
