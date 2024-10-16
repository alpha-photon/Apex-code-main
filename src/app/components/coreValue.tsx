'use client';

import { motion } from "framer-motion";
import { FlagIcon, SearchIcon, BoxIcon, BuildingIcon, MessageSquareIcon, ClockIcon } from "lucide-react";

export default function CoreValue() {
  const values = [
    { 
      icon: FlagIcon, 
      title: "High Ownership", 
      description: "We take full responsibility for our work, driving projects forward with a sense of purpose and accountability.", 
      bgColor: "bg-green-100" 
    },
    { 
      icon: SearchIcon, 
      title: "Detail Oriented", 
      description: "We focus on the finer details, ensuring precision and quality in every aspect of our work.", 
      bgColor: "bg-red-100" 
    },
    { 
      icon: BoxIcon, 
      title: "Product First Approach", 
      description: "Our priority is delivering high-quality products that align with customer needs and exceed expectations.", 
      bgColor: "bg-blue-100" 
    },
    { 
      icon: BuildingIcon, 
      title: "Empower Business Continuity", 
      description: "We provide solutions that ensure your business remains operational and resilient through challenges.", 
      bgColor: "bg-yellow-100" 
    },
    { 
      icon: MessageSquareIcon, 
      title: "Transparent Communication", 
      description: "We foster an open and honest dialogue, keeping all stakeholders informed at every stage of the project.", 
      bgColor: "bg-red-100" 
    },
    { 
      icon: ClockIcon, 
      title: "On Time Delivery", 
      description: "We prioritize timely delivery of projects without compromising on quality or efficiency.", 
      bgColor: "bg-green-100" 
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <section>
        <h2 className="text-4xl font-bold mb-12 text-center">
          Core <span className="text-blue-600">Values</span>
          <span className="block w-32 h-1 bg-red-700 mx-auto mt-2"></span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${value.bgColor} p-6 rounded-lg flex flex-col items-center text-center shadow-lg cursor-pointer transition-transform hover:scale-105 hover:shadow-xl h-auto`}
            >
              <value.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
              <p className="text-gray-600 text-sm">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
