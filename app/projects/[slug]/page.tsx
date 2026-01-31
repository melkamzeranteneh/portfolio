
import { getPostBySlug } from "@/lib/mdx";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

interface ProjectPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
    const { slug } = await params;
    let project;
    try {
        project = getPostBySlug("projects", slug);
    } catch (error) {
        notFound();
    }

    return (
        <article className="container py-12 max-w-3xl mx-auto">
            <div className="mb-8">
                <Button variant="ghost" className="pl-0 mb-4" asChild>
                    <Link href="/projects"><ChevronLeft className="mr-2 h-4 w-4" /> Back to Projects</Link>
                </Button>
                <h1 className="text-4xl font-bold mb-2">{project.title}</h1>
                <p className="text-muted-foreground mb-4">{project.date}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags?.map(tag => (
                        <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                </div>
                <p className="text-xl text-muted-foreground leading-relaxed">{project.summary}</p>
            </div>

            <div className="prose prose-zinc dark:prose-invert max-w-none">
                {project.content}
            </div>
        </article>
    )
}
