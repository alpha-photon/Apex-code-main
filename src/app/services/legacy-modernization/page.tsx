'use client';

import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
//import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaHistory, FaRedoAlt, FaTools, FaCloud, FaRocket, FaCogs } from 'react-icons/fa';

export default function LegacySystemModernization() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-16 my-14">

        {/* Hero Section */}
        <motion.section
          className="relative bg-gray-900 text-white py-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* <div className="absolute inset-0">
            {/* <Image
              src="/images/legacy-modernization-bg.jpg"
              alt="Legacy System Modernization"
              layout="fill"
              objectFit="cover"
              className="opacity-50"
            />
          </div> */} 
          <div className="relative z-10 text-center">
            <motion.h1
              className="text-5xl font-extrabold"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2 }}
            >
              Legacy System Modernization
            </motion.h1>
            <motion.p
              className="mt-4 text-lg font-light max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Upgrade your outdated systems to modern, scalable, and efficient technologies. Stay ahead of the competition with our legacy system modernization services.
            </motion.p>
            <motion.a
              href="#contact"
              className="mt-6 inline-block bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg transition duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Contact Us
            </motion.a>
          </div>
        </motion.section>

        {/* Why Choose Us */}
        <section className="py-16 text-center">
          <motion.h2
            className="text-4xl font-bold mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Why Choose Our Legacy System Modernization Services?
          </motion.h2>
          <motion.p
            className="text-lg max-w-3xl mx-auto mb-12 text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Modernizing your legacy systems reduces operational costs, improves performance, and ensures your business stays competitive. We help you transition to modern technologies with minimal disruption.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-gray-50 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <FaHistory className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Outdated Systems</h3>
              <p className="text-gray-600">We help you upgrade legacy systems that are slow, outdated, and prone to failures, ensuring improved performance and reliability.</p>
            </motion.div>
            <motion.div
              className="bg-gray-50 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <FaCloud className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Cloud Integration</h3>
              <p className="text-gray-600">We migrate your legacy systems to the cloud, making your business more agile and ready to scale.</p>
            </motion.div>
            <motion.div
              className="bg-gray-50 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <FaRedoAlt className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">System Refactoring</h3>
              <p className="text-gray-600">Our experts refactor and optimize your legacy systems, improving efficiency and reducing technical debt.</p>
            </motion.div>
          </div>
        </section>

        {/* Our Legacy Modernization Process */}
        <section className="py-16 bg-gray-100">
          <h2 className="text-4xl font-bold text-center mb-8">Our Legacy Modernization Process</h2>
          <p className="text-lg max-w-3xl mx-auto mb-12 text-center text-gray-600">
            Our modernization process ensures that your transition from outdated systems to modern technology is seamless, cost-effective, and secure.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center mx-4">
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <FaCogs className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Assessment & Strategy</h3>
              <p className="text-gray-600">We start by assessing your existing systems and developing a tailored modernization strategy to meet your goals.</p>
            </motion.div>
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <FaTools className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">System Refactoring</h3>
              <p className="text-gray-600">We refactor your legacy systems, improving their performance, maintainability, and scalability.</p>
            </motion.div>
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <FaCloud className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Cloud Migration</h3>
              <p className="text-gray-600">We move your legacy systems to the cloud, ensuring scalability, flexibility, and enhanced security.</p>
            </motion.div>
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <FaRocket className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Testing & Deployment</h3>
              <p className="text-gray-600">We test and deploy the modernized system to ensure it meets all performance and security requirements.</p>
            </motion.div>
          </div>
        </section>

        

      </div>
      <Footer />
    </>
  );
}
