'use client'
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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<string | null>(null); // to manage response feedback

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true);
    setSubmitStatus(null); // Reset the status message before submission

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
        setSubmitStatus('Form submitted successfully!'); // Success message
        setFormData({ name: '', email: '', company: '', message: '' }); // Clear form
      } else {
        setSubmitStatus('Something went wrong!'); // Error message
      }
    } catch (error) {
      setSubmitStatus('Error: ' + error.message);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="container mx-auto px-4 py-8 bg-white bg-opacity-10 rounded-lg">
      <h1 className="text-5xl font-bold text-gray-900 mb-6">Ready to Innovate?</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p className="text-lg text-gray-600 mb-4">We are excited to hear about your project! Our team will reach out within 24 hours to discuss how we can bring your ideas to life.</p>
          <p className="text-gray-600 mb-2">Prefer a direct approach?</p>
          <a href="mailto:business@apexcode.in" className="text-blue-600 hover:underline flex items-center">
            <Mail className="w-5 h-5 mr-2" />
            business@apexcode.in
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
              required
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
              required
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
              required
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
              required
            />
          </div>
          <Button
            type="submit"
            className={`w-full ${isSubmitting ? 'bg-gray-400' : 'bg-gray-300 hover:bg-gray-500'} text-black flex items-center justify-center`}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : <>
              <Send className="w-5 h-5 mr-2" />
              Lets Collaborate
            </>}
          </Button>
        </form>
        {submitStatus && <p className={`text-center mt-4 ${submitStatus.startsWith('Error') ? 'text-red-500' : 'text-gray-100'}`}>{submitStatus}</p>}
      </div>
    </div>
  )
}

//web url: https://script.google.com/macros/s/AKfycbxCh3kAUJQq3C41VxtkyKIqa834akXlxAUijvw4M1KofLTDaE29Py_jsmpBf_qERIGB1g/exec
//deployment id :AKfycbxCh3kAUJQq3C41VxtkyKIqa834akXlxAUijvw4M1KofLTDaE29Py_jsmpBf_qERIGB1g