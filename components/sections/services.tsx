"use client";

import { motion } from "framer-motion";
import { services } from "@/lib/data/services";
import { ServiceCategory } from "../services/service-category";

const categories = {
  development: "Development & Engineering",
  design: "Design & Creative",
  marketing: "Digital Marketing",
  other: "Consulting & Support"
} as const;

export function ServicesSection() {
  const categorizedServices = services.reduce((acc, service) => {
    if (!acc[service.category]) {
      acc[service.category] = [];
    }
    acc[service.category].push(service);
    return acc;
  }, {} as Record<string, typeof services>);

  let startIndex = 0;

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Comprehensive Digital Solutions
          </h2>
          <p className="text-lg text-foreground/70">
            From concept to execution, we offer a full spectrum of digital services
            to help your business thrive in the digital age.
          </p>
        </motion.div>      
        {Object.entries(categorizedServices).map(([category, categoryServices]) => {
          const currentIndex = startIndex;
          startIndex += categoryServices.length;
          return (
              <ServiceCategory
                key={category}
                title={categories[category as keyof typeof categories]}
                services={categoryServices}
                startIndex={currentIndex}
              />
          );
        })}
      </div>
    </section>
  );
}