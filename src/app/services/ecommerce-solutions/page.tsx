'use client';

import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
//import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaShoppingCart, FaBoxOpen, FaLaptop, FaMobileAlt, FaCreditCard, FaRocket } from 'react-icons/fa';

export default function ECommerceSolutions() {
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
              src="/images/ecommerce-solutions-bg.jpg"
              alt="E-commerce Solutions"
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
              E-commerce Solutions
            </motion.h1>
            <motion.p
              className="mt-4 text-lg font-light max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Empower your online business with scalable, secure, and feature-rich e-commerce solutions that drive growth and customer engagement.
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
            Why Choose Our E-commerce Solutions?
          </motion.h2>
          <motion.p
            className="text-lg max-w-3xl mx-auto mb-12 text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Whether you're starting a new online store or expanding your existing e-commerce platform, our solutions are designed to help you succeed. We offer comprehensive services tailored to your business needs.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-gray-50 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <FaShoppingCart className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Custom E-commerce Platforms</h3>
              <p className="text-gray-600">We build tailor-made e-commerce platforms that align with your business goals and enhance customer experiences.</p>
            </motion.div>
            <motion.div
              className="bg-gray-50 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <FaLaptop className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Responsive Design</h3>
              <p className="text-gray-600">Our e-commerce solutions are optimized for all devices, ensuring a seamless shopping experience across desktop, mobile, and tablet.</p>
            </motion.div>
            <motion.div
              className="bg-gray-50 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <FaCreditCard className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Secure Payment Integration</h3>
              <p className="text-gray-600">We ensure secure payment gateways are integrated, offering multiple payment methods to meet your customers' needs.</p>
            </motion.div>
          </div>
        </section>

        {/* Our E-commerce Solutions Process */}
        <section className="py-16 bg-gray-100">
          <h2 className="text-4xl font-bold text-center mb-8">Our E-commerce Development Process</h2>
          <p className="text-lg max-w-3xl mx-auto mb-12 text-center text-gray-600">
            Our e-commerce development process is designed to help you create a seamless and scalable online shopping experience, from concept to launch.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center mx-4">
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <FaBoxOpen className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Requirement Gathering</h3>
              <p className="text-gray-600">We start by understanding your business goals and technical requirements to craft a custom e-commerce solution.</p>
            </motion.div>
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <FaMobileAlt className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Responsive Design</h3>
              <p className="text-gray-600">Our team designs and develops fully responsive e-commerce sites that offer an exceptional user experience on all devices.</p>
            </motion.div>
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <FaCreditCard className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Secure Payments</h3>
              <p className="text-gray-600">We integrate secure and trusted payment gateways, ensuring a safe shopping experience for your customers.</p>
            </motion.div>
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <FaRocket className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Testing & Launch</h3>
              <p className="text-gray-600">We thoroughly test your e-commerce site for performance, security, and user experience before a successful launch.</p>
            </motion.div>
          </div>
        </section>

        {/* Call to Action */}
        

      </div>
      <Footer />
    </>
  );
}
