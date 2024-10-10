'use client';

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ClipboardListIcon, FileTextIcon, LayersIcon, MessageCircleIcon, MessagesSquareIcon, RocketIcon, SettingsIcon } from "lucide-react";

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
    { icon: ClipboardListIcon, title: "Understand Requirements", bgColor: "bg-green-100" },
    { icon: MessagesSquareIcon, title: "Technical Assessment & Discussion", bgColor: "bg-red-100" },
    { icon: FileTextIcon, title: "Prepare Execution Plan", bgColor: "bg-blue-100" },
    { icon: LayersIcon, title: "Phases Wise Delivery", bgColor: "bg-yellow-100" },
    { icon: MessageCircleIcon, title: "Open for Feedback", bgColor: "bg-blue-100" },
    { icon: RocketIcon, title: "Go Live", bgColor: "bg-pink-100" },
    { icon: SettingsIcon, title: "Maintenance", bgColor: "bg-red-100" },
    { icon: ClipboardListIcon, title: "Feed Back", bgColor: "bg-green-100" }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12" ref={ref}>
        <h2 className="text-4xl font-bold text-center mb-12">
          How We <span className="text-blue-600">Work</span>?
          <span className="block w-32 h-1 bg-red-700 mx-auto mt-2"></span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className={`${step.bgColor} p-6 rounded-lg flex flex-col items-center text-center cursor-pointer transition transform hover:scale-105 hover:shadow-lg h-48`}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <step.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold">{step.title}</h3>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
