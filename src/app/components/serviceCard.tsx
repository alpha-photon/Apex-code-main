import {
  LightbulbIcon,
  SmartphoneIcon,
  NetworkIcon,
  CompassIcon,
} from "lucide-react";
import Link from "next/link"; // Assuming you're using Next.js for routing

const ServiceSection = () => {
  const services = [
    {
      title: "Adopting Emerging Technology",
      icon: LightbulbIcon,
      description:
        "Stay ahead with the latest technological innovations tailored to your business needs.",
      bgColor: "bg-green-100",
      href: "/services/emerging-technology",
    },
    {
      title: "Custom Software Development",
      icon: SmartphoneIcon,
      description:
        "Bespoke software solutions that enhance your operations and user experience.",
      bgColor: "bg-yellow-100",
      href: "/services/custom-software",
    },
    {
      title: "Cloud Solutions",
      icon: NetworkIcon,
      description:
        "Scalable and secure cloud infrastructure designed for your growing business.",
      bgColor: "bg-teal-100",
      href: "/services/cloud-solutions",
    },
    {
      title: "Enterprise Software Solutions",
      icon: NetworkIcon,
      description:
        "Comprehensive software tailored to your enterprise's unique needs.",
      bgColor: "bg-orange-100",
      href: "/services/enterprise-software",
    },
    {
      title: "Software Architecture Consulting",
      icon: LightbulbIcon,
      description:
        "Expert guidance in designing scalable and reliable software architectures.",
      bgColor: "bg-cyan-100",
      href: "/services/software-architecture",
    },
    {
      title: "DevOps Services",
      icon: CompassIcon,
      description:
        "Streamline your development pipeline with automated and efficient processes.",
      bgColor: "bg-lime-100",
      href: "/services/devops",
    },
    {
      title: "Legacy System Modernization",
      icon: CompassIcon,
      description:
        "Upgrade outdated systems to technologies without disrupting business operations.",
      bgColor: "bg-red-100",
      href: "/services/legacy-modernization",
    },
    {
      title: "E-commerce Solutions",
      icon: SmartphoneIcon,
      description:
        "Robust and scalable e-commerce platforms that drive sales and growth.",
      bgColor: "bg-yellow-100",
      href: "/services/ecommerce-solutions",
    },
    {
      title: "Maintenance and Support Services",
      icon: LightbulbIcon,
      description:"Reliable ongoing  maintenance to keep your software running smoothly and efficiently.",
      bgColor: "bg-red-100",
      href: "/services/maintenance-support",
    },
  ];

  return (
    <div className="py-16 container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold text-center mb-12">
        <span className="text-blue-600">Custom-Crafted</span> Services
        <span className="block w-64 h-1 bg-red-700 mx-auto mt-2"></span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Link key={index} href={service.href}>
            <div
              className={`${service.bgColor} rounded-lg p-6 flex flex-col items-center text-center cursor-pointer transition transform hover:scale-105 hover:shadow-xl h-auto`}
            >
              <service.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ServiceSection;
