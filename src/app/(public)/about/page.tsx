"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10" />
        {/* Hero section image update */}
        <Image
          src="https://images.unsplash.com/photo-1519817650390-64a93db51149?q=80&w=1920&auto=format&fit=crop"
          alt="Muslims Corner"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 container mx-auto h-full flex flex-col justify-center items-center text-center px-4">
          <div className="bg-green-600/80 px-8 py-4 rounded-lg mb-6 transform -rotate-2">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Muslims Corner</h2>
          </div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg"
          >
            Our Story
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-24 h-1 bg-green-600 mb-6"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-white text-lg md:text-xl max-w-2xl"
          >
            Dedicated to enriching Muslim lives through quality products and exceptional service
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                At Muslims Corner, our mission is to provide authentic Islamic products that enhance spiritual growth and daily practice. We strive to make quality Islamic goods accessible to Muslims worldwide, supporting them in their journey of faith.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We believe in combining traditional Islamic values with contemporary design, creating products that are both meaningful and relevant to modern Muslim life.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
            >
              {/* Mission section image update */}
              <Image
                src="https://images.unsplash.com/photo-1512632578888-169bbbc64f33?q=80&w=800&auto=format&fit=crop"
                alt="Our Mission"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50 px-4">
        <div className="container mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Core Values</h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            The principles that guide everything we do at Muslims Corner
          </p>
        </div>

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Authenticity",
              description: "We ensure all our products meet Islamic standards and are sourced ethically.",
              icon: "🌙",
              image: "https://images.unsplash.com/photo-1585036156171-384164a8c675?q=80&w=500&auto=format&fit=crop"
            },
            {
              title: "Excellence",
              description: "We strive for perfection in our products and customer service.",
              icon: "✨",
              image: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?q=80&w=500&auto=format&fit=crop"
            },
            {
              title: "Community",
              description: "We support the Muslim community through charitable initiatives and education.",
              icon: "🤲",
              image: "https://images.unsplash.com/photo-1566624790190-511a09f6ddbd?q=80&w=500&auto=format&fit=crop"
            }
          ].map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48 mb-6 rounded-md overflow-hidden">
                <Image
                  src={value.image}
                  alt={value.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            Passionate individuals dedicated to serving the Muslim community
          </p>
        </div>

        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              name: "Ahmed Rahman",
              role: "Founder & CEO",
              image: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?q=80&w=500&auto=format&fit=crop",
              bio: "With over 15 years in Islamic retail, Ahmed founded Muslims Corner to provide authentic products to Muslims worldwide."
            },
            {
              name: "Fatima Ali",
              role: "Creative Director",
              image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=500&auto=format&fit=crop",
              bio: "Fatima brings her artistic vision to our products, blending traditional Islamic art with contemporary design."
            },
            {
              name: "Yusuf Khan",
              role: "Customer Experience",
              image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&auto=format&fit=crop",
              bio: "Yusuf ensures every customer receives exceptional service and finds exactly what they're looking for."
            }
          ].map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg overflow-hidden shadow-lg group"
            >
              <div className="h-64 relative overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                <p className="text-green-600 font-medium mb-4">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600 text-white px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg">
            Stay updated with our latest products, exclusive offers, and Islamic content
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-3 rounded-md text-gray-800 focus:outline-none flex-grow"
            />
            <button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-md transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
