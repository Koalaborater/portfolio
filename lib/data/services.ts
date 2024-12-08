import { Service } from "@/types";
import {
    Globe,
    Smartphone,
    Search,
    PenTool,
    Bot,
    ShoppingCart,
    Database,
    Image as ImageIcon,
    Palette,
    BrainCircuit,
    MessageSquareCode,
    Share2,
    LineChart,
    Boxes,
    Rocket,
    Microscope,
    Cpu,
    Cloud,
    BookCopy,
    Presentation,
    Mail,
    Radar,
    Binary,
    Workflow,
    Eye,
    FileImage,
    Paintbrush,
    Frame,
    Wrench,
    DollarSign
} from "lucide-react";

export const services: Service[] = [
    
    // Development and Engineering
    {
        icon: Globe,
        title: "Web Development",
        description:
            "Custom websites and web applications built with cutting-edge technologies.",
        category: "development",
    },
    {
        icon: ShoppingCart,
        title: "E-Commerce Solutions",
        description: "Scalable online stores and marketplace platforms.",
        category: "development",
    },
    {
        icon: Cloud,
        title: "Cloud Solutions",
        description: "Cloud infrastructure and deployment solutions.",
        category: "development",
    },
    {
        icon: Smartphone,
        title: "Mobile Apps",
        description: "Native and cross-platform mobile applications.",
        category: "development",
    },
    {
        icon: Bot,
        title: "AI & Chatbots",
        description: "Intelligent automation and conversational AI solutions.",
        category: "development",
    },
    {
        icon: BrainCircuit,
        title: "Machine Learning",
        description: "Custom ML models and AI implementations.",
        category: "development",
    },
    {
        icon: Workflow,
        title: "Process Automation",
        description: "Workflow automation and business process optimization.",
        category: "development",
    },
    {
        icon: Database,
        title: "Blockchain Development",
        description: "Decentralized applications and blockchain solutions.",
        category: "development",
    },
    {
        icon: Binary,
        title: "Smart Contracts",
        description: "Secure and efficient smart contract development.",
        category: "development",
    },
    {
        icon: BookCopy,
        title: "ERP Systems",
        description: "Enterprise resource planning solutions.",
        category: "development",
    },
    {
        icon: MessageSquareCode,
        title: "CRM Development",
        description: "Custom customer relationship management systems.",
        category: "development",
    },
    {
        icon: Boxes,
        title: "DevOps Services",
        description: "Continuous integration and deployment automation.",
        category: "development",
    },
    {
        icon: Eye,
        title: "Computer Vision",
        description: "Image processing and visual AI solutions.",
        category: "development",
    },
    {
        icon: Radar,
        title: "Data Science",
        description: "Advanced analytics and data-driven insights.",
        category: "development",
    },
    {
        icon: Microscope,
        title: "QA & Testing",
        description: "Comprehensive quality assurance services.",
        category: "development",
    },

    // Design and Creative
    {
        icon: PenTool,
        title: "UI/UX Design",
        description: "User-centered interface and experience design.",
        category: "design",
    },
    {
        icon: Palette,
        title: "Brand Identity",
        description: "Complete branding and identity systems.",
        category: "design",
    },
    {
        icon: ImageIcon,
        title: "Graphic Design",
        description: "Visual design for digital and print media.",
        category: "design",
    },
    {
        icon: Frame,
        title: "Motion Graphics",
        description: "Animated content and visual effects.",
        category: "design",
    },
    {
        icon: FileImage,
        title: "Photo Editing",
        description: "Professional image editing and enhancement.",
        category: "design",
    },
    {
        icon: Paintbrush,
        title: "Digital Illustrations",
        description: "Custom illustrations and digital artwork.",
        category: "design",
    },

    // Digital Marketing
    {
        icon: Search,
        title: "SEO Optimization",
        description: "Search engine optimization and visibility.",
        category: "marketing",
    },
    {
        icon: Share2,
        title: "Social Media Marketing",
        description: "Social platform management and growth.",
        category: "marketing",
    },
    {
        icon: Mail,
        title: "Email Marketing",
        description: "Strategic email campaigns and automation.",
        category: "marketing",
    },
    {
        icon: LineChart,
        title: "Analytics & Reporting",
        description: "Performance tracking and insights.",
        category: "marketing",
    },
    {
        icon: Presentation,
        title: "Content Marketing",
        description: "Strategic content creation and distribution.",
        category: "marketing",
    },
    {
    icon: DollarSign,
    title: "Ad Campaign Setup",
    description: "Create and launch basic ad campaigns.",
    category: 'marketing'
    },

    // Consulting and Support
    {
        icon: Rocket,
        title: "Digital Strategy",
        description: "Strategic technology consulting and planning.",
        category: "other",
    },
    {
        icon: Cpu,
        title: "Technical Support",
        description: "Ongoing technical assistance and support.",
        category: "other",
    },
    {
        icon: Wrench,
        title: "Project Maintenance",
        description: "Long-term maintenance and updates for digital solutions.",
        category: "other",
    },
];
