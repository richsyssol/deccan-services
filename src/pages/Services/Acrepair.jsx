import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import PageSection from "../../components/Herosection/PageSection";
import { useNavigate } from "react-router-dom";

const Acrepair = () => {
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
      <PageSection page="acRepair" />

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
              AC Repair Service
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="space-y-4 text-gray-700"
            >
              <p>
                Experience top-notch air conditioning repair services designed
                to keep your home or office cool and comfortable. Our expert
                technicians specialize in diagnosing and resolving all types of
                AC issues, ensuring efficient and long-lasting solutions.
              </p>
              <p>
                Whether it's poor cooling performance, refrigerant leaks,
                unusual noises, or thermostat malfunctions, we are equipped to
                handle it all. We work with all major AC brands and models,
                providing reliable and timely service at competitive prices.
              </p>
              <p>
                Customer satisfaction is our top priority, and we ensure a
                hassle-free experience with quick turnarounds, transparent
                pricing, and expert care. Trust us to restore your AC's optimal
                performance and keep you comfortable year-round.
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
                src="https://www.shutterstock.com/image-photo/repairman-fix-air-conditioning-systems-600nw-2463365013.jpg"
                alt="AC Repair Service"
                className="w-full h-48 md:h-64 object-cover"
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src="https://i.pinimg.com/736x/b7/24/18/b72418e3be0d4dc6c4d57ad9c0208400.jpg"
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
              Our AC Repair Process
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-4 text-gray-700"
            >
              <p>
                We follow a systematic approach to diagnose and resolve your AC
                issues efficiently:
              </p>

              <ul className="list-disc pl-6 space-y-2">
                {[
                  "Comprehensive system diagnostics",
                  "Identifying and fixing refrigerant leaks",
                  "Cleaning or replacing air filters",
                  "Testing and calibrating the thermostat",
                  "Ensuring safe and efficient operation",
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
                Regular AC maintenance is essential to prevent breakdowns and
                extend the lifespan of your unit. Our services include cleaning,
                filter replacement, and performance checks to ensure your system
                operates at peak efficiency.
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
                  src="https://media.istockphoto.com/id/2154707821/photo/air-conditioner-service-the-air-conditioner-technician-is-using-a-gauge-to-measure-the.jpg?s=612x612&w=0&k=20&c=I-EvZdWGrPOTJcmFUYqCohZ3raVYnV-QFhS2CBiCI8Q="
                  // src={`/ac-repair-${num}.jpg`}
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
                Trust our certified technicians to provide high-quality AC
                repair services tailored to meet your specific needs. Contact us
                today to schedule your AC repair or maintenance service and
                enjoy uninterrupted cooling.
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
                    Back Side Kakade Palace Mangal karyalaya, Sr,no, 2k/3b/1,
                    shop no 8, maitri vishawa apartment, Karve Nagar, Pune,
                    Maharashtra 411052
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

export default Acrepair;
