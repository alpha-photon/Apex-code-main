'use client';

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section className="relative bg-white min-h-screen flex flex-col lg:flex-row items-center justify-between p-8 lg:p-16 overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        // Added pointer-events-none to prevent it from blocking interactions
      >
        <svg
          className="absolute left-0 top-0 h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="rgba(0,0,0,0.05)"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        <div className="absolute -left-1/4 -top-1/4 w-1/2 h-1/2 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -right-1/4 -bottom-1/4 w-1/2 h-1/2 bg-gradient-to-tl from-blue-100 to-blue-200 rounded-full opacity-20 blur-3xl"></div>
      </div>

      {/* Text Section */}
      <motion.div
        className="lg:w-1/2 space-y-6 mb-8 lg:mb-0 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h2 className="text-lg font-semibold text-gray-700 flex items-center space-x-2">
            <span className="inline-block">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                  fill="currentColor"
                />
              </svg>
            </span>
            <span>WHO WE ARE?</span>
          </h2>
        </motion.div>

        <motion.h1
          className="text-black text-4xl lg:text-5xl font-bold leading-tight tracking-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          We are experts in Technology, AI & Product Innovation. We accelerate your vision through thought leadership and bespoke execution.
        </motion.h1>
      </motion.div>

      {/* Image Section */}
      <motion.div
        className="lg:w-1/2 relative z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <Image
          src="/hero2.png"
          width={600}
          height={800}
          alt="Abstract cityscape illustration"
          className="w-full h-auto rounded-lg shadow-xl"
        />
      </motion.div>
    </section>
  );
}
