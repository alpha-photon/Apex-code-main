'use client';

import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
// import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaTools, FaLifeRing, FaWrench, FaShieldAlt, FaRocket } from 'react-icons/fa';

export default function MaintenanceSupportServices() {
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
              src="/images/maintenance-support-bg.jpg"
              alt="Maintenance and Support Services"
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
              Maintenance and Support Services
            </motion.h1>
            <motion.p
              className="mt-4 text-lg font-light max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Ensure your systems run smoothly and are always up-to-date with our comprehensive maintenance and support services.
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
            Why Choose Our Maintenance and Support Services?
          </motion.h2>
          <motion.p
            className="text-lg max-w-3xl mx-auto mb-12 text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our maintenance and support services provide ongoing monitoring, bug fixing, system updates, and improvements, ensuring that your systems run smoothly and continue to evolve with your business needs.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-gray-50 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <FaWrench className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">System Updates & Upgrades</h3>
              <p className="text-gray-600">We ensure your systems are always updated with the latest features and security patches, keeping them secure and efficient.</p>
            </motion.div>
            <motion.div
              className="bg-gray-50 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <FaLifeRing className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">24/7 Monitoring & Support</h3>
              <p className="text-gray-600">We provide round-the-clock monitoring and support to address any issues that may arise and ensure maximum uptime.</p>
            </motion.div>
            <motion.div
              className="bg-gray-50 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <FaShieldAlt className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Security Enhancements</h3>
              <p className="text-gray-600">Our support includes ongoing security checks and improvements, protecting your systems from vulnerabilities.</p>
            </motion.div>
          </div>
        </section>

        {/* Our Maintenance and Support Process */}
        <section className="py-16 bg-gray-100">
          <h2 className="text-4xl font-bold text-center mb-8">Our Maintenance and Support Process</h2>
          <p className="text-lg max-w-3xl mx-auto mb-12 text-center text-gray-600">
            We follow a structured process to maintain and support your systems, ensuring that they stay up-to-date, secure, and operational.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center mx-4">
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <FaTools className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">System Assessment</h3>
              <p className="text-gray-600">We begin with a detailed assessment of your existing systems to identify areas for improvement and updates.</p>
            </motion.div>
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <FaWrench className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Proactive Maintenance</h3>
              <p className="text-gray-600">We proactively perform updates and maintenance to prevent issues before they arise and ensure smooth operations.</p>
            </motion.div>
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <FaRocket className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">System Optimization</h3>
              <p className="text-gray-600">We continually optimize your systems for performance, ensuring they are running efficiently and cost-effectively.</p>
            </motion.div>
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <FaShieldAlt className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Security Audits & Support</h3>
              <p className="text-gray-600">Our security audits ensure your systems are safe from vulnerabilities, with ongoing support to fix any issues that arise.</p>
            </motion.div>
          </div>
        </section>

        {/* Call to Action */}
        

      </div>
      <Footer />
    </>
  );
}
