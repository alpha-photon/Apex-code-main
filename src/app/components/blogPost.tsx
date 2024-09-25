import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

interface BlogPostProps {
  id: number
  title: string
  excerpt: string
  date: string
  imageUrl: string
}

export function BlogPost({ id, title, excerpt, date, imageUrl }: BlogPostProps) {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader className="p-0">
        <Image
          src={imageUrl}
          alt={`${title} cover`}
          width={400}
          height={200}
          className="w-full h-48 object-cover rounded-t-lg"
        />
      </CardHeader>
      <CardContent className="flex-grow p-4">
        <CardTitle className="mb-2 text-xl">{title}</CardTitle>
        <p className="text-muted-foreground mb-4 text-sm">{excerpt}</p>
        <p className="text-sm text-muted-foreground">Published on: {date}</p>
      </CardContent>
      <CardFooter className="p-4">
        <Button asChild className="w-full">
          <Link href={`/blog/${id}`}>Read More</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}