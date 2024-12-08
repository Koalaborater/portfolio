"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { throttle } from "lodash";
import { ThemeToggle } from "./theme-toggle";
import Image from "next/image";

const navItems = [
    { href: "/", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#projects", label: "Projects" },
    // { href: "#team", label: "Team" },
    { href: "#contact", label: "Contact" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("/");
    const [isNavigating, setIsNavigating] = useState(false);
    const router = useRouter();
    const pathname = usePathname();
    const isProjectPage = pathname.startsWith("/projects/");

    const handleScroll = useCallback(
        throttle(() => {
            if (isNavigating || isProjectPage) return;

            const sections = navItems.map((item) => ({
                id: item.href.replace("#", ""),
                href: item.href,
                offset:
                    item.href === "/"
                        ? 0
                        : document.getElementById(item.href.replace("#", ""))
                              ?.offsetTop || 0,
            }));

            const scrollPosition = window.scrollY + 100;

            const current = sections.reduce((selected, section) => {
                if (section.href === "/") {
                    return scrollPosition < (sections[1]?.offset || 0)
                        ? section
                        : selected;
                }
                return scrollPosition >= section.offset ? section : selected;
            });

            setActiveSection(current.href);
        }, 100),
        [isNavigating, isProjectPage]
    );

    useEffect(() => {
        if (!isProjectPage) {
            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
        }
    }, [handleScroll, isProjectPage]);

    const scrollToSection = (elementId: string) => {
        const element = document.getElementById(elementId);
        if (element) {
            const offset = element.offsetTop - 80;
            window.scrollTo({ top: offset, behavior: "smooth" });
        }
    };

    const handleNavClick = async (href: string) => {
        setIsOpen(false);
        setIsNavigating(true);

        if (isProjectPage) {
            router.push("/");
            // Wait for navigation and DOM update
            await new Promise((resolve) => setTimeout(resolve, 100));
        }

        if (href === "/") {
            window.scrollTo({ top: 0, behavior: "smooth" });
            setActiveSection("/");
        } else {
            const sectionId = href.replace("#", "");
            scrollToSection(sectionId);
            setActiveSection(href);
        }

        // Reset navigation state after animation
        setTimeout(() => {
            setIsNavigating(false);
        }, 1000);
    };

    return (
        <nav className="fixed w-full bg-background/80 backdrop-blur-sm z-50 border-b">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center space-x-4">
                        <Link
                            href="/"
                            className="flex"
                        >
                                <Image
                                    src={"/Logo.png"}
                                    alt={"Logo"}
                                    height={48}
                                    width={48}
                                    className="object-cover "
                                />
                            <div className="text-accent text-bold text-4xl font-custom my-auto">Koalaborate</div>
                        </Link>
                        <ThemeToggle />
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8">
                        {navItems.map((item) => (
                            <button
                                key={item.href}
                                onClick={() => handleNavClick(item.href)}
                                className={`relative text-foreground/80 hover:text-accent transition-colors ${
                                    !isProjectPage &&
                                    activeSection === item.href
                                        ? "text-accent"
                                        : ""
                                }`}
                            >
                                {item.label}
                                {!isProjectPage &&
                                    activeSection === item.href && (
                                        <motion.div
                                            layoutId="activeSection"
                                            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent"
                                            initial={true}
                                            transition={{
                                                type: "spring",
                                                stiffness: 380,
                                                damping: 30,
                                            }}
                                        />
                                    )}
                            </button>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? (
                            <X className="h-6 w-6 text-foreground" />
                        ) : (
                            <Menu className="h-6 w-6 text-foreground" />
                        )}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden absolute top-16 left-0 right-0 bg-background border-b h-screen"
                    >
                        <div className="flex flex-col space-y-4 px-4 py-6">
                            {navItems.map((item) => (
                                <button
                                    key={item.href}
                                    onClick={() => handleNavClick(item.href)}
                                    className={`relative hover:text-accent transition-colors ${
                                        !isProjectPage &&
                                        activeSection === item.href
                                            ? "text-accent underline"
                                            : "text-foreground/80"
                                    }`}
                                >
                                    {item.label}
                                    {/* {!isProjectPage &&
                                        activeSection === item.href && (
                                            <motion.div
                                                layoutId="activeSection"
                                                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent"
                                                initial={true}
                                                transition={{
                                                    type: "spring",
                                                    stiffness: 380,
                                                    damping: 30,
                                                }}
                                            />
                                        )} */}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </div>
        </nav>
    );
}
