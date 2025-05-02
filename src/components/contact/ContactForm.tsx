import type React from "react"

import { useState } from "react"
import { Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [showConfirmation, setShowConfirmation] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real implementation, you would send the form data to your backend
    console.log("Form submitted:", formState)
    setShowConfirmation(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen dark:bg-stone-900 text-white pt-12">

      {/* Main content */}
      <main className="container mx-auto px-6 py-12">
        {/* Title */}
        <div className="mb-12 max-w-md mx-auto text-center">
          <h1 className="font-[Amatic_SC] text-5xl md:text-6xl font-light mb-4 tracking-wide">
            <span className="dark:text-white">Get in</span> <span className="text-purple-400">Touch</span>
          </h1>
          <p className="text-gray-400 text-lg">Have a question or suggestion? We'd love to hear from you.</p>
        </div>

        {/* Contact Form Card */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 shadow-lg overflow-hidden p-8 md:p-12">
            {!showConfirmation ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-light text-gray-300">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="bg-white/5 border-white/10 focus:border-purple-500/50 h-12 rounded-xl placeholder:text-gray-500"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-light text-gray-300">
                      Your Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className="bg-white/5 border-white/10 focus:border-purple-500/50 h-12 rounded-xl placeholder:text-gray-500"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-light text-gray-300">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    placeholder="What is this regarding?"
                    className="bg-white/5 border-white/10 focus:border-purple-500/50 h-12 rounded-xl placeholder:text-gray-500"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-light text-gray-300">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Share your thoughts or questions..."
                    rows={6}
                    className="bg-white/5 border-white/10 focus:border-purple-500/50 rounded-xl resize-none placeholder:text-gray-500"
                    required
                  />
                </div>

                <div className="pt-4">
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-900/95 to-violet-900/95 dark:from-purple-900/25 dark:to-violet-900/50 border-pink-900/25 border-[1px] text-white rounded-xl h-14 text-lg font-light tracking-wide"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Send Your Message
                  </Button>
                </div>
              </form>
            ) : (
              <div className="text-center py-12">
                <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 mb-6">
                  <div className="h-16 w-16 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center">
                    <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <h2 className="text-3xl font-light mb-4">Message Sent</h2>
                <p className="text-gray-400 mb-8">
                  Thank you for reaching out. We'll get back to you as soon as possible.
                </p>
                <Button
                  onClick={() => {
                    setShowConfirmation(false)
                    setFormState({ name: "", email: "", subject: "", message: "" })
                  }}
                  className="bg-white/10 hover:bg-white/20 text-white rounded-xl"
                >
                  Send Another Message
                </Button>
              </div>
            )}
          </div>
        </div>
        </main>
    </div>
  )
}

