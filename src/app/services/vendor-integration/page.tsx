'use client';

import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
// import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaPlug, FaProjectDiagram, FaCodeBranch, FaRocket, FaServer } from 'react-icons/fa';

export default function VendorIntegration() {
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
            <Image
              src="/images/vendor-integration-bg.jpg"
              alt="Third Party Vendor Integration"
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
              Third Party Vendor Integration
            </motion.h1>
            <motion.p
              className="mt-4 text-lg font-light max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Seamlessly integrate third-party services into your existing systems. We make vendor integration simple and efficient.
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
            Why Choose Our Vendor Integration Services?
          </motion.h2>
          <motion.p
            className="text-lg max-w-3xl mx-auto mb-12 text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our third-party vendor integration services help you connect with external services such as payment gateways, CRM systems, or cloud platforms. We ensure smooth and secure integration to enhance your system's functionality.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-4">
            <motion.div
              className="bg-gray-50 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <FaPlug className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Seamless Integration</h3>
              <p className="text-gray-600">We ensure that third-party systems are integrated smoothly into your existing architecture without disruption.</p>
            </motion.div>
            <motion.div
              className="bg-gray-50 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <FaCodeBranch className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Custom API Solutions</h3>
              <p className="text-gray-600">We build and integrate custom APIs to connect your business systems with third-party vendors and services.</p>
            </motion.div>
            <motion.div
              className="bg-gray-50 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <FaProjectDiagram className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Scalable & Secure</h3>
              <p className="text-gray-600">Our integration solutions are built for scalability and security, ensuring your systems can handle future growth.</p>
            </motion.div>
          </div>
        </section>

        {/* Our Vendor Integration Process */}
        <section className="py-16 bg-gray-100">
          <h2 className="text-4xl font-bold text-center mb-8">Our Vendor Integration Process</h2>
          <p className="text-lg max-w-3xl mx-auto mb-12 text-center text-gray-600">
            We follow a proven integration process to connect your systems with third-party services seamlessly and securely.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <FaPlug className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Assessment & Planning</h3>
              <p className="text-gray-600">We assess your needs and design a custom integration plan that aligns with your business objectives.</p>
            </motion.div>
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <FaCodeBranch className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Custom API Development</h3>
              <p className="text-gray-600">We develop custom APIs that enable your systems to connect with third-party vendors seamlessly.</p>
            </motion.div>
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <FaServer className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Testing & Integration</h3>
              <p className="text-gray-600">We thoroughly test integrations to ensure compatibility, security, and performance in real-world conditions.</p>
            </motion.div>
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <FaRocket className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Deployment & Support</h3>
              <p className="text-gray-600">We offer ongoing support and monitoring to ensure that your third-party integrations run smoothly.</p>
            </motion.div>
          </div>
        </section>

        

      </div>
      <Footer />
    </>
  );
}
