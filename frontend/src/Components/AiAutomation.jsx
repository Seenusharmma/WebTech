import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Brain, Cpu, Cloud, Server, Activity } from "lucide-react";

export default function AiAutomation() {
  const navigate = useNavigate();

  const aiServices = [
    {
      id: "ai-workflows",
      title: "AI Workflow Automation",
      desc: "Automate repetitive tasks and optimize business processes using AI-driven workflows.",
      icon: <Brain size={44} className="text-black" />,
      image: "https://images.unsplash.com/photo-1716436329836-208bea5a55e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8QUklMjBXb3JrZmxvdyUyMEF1dG9tYXRpb258ZW58MHx8MHx8fDA%3D",
      path: "/ai-workflows",
    },
    {
      id: "predictive-insights",
      title: "Predictive Insights",
      desc: "Leverage AI to analyze data patterns and generate actionable insights for your business.",
      icon: <Cpu size={44} className="text-black" />,
      image: "https://media.istockphoto.com/id/2154892211/photo/predictive-analytics-concept-on-virtual-screen-business-intelligence.webp?a=1&b=1&s=612x612&w=0&k=20&c=PKeZ4H23WeuifbFeuGtI52Hbp7BSoPEWKvtTQ0NIE2U=",
      path: "/predictive-insights",
    },
    {
      id: "chatbots-automation",
      title: "Chatbots & Virtual Assistants",
      desc: "Create intelligent chatbots that interact with users and provide real-time support.",
      icon: <Activity size={44} className="text-black" />,
      image: "https://images.unsplash.com/photo-1666875758414-bdc6c0d6f64e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fENoYXRib3RzJTIwJTI2JTIwVmlydHVhbCUyMEFzc2lzdGFudHN8ZW58MHx8MHx8fDA%3D",
      path: "/chatbots-automation",
    },
    {
      id: "cloud-ai",
      title: "AI Cloud Solutions",
      desc: "Deploy AI models on cloud platforms to scale easily and securely.",
      icon: <Cloud size={44} className="text-black" />,
      image: "https://media.istockphoto.com/id/1488294044/photo/businessman-works-on-laptop-showing-business-analytics-dashboard-with-charts-metrics-and-kpi.webp?a=1&b=1&s=612x612&w=0&k=20&c=Tlc0bCyVUKOylIX2VcdJTKZUzto8R0CviydpYtzGP7I=",
      path: "/cloud-ai",
    },
    {
      id: "ai-infrastructure",
      title: "AI Infrastructure Management",
      desc: "Build and maintain robust infrastructure to support AI applications efficiently.",
      icon: <Server size={44} className="text-black" />,
      image: "https://media.istockphoto.com/id/2148178472/photo/hispanic-programmers-collaborating-on-software-development-in-a-modern-office-setting.webp?a=1&b=1&s=612x612&w=0&k=20&c=cOn7tCfq87FzKSSp1Vn2j0b0c8Puw0eKD-GY6JKexJU=",
      path: "/ai-infrastructure",
    },
  ];

  return (
    <section className="min-h-screen bg-white text-gray-900 py-16 px-6 mt-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16">
          AI & Automation Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {aiServices.map((service) => (
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

              {/* Icon & Content */}
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
