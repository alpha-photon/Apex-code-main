import { LightbulbIcon, SmartphoneIcon, NetworkIcon,  CompassIcon } from "lucide-react"
const ServiceSection = () => {
  const services = [
    { title: "Adopting Emerging Technology", icon: LightbulbIcon, bgColor: "bg-green-50" },
    { title: "Bespoke Software Development", icon: SmartphoneIcon, bgColor: "bg-blue-50" },
    { title: "Technology Infrastructure Solutions", icon: NetworkIcon, bgColor: "bg-red-50" },
    { title: "Technology Scaling Solutions", icon: NetworkIcon, bgColor: "bg-green-50" },
    { title: "Product & Technology Leadership", icon: CompassIcon, bgColor: "bg-blue-50" },
  ]

  return  (
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="text-blue-600">Custom-Crafted</span> Services
          <span className="block w-64 h-1 bg-red-700 mx-auto mt-2"></span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <div key={index} className={`${service.bgColor} rounded-lg p-6 flex flex-col items-center text-center`}>
              <service.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold">{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    )
};

export default ServiceSection;