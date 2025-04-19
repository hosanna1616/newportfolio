"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send } from "lucide-react"
import { sendContactEmail } from "@/lib/actions"
import { saveContactMessage } from "@/lib/save-message"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatus, setFormStatus] = useState<{
    success?: boolean
    message?: string
  }>({})

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true)
    setFormStatus({})

    try {
      // First try to send email
      const result = await sendContactEmail(formData)

      // If email sending fails, fall back to saving the message
      if (!result.success) {
        console.log("Email sending failed, falling back to message saving")
        const saveResult = await saveContactMessage(formData)
        setFormStatus(saveResult)
      } else {
        setFormStatus(result)
      }

      // Reset form if successful
      if (result.success) {
        const form = document.getElementById("contact-form") as HTMLFormElement
        form.reset()
      }
    } catch (error) {
      console.error("Error submitting form:", error)

      // Try the fallback method if the main method fails completely
      try {
        const saveResult = await saveContactMessage(formData)
        setFormStatus(saveResult)
      } catch (fallbackError) {
        setFormStatus({
          success: false,
          message: "An unexpected error occurred. Please try contacting me directly via email.",
        })
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.form
      id="contact-form"
      action={handleSubmit}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8"
    >
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-4 py-2 border border-brown-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-brown-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
            placeholder="Your Name"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-2 border border-brown-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-brown-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
            placeholder="Your Email"
            required
          />
        </div>
      </div>
      <div className="mb-6">
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          className="w-full px-4 py-2 border border-brown-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-brown-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
          placeholder="Subject"
          required
        />
      </div>
      <div className="mb-6">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="w-full px-4 py-2 border border-brown-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-brown-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
          placeholder="Your Message"
          required
        ></textarea>
      </div>

      {formStatus.message && (
        <div
          className={`mb-6 p-4 rounded-lg ${
            formStatus.success ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"
          }`}
        >
          {formStatus.message}
        </div>
      )}

      <motion.button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-brown-500 hover:bg-brown-600 text-white font-medium py-3 rounded-lg transition-colors shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
        whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
        whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
      >
        {isSubmitting ? (
          <>
            <svg
              className="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Sending...
          </>
        ) : (
          <>
            <Send size={18} className="inline mr-2 -mt-1" />
            Send Message
          </>
        )}
      </motion.button>

      <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
        You can also reach me directly at{" "}
        <a href="mailto:your.email@example.com" className="text-brown-600 dark:text-brown-400 hover:underline">
          hosannah481@gmail.com 
        </a>
      </div>
    </motion.form>
  )
}
