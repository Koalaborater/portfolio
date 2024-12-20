import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: ["/api/", "/admin/", "/private/", "/*.json$", "/*?*"],
        },
        sitemap: "https://www.koalaborate.com/sitemap.xml",
        host: "https://www.koalaborate.com",
    };
}
