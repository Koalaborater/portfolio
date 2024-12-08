"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Mail, Phone, MessageCircle } from "lucide-react";
import { toast } from "@/hooks/use-toast";

// Contact form validation schema
const contactFormSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    subject: z.string().min(2, "Subject must be at least 2 characters"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

// Type for form data based on schema
type ContactFormData = z.infer<typeof contactFormSchema>;

export function ContactSection() {
    // Contact details configuration
    const contactDetails = {
        email: "info.koalaborate@gmail.com",
        phone: "+8801618393860", 
        whatsapp: "+8801816512107", 
    };


    // Form handling with Zod validation
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactFormSchema),
    });

    // Handle social media interactions
    const handleWhatsAppClick = () => {
        const whatsappUrl = `https://wa.me/${contactDetails.whatsapp}`;
        window.open(whatsappUrl, "_blank");
    };

    const handlePhoneClick = () => {
        window.location.href = `tel:${contactDetails.phone}`;
    };

    const handleEmailClick = () => {
        window.location.href = `mailto:${contactDetails.email}`;
    };

    // Form submission handler
    const onSubmit = async (data: ContactFormData) => {
        try {
            const response = await fetch(
                process.env.NEXT_PUBLIC_FORMSPREE_URL || "",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                }
            );

            if (response.ok) {
                // Success toast
                toast({
                    title: "Message Sent Successfully!",
                    description:
                        "Thank you for reaching out. We'll get back to you soon.",
                    variant: "default",
                });

                // Reset form
                reset();
            } else {
                // Error toast
                toast({
                    title: "Submission Failed",
                    description: "Could not send message. Please try again.",
                    variant: "destructive",
                });
            }
        } catch (error) {
            // Network or unexpected error toast
            toast({
                title: "Error",
                description:
                    "An unexpected error occurred. Please try again later.",
                variant: "destructive",
            });
            console.error("Submission error:", error);
        }
    };

    return (
        <section id="contact" className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Get in Touch
                    </h2>
                    <p className="text-lg text-foreground/70">
                        Ready to start your digital journey? Contact us today.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-2xl font-semibold mb-6">
                            Contact Information
                        </h3>
                        <div className="space-y-6">
                            <div
                                className="flex items-start cursor-pointer hover:bg-accent/10 p-2 -m-2 rounded-lg transition-colors"
                                onClick={handleEmailClick}
                            >
                                <Mail className="h-6 w-6 text-accent mr-4 mt-1" />
                                <div>
                                    <h4 className="font-medium mb-1">
                                        Email Us
                                    </h4>
                                    <p className="text-foreground/70">
                                        {contactDetails.email}
                                    </p>
                                </div>
                            </div>
                            <div
                                className="flex items-start cursor-pointer hover:bg-accent/10 p-2 -m-2 rounded-lg transition-colors"
                                onClick={handlePhoneClick}
                            >
                                <Phone className="h-6 w-6 text-accent mr-4 mt-1" />
                                <div>
                                    <h4 className="font-medium mb-1">
                                        Call Us
                                    </h4>
                                    <p className="text-foreground/70">
                                        {contactDetails.phone}
                                    </p>
                                </div>
                            </div>
                            <div
                                className="flex items-start cursor-pointer hover:bg-accent/10 p-2 -m-2 rounded-lg transition-colors"
                                onClick={handleWhatsAppClick}
                            >
                                <MessageCircle className="h-6 w-6 text-accent mr-4 mt-1" />
                                <div>
                                    <h4 className="font-medium mb-1">
                                        WhatsApp Us
                                    </h4>
                                    <p className="text-foreground/70">
                                        {contactDetails.whatsapp}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="space-y-6"
                        >
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium mb-2"
                                >
                                    Name
                                </label>
                                <input
                                    {...register("name")}
                                    type="text"
                                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                                    placeholder="Your name"
                                />
                                {errors.name && (
                                    <p className="mt-1 text-sm text-red-500">
                                        {errors.name.message}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium mb-2"
                                >
                                    Email
                                </label>
                                <input
                                    {...register("email")}
                                    type="email"
                                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                                    placeholder="your@email.com"
                                />
                                {errors.email && (
                                    <p className="mt-1 text-sm text-red-500">
                                        {errors.email.message}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label
                                    htmlFor="subject"
                                    className="block text-sm font-medium mb-2"
                                >
                                    Subject
                                </label>
                                <input
                                    {...register("subject")}
                                    type="text"
                                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                                    placeholder="Your subject"
                                />
                                {errors.subject && (
                                    <p className="mt-1 text-sm text-red-500">
                                        {errors.subject.message}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium mb-2"
                                >
                                    Message
                                </label>
                                <textarea
                                    {...register("message")}
                                    rows={4}
                                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                                    placeholder="Your message"
                                />
                                {errors.message && (
                                    <p className="mt-1 text-sm text-red-500">
                                        {errors.message.message}
                                    </p>
                                )}
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-accent text-white py-3 px-6 rounded-lg hover:bg-accent/90 transition-colors"
                            >
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
