import { getAllPosts } from "@/lib/mdx";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ProjectsPage() {
    const projects = getAllPosts("projects");

    return (
        <div className="container py-12">
            <div className="mb-12">
                <h1 className="text-4xl font-bold mb-4">Projects</h1>
                <p className="text-muted-foreground text-lg">A selection of my recent work.</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                    <Card key={project.slug} className="flex flex-col">
                        <CardHeader>
                            <CardTitle>{project.title}</CardTitle>
                            <CardDescription>{project.date}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-1">
                            <p className="mb-4 text-muted-foreground">{project.summary}</p>
                            <div className="flex flex-wrap gap-2">
                                {project.tags?.map(tag => (
                                    <Badge key={tag} variant="secondary">{tag}</Badge>
                                ))}
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button asChild className="w-full">
                                <Link href={`/projects/${project.slug}`}>View Case Study</Link>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    )
}
