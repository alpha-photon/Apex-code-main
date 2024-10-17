'use client';

import { motion } from 'framer-motion'; // Import framer-motion
import Navbar from "../../components/navbar"
import ContactForm from "@/app/components/contactForms";
import Footer from "../../components/footer"
import { FaCode, FaDatabase, FaCloud, FaCogs, FaRocket, FaSearch } from 'react-icons/fa';

// Animations
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function CustomSoftwareDevelopment() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="relative text-black py-20">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <svg className="absolute left-0 top-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(0,0,0,0.05)" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
            <div className="absolute -left-1/4 -top-1/4 w-1/2 h-1/2 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute -right-1/4 -bottom-1/4 w-1/2 h-1/2 bg-gradient-to-tl from-blue-100 to-blue-200 rounded-full opacity-20 blur-3xl"></div>
          </div>

          <div className="relative z-10 text-center">
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="text-5xl font-extrabold"
            >
              Custom Software Development
            </motion.h1>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="mt-4 text-lg font-light max-w-2xl mx-auto"
            >
              Tailored software solutions to meet your business unique needs. From concept to deployment, we deliver high-quality, scalable, and user-friendly software.
            </motion.p>
            <motion.a
              href="#contact"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="mt-6 inline-block bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg transition duration-300"
            >
              Get in Touch
            </motion.a>
          </div>
        </section>

        {/* Why Custom Software Development */}
        <section className="py-16 text-center">
          <motion.h2
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-4xl font-bold mb-8"
          >
            Why Custom Software Development?
          </motion.h2>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-lg max-w-3xl mx-auto mb-12 text-gray-600"
          >
            In a world where off-the-shelf software might not always meet your business growing demands, custom software development offers a flexible and scalable solution. Tailor-made software ensures you get exactly what you need to achieve your business goals.
          </motion.p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {[{
              Icon: FaCogs,
              title: "Tailored to Your Needs",
              text: "Custom software is developed with your unique business requirements in mind, ensuring seamless integration with your processes."
            }, {
              Icon: FaRocket,
              title: "Scalable Solutions",
              text: "Your business grows, and so should your software. Custom solutions allow for scalability to meet future demands."
            }, {
              Icon: FaCloud,
              title: "Cloud Integration",
              text: "We offer seamless cloud integration to provide accessible, secure, and scalable software that meets modern demands."
            }].map(({ Icon, title, text }, index) => (
              <motion.div
                key={index}
                className="bg-blue-50 p-6 rounded-lg shadow-lg"
                variants={fadeInUp}
              >
                <Icon className="text-4xl text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-600">{text}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Our Process */}
        <section className="py-16 bg-gradient-to-r from-blue-200 via-pink-200 to-purple-200 px-4">
          <h2 className="text-4xl font-bold text-center mb-8">Our Development Process</h2>
          <p className="text-lg max-w-3xl mx-auto mb-12 text-center text-gray-600">
            From ideation to deployment, we follow a streamlined process that ensures high-quality results delivered on time.
          </p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-5 gap-6 text-center"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {[{
              Icon: FaSearch,
              title: "Requirement Gathering",
              text: "We start by understanding your business needs and gathering all necessary requirements."
            }, {
              Icon: FaCogs,
              title: "Planning & Strategy",
              text: "Our team drafts a comprehensive plan for development, ensuring alignment with your business goals."
            }, {
              Icon: FaCode,
              title: "Development",
              text: "We write clean, efficient, and scalable code that meets your project requirements."
            }, {
              Icon: FaDatabase,
              title: "Testing & QA",
              text: "Our rigorous testing ensures that the software performs well under different conditions."
            }, {
              Icon: FaRocket,
              title: "Launch",
              text: "We help you launch your custom software with confidence, ensuring smooth operation from day one."
            }].map(({ Icon, title, text }, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg"
                variants={fadeInUp}
              >
                <Icon className="text-4xl text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <p className="text-gray-600">{text}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Technologies We Use */}
        <section className="py-16 text-center">
          <motion.h2
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-4xl font-bold mb-8"
          >
            Technologies We Use
          </motion.h2>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-lg max-w-3xl mx-auto mb-12 text-gray-600"
          >
            We work with the latest and most reliable technologies to build high-performance custom software solutions.
          </motion.p>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {[{
              Icon: FaCode,
              label: "JavaScript"
            }, {
              Icon: FaCode,
              label: "Python"
            }, {
              Icon: FaDatabase,
              label: "PostgreSQL"
            }, {
              Icon: FaCloud,
              label: "AWS"
            }, {
              Icon: FaCloud,
              label: "Azure"
            }, {
              Icon: FaCogs,
              label: "Node.js"
            }].map(({ Icon, label }, index) => (
              <motion.div
                key={index}
                className="bg-gray-100 p-4 rounded-lg shadow-md"
                variants={fadeInUp}
              >
                <Icon className="text-3xl text-blue-600 mx-auto mb-2" />
                <p className="text-sm font-medium">{label}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </div>
      <ContactForm />
      <Footer />
    </>
  );
}
