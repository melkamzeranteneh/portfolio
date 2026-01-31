
import { getPostBySlug } from "@/lib/mdx";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

interface BlogPostPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params;
    let post;
    try {
        post = getPostBySlug("blog", slug);
    } catch (error) {
        notFound();
    }

    return (
        <article className="container py-12 max-w-3xl mx-auto">
            <div className="mb-8">
                <Button variant="ghost" className="pl-0 mb-4" asChild>
                    <Link href="/blog"><ChevronLeft className="mr-2 h-4 w-4" /> Back to Blog</Link>
                </Button>
                <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
                <p className="text-muted-foreground mb-6">{post.date} • {post.summary}</p>
            </div>

            <div className="prose prose-zinc dark:prose-invert max-w-none">
                {post.content}
            </div>
        </article>
    )
}
