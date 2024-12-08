"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, FileQuestion } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-background">
            <div className="container px-4 py-16 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-md mx-auto"
                >
                    <div className="w-24 h-24 mx-auto mb-8 bg-accent/10 rounded-full flex items-center justify-center">
                        <FileQuestion className="w-12 h-12 text-accent" />
                    </div>
                    <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
                    <p className="text-foreground/70 mb-8">
                        The page you&apos;re looking for doesn&apos;t exist or
                        has been moved.
                    </p>
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Home
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}
