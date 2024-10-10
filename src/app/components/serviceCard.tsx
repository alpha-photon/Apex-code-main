import { LightbulbIcon, SmartphoneIcon, NetworkIcon, CompassIcon } from "lucide-react";
import Link from 'next/link'; // Assuming you're using Next.js for routing

const ServiceSection = () => {
  const services = [
    { title: "Adopting Emerging Technology", icon: LightbulbIcon, bgColor: "bg-green-50", href: "/services/emerging-technology" },
  
    // Adding the new services
    { title: "Custom Software Development", icon: SmartphoneIcon, bgColor: "bg-yellow-50", href: "/services/custom-software" },
   
    { title: "Cloud Solutions", icon: NetworkIcon, bgColor: "bg-teal-50", href: "/services/cloud-solutions" },
    { title: "Enterprise Software Solutions", icon: NetworkIcon, bgColor: "bg-orange-50", href: "/services/enterprise-software" },
    { title: "Software Architecture Consulting", icon: CompassIcon, bgColor: "bg-cyan-50", href: "/services/software-architecture" },
    { title: "DevOps Services", icon: CompassIcon, bgColor: "bg-lime-50", href: "/services/devops" },
  
    { title: "Legacy System Modernization", icon: CompassIcon, bgColor: "bg-red-100", href: "/services/legacy-modernization" },
    { title: "E-commerce Solutions", icon: SmartphoneIcon, bgColor: "bg-yellow-100", href: "/services/ecommerce-solutions" }
  ];

  return (
    <div className="py-16 container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold text-center mb-12">
        <span className="text-blue-600">Custom-Crafted</span> Services
        <span className="block w-64 h-1 bg-red-700 mx-auto mt-2"></span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <Link key={index} href={service.href}>
            <div className={`${service.bgColor} rounded-lg p-6 flex flex-col items-center text-center cursor-pointer transition transform hover:scale-105 hover:shadow-lg h-48`}>
              <service.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold">{service.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ServiceSection;
