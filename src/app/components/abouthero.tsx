import { motion } from "framer-motion";
import Image from "next/image";
export default function About() {
  return (
    <section className="bg-[#f9f3e6] min-h-screen flex flex-col lg:flex-row items-center justify-center p-8">
    <motion.div 
      className="lg:w-1/2 space-y-6 mb-8 lg:mb-0"
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
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" />
            </svg>
          </span>
          <span>WHO WE ARE?</span>
        </h2>
      </motion.div>
      <motion.h1 
        className="text-black text-4xl lg:text-5xl font-bold leading-tight"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        Technology, Product & AI experts who accelerate your vision with thought leadership & bespoke execution.
      </motion.h1>
    </motion.div>
    <motion.div 
      className="lg:w-1/2"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.6, duration: 0.8 }}
    >
      <Image
        src="/hero2.png?height=100&width=100"
        width={400}
        height={600}
        alt="Abstract cityscape illustration"
        className="w-full h-auto"
      />
    </motion.div>
  </section>
  );
}
