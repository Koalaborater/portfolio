"use client";

import { motion } from "framer-motion";
import { Service } from "@/types";

interface ServiceCardProps extends Service {
  index: number;
}

export function ServiceCard({ icon: Icon, title, description, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.025, delay: index * 0.05 }}
      className="group p-6 bg-muted rounded-lg hover:bg-accent/5 transition-colors"
    >
      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 text-accent group-hover:bg-accent group-hover:text-white transition-colors">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-foreground/70">{description}</p>
    </motion.div>
  );
}