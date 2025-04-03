import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2,
  Briefcase,
  Stethoscope,
  GraduationCap,
  ShoppingBag,
  Plane,
} from "lucide-react";


interface Techstack {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
}

const industries: Techstack[] = [
  {
    id: 1,
    title: "Website Development",
    description:
      "At our agency, we offer professional website development services, including custom designs, responsive layouts, and seamless functionality to enhance your online presence. Our goal is to deliver user-friendly and visually captivating websites tailored to your business needs..",
    icon: <Building2 className="w-8 h-8" />,
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 2,
    title: "App Development",
      description: "We specialize in app development, creating intuitive and high-performing mobile and web applications designed to align with your business goals. From ideation to launch, we deliver innovative solutions that make an impact.",
    icon: <Briefcase className="w-8 h-8" />,
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 3,
    title: "Blockchain Development",
      description: "Our expertise in blockchain development enables us to deliver secure, decentralized solutions tailored to your business needs. Whether it's smart contracts, dApps, or blockchain integration, we provide innovative services to drive your success in the digital era.",
    icon: <Stethoscope className="w-8 h-8" />,
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 4,
    title: "UI/UX Design",
      description: "We craft exceptional UI/UX designs that prioritize user engagement and seamless experiences. Our designs combine creativity and functionality to ensure intuitive interfaces that align with your brand and captivate your audience.",
    icon: <GraduationCap className="w-8 h-8" />,
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 5,
    title: "AI/ML Development",
      description: "We deliver advanced AI and ML development services, creating intelligent solutions that drive innovation and efficiency. From predictive analytics to automation, our expertise helps businesses leverage the power of artificial intelligence to stay ahead..",
    icon: <ShoppingBag className="w-8 h-8" />,
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 6,
    title: "Cloud Development",
      description: "Our cloud development services focus on building scalable, secure, and efficient solutions to meet your business needs. From designing cloud architectures to deployment, we empower your operations with the full potential of cloud technology.",
    icon: <Plane className="w-8 h-8" />,
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 7,
    title: "ERP Development",
    description: "We offer comprehensive ERP development services, creating customized solutions to streamline your business processes. Our ERP systems integrate seamlessly with your operations, improving efficiency, scalability, and decision-making capabilities.",
    icon: <Plane className="w-8 h-8" />,
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=1000",
  },
];

export default function Services() {
  const [expandedId, setExpandedId] = useState<number | 1>(1);

  return (
    <section className="pb-20 pt-10 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10 flex flex-col items-center text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-4 text-white max-w-4xl">
            Industries We Serve
          </h2>
          <p className="text-neutral-400 text-base md:text-xl lg:text-2xl font-medium">
            Delivering innovative solutions across diverse technologies.
          </p>
        </div>

        <div className="overflow-x-auto flex justify-center items-center pb-6">
          <div className="flex gap-6 min-w-max px-4">
            {industries.map((industry) => (
              <motion.div
                key={industry.id}
                onClick={() =>
                  setExpandedId(expandedId === industry.id ? 1 : industry.id)
                }
                className="rounded-xl shadow-lg cursor-pointer overflow-hidden relative group"
                style={{
                  width:
                    expandedId === industry.id
                      ? "90vw" // Full width on small screens
                      : "80px",
                  maxWidth: expandedId === industry.id ? "400px" : "150px", // Limit for larger screens
                  height: "300px", // Consistent height
                  backgroundImage: `url(${industry.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                initial={{ borderRadius: 12 }}
                animate={{
                  width:
                    expandedId === industry.id
                      ? "90vw"
                      : "80px", // Adjust width dynamically
                }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${
                    expandedId === industry.id
                      ? "from-black/90 via-black/50 to-transparent"
                      : "from-black/80 via-black/40 to-transparent"
                  }`}
                />
                <motion.div className="relative h-full">
                  {expandedId === industry.id ? (
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, type: "spring" }}
                        className="flex flex-col gap-3"
                      >
                        <div className="flex items-center gap-3">
                          <div className="text-white">{industry.icon}</div>
                          <h3 className="text-4xl text-orange-500 font-semibold">
                            {industry.title}
                          </h3>
                        </div>
                        <p className="text-gray-200 text-base">
                          {industry.description}
                        </p>
                      </motion.div>
                    </div>
                  ) : (
                    <motion.div
                      className="h-full flex items-end justify-center p-4"
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <div className="flex flex-col items-center gap-4">
                        <motion.h3
                          className="text-xl text-orange-500 whitespace-nowrap origin-center"
                          style={{
                            transform: "rotate(-90deg) translateX(50%)",
                            transformOrigin: "center",
                          }}
                        >
                          {industry.title}
                        </motion.h3>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
