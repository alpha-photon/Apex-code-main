'use client';
import Navbar from "../../components/navbar"
import Footer from "../../components/footer"
   
// import Image from 'next/image';
import { motion } from 'framer-motion';
import {  FaServer, FaCogs, FaChartLine, FaShieldAlt, FaCode, FaDatabase, FaRocket,FaCloud } from 'react-icons/fa';

export default function EnterpriseSoftwareSolutions() {
  return (
    <><Navbar /><div className="container mx-auto px-4 py-16 my-14">

      {/* Hero Section */}
      <motion.section
        className="relative bg-gray-900 text-white py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* <div className="absolute inset-0">
          <Image
            src="/images/enterprise-software-bg.jpg"
            alt="Enterprise Software Solutions"
            layout="fill"
            objectFit="cover"
            className="opacity-50" />
        </div> */}
        <div className="relative z-10 text-center">
          <motion.h1
            className="text-5xl font-extrabold"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            Enterprise Software Solutions
          </motion.h1>
          <motion.p
            className="mt-4 text-lg font-light max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            We build scalable and secure enterprise software tailored to the needs of large organizations, ensuring efficiency and long-term success.
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

      {/* Why Enterprise Software Solutions */}
      <section className="py-16 text-center">
        <motion.h2
          className="text-4xl font-bold mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Why Choose Enterprise Software Solutions?
        </motion.h2>
        <motion.p
          className="text-lg max-w-3xl mx-auto mb-12 text-gray-600"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Enterprise software solutions streamline complex processes, improve operational efficiency, and enhance scalability for large organizations. Our custom solutions are tailored to your business needs.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            className="bg-gray-50 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <FaServer className="text-4xl text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Scalable Infrastructure</h3>
            <p className="text-gray-600">Our enterprise software solutions grow with your business, providing scalable systems that meet your evolving needs.</p>
          </motion.div>
          <motion.div
            className="bg-gray-50 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <FaShieldAlt className="text-4xl text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Security and Compliance</h3>
            <p className="text-gray-600">We prioritize security and compliance to protect your data and ensure your systems meet industry standards.</p>
          </motion.div>
          <motion.div
            className="bg-gray-50 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <FaChartLine className="text-4xl text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Business Intelligence</h3>
            <p className="text-gray-600">We integrate advanced analytics to help you make informed business decisions and drive performance improvement.</p>
          </motion.div>
        </div>
      </section>

      {/* Our Enterprise Software Process */}
      <section className="py-16 bg-gray-100">
        <h2 className="text-4xl font-bold text-center mb-8">Our Development Process</h2>
        <p className="text-lg max-w-3xl mx-auto mb-12 text-center text-gray-600">
          Our enterprise software development process is designed to deliver robust solutions that meet the complex needs of large businesses.
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
            <h3 className="text-lg font-semibold mb-2">Planning & Architecture</h3>
            <p className="text-gray-600">We start by understanding your needs and crafting a custom architecture for your enterprise solution.</p>
          </motion.div>
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <FaCode className="text-4xl text-blue-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Custom Development</h3>
            <p className="text-gray-600">Our team writes clean, scalable code that fits seamlessly with your infrastructure.</p>
          </motion.div>
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <FaDatabase className="text-4xl text-blue-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Integration & Testing</h3>
            <p className="text-gray-600">We thoroughly test and integrate the solution into your existing systems, ensuring smooth performance.</p>
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
            <p className="text-gray-600">We deploy your enterprise software and offer ongoing support for updates, security, and scalability.</p>
          </motion.div>
        </div>
      </section>

      {/* Technologies We Use */}
      <section className="py-16 text-center">
        <h2 className="text-4xl font-bold mb-8">Technologies We Use</h2>
        <p className="text-lg max-w-3xl mx-auto mb-12 text-gray-600">We leverage cutting-edge technologies to build secure and scalable enterprise software solutions.</p>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <FaCode className="text-3xl text-blue-600 mx-auto mb-2" />
            <p className="text-sm font-medium">Java</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <FaDatabase className="text-3xl text-blue-600 mx-auto mb-2" />
            <p className="text-sm font-medium">SQL Server</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <FaCloud className="text-3xl text-blue-600 mx-auto mb-2" />
            <p className="text-sm font-medium">AWS</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <FaShieldAlt className="text-3xl text-blue-600 mx-auto mb-2" />
            <p className="text-sm font-medium">Azure</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <FaCogs className="text-3xl text-blue-600 mx-auto mb-2" />
            <p className="text-sm font-medium">Spring Boot</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <FaRocket className="text-3xl text-blue-600 mx-auto mb-2" />
            <p className="text-sm font-medium">Docker</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      
    </div><Footer/></>
  );
}
