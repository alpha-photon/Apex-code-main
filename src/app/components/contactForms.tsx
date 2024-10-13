'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Mail, User, Building2, MessageSquare, Send, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true);
    setSubmitStatus(null);

    const googleScriptURL = 'https://script.google.com/macros/s/AKfycbxCh3kAUJQq3C41VxtkyKIqa834akXlxAUijvw4M1KofLTDaE29Py_jsmpBf_qERIGB1g/exec';

    const formDataToSubmit = new FormData();
    formDataToSubmit.append('Name', formData.name);
    formDataToSubmit.append('Email', formData.email);
    formDataToSubmit.append('Company', formData.company);
    formDataToSubmit.append('Message', formData.message);

    try {
      const response = await fetch(googleScriptURL, {
        method: 'POST',
        body: formDataToSubmit
      });

      if (response.ok) {
        setSubmitStatus('Form submitted successfully!');
        setFormData({ name: '', email: '', company: '', message: '' });
      } else {
        setSubmitStatus('Something went wrong!');
      }
    } catch (error) {
      setSubmitStatus('Error: ' + error.message);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="container mx-auto px-4 py-16 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-5xl font-bold text-gray-900 mb-6 text-center">Ready to Innovate?</h1>
        <p className="text-xl text-gray-600 mb-12 text-center max-w-2xl mx-auto">
          We're excited to hear about your project! Our team will reach out within 24 hours to discuss how we can bring your ideas to life.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">Contact Information</CardTitle>
              <CardDescription>Reach out to us directly</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-600" />
                <a href="mailto:business@apexcode.in" className="text-blue-600 hover:underline">
                  business@apexcode.in
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <User className="w-5 h-5 text-blue-600" />
                <span>Available 24/7 for your inquiries</span>
              </div>
              <div className="flex items-center space-x-3">
                <Building2 className="w-5 h-5 text-blue-600" />
                <span>Global presence, local expertise</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">Let's Collaborate</CardTitle>
              <CardDescription>Fill out the form and we'll be in touch soon</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <Input
                      id="name"
                      type="text"
                      placeholder="John Doe"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company Name</Label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <Input
                      id="company"
                      type="text"
                      placeholder="Acme Inc."
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Your Message</Label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 text-gray-400" />
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project or idea"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="pl-10 min-h-[120px]"
                      required
                    />
                  </div>
                </div>
                <Button
                  type="submit"
                  className={`w-full ${isSubmitting ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'} text-white`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : (
                    <>
                      Let's Collaborate
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
              {submitStatus && (
                <p className={`text-center mt-4 ${submitStatus.startsWith('Error') ? 'text-red-500' : 'text-green-500'}`}>
                  {submitStatus}
                </p>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

//web url: https://script.google.com/macros/s/AKfycbxCh3kAUJQq3C41VxtkyKIqa834akXlxAUijvw4M1KofLTDaE29Py_jsmpBf_qERIGB1g/exec
//deployment id :AKfycbxCh3kAUJQq3C41VxtkyKIqa834akXlxAUijvw4M1KofLTDaE29Py_jsmpBf_qERIGB1g