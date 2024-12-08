"use client";

import { motion } from "framer-motion";
import { ServiceCard } from "./service-card";
import { Service } from "@/types";

interface ServiceCategoryProps {
  title: string;
  services: Service[];
  startIndex: number;
}

export function ServiceCategory({ title, services, startIndex }: ServiceCategoryProps) {
  return (
    <div className="mb-16 last:mb-0">
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-2xl font-semibold mb-8"
      >
        {title}
      </motion.h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            {...service}
            index={startIndex + index}
          />
        ))}
      </div>
    </div>
  );
}