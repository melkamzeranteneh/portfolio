import fs from "fs"
import path from "path"
import matter from "gray-matter"

const contentDirectory = path.join(process.cwd(), "content")

export type Post = {
    slug: string
    title: string
    date: string
    summary?: string
    tags?: string[]
    content: string
}

export function getPostSlugs(folder: string) {
    const dir = path.join(contentDirectory, folder)
    if (!fs.existsSync(dir)) return []
    return fs.readdirSync(dir).filter((file) => file.endsWith(".md") || file.endsWith(".mdx"))
}

export function getPostBySlug(folder: string, slug: string): Post {
    const realSlug = slug.replace(/\.mdx?$/, "")
    const fullPath = path.join(contentDirectory, folder, `${realSlug}.mdx`)

    if (!fs.existsSync(fullPath)) {
        // Try .md fallback
        const fullPathMd = path.join(contentDirectory, folder, `${realSlug}.md`)
        if (!fs.existsSync(fullPathMd)) {
            throw new Error(`Post not found: ${folder}/${slug}`)
        }
        const fileContents = fs.readFileSync(fullPathMd, "utf8")
        const { data, content } = matter(fileContents)
        return {
            slug: realSlug,
            title: data.title,
            date: data.date,
            summary: data.summary,
            tags: data.tags,
            content: content,
        }
    }

    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { data, content } = matter(fileContents)

    return {
        slug: realSlug,
        title: data.title,
        date: data.date,
        summary: data.summary,
        tags: data.tags,
        content: content,
    }
}

export function getAllPosts(folder: string): Post[] {
    const slugs = getPostSlugs(folder)
    const posts = slugs
        .map((slug) => getPostBySlug(folder, slug))
        .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
    return posts
}
