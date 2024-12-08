"use client";

import { motion } from "framer-motion";
import { AlertOctagon } from "lucide-react";

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <html>
            <body>
                <div className="min-h-screen flex items-center justify-center bg-background">
                    <div className="container px-4 py-16 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="max-w-md mx-auto"
                        >
                            <div className="w-24 h-24 mx-auto mb-8 bg-accent/10 rounded-full flex items-center justify-center">
                                <AlertOctagon className="w-12 h-12 text-accent" />
                            </div>
                            <h1 className="text-4xl font-bold mb-4">
                                Critical Error
                            </h1>
                            <p className="text-foreground/70 mb-8">
                                A critical error occurred. We apologize for the
                                inconvenience.
                            </p>
                            <button
                                onClick={reset}
                                className="inline-flex items-center justify-center px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors"
                            >
                                Try Again
                            </button>
                        </motion.div>
                    </div>
                </div>
            </body>
        </html>
    );
}
