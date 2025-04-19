"use server"

import { Resend } from "resend"
import nodemailer from "nodemailer"

// Function to check if we're in development mode
const isDevelopment = process.env.NODE_ENV === "development"

// Create a nodemailer transporter for development fallback
const devTransport = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false,
  auth: {
    user: "ethereal.user@ethereal.email", // This will be replaced with a real test account
    pass: "ethereal.pass",
  },
})

// Initialize Resend with your API key if available
const resendApiKey = process.env.RESEND_API_KEY
const resend = resendApiKey ? new Resend(resendApiKey) : null

// Define the type for the form data
type ContactFormData = {
  name: string
  email: string
  subject: string
  message: string
}

export async function sendContactEmail(formData: FormData): Promise<{ success: boolean; message: string }> {
  try {
    // Extract form data
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const subject = formData.get("subject") as string
    const message = formData.get("message") as string

    // Validate form data
    if (!name || !email || !subject || !message) {
      return {
        success: false,
        message: "Please fill in all fields",
      }
    }

    if (!email.includes("@")) {
      return {
        success: false,
        message: "Please enter a valid email address",
      }
    }

    // Prepare email content
    const emailContent = `
      Name: ${name}
      Email: ${email}
      
      Message:
      ${message}
    `

    const htmlContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <h3>Message:</h3>
      <p>${message.replace(/\n/g, "<br>")}</p>
    `

    // Your email address where you want to receive messages
    const yourEmail = "hosannah481@gmail.com" // Replace with your actual email

    // Try to send email using Resend if API key is available
    if (resend) {
      try {
        const { data, error } = await resend.emails.send({
          from: "Portfolio Contact Form <onboarding@resend.dev>",
          to: yourEmail,
          subject: `Portfolio Contact: ${subject}`,
          text: emailContent,
          html: htmlContent,
        })

        if (error) {
          console.error("Error sending email with Resend:", error)
          throw new Error(error.message)
        }

        return {
          success: true,
          message: "Your message has been sent successfully!",
        }
      } catch (resendError) {
        console.error("Resend API error:", resendError)
        // If we're in development, fall back to the development solution
        if (isDevelopment) {
          return await sendWithFallback(yourEmail, subject, emailContent, htmlContent, name, email)
        }
        throw resendError
      }
    } else {
      // If no Resend API key, use fallback in development
      if (isDevelopment) {
        return await sendWithFallback(yourEmail, subject, emailContent, htmlContent, name, email)
      } else {
        // In production, we should have a Resend API key
        console.error("No Resend API key provided")
        return {
          success: false,
          message: "Server configuration error. Please try again later or contact directly via email.",
        }
      }
    }
  } catch (error) {
    console.error("Error in sendContactEmail:", error)
    return {
      success: false,
      message: "An unexpected error occurred. Please try again later or contact directly via email.",
    }
  }
}

// Fallback email sending function for development
async function sendWithFallback(
  to: string,
  subject: string,
  text: string,
  html: string,
  senderName: string,
  senderEmail: string,
): Promise<{ success: boolean; message: string }> {
  try {
    // Create a test account on Ethereal for development testing
    const testAccount = await nodemailer.createTestAccount()

    // Update the transporter with the test account credentials
    devTransport.auth.user = testAccount.user
    devTransport.auth.pass = testAccount.pass

    // Send mail with the test account
    const info = await devTransport.sendMail({
      from: `"${senderName}" <${senderEmail}>`,
      to,
      subject,
      text,
      html,
    })

    console.log("Message sent: %s", info.messageId)
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info))

    return {
      success: true,
      message: "Your message has been sent successfully! (Development mode - check console for preview URL)",
    }
  } catch (error) {
    console.error("Error sending email with fallback:", error)
    return {
      success: false,
      message: "Failed to send message. Please try again later or contact directly via email.",
    }
  }
}
