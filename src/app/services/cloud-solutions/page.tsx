'use client';

import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaCloud, FaServer, FaDatabase, FaLock, FaRocket, FaCloudUploadAlt, FaCog, FaCloudDownloadAlt, FaShieldAlt } from 'react-icons/fa';

export default function CloudSolutions() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-16 my-14">

        {/* Hero Section */}
        <motion.section
          className="relative bg-blue-900 text-white py-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* <div className="absolute inset-0">
            <Image
              src="/images/cloud-solutions-bg.jpg"
              alt="Cloud Solutions"
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
              Cloud Solutions
            </motion.h1>
            <motion.p
              className="mt-4 text-lg font-light max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Scale your business with secure, flexible, and scalable cloud solutions. From cloud migration to management, we offer customized cloud services to fit your business needs.
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

        {/* Why Cloud Solutions */}
        <section className="py-16 text-center">
          <motion.h2
            className="text-4xl font-bold mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Why Choose Cloud Solutions?
          </motion.h2>
          <motion.p
            className="text-lg max-w-3xl mx-auto mb-12 text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Cloud solutions offer your business flexibility, scalability, and security, enabling you to optimize costs while improving infrastructure efficiency. Our cloud services support your business growth with minimal downtime and maximum performance.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-gray-50 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <FaCloudUploadAlt className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Scalability & Flexibility</h3>
              <p className="text-gray-600">Our cloud solutions grow with your business, offering seamless scalability for evolving needs without disrupting operations.</p>
            </motion.div>
            <motion.div
              className="bg-gray-50 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <FaLock className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Security & Compliance</h3>
              <p className="text-gray-600">We ensure data security, encryption, and compliance with industry regulations to protect your sensitive business information.</p>
            </motion.div>
            <motion.div
              className="bg-gray-50 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <FaCloudDownloadAlt className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Disaster Recovery</h3>
              <p className="text-gray-600">Our cloud-based disaster recovery services ensure business continuity with fast recovery and minimal downtime.</p>
            </motion.div>
          </div>
        </section>

        {/* Our Cloud Solutions Process */}
        <section className="py-16 bg-gray-100">
          <h2 className="text-4xl font-bold text-center mb-8">Our Cloud Solutions Process</h2>
          <p className="text-lg max-w-3xl mx-auto mb-12 text-center text-gray-600">
            We follow a structured approach to implementing and managing cloud solutions tailored to your business goals.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center mx-4">
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <FaCog className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Assessment & Planning</h3>
              <p className="text-gray-600">We assess your current infrastructure and plan a cloud strategy tailored to your business requirements.</p>
            </motion.div>
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <FaServer className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Cloud Migration</h3>
              <p className="text-gray-600">We migrate your data, applications, and systems to the cloud with minimal disruption to your operations.</p>
            </motion.div>
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <FaDatabase className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Data Management</h3>
              <p className="text-gray-600">We ensure secure and efficient data management, providing easy access to cloud storage, backups, and recovery services.</p>
            </motion.div>
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <FaRocket className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Optimization & Support</h3>
              <p className="text-gray-600">We continuously monitor and optimize your cloud infrastructure, ensuring peak performance and cost efficiency.</p>
            </motion.div>
          </div>
        </section>

        {/* Technologies We Use */}
        <section className="py-16 text-center">
          <h2 className="text-4xl font-bold mb-8">Technologies We Use</h2>
          <p className="text-lg max-w-3xl mx-auto mb-12 text-gray-600">We work with industry-leading cloud platforms and technologies to deliver the best results for your business.</p>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <FaCloud className="text-3xl text-blue-600 mx-auto mb-2" />
              <p className="text-sm font-medium">AWS</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <FaDatabase className="text-3xl text-blue-600 mx-auto mb-2" />
              <p className="text-sm font-medium">Azure</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <FaServer className="text-3xl text-blue-600 mx-auto mb-2" />
              <p className="text-sm font-medium">Google Cloud</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <FaShieldAlt className="text-3xl text-blue-600 mx-auto mb-2" />
              <p className="text-sm font-medium">Cloudflare</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <FaRocket className="text-3xl text-blue-600 mx-auto mb-2" />
              <p className="text-sm font-medium">Kubernetes</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <FaCog className="text-3xl text-blue-600 mx-auto mb-2" />
              <p className="text-sm font-medium">Terraform</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
       
      </div>
      <Footer />
    </>
  );
}
