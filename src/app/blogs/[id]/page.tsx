"use client";

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '../../../app/data/blog-post';
import { Button } from "@/components/ui/button";
import Navbar from '../../components/navbar';
import Footer from '../../components/footer'
// Define the type for your post object
interface Post {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  imageUrl: string;
}

export default function Post() {
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams(); // Get the post ID from the URL
  
  useEffect(() => {
    if (id) {
      const foundPost = blogPosts.find(post => post.id === Number(id));
      setPost(foundPost || null);
      setLoading(false);
    }
  }, [id]);

  if (loading) {
    return <div>Loading...</div>; // Display a loading indicator
  }

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
        <p className="mb-8">Sorry, the blog post you are looking for does not exist.</p>
        <Button asChild>
          <Link href="/blogs">Back to Blogs</Link>
        </Button>
      </div>
    );
  }

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Main content section */}
      <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8 my-12">
        
        {/* Main blog content */}
        <div className="lg:w-3/4 bg-white p-8 rounded-lg shadow-lg">
          <Button asChild className="mb-8 text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded">
            <Link href="/blogs">← Back to Blogs</Link>
          </Button>

          <article className="prose prose-lg mx-auto">
            <h1 className="text-5xl font-extrabold text-gray-800 mb-4">{post.title}</h1>
            <p className="text-gray-500 mb-8">Published on: {post.date}</p>

            <Image
              src={post.imageUrl}
              alt={`${post.title} cover`}
              width={800}
              height={400}
              className="w-full h-auto object-cover rounded-lg shadow-lg mb-8"
            />

            {post.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-4 text-lg text-gray-700 leading-relaxed">{paragraph}</p>
            ))}
          </article>
        </div>

        {/* Sidebar with list of blog posts */}
        <aside className="lg:w-1/4 bg-gray-50 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 my-2">All Blogs</h2>
          <ul className="space-y-4">
            {blogPosts.map((blog) => (
              <li key={blog.id} className="hover:bg-gray-100 p-4 rounded transition-colors">
                <Link href={`/blogs/${blog.id}`}>
                  <div className="flex items-center space-x-4">
                    <Image
                      src={blog.imageUrl}
                      alt={blog.title}
                      width={50}
                      height={50}
                      className="w-12 h-12 object-cover rounded-full"
                    />
                    <span className="text-blue-600 hover:underline text-lg font-medium">{blog.title}</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </div>
      <Footer/>
    </>
  );
}
