"use client";
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, User, Building2, MessageSquare, Send } from 'lucide-react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Here you would typically send the data to your backend
  }

  return (
    <div className="bg-gray-400 bg-opacity-10  p-8 rounded-lg   ">
     {/* max-w-4xl mx-auto shadow-lg for old*/}
      {/* <h2 className="text-2xl font-semibold text-gray-700 mb-2">CONNECT WITH US</h2> */}
      <h1 className="text-5xl font-bold text-gray-900 mb-6">Ready to Innovate?</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p className="text-lg text-gray-600 mb-4">We are excited to hear about your project! Our team will reach out within 24 hours to discuss how we can bring your ideas to life.</p>
          <p className="text-gray-600 mb-2">Prefer a direct approach?</p>
          <a href="mailto:hello@innovatetech.com" className="text-blue-600 hover:underline flex items-center">
            <Mail className="w-5 h-5 mr-2" />
            ApexCode.com
          </a>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex items-center border-b border-gray-300">
            <User className="w-5 h-5 text-gray-400 mr-2" />
            <Input
              type="text"
              placeholder="Your Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border-none focus:ring-0"
            />
          </div>
          <div className="flex items-center border-b border-gray-300">
            <Mail className="w-5 h-5 text-gray-400 mr-2" />
            <Input
              type="email"
              placeholder="Email Address"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border-none focus:ring-0"
            />
          </div>
          <div className="flex items-center border-b border-gray-300">
            <Building2 className="w-5 h-5 text-gray-400 mr-2" />
            <Input
              type="text"
              placeholder="Company Name"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="border-none focus:ring-0"
            />
          </div>
          <div className="flex items-start border-b border-gray-300">
            <MessageSquare className="w-5 h-5 text-gray-400 mr-2 mt-3" />
            <Textarea
              placeholder="Tell us about your project or idea"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="border-none focus:ring-0 min-h-[100px]"
            />
          </div>
          <Button type="submit" className="w-full bg-gray-300 hover:bg-gray-500 text-black">
            <Send className="w-5 h-5 mr-2" />
            Lets Collaborate
          </Button>
        </form>
      </div>
    </div>
  )
}