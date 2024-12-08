import { StaticImageData } from "next/image";

export interface Project {
    id: string;
    title: string;
    description: string;
    image: string | StaticImageData;
    liveUrl?: string;
    githubUrl?: string;
    date: string;
    category?: string;
    industry?: string;
    timeline?: string;
    overview: string;
    challenge: string;
    solution: string;
    features: Array<{
        title: string;
        description: string;
    }>;
    images?: string[];
    screenshots?: Array<{
        url: string;
        caption: string;
    }>;
    impact?: string[];
    technologies?: string[];
    testimonial?: {
        quote: string;
        author: string;
        position: string;
    };
}

export const projects: Project[] = [
    {
        id: "developer-personal-portfolio",
        title: "Personal Portfolio",
        description:
            "Modern portfolio website built with Next.js, featuring smooth animations and a responsive design.",
        image: "/projects/portfolio/hero.png",
        technologies: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Framer Motion",
            "Shadcn UI",
        ],
        liveUrl: "https://www.navidalviahsan.me",
        githubUrl: "https://github.com/navid001/portfolio",
        date: "10/2024",
        category: "Web Development",
        industry: "Personal Branding",
        timeline: "1 month",
        overview:
            "A modern, responsive portfolio website showcasing my work as a full-stack developer.",
        challenge:
            "Create a performant, visually appealing portfolio that effectively presents my skills and projects while ensuring an excellent user experience.",
        solution:
            "Implemented a Next.js application with Tailwind CSS for styling and Framer Motion for smooth animations. The website features a modular component structure and responsive design.",
        features: [
            {
                title: "Interactive Hero Section",
                description:
                    "Particle animations in the hero section to create an engaging first impression",
            },
            {
                title: "Smooth Animations",
                description:
                    "Framer Motion used for creating smooth scroll and page transition animations",
            },
            {
                title: "Responsive Design",
                description:
                    "Mobile-friendly layout that works seamlessly across all device sizes",
            },
        ],
        screenshots: [
            {
                url: "/projects/portfolio/hero.png",
                caption: "Hero Section",
            },
            {
                url: "/projects/portfolio/projects.png",
                caption: "Projects Section",
            },
            {
                url: "/projects/portfolio/services.png",
                caption: "Services Section",
            },
            {
                url: "/projects/portfolio/contact.png",
                caption: "Contact Section",
            },
        ],
        impact: [
            "Professional portfolio showcasing technical skills",
            "Improved personal brand visibility",
            "Enhanced client engagement",
        ],
        // testimonial: {
        //     quote: "A stunning portfolio that perfectly represents my professional capabilities and design aesthetic.",
        //     author: "Navid Alvi Ahsan",
        //     position: "Full-Stack Developer",
        // },
    },
    {
        id: "floortech-construction",
        title: "Floortech Construction Landing Page",
        description:
            "Interactive landing page showcasing modern web development practices with responsive design and smooth animations.",
        image: "/projects/floortech/hero.png",
        technologies: ["HTML", "CSS", "JavaScript"],
        githubUrl: "https://github.com/navid001/FloorTech-Construction",
        date: "09/2024",
        category: "Web Design",
        industry: "Construction",
        timeline: "1 month",
        overview:
            "An interactive and user-friendly landing page for Floortech Constructions, showcasing their impressive portfolio through modern web technologies.",
        challenge:
            "Create a visually appealing and performant website that effectively presents construction projects and services while ensuring optimal user experience across all devices.",
        solution:
            "Implemented a clean, modern design using vanilla JavaScript for smooth interactions and CSS animations for engaging user experience. The website features a responsive layout that adapts seamlessly to different screen sizes.",
        features: [
            {
                title: "Project Portfolio",
                description:
                    "Filterable gallery showcasing construction projects",
            },
            {
                title: "Interactive Services",
                description:
                    "Engaging service showcases with smooth animations",
            },
            {
                title: "Responsive Contact Form",
                description: "Validated contact form with user-friendly design",
            },
        ],
        screenshots: [
            {
                url: "/projects/floortech/hero.png",
                caption: "Hero Section",
            },
            {
                url: "/projects/floortech/portfolio.png",
                caption: "Project Portfolio",
            },
            {
                url: "/projects/floortech/services.png",
                caption: "Services Section",
            },
            {
                url: "/projects/floortech/contact.png",
                caption: "Contact Section",
            },
        ],
        impact: [
            "Improved online presence for Floortech Construction",
            "Enhanced user engagement",
            "Modern and professional web design",
        ],
        // testimonial: {
        //     quote: "The landing page perfectly captures our company's spirit and showcases our services effectively.",
        //     author: "Floortech Construction Team",
        //     position: "Management",
        // },
    },
];
