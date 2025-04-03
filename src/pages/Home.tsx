import React from "react";
import { motion } from "framer-motion";
import { Shield, Star, Heart, Award } from "lucide-react";

const Home = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <motion.section
        className="relative h-[600px] flex items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=2000"
            alt="Medical background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-sky-900/40"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div className="text-center text-white" {...fadeIn}>
            <h1 className="text-5xl font-bold mb-6">
              Breathe New Life into Your Lungs
            </h1>
            <p className="text-xl mb-8">
              Revolutionary lung detox solution for smokers seeking a healthier
              lifestyle
            </p>
            {/* <button className="bg-orange-400 hover:bg-orange-500 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors">
              Learn More
            </button> */}
          </motion.div>
        </div>
      </motion.section>

      {/* Benefits Section */}
      <motion.section
        className="py-20 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Healita?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Natural Formula",
                desc: "100% natural ingredients carefully selected for lung health",
              },
              {
                icon: Star,
                title: "Proven Results",
                desc: "Clinically tested formula with verified effectiveness",
              },
              {
                icon: Heart,
                title: "Safe to Use",
                desc: "No harmful side effects, gentle on your system",
              },
              {
                icon: Award,
                title: "Quality Assured",
                desc: "Manufactured in FDA-approved facilities",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center p-6 rounded-lg bg-sky-50"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <item.icon className="w-12 h-12 mx-auto mb-4 text-orange-400" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Product Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800"
                alt="Product"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">
                Advanced Lung Detoxification
              </h2>
              <p className="text-gray-600 mb-6">
                Our revolutionary formula combines the power of natural
                ingredients with cutting-edge science to help:
              </p>
              <ul className="space-y-4">
                {[
                  "Clear tar and toxins from lungs",
                  "Reduce inflammation and irritation",
                  "Support lung tissue regeneration",
                  "Boost respiratory function",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center text-gray-700"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span className="h-2 w-2 bg-orange-400 rounded-full mr-3"></span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "John D.",
                text: "After 15 years of smoking, Healita helped me breathe easier within weeks. I can finally enjoy physical activities again!",
                image:
                  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150",
              },
              {
                name: "Sarah M.",
                text: "The natural ingredients gave me peace of mind. My breathing has improved significantly, and I feel more energetic.",
                image:
                  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150",
              },
              {
                name: "Michael R.",
                text: "Healita was a crucial part of my journey to quit smoking. It helped reduce my cravings and improved my lung health.",
                image:
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-sky-50 p-6 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mb-4"
                />
                <p className="text-gray-600 mb-4">{testimonial.text}</p>
                <p className="font-semibold">{testimonial.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
