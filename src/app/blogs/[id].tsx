import { useRouter } from 'next/router'
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { blogPosts } from '../data/blog-post'

export default function Post() {
  const router = useRouter()
  const { id } = router.query
  console.log(id)
  const post = blogPosts.find(post => post.id === Number(id))

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
        <p className="mb-8">Sorry, the blog post you are looking for does not exist.</p>
        <Button asChild>
          <Link href="/blogs">Back to Blog</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Button asChild className="mb-8">
        <Link href="/blog">← Back to Blog</Link>
      </Button>
      
      <article className="prose prose-lg mx-auto">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-muted-foreground mb-8">Published on: {post.date}</p>
        
        <Image
          src={post.imageUrl}
          alt={`${post.title} cover`}
          width={800}
          height={400}
          className="w-full h-auto object-cover rounded-lg mb-8"
        />
        
        {post.content.split('\n\n').map((paragraph, index) => (
          <p key={index} className="mb-4">{paragraph}</p>
        ))}
      </article>
    </div>
  )
}