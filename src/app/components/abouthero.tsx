'use client';

import { motion } from "framer-motion";
import { BarChart3, Globe, Smartphone, Briefcase, Code, Database, Cloud, User } from "lucide-react";

// Icon component
const FeatureIcon = ({ icon: Icon, x, y, color, rotate }: { icon: React.ElementType; x: number; y: number; color: string, rotate?: number }) => (
  <motion.g
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6 }}
    whileHover={{ scale: 1.2 }}
  >
    <motion.circle
      cx={x}
      cy={y}
      r="25"
      fill={color}
      initial={{ rotate: 0 }}
      animate={{ rotate: rotate || 0 }}
      transition={{ duration: 10, ease: "linear", repeat: Infinity }}
    />
    <foreignObject x={x - 15} y={y - 15} width="30" height="30">
      <div className="flex items-center justify-center w-full h-full">
        <Icon className="w-5 h-5 text-white" />
      </div>
    </foreignObject>
  </motion.g>
);

// Improved Animated Diagram
const EnhancedAnimatedDiagram = () => (
  <svg viewBox="0 0 400 400" className="w-full h-auto max-w-md mx-auto">
    <defs>
      <radialGradient id="grad" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.1" />
        <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.1" />
      </radialGradient>
    </defs>

    {/* Central Circle with Glow Effect */}
    <motion.circle
      cx="200"
      cy="200"
      r="60"
      fill="url(#grad)"
      stroke="rgba(0, 0, 0, 0.2)"
      strokeWidth="2"
      filter="url(#glow)"
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
    />

    {/* Concentric Circle Layers */}
    <motion.circle
      cx="200"
      cy="200"
      r="160"
      fill="none"
      stroke="url(#grad)"
      strokeWidth="20"
      strokeLinecap="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1, rotate: 360 }}
      transition={{ duration: 8, ease: "linear", repeat: Infinity }}
    />
    <motion.circle
      cx="200"
      cy="200"
      r="130"
      fill="none"
      stroke="rgba(0, 0, 0, 0.1)"
      strokeWidth="2"
      strokeDasharray="10 5"
      animate={{ rotate: -360 }}
      transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
    />

    {/* Connecting Curved Lines */}
    <motion.path
      d="M 200 60 Q 250 150 320 160 T 320 250"
      fill="none"
      stroke="#FF6B6B"
      strokeWidth="3"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
    />

    <motion.path
      d="M 200 60 Q 150 150 80 200 T 80 280"
      fill="none"
      stroke="#3B82F6"
      strokeWidth="3"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
    />

    {/* Rotating Feature Icons */}
    <FeatureIcon icon={BarChart3} x={150} y={60} color="#8B5CF6" rotate={-360} />
    <FeatureIcon icon={Globe} x={320} y={160} color="#3B82F6" />
    <FeatureIcon icon={Smartphone} x={240} y={320} color="#10B981" />
    <FeatureIcon icon={Briefcase} x={80} y={240} color="#F59E0B" />
    <FeatureIcon icon={Code} x={120} y={120} color="#EC4899" />
    <FeatureIcon icon={Database} x={280} y={280} color="#6366F1" />
    <FeatureIcon icon={Cloud} x={120} y={280} color="#14B8A6" />
    <FeatureIcon icon={User} x={90} y={200} color="#7C3AED" />

    {/* Central Element Glow Effect */}
    <motion.circle
      cx="200"
      cy="200"
      r="80"
      stroke="url(#grad)"
      strokeWidth="2"
      fill="none"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 0.6 }}
      transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
    />
  </svg>
);

export default function About() {
  return (
    <section className="relative bg-white min-h-screen flex flex-col lg:flex-row items-center justify-between p-8 lg:p-16 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg
          className="absolute left-0 top-0 h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(0,0,0,0.05)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        <motion.div
          className="absolute -left-1/4 -top-1/4 w-1/2 h-1/2 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full opacity-20 blur-3xl"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-1/4 -bottom-1/4 w-1/2 h-1/2 bg-gradient-to-tl from-blue-100 to-blue-200 rounded-full opacity-20 blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
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
            <motion.span
              whileHover={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 0.4 }}
            >
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
            </motion.span>
            <span>WHO WE ARE?</span>
          </h2>
        </motion.div>

        <motion.h1
          className="text-black text-4xl lg:text-5xl font-bold leading-tight tracking-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          We are experts in Technology, AI & Product Innovation. We accelerate
          your vision through thought leadership and bespoke execution.
        </motion.h1>
      </motion.div>

      {/* Replacing Image Section with Enhanced Animation */}
      <motion.div
        className="lg:w-1/2 relative z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <EnhancedAnimatedDiagram />
      </motion.div>
    </section>
  );
}
