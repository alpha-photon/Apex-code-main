"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BlogPost } from "../components/blogPost";
import { blogPosts } from "../data/blog-post";
import { useState } from "react";
import Navbar from "../components/navbar";
import ContactForm from "../components/contactForms";
import InteractiveFooter from "../components/footer";

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const filteredPosts = blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white  to-white text-black">
      <Navbar />
      <div className="bg-white container mx-auto px-4 py-8 pt-20">
        <h1 className="text-4xl font-bold mb-8 text-center">Company Blog</h1>

        <div className="mb-8 flex justify-center">
          <Input
            type="text"
            placeholder="Search blog posts..."
            className="max-w-md"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentPosts.map((post) => (
            <BlogPost key={post.id} {...post} />
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <p className="text-center text-muted-foreground mt-8">
            No blog posts found matching your search.
          </p>
        )}

        <div className="mt-8 flex justify-center items-center space-x-2">
          <Button
            variant="outline"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </Button>
          <span className="text-muted-foreground">
            Page {currentPage} of {totalPages}
          </span>
          <Button
            variant="outline"
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages || totalPages === 0}
          >
            Next
          </Button>
        </div>
      </div>
      <ContactForm/>
      <InteractiveFooter/>
    </div>
  );
}
