'use client';
import Navbar from "../../components/navbar"
import Footer from "../../components/footer"
   
// import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaMobileAlt, FaApple, FaAndroid, FaCode, FaRocket, FaCloud, FaCogs } from 'react-icons/fa';

export default function MobileAppDevelopment() {
  return (
    <><Navbar />

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <motion.section
          className="relative text-black py-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* SVG Background with animation */}
            <svg className="absolute left-0 top-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(0,0,0,0.05)" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
            <motion.div
              className="absolute -left-1/4 -top-1/4 w-1/2 h-1/2 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full opacity-20 blur-3xl"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.2 }}
            />
            <motion.div
              className="absolute -right-1/4 -bottom-1/4 w-1/2 h-1/2 bg-gradient-to-tl from-blue-100 to-blue-200 rounded-full opacity-20 blur-3xl"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.2 }}
            />
          </div>
          <div className="relative z-10 text-center">
            <motion.h1
              className="text-5xl font-extrabold"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2 }}
            >
              Mobile App Development
            </motion.h1>
            <motion.p
              className="mt-4 text-lg font-light max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              We build custom mobile apps that provide seamless user experiences, are fast, reliable, and scalable across platforms like iOS and Android.
            </motion.p>
            <motion.a
              href="#contact"
              className="mt-6 inline-block bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg transition duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Get in Touch
            </motion.a>
          </div>
        </motion.section>

      {/* Why Mobile App Development */}
      <section className="py-16 text-center">
        <motion.h2
          className="text-4xl font-bold mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Why Mobile App Development?
        </motion.h2>
        <motion.p
          className="text-lg max-w-3xl mx-auto mb-12 text-gray-600"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Mobile apps are essential to connect businesses with their customers. Whether you want to improve customer engagement, streamline operations, or drive revenue growth, a custom mobile app is the solution.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            className="bg-blue-50 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <FaMobileAlt className="text-4xl text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Cross-Platform Solutions</h3>
            <p className="text-gray-600">We develop mobile apps that work seamlessly on both iOS and Android platforms, saving you time and costs.</p>
          </motion.div>
          <motion.div
            className="bg-blue-50 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <FaApple className="text-4xl text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">iOS App Development</h3>
            <p className="text-gray-600">Our team builds secure, scalable, and feature-rich apps specifically for iPhone and iPad devices.</p>
          </motion.div>
          <motion.div
            className="bg-blue-50 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <FaAndroid className="text-4xl text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Android App Development</h3>
            <p className="text-gray-600">We create high-performance Android apps that meet the growing needs of businesses and users alike.</p>
          </motion.div>
        </div>
      </section>

      {/* Our Mobile App Development Process */}
      <section className="py-16 bg-gradient-to-r from-blue-200 via-pink-200 to-purple-200">
        <h2 className="text-4xl font-bold text-center mb-8">Our Development Process</h2>
        <p className="text-lg max-w-3xl mx-auto mb-12 text-center text-gray-600">
          We use a collaborative approach to mobile app development, ensuring that your app meets both your business needs and your users expectations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center mx-3">
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <FaCogs className="text-4xl text-blue-600 mb-4 " />
            <h3 className="text-lg font-semibold mb-2">Planning & Strategy</h3>
            <p className="text-gray-600">We map out your vision and create a development roadmap.</p>
          </motion.div>
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <FaCode className="text-4xl text-blue-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Design & Development</h3>
            <p className="text-gray-600">We design and code your app with user experience and functionality in mind.</p>
          </motion.div>
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <FaCloud className="text-4xl text-blue-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Cloud Integration</h3>
            <p className="text-gray-600">We integrate cloud services to ensure scalability and data security.</p>
          </motion.div>
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <FaRocket className="text-4xl text-blue-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Launch & Support</h3>
            <p className="text-gray-600">We help launch your app and provide ongoing support for optimization and updates.</p>
          </motion.div>
        </div>
      </section>

      
      
      
    </div>
    <Footer/></>
  );
}
