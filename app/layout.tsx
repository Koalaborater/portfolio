import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ThemeProvider } from "@/components/layout/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    metadataBase: new URL("https://www.koalaborate.com"),
    title: {
        default: "Koalaborate - Your Complete Digital Solutions Partner",
        template: "%s | Koalaborate",
    },
    description:
        "Leading digital agency specializing in web development, mobile apps, AI solutions, blockchain, design, and digital marketing. Transform your business with our innovative digital solutions.",
    keywords: [
        "digital agency",
        "web development",
        "mobile apps",
        "UI/UX design",
        "digital marketing",
        "SEO services",
        "blockchain development",
        "AI solutions",
        "e-commerce",
        "cloud solutions",
        "brand identity",
        "software development",
        "digital transformation",
        "IT consulting",
        "web design",
        "app development",
        "digital strategy",
        "business automation",
        "CRM development",
        "ERP solutions",
        "DevOps services",
        "machine learning",
        "data science",
        "technical support",
        "website maintenance",
    ],
    authors: [{ name: "Koalaborate Team" }],
    creator: "Koalaborate",
    publisher: "Koalaborate",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    alternates: {
        canonical: "https://www.koalaborate.com",
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://www.koalaborate.com",
        siteName: "Koalaborate",
        title: "Koalaborate - Complete Digital Solutions Partner",
        description:
            "Transform your business with our comprehensive digital solutions. Expert team delivering web development, mobile apps, design, and digital marketing services.",
        images: [
            {
                url: "https://www.koalaborate.com/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Koalaborate - Digital Agency",
                type: "image/jpeg",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Koalaborate - Complete Digital Solutions Partner",
        description:
            "Transform your business with our comprehensive digital solutions. Expert team delivering web development, mobile apps, design, and digital marketing services.",
        images: ["https://www.koalaborate.com/twitter-image.jpg"],
        creator: "@koalaborate",
        site: "@koalaborate",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    icons: {
        icon: [
            { url: "/favicon.ico" },
            { url: "/icon.svg", type: "image/svg+xml" },
            { url: "/icon-16x16.png", sizes: "16x16", type: "image/png" },
            { url: "/icon-32x32.png", sizes: "32x32", type: "image/png" },
            { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
            { url: "/icon-512x512.png", sizes: "512x512", type: "image/png" },
        ],
        shortcut: "/favicon.ico",
        apple: [
            { url: "/apple-icon.png" },
            { url: "/apple-icon-57x57.png", sizes: "57x57", type: "image/png" },
            { url: "/apple-icon-72x72.png", sizes: "72x72", type: "image/png" },
            {
                url: "/apple-icon-114x114.png",
                sizes: "114x114",
                type: "image/png",
            },
            {
                url: "/apple-icon-180x180.png",
                sizes: "180x180",
                type: "image/png",
            },
        ],
        other: [
            {
                rel: "mask-icon",
                url: "/safari-pinned-tab.svg",
                color: "#ff4b14",
            },
        ],
    },
    manifest: "/manifest.json",
    verification: {
        google: "your-google-verification-code",
        // Will add other indexing later on
        // yandex: "your-yandex-verification-code",
        // yahoo: "your-yahoo-verification-code",
        other: {
            // "msvalidate.01": "your-bing-verification-code",
        },
    },
    category: "technology",
    classification:
        "Digital Agency, Web Development, Digital Marketing, Software Development, Web Design, Graphics Design, UI UX Design, Software Firm",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head />
            <body
                className={`${inter.className} antialiased min-h-screen bg-background text-foreground`}
                suppressHydrationWarning
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="light"
                    enableSystem={false}
                    disableTransitionOnChange
                    storageKey="koalaborate-theme"
                >
                    <Navbar />
                    <main>{children}</main>
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
