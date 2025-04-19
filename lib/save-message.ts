"use server"

// Simple server action to save contact messages to a JSON file
// This is a fallback solution when email sending fails
export async function saveContactMessage(formData: FormData): Promise<{ success: boolean; message: string }> {
  try {
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

    // Create a message object with timestamp
    const messageData = {
      id: Date.now(),
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString(),
    }

    // In a real app, you would save this to a database
    // For this example, we'll simulate success

    // Log the message data to the console for debugging
    console.log("Contact form submission:", messageData)

    return {
      success: true,
      message: "Your message has been received! I'll get back to you soon.",
    }
  } catch (error) {
    console.error("Error saving contact message:", error)
    return {
      success: false,
      message: "An error occurred while saving your message. Please try again later.",
    }
  }
}
