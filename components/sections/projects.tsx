"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data/projects";

export function ProjectsSection() {
    const router = useRouter();

    return (
        <section id="projects" className="py-20 bg-muted">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Featured Projects
                    </h2>
                    <p className="text-lg text-foreground/70">
                        Explore our portfolio of successful digital solutions
                        that have helped businesses achieve their goals.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="group bg-background rounded-lg overflow-hidden"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                            </div>
                            <div className="p-6">
                                <span className="text-sm text-accent font-medium">
                                    {project.category || "Web Project"}
                                </span>
                                <h3 className="text-xl font-semibold mt-2 mb-3">
                                    {project.title}
                                </h3>
                                <p className="text-foreground/70 mb-4">
                                    {project.description}
                                </p>
                                <div className="flex items-center justify-between">
                                    <button
                                        onClick={() =>
                                            router.push(
                                                `/projects/${project.id}`
                                            )
                                        }
                                        className="inline-flex items-center text-accent hover:text-accent/80 transition-colors"
                                    >
                                        View Case Study
                                        <ArrowUpRight className="ml-1 h-4 w-4" />
                                    </button>
                                    {project.githubUrl && (
                                        <Link
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-foreground/60 hover:text-accent transition-colors"
                                        >
                                            GitHub
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
