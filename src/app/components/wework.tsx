'use client';

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { 
  ClipboardListIcon, 
  FileTextIcon, 
  LayersIcon, 
  MessageCircleIcon, 
  MessagesSquareIcon, 
  RocketIcon, 
  SettingsIcon 
} from "lucide-react";

export default function WeWork() {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const steps = [
    { icon: ClipboardListIcon, title: "Understand Requirements", description: "We thoroughly understand your business needs.", bgColor: "bg-green-100" },
    { icon: MessagesSquareIcon, title: "Technical Assessment & Discussion", description: "Collaborative discussions to refine technical aspects.", bgColor: "bg-red-100" },
    { icon: FileTextIcon, title: "Prepare Execution Plan", description: "A clear and structured plan to ensure smooth execution.", bgColor: "bg-blue-100" },
    { icon: LayersIcon, title: "Phases Wise Delivery", description: "Phased delivery ensures progress visibility and flexibility.", bgColor: "bg-yellow-100" },
    { icon: MessageCircleIcon, title: "Open for Feedback", description: "We welcome feedback to improve and adapt our solutions.", bgColor: "bg-blue-100" },
    { icon: RocketIcon, title: "Go Live", description: "Successfully launch your product with our expert guidance.", bgColor: "bg-pink-100" },
    { icon: SettingsIcon, title: "Maintenance", description: "Continued maintenance to keep your software running smoothly.", bgColor: "bg-red-100" },
    { icon: ClipboardListIcon, title: "Feed Back", description: "Ongoing feedback loop for continuous improvement.", bgColor: "bg-green-100" }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <section className="mb-16" ref={ref}>
        <h2 className="text-4xl font-bold text-center mb-8">
          How We <span className="text-blue-600">Work</span>?
          <span className="block w-32 h-1 bg-red-700 mx-auto mt-2"></span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className={`${step.bgColor} p-8 rounded-lg flex flex-col items-center text-center shadow-md transition transform hover:scale-105 hover:shadow-lg`}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <step.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
