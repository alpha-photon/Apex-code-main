'use client'
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { PlayCircle } from "lucide-react"

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      }
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 120 }
    },
  };

  return (
    <section className="bg-gradient-to-bl from-gray-50 to-gray-50 py-20 text-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:flex-row items-center justify-between"
        >
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl font-bold mb-4"
            >
              Empowering Your Business Through Innovative Software Solutions
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-gray-500 text-xl sm:text-2xl mb-8"
            >
              Custom solutions designed to elevate your business and enhance user experiences
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                href="https://calendly.com/apexcodesystems/30min"
                className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition duration-300 inline-flex items-center justify-center"
              >
                Book Free Consultation
              </Link>
              <button
                onClick={() => console.log("Play video")}
                className="px-6 py-3 rounded-lg font-semibold border-2 border-white hover:border-black hover:text-black transition duration-300 inline-flex items-center justify-center"
              >
                <PlayCircle className="w-5 h-5 mr-2" />
                Watch Video
              </button>
            </motion.div>
          </div>
          <motion.div
            variants={itemVariants}
            className="lg:w-1/2"
          >
            <Image
              src="/hero2.png" // Assuming you have a more appropriate image
              alt="Apex Code Hero Image"
              width={600}
              height={400}
              className="rounded-lg shadow-2xl"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
