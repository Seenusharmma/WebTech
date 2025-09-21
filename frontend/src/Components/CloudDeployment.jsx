import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Cloud, Server, Database, Cpu, Settings } from "lucide-react";

export default function CloudDeployment() {
  const navigate = useNavigate();

  const cloudServices = [
    {
      id: "cloud-hosting",
      title: "Cloud Hosting",
      desc: "Scalable and secure cloud hosting solutions to ensure your applications run smoothly.",
      icon: <Cloud size={44} className="text-black" />,
      image: "https://images.unsplash.com/photo-1667984390535-6d03cff0b11a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2xvdWQlMjBjb21wdXRpbmd8ZW58MHx8MHx8fDA%3D",
      path: "/cloud-hosting",
    },
    {
      id: "database-management",
      title: "Database Management",
      desc: "Efficient database deployment and management to keep your data safe and accessible.",
      icon: <Database size={44} className="text-black" />,
      image: "https://images.unsplash.com/photo-1741958193874-6ef299f6b053?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RGF0YWJhc2UlMjBNYW5hZ2VtZW50fGVufDB8fDB8fHww",
      path: "/database-management",
    },
    {
      id: "server-setup",
      title: "Server Setup & Management",
      desc: "Setup, configure, and maintain cloud servers optimized for your workloads.",
      icon: <Server size={44} className="text-black" />,
      image: "https://images.unsplash.com/photo-1681583484651-281ae2defb17?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fFNlcnZlciUyMFNldHVwJTIwJTI2JTIwTWFuYWdlbWVudHxlbnwwfHwwfHx8MA%3D%3D",
      path: "/server-setup",
    },
    {
      id: "cloud-automation",
      title: "Cloud Automation",
      desc: "Automate deployment, scaling, and monitoring of cloud applications for efficiency.",
      icon: <Settings size={44} className="text-black" />,
      image: "https://plus.unsplash.com/premium_photo-1683288706548-e8b6bb72fe86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q2xvdWQlMjBBdXRvbWF0aW9ufGVufDB8fDB8fHww",
      path: "/cloud-automation",
    },
    {
      id: "ai-cloud-integration",
      title: "AI Cloud Integration",
      desc: "Integrate AI solutions with cloud platforms to enhance intelligence and performance.",
      icon: <Cpu size={44} className="text-black" />,
      image: "https://media.istockphoto.com/id/2222990006/photo/artificial-intelligence-machine-learning-large-language-model-ai-technology.webp?a=1&b=1&s=612x612&w=0&k=20&c=T28GEzXtmmie0RbPJAn6MDncUJpQzqaqoSimSjLBBv0=",
      path: "/ai-cloud-integration",
    },
  ];

  return (
    <section className="min-h-screen bg-white text-gray-900 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16">
          Cloud & Deployment Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {cloudServices.map((service) => (
            <motion.div
              key={service.id}
              className="rounded-2xl border border-gray-200 shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition"
              whileHover={{ scale: 1.03 }}
             
            >
              {/* Image */}
              <div className="w-full h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Icon & Title */}
              <div className="p-6 text-center">
                <div className="flex justify-center mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-700">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
