"use client";

import { motion } from "framer-motion";
import { Code2, Lightbulb, Users } from "lucide-react";

const features = [
  {
    icon: <Lightbulb className="h-6 w-6" />,
    title: "Innovation First",
    description: "We bring cutting-edge solutions to every project, staying ahead of digital trends.",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Client-Centric",
    description: "Your success is our priority. We work closely with you to achieve your goals.",
  },
  {
    icon: <Code2 className="h-6 w-6" />,
    title: "Technical Excellence",
    description: "Our team of experts delivers high-quality solutions using the latest technologies.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Crafting Digital Success Stories
          </h2>
          <p className="text-lg text-foreground/70">
            We are a team of passionate digital innovators dedicated to transforming businesses
            through cutting-edge technology and creative solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-background p-6 rounded-lg shadow-sm"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 text-accent">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-foreground/70">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}