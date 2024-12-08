"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Quote } from "lucide-react";
import { testimonials } from "@/lib/data/testimonials";

export function TestimonialsSection() {
  return (
      <section id="testimonials" className="py-20 bg-background">
          <div className="container mx-auto px-4">
              <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="max-w-4xl mx-auto text-center mb-16"
              >
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                      Client Success Stories
                  </h2>
                  <p className="text-lg text-foreground/70">
                      Hear what our clients have to say about their experience
                      working with us.
                  </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {testimonials.map((testimonial, index) => (
                      <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: index * 0.2 }}
                          className="bg-muted p-6 rounded-lg relative"
                      >
                          <Quote className="absolute top-6 right-6 h-8 w-8 text-accent/20" />
                          <p className="text-foreground/80 mb-6">
                              &quot;{testimonial.quote}&quot;
                          </p>
                          <div className="flex items-center">
                              <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                                  <Image
                                      src={testimonial.image}
                                      alt={testimonial.author}
                                      fill
                                      className="object-cover"
                                  />
                              </div>
                              <div>
                                  <h4 className="font-semibold">
                                      {testimonial.author}
                                  </h4>
                                  <p className="text-sm text-foreground/60">
                                      {testimonial.position}
                                  </p>
                              </div>
                          </div>
                      </motion.div>
                  ))}
              </div>
          </div>
      </section>
  );
}