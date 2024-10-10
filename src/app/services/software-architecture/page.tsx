'use client';

import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaCogs, FaDraftingCompass, FaDatabase, FaServer, FaRocket, FaProjectDiagram, FaShieldAlt } from 'react-icons/fa';

export default function SoftwareArchitectureConsulting() {
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
              src="/images/software-architecture-bg.jpg"
              alt="Software Architecture Consulting"
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
              Software Architecture Consulting
            </motion.h1>
            <motion.p
              className="mt-4 text-lg font-light max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Build a solid foundation for your software projects with well-planned architecture. Our consulting services ensure scalability, security, and efficiency at every stage of development.
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

        {/* Why Software Architecture Consulting */}
        <section className="py-16 text-center">
          <motion.h2
            className="text-4xl font-bold mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Why Choose Software Architecture Consulting?
          </motion.h2>
          <motion.p
            className="text-lg max-w-3xl mx-auto mb-12 text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A well-designed software architecture is critical to ensuring that your systems can scale, remain secure, and be easily maintained. Our consulting services help you design robust, future-proof architectures for your projects.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-gray-50 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <FaDraftingCompass className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Scalability & Flexibility</h3>
              <p className="text-gray-600">We design architectures that can easily scale as your business grows, ensuring flexibility and long-term sustainability.</p>
            </motion.div>
            <motion.div
              className="bg-gray-50 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <FaShieldAlt className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Security & Best Practices</h3>
              <p className="text-gray-600">We follow industry best practices to build architectures that prioritize security, ensuring your data is protected from vulnerabilities.</p>
            </motion.div>
            <motion.div
              className="bg-gray-50 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <FaProjectDiagram className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Efficiency & Performance</h3>
              <p className="text-gray-600">Our consulting services ensure that your software is optimized for performance and operational efficiency, reducing downtime and costs.</p>
            </motion.div>
          </div>
        </section>

        {/* Our Software Architecture Process */}
        <section className="py-16 bg-gray-100">
          <h2 className="text-4xl font-bold text-center mb-8">Our Consulting Process</h2>
          <p className="text-lg max-w-3xl mx-auto mb-12 text-center text-gray-600">
            We follow a structured process to ensure that every step of the architecture consulting is aligned with your business goals and technical requirements.
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
              <h3 className="text-lg font-semibold mb-2">Planning & Strategy</h3>
              <p className="text-gray-600">We start by understanding your goals and requirements, and then create a strategic architecture plan tailored to your business.</p>
            </motion.div>
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <FaServer className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Architectural Design</h3>
              <p className="text-gray-600">We design scalable and secure architectures that meet the technical requirements of your software and align with industry best practices.</p>
            </motion.div>
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <FaDatabase className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Technology Selection</h3>
              <p className="text-gray-600">We help you select the right technology stack for your project, ensuring the optimal performance and scalability of your software.</p>
            </motion.div>
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <FaRocket className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Implementation & Support</h3>
              <p className="text-gray-600">We provide ongoing support during implementation, ensuring that your architecture is properly executed and aligned with the project goals.</p>
            </motion.div>
          </div>
        </section>

        {/* Technologies We Use */}
        <section className="py-16 text-center">
          <h2 className="text-4xl font-bold mb-8">Technologies We Use</h2>
          <p className="text-lg max-w-3xl mx-auto mb-12 text-gray-600">We work with a variety of modern technologies to deliver robust and scalable architectures.</p>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <FaDatabase className="text-3xl text-blue-600 mx-auto mb-2" />
              <p className="text-sm font-medium">SQL Server</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <FaServer className="text-3xl text-blue-600 mx-auto mb-2" />
              <p className="text-sm font-medium">AWS</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <FaShieldAlt className="text-3xl text-blue-600 mx-auto mb-2" />
              <p className="text-sm font-medium">Azure</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <FaCogs className="text-3xl text-blue-600 mx-auto mb-2" />
              <p className="text-sm font-medium">Kubernetes</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <FaProjectDiagram className="text-3xl text-blue-600 mx-auto mb-2" />
              <p className="text-sm font-medium">Terraform</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <FaRocket className="text-3xl text-blue-600 mx-auto mb-2" />
              <p className="text-sm font-medium">Docker</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        

      </div>
      <Footer />
    </>
  );
}
