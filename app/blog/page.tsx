import { getAllPosts } from "@/lib/mdx";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function BlogPage() {
    const posts = getAllPosts("blog");

    return (
        <div className="container py-12 max-w-3xl mx-auto">
            <div className="mb-12 text-center">
                <h1 className="text-4xl font-bold mb-4">Blog</h1>
                <p className="text-muted-foreground text-lg">Thoughts, tutorials, and updates.</p>
            </div>

            <div className="flex flex-col gap-6">
                {posts.map((post) => (
                    <Link key={post.slug} href={`/blog/${post.slug}`}>
                        <Card className="hover:bg-muted/50 transition-colors">
                            <CardHeader>
                                <CardTitle>{post.title}</CardTitle>
                                <CardDescription>{post.date}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">{post.summary}</p>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    )
}
