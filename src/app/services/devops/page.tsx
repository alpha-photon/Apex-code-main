'use client';

import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
// import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaTools, FaSyncAlt, FaCloud, FaServer, FaShieldAlt, FaRocket, FaCodeBranch, FaLaptopCode, FaProjectDiagram } from 'react-icons/fa';

export default function DevOpsServices() {
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
              src="/images/devops-bg.jpg"
              alt="DevOps Services"
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
              DevOps Services
            </motion.h1>
            <motion.p
              className="mt-4 text-lg font-light max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Accelerate your software development process with our comprehensive DevOps services. We streamline operations, improve collaboration, and ensure faster and more reliable releases.
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

        {/* Why DevOps Services */}
        <section className="py-16 text-center">
          <motion.h2
            className="text-4xl font-bold mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Why Choose DevOps Services?
          </motion.h2>
          <motion.p
            className="text-lg max-w-3xl mx-auto mb-12 text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our DevOps services help you automate processes, improve collaboration between development and operations teams, and accelerate your software delivery pipeline. We enable faster releases, enhanced security, and optimized infrastructure.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-gray-50 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <FaSyncAlt className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Continuous Integration & Delivery</h3>
              <p className="text-gray-600">We set up CI/CD pipelines to automate testing and deployment, ensuring faster and more reliable releases.</p>
            </motion.div>
            <motion.div
              className="bg-gray-50 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <FaShieldAlt className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Security & Compliance</h3>
              <p className="text-gray-600">We ensure your infrastructure is secure by implementing best practices for monitoring, compliance, and risk management.</p>
            </motion.div>
            <motion.div
              className="bg-gray-50 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <FaCloud className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Cloud Infrastructure Management</h3>
              <p className="text-gray-600">We optimize your cloud infrastructure, ensuring scalability, performance, and cost-efficiency for your applications.</p>
            </motion.div>
          </div>
        </section>

        {/* Our DevOps Process */}
        <section className="py-16 bg-gray-100">
          <h2 className="text-4xl font-bold text-center mb-8">Our DevOps Process</h2>
          <p className="text-lg max-w-3xl mx-auto mb-12 text-center text-gray-600">
            Our DevOps process is designed to help you achieve continuous improvement and faster time-to-market by integrating development and operations for seamless collaboration.
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
              <h3 className="text-lg font-semibold mb-2">Assessment & Planning</h3>
              <p className="text-gray-600">We begin with an assessment of your current infrastructure, followed by a strategic DevOps plan tailored to your business.</p>
            </motion.div>
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <FaCodeBranch className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Automation & Integration</h3>
              <p className="text-gray-600">We automate build, test, and deployment processes to improve efficiency and reduce manual errors.</p>
            </motion.div>
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <FaServer className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Infrastructure as Code</h3>
              <p className="text-gray-600">We use IaC to provision and manage your infrastructure efficiently, ensuring consistency across environments.</p>
            </motion.div>
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <FaRocket className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Monitoring & Optimization</h3>
              <p className="text-gray-600">We monitor your systems and optimize performance to ensure scalability, availability, and cost efficiency.</p>
            </motion.div>
          </div>
        </section>

        {/* Technologies We Use */}
        <section className="py-16 text-center">
          <h2 className="text-4xl font-bold mb-8">Technologies We Use</h2>
          <p className="text-lg max-w-3xl mx-auto mb-12 text-gray-600">We use the latest DevOps tools and technologies to ensure seamless integration, automation, and performance.</p>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <FaCloud className="text-3xl text-blue-600 mx-auto mb-2" />
              <p className="text-sm font-medium">AWS</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <FaLaptopCode className="text-3xl text-blue-600 mx-auto mb-2" />
              <p className="text-sm font-medium">Jenkins</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <FaSyncAlt className="text-3xl text-blue-600 mx-auto mb-2" />
              <p className="text-sm font-medium">Docker</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <FaServer className="text-3xl text-blue-600 mx-auto mb-2" />
              <p className="text-sm font-medium">Kubernetes</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <FaProjectDiagram className="text-3xl text-blue-600 mx-auto mb-2" />
              <p className="text-sm font-medium">Terraform</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <FaShieldAlt className="text-3xl text-blue-600 mx-auto mb-2" />
              <p className="text-sm font-medium">Ansible</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
       
      </div>
      <Footer />
    </>
  );
}
