'use client';

import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
// import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, FaCloud, FaRocket, FaLaptopCode, FaCogs } from 'react-icons/fa';

export default function WebDevelopment() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-16 ">

        {/* Hero Section */}
        <motion.section
          className="relative  text-black py-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
         <div className="absolute inset-0">
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
          </div>
          <div className="relative z-10 text-center">
            <motion.h1
              className="text-5xl font-extrabold"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2 }}
            >
              Web Development Services
            </motion.h1>
            <motion.p
              className="mt-4 text-lg font-light max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              We create responsive and robust websites tailored to your business needs. From eCommerce platforms to custom web applications, we deliver solutions that drive results.
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

        {/* Why Web Development */}
        <section className="py-16 text-center">
          <motion.h2
            className="text-4xl font-bold mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Why Choose Our Web Development Services?
          </motion.h2>
          <motion.p
            className="text-lg max-w-3xl mx-auto mb-12 text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our web development services provide your business with a highly functional, visually appealing, and user-friendly website that enhances your brand presence online. We ensure performance, security, and scalability.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-gray-50 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <FaLaptopCode className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Custom Solutions</h3>
              <p className="text-gray-600">We deliver tailored solutions to meet the unique needs of your business, helping you stand out in a competitive market.</p>
            </motion.div>
            <motion.div
              className="bg-gray-50 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <FaCloud className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Cloud-Ready Websites</h3>
              <p className="text-gray-600">We create cloud-compatible websites that are scalable and ensure high availability for your users across the globe.</p>
            </motion.div>
            <motion.div
              className="bg-gray-50 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <FaRocket className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">High Performance</h3>
              <p className="text-gray-600">We ensure your website performs well with fast loading times, great user experience, and optimized for SEO.</p>
            </motion.div>
          </div>
        </section>

        {/* Our Web Development Process */}
        <section className="py-16 bg-gradient-to-r from-blue-200 via-pink-200 to-purple-200 px-4">
          <h2 className="text-4xl font-bold text-center mb-8">Our Web Development Process</h2>
          <p className="text-lg max-w-3xl mx-auto mb-12 text-center text-gray-600">
            We follow a streamlined process to ensure quality and timely delivery of your website.
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
              <h3 className="text-lg font-semibold mb-2">Planning & Design</h3>
              <p className="text-gray-600">We plan and design the structure of your website based on your business objectives and audience needs.</p>
            </motion.div>
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <FaHtml5 className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Frontend Development</h3>
              <p className="text-gray-600">Our team builds a responsive, visually appealing, and fast frontend for a seamless user experience.</p>
            </motion.div>
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <FaNodeJs className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Backend Development</h3>
              <p className="text-gray-600">We develop a strong backend to ensure your website is secure, scalable, and performs well under all conditions.</p>
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
              <p className="text-gray-600">We launch your website and provide ongoing support for updates, security, and new features.</p>
            </motion.div>
          </div>
        </section>

        {/* Technologies We Use */}
        <section className="py-16 text-center">
          <h2 className="text-4xl font-bold mb-8">Technologies We Use</h2>
          <p className="text-lg max-w-3xl mx-auto mb-12 text-gray-600">We utilize cutting-edge technologies to deliver top-notch web development services.</p>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <FaHtml5 className="text-3xl text-blue-600 mx-auto mb-2" />
              <p className="text-sm font-medium">HTML5</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <FaCss3Alt className="text-3xl text-blue-600 mx-auto mb-2" />
              <p className="text-sm font-medium">CSS3</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <FaJs className="text-3xl text-blue-600 mx-auto mb-2" />
              <p className="text-sm font-medium">JavaScript</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <FaReact className="text-3xl text-blue-600 mx-auto mb-2" />
              <p className="text-sm font-medium">React</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <FaNodeJs className="text-3xl text-blue-600 mx-auto mb-2" />
              <p className="text-sm font-medium">Node.js</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <FaDatabase className="text-3xl text-blue-600 mx-auto mb-2" />
              <p className="text-sm font-medium">MongoDB</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        

      </div>
      <Footer />
    </>
  );
}
