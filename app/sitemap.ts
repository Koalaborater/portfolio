import { projects } from "@/lib/data/projects";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://www.koalaborate.com";
    const lastModified = new Date();

    // Static routes
    const staticRoutes = [
        {
            url: baseUrl,
            lastModified,
            changeFrequency: "weekly" as const,
            priority: 1,
        },
        {
            url: `${baseUrl}/#about`,
            lastModified,
            changeFrequency: "monthly" as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/#services`,
            lastModified,
            changeFrequency: "monthly" as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/#projects`,
            lastModified,
            changeFrequency: "monthly" as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/#team`,
            lastModified,
            changeFrequency: "monthly" as const,
            priority: 0.7,
        },
        {
            url: `${baseUrl}/#contact`,
            lastModified,
            changeFrequency: "monthly" as const,
            priority: 0.7,
        },
    ];

    // Dynamic project routes
    const projectRoutes = projects.map((project) => ({
        url: `${baseUrl}/projects/${project.id}`,
        lastModified,
        changeFrequency: "monthly" as const,
        priority: 0.9,
    }));

    return [...staticRoutes, ...projectRoutes];
}
