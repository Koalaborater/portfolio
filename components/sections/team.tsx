"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { team } from "@/lib/data/team";

export function TeamSection() {
  return (
    <section id="team" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meet Our Team
          </h2>
          <p className="text-lg text-foreground/70">
            The creative minds behind our digital innovation success.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-background rounded-lg overflow-hidden"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-accent mb-3">{member.position}</p>
                <p className="text-foreground/70 mb-4">{member.bio}</p>
                <div className="flex space-x-4">
                  <Link href={member.social.twitter} className="text-foreground/60 hover:text-accent">
                    <Twitter className="h-5 w-5" />
                  </Link>
                  <Link href={member.social.linkedin} className="text-foreground/60 hover:text-accent">
                    <Linkedin className="h-5 w-5" />
                  </Link>
                  <Link href={member.social.github} className="text-foreground/60 hover:text-accent">
                    <Github className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}