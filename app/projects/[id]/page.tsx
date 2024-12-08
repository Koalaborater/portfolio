import { projects } from "@/lib/data/projects";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export async function generateStaticParams() {
    return projects.map((project) => ({
        id: project.id,
    }));
}

export default function ProjectPage({ params }: { params: { id: string } }) {
    const project = projects.find((p) => p.id === params.id);

    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <div className="min-h-screen py-20 bg-background" id="projects">
            <div className="container mx-auto px-4">
                <Link
                    href="/#projects"
                    className="inline-flex items-center text-accent hover:text-accent/80 transition-colors mb-8"
                >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Projects
                </Link>

                {/* Hero Section */}
                <div className="relative h-[60vh] rounded-xl overflow-hidden mb-12">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                        <div className="p-8 text-white">
                            <p className="text-accent font-medium mb-2">
                                {project.category || "Web Project"}
                            </p>
                            <h1 className="text-4xl md:text-5xl font-bold mb-4">
                                {project.title}
                            </h1>
                            <p className="text-lg text-white/90 max-w-2xl">
                                {project.description}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">
                        <section>
                            <h2 className="text-3xl font-bold mb-6">
                                Overview
                            </h2>
                            <div className="prose max-w-none text-foreground/70">
                                <p>{project.overview}</p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-3xl font-bold mb-6">
                                The Challenge
                            </h2>
                            <div className="bg-muted rounded-lg p-6">
                                <p className="text-foreground/70">
                                    {project.challenge}
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-3xl font-bold mb-6">
                                Our Solution
                            </h2>
                            <div className="prose max-w-none text-foreground/70">
                                <p>{project.solution}</p>
                            </div>
                        </section>

                        {/* Project Screenshots */}
                        {project.screenshots &&
                            project.screenshots.length > 0 && (
                                <section>
                                    <h2 className="text-3xl font-bold mb-6">
                                        Project Gallery
                                    </h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {project.screenshots.map(
                                            (screenshot, index) => (
                                                <div
                                                    key={index}
                                                    className="relative h-64 rounded-lg overflow-hidden"
                                                >
                                                    <Image
                                                        src={screenshot.url}
                                                        alt={screenshot.caption}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                    <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                                                        <p className="text-white text-center px-4">
                                                            {screenshot.caption}
                                                        </p>
                                                    </div>
                                                </div>
                                            )
                                        )}
                                    </div>
                                </section>
                            )}

                        {/* Key Features */}
                        {project.features && project.features.length > 0 && (
                            <section>
                                <h2 className="text-3xl font-bold mb-6">
                                    Key Features
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {project.features.map((feature, index) => (
                                        <div
                                            key={index}
                                            className="bg-muted p-6 rounded-lg"
                                        >
                                            <h3 className="text-xl font-semibold mb-3">
                                                {feature.title}
                                            </h3>
                                            <p className="text-foreground/70">
                                                {feature.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8">
                        
                        {/* Project Info */}
                        <div className="bg-muted rounded-lg p-6">
                            <h3 className="text-xl font-semibold mb-4">
                                Project Details
                            </h3>
                            <dl className="space-y-4">
                                {project.industry && (
                                    <div>
                                        <dt className="text-sm text-foreground/60">
                                            Client Industry
                                        </dt>
                                        <dd className="font-medium">
                                            {project.industry}
                                        </dd>
                                    </div>
                                )}
                                {project.timeline && (
                                    <div>
                                        <dt className="text-sm text-foreground/60">
                                            Timeline
                                        </dt>
                                        <dd className="font-medium">
                                            {project.timeline}
                                        </dd>
                                    </div>
                                )}
                                {project.category && (
                                    <div>
                                        <dt className="text-sm text-foreground/60">
                                            Project Type
                                        </dt>
                                        <dd className="font-medium">
                                            {project.category}
                                        </dd>
                                    </div>
                                )}
                                <div>
                                    <dt className="text-sm text-foreground/60">
                                        Date
                                    </dt>
                                    <dd className="font-medium">
                                        {project.date}
                                    </dd>
                                </div>
                            </dl>
                        </div>

                        {/* Technologies */}
                        {project.technologies &&
                            project.technologies.length > 0 && (
                                <div className="bg-muted rounded-lg p-6">
                                    <h3 className="text-xl font-semibold mb-4">
                                        Technologies Used
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map(
                                            (tech, index) => (
                                                <span
                                                    key={index}
                                                    className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm"
                                                >
                                                    {tech}
                                                </span>
                                            )
                                        )}
                                    </div>
                                </div>
                            )}

                        {/* Results */}
                        {project.impact && project.impact.length > 0 && (
                            <div className="bg-muted rounded-lg p-6">
                                <h3 className="text-xl font-semibold mb-4">
                                    Key Results
                                </h3>
                                <ul className="space-y-3">
                                    {project.impact.map((result, index) => (
                                        <li
                                            key={index}
                                            className="flex items-center text-foreground/70"
                                        >
                                            <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                                            {result}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Client Testimonial */}
                        {project.testimonial && (
                            <div className="bg-accent/10 rounded-lg p-6">
                                <h3 className="text-xl font-semibold mb-4">
                                    Testimonial
                                </h3>
                                <blockquote className="text-foreground/70 italic mb-4">
                                    &quot;{project.testimonial.quote}&quot;
                                </blockquote>
                                <div>
                                    <p className="font-medium">
                                        {project.testimonial.author}
                                    </p>
                                    <p className="text-sm text-foreground/60">
                                        {project.testimonial.position}
                                    </p>
                                </div>
                            </div>
                        )}

                        {/* Links */}
                        <div className="space-y-4">
                            {project.liveUrl && (
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center w-full bg-accent text-white py-3 px-6 rounded-lg hover:bg-accent/90 transition-colors"
                                >
                                    View Live Project
                                    <ExternalLink className="ml-2 h-4 w-4" />
                                </a>
                            )}
                            {project.githubUrl && (
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center w-full bg-muted text-foreground py-3 px-6 rounded-lg hover:bg-muted/80 transition-colors"
                                >
                                    View on GitHub
                                    <Github className="ml-2 h-4 w-4" />
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
