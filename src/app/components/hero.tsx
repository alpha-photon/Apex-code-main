"use client"

import React, { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion' // Import useAnimation here
import { PlayCircle, BarChart3, Globe, Smartphone, Briefcase, User, Code, Database, Cloud } from 'lucide-react'

// UseAnimatedPath Hook
const useAnimatedPath = (initialPath: string, finalPath: string) => {
  const [path, setPath] = useState(initialPath)

  useEffect(() => {
    const interval = setInterval(() => {
      setPath((currentPath) => 
        currentPath === initialPath ? finalPath : initialPath
      )
    }, 4000)

    return () => clearInterval(interval)
  }, [initialPath, finalPath])

  return path
}

// FeatureIcon Component
const FeatureIcon = ({ icon: Icon, x, y, color }: { icon: React.ElementType; x: number; y: number; color: string }) => {
  const controls = useAnimation() // useAnimation to control hover effects

  return (
    <motion.g
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      onHoverStart={() => controls.start({ y: -10, scale: 1.1 })}
      onHoverEnd={() => controls.start({ y: 0, scale: 1 })}
    >
      <motion.circle
        cx={x}
        cy={y}
        r="30"
        fill={color}
        initial={{ opacity: 0.7 }}
        whileHover={{ opacity: 1 }}
      />
      <motion.foreignObject x={x-15} y={y-15} width="30" height="30" animate={controls}>
        <div className="flex items-center justify-center w-full h-full">
          <Icon className="w-5 h-5 text-white" />
        </div>
      </motion.foreignObject>
    </motion.g>
  )
}

// UserIcon Component
const UserIcon = ({ color, x, y }: { color: string; x: number; y: number }) => (
  <motion.g
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    whileHover={{ scale: 1.1 }}
  >
    <motion.circle
      cx={x}
      cy={y}
      r="25"
      fill={color}
      animate={{ scale: [1, 1.1, 1] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    />
    <foreignObject x={x-12.5} y={y-12.5} width="25" height="25">
      <div className="flex items-center justify-center w-full h-full">
        <User className="w-4 h-4 text-white" />
      </div>
    </foreignObject>
  </motion.g>
)

// Main Hero Section with Integrated Animation
export default function CombinedHeroSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  const path = useAnimatedPath('M200,50 L200,50 L200,50 L200,50 Z', 'M200,50 L330,200 L200,350 L70,200 Z')
  const [cursorPosition, setCursorPosition] = useState({ x: 100, y: 185 })

  const handleMouseMove = (event: React.MouseEvent<SVGSVGElement>) => {
    const svg = event.currentTarget
    const rect = svg.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    setCursorPosition({ x: x - 100, y: y - 15 })
  }

  const handleVideoOpen = () => {
    setIsVideoOpen(true)
  }

  const handleVideoClose = () => {
    setIsVideoOpen(false)
  }

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
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 120 },
    },
  }

  return (
    <section className="bg-white py-20 text-black relative">
      {/* Background SVG and Gradient */}
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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:flex-row items-center justify-between"
        >
          {/* Text Section */}
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl font-bold mb-4">
              Empowering Your Business Through Innovative Software Solutions
            </motion.h1>
            <motion.p variants={itemVariants} className="text-gray-500 text-xl sm:text-2xl mb-8">
              Custom solutions designed to elevate your business and enhance user experiences
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
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

          {/* Animated Diagram Section */}
          <motion.div variants={itemVariants} className="lg:w-1/2">
            <svg 
              viewBox="0 0 400 400" 
              className="w-full h-auto max-w-md mx-auto"
              onMouseMove={handleMouseMove}
              onMouseLeave={() => setCursorPosition({ x: 100, y: 185 })}
            >
              <defs>
                <radialGradient id="bgGrad" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                  <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.1" />
                  <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.1" />
                </radialGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3.5" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#8B5CF6" />
                  <stop offset="100%" stopColor="#3B82F6" />
                </linearGradient>
              </defs>

              <rect width="400" height="400" fill="url(#bgGrad)" rx="20" />

              <motion.circle
                cx="200"
                cy="200"
                r="160"
                fill="none"
                stroke="url(#lineGrad)"
                strokeWidth="30"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1, rotate: 360 }}
                transition={{ duration: 8, ease: "linear", repeat: Infinity }}
              />

              <motion.circle
                cx="200"
                cy="200"
                r="130"
                fill="rgba(255, 255, 255, 0.1)"
                stroke="rgba(255, 255, 255, 0.2)"
                strokeWidth="2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              />

              <motion.path
                d={path}
                fill="none"
                stroke="url(#lineGrad)"
                strokeWidth="2"
                filter="url(#glow)"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
              />

              <motion.rect
                x={cursorPosition.x}
                y={cursorPosition.y}
                width="200"
                height="30"
                rx="15"
                fill="url(#lineGrad)"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.2 }}
              />

              <UserIcon color="#8B5CF6" x={200} y={70} />
              <UserIcon color="#3B82F6" x={310} y={200} />
              <UserIcon color="#10B981" x={200} y={330} />
              <UserIcon color="#F59E0B" x={90} y={200} />

              <FeatureIcon icon={BarChart3} x={160} y={50} color="#8B5CF6" />
              <FeatureIcon icon={Globe} x={320} y={160} color="#3B82F6" />
              <FeatureIcon icon={Smartphone} x={240} y={320} color="#10B981" />
              <FeatureIcon icon={Briefcase} x={50} y={240} color="#F59E0B" />
              <FeatureIcon icon={Code} x={120} y={120} color="#EC4899" />
              <FeatureIcon icon={Database} x={280} y={280} color="#6366F1" />
              <FeatureIcon icon={Cloud} x={120} y={280} color="#14B8A6" />

              <motion.circle
                cx="200"
                cy="200"
                r="180"
                stroke="url(#lineGrad)"
                strokeWidth="2"
                fill="none"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.5 }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
              />

              <motion.circle
                cx="200"
                cy="200"
                r="190"
                stroke="rgba(255, 255, 255, 0.1)"
                strokeWidth="10"
                strokeDasharray="10 5"
                fill="none"
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              />
            </svg>
          </motion.div>
        </motion.div>

        {/* Video Modal */}
        {isVideoOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <div className="bg-white p-4 rounded-lg shadow-lg relative">
              <button onClick={handleVideoClose} className="absolute top-2 right-2 text-black font-bold">
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
  )
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
