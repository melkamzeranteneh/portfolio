import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-12">
      <section className="flex flex-col gap-4 py-8 md:py-12 lg:py-24">
        <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]">
          Building digital products & <br className="hidden md:block" />
          documenting the journey.
        </h1>
        <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
          Welcome to my personal space. Here I showcase my projects, skills, and share my learning progress week by week.
        </p>
        <div className="flex gap-4">
          <Button asChild size="lg">
            <Link href="/projects">View Projects</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/about">About Me</Link>
          </Button>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Recent Projects</CardTitle>
            <CardDescription>What I've been working on.</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Check out my latest detailed case studies.</p>
            <Link href="/projects" className="text-primary underline mt-2 block">Go to Projects &rarr;</Link>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Weekly Progress</CardTitle>
            <CardDescription>Learning log & updates.</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Tracking my journey into AI and Web Dev.</p>
            <Link href="/docs" className="text-primary underline mt-2 block">Read Docs &rarr;</Link>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Newsletter</CardTitle>
            <CardDescription>Monthly insights.</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Subscribe to get updates on my learnings.</p>
            <Link href="/contact" className="text-primary underline mt-2 block">Subscribe &rarr;</Link>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
