"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { PlayCircle } from "lucide-react";

export default function HeroSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const handleVideoOpen = () => {
    setIsVideoOpen(true);
  };

  const handleVideoClose = () => {
    setIsVideoOpen(false);
  };

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 120 },
    },
  };

  return (
    <section className="bg-white py-20 text-black relative">
      {/* Background SVG and Gradient */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        // Added pointer-events-none to prevent it from blocking button clicks
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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:flex-row items-center justify-between"
        >
          {/* Text Section */}
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
              Custom solutions designed to elevate your business and enhance
              user experiences
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <a
                href="https://calendly.com/apexcodesystems/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition duration-300 inline-flex items-center justify-center"
              >
                Book Free Consultation
              </a>
              <button
                onClick={handleVideoOpen}
                className="px-6 py-3 rounded-lg font-semibold border-2 border-white hover:border-black hover:text-black transition duration-300 inline-flex items-center justify-center"
              >
                <PlayCircle className="w-5 h-5 mr-2" />
                Watch Video
              </button>
            </motion.div>
          </div>

          {/* Image Section */}
          <motion.div variants={itemVariants} className="lg:w-1/2">
            <Image
              src="/hero2.png"
              alt="Apex Code Hero Image"
              width={600}
              height={400}
              className="rounded-lg shadow-2xl"
            />
          </motion.div>
        </motion.div>

        {/* Video Modal */}
        {isVideoOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <div className="bg-white p-4 rounded-lg shadow-lg relative">
              <button
                onClick={handleVideoClose}
                className="absolute top-2 right-2 text-black font-bold"
              >
                X
              </button>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/your-video-id"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

// 'use client'
// import { motion } from "framer-motion"
// import Image from "next/image"
// import Link from "next/link"
// import { PlayCircle } from "lucide-react"

// export default function HeroSection() {
//   const containerVariants = {
//     hidden: { opacity: 0, scale: 0.8 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: {
//         when: "beforeChildren",
//         staggerChildren: 0.1,
//       }
//     },
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: { type: "spring", stiffness: 120 }
//     },
//   };

//   return (
//     <section className="relative bg-gradient-to-bl from-gray-50 to-gray-100 py-20 text-black overflow-hidden">
//       {/* Background decorative elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <svg className="absolute left-0 top-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
//           <defs>
//             <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
//               <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(0,0,0,0.05)" strokeWidth="1"/>
//             </pattern>
//           </defs>
//           <rect width="100%" height="100%" fill="url(#grid)" />
//         </svg>
//         <div className="absolute -left-1/4 -top-1/4 w-1/2 h-1/2 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full opacity-20 blur-3xl"></div>
//         <div className="absolute -right-1/4 -bottom-1/4 w-1/2 h-1/2 bg-gradient-to-tl from-blue-100 to-blue-200 rounded-full opacity-20 blur-3xl"></div>
//       </div>

//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//           className="flex flex-col lg:flex-row items-center justify-between"
//         >
//           <div className="lg:w-1/2 mb-10 lg:mb-0">
//             <motion.h1
//               variants={itemVariants}
//               className="text-4xl sm:text-5xl font-bold mb-4"
//             >
//               Empowering Your Business Through Innovative Software Solutions
//             </motion.h1>
//             <motion.p
//               variants={itemVariants}
//               className="text-gray-600 text-xl sm:text-2xl mb-8"
//             >
//               Custom solutions designed to elevate your business and enhance user experiences
//             </motion.p>
//             <motion.div variants={itemVariants} className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
//               <Link
//                 href="https://calendly.com/apexcodesystems/30min"
//                 className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition duration-300 inline-flex items-center justify-center"
//               >
//                 Book Free Consultation
//               </Link>
//               <button
//                 onClick={() => console.log("Play video")}
//                 className="px-6 py-3 rounded-lg font-semibold border-2 border-black text-black hover:bg-black hover:text-white transition duration-300 inline-flex items-center justify-center"
//               >
//                 <PlayCircle className="w-5 h-5 mr-2" />
//                 Watch Video
//               </button>
//             </motion.div>
//           </div>
//           <motion.div
//             variants={itemVariants}
//             className="lg:w-1/2"
//           >
//             <Image
//               src="/hero2.png"
//               alt="Apex Code Hero Image"
//               width={600}
//               height={400}
//               className="rounded-lg shadow-2xl"
//             />
//         </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }
