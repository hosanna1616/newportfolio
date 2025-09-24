"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Menu,
  X,
  GraduationCap,
  School,
  Calendar,
  Download,
  TextIcon as Telegram,
  PaintBucket,
  Heart,
  Brain,
  Coffee,
  Zap,
  Clock,
  Users,
  MessageSquare,
} from "lucide-react"
import Image from "next/image"
import ContactForm from "@/components/contact-form"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSkillTab, setActiveSkillTab] = useState("frontend")

  const headerRef = useRef(null)
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.3])
  const scale = useTransform(scrollYProgress, [0, 0.1], [1, 0.95])

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "education",
        "certifications",
        "achievements",
        "cv",
        "skills",
        "projects",
        "contact",
      ]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navItems = [
    "home",
    "about",
    "education",
    "certifications",
    "achievements",
    "cv",
    "skills",
    "projects",
    "contact",
  ]

  return (
    <div className="min-h-screen bg-brown-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Header */}
      <motion.header
        ref={headerRef}
        style={{ opacity, scale }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-brown-200 dark:border-gray-800"
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl font-bold"
          >
            <span className="text-brown-600 dark:text-brown-400">
              Hosanna Walle
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item, index) => (
              <motion.a
                key={item}
                href={`#${item}`}
                className={`capitalize animated-border ${
                  activeSection === item
                    ? "text-brown-600 dark:text-brown-400 font-medium"
                    : "text-gray-600 dark:text-gray-300 hover:text-brown-500 dark:hover:text-brown-400"
                } transition-colors`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.1 * index,
                }}
              >
                {item}
              </motion.a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600 dark:text-gray-300 hover:text-brown-500 dark:hover:text-brown-400"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white dark:bg-gray-900 border-b border-brown-200 dark:border-gray-800"
            >
              <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href={`#${item}`}
                    className={`capitalize ${
                      activeSection === item
                        ? "text-brown-600 dark:text-brown-400 font-medium"
                        : "text-gray-600 dark:text-gray-300"
                    } transition-colors`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-b from-brown-50 to-white dark:from-gray-900 dark:to-gray-800"
      >
        <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 mb-10 md:mb-0"
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Hi, I'm{" "}
              <span className="text-brown-600 dark:text-brown-400">
                Hosanna Walle
              </span>
            </motion.h1>
            <motion.h2
              className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              full-stack developer
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              I build beautiful, responsive, and user-friendly web applications
              with modern technologies.
            </motion.p>
            <motion.div
              className="flex space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <motion.a
                href="#contact"
                className="bg-brown-500 hover:bg-brown-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.a>
              <motion.a
                href="#projects"
                className="border-2 border-brown-500 text-brown-600 dark:text-brown-400 hover:bg-brown-500/10 px-6 py-3 rounded-lg font-medium transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.a>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 flex justify-center"
          >
            <motion.div
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-brown-400 shadow-xl"
              whileHover={{ scale: 1.05 }}
              animate={{ y: [0, -10, 0] }}
              transition={{
                y: {
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 3,
                  ease: "easeInOut",
                },
              }}
            >
              <Image
                src="/5974412690170430716_121.jpg"
                alt="Profile"
                width={320}
                height={120}
                className="object-cover"
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-brown-100/50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brown-700 dark:text-brown-300">
              About Me
            </h2>
            <div className="w-20 h-1 bg-brown-500 mx-auto"></div>
          </motion.div>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="md:w-2/5 mb-10 md:mb-0"
            >
              <motion.div
                className="rounded-lg shadow-lg overflow-hidden"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/l.jpg"
                  alt="About Me"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <h3 className="text-2xl font-bold mb-4 text-brown-600 dark:text-brown-400">
                Software Engineering Student
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                I’m a Software Engineering student at Bahir Dar University with
                a strong foundation in programming languages such as Java and
                C++. My core technical skills include React, Vite, Node.js,
                Laravel, and Next.js, and I specialize in building scalable,
                responsive web applications with clean architecture and seamless
                user experiences. Through hands-on projects, I’ve developed
                strong problem solving abilities and a collaborative mindset,
                thriving in team environments and agile workflows. I’m actively
                seeking internship opportunities where I can contribute to
                software development and system design, while continuing to grow
                as a developer and expand my professional skill set through real
                world experience.
              </p>
              {/* <p className="text-gray-600 dark:text-gray-300 mb-6">
                My projects have enhanced my problem-solving skills and ability
                to work collaboratively in teams. I am eager to apply my
                knowledge through internships and practical experiences in
                software development and system design, while continuously
                seeking opportunities for professional growth.
              </p> */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="font-medium text-brown-600 dark:text-brown-400">
                    Email:
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    hosannawalle@gmail.com
                  </p>
                </div>
                <div>
                  <p className="font-medium text-brown-600 dark:text-brown-400">
                    Location:
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Bahir Dar, Ethiopia
                  </p>
                </div>
                <div>
                  <p className="font-medium text-brown-600 dark:text-brown-400">
                    Education:
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Bahir Dar University
                  </p>
                </div>
              </div>
              <div className="mt-8 flex space-x-4">
                <motion.a
                  href="https://github.com/hosanna1616"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full shadow-md"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/hosanna-walle-457705259?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-500 text-white p-3 rounded-full shadow-md"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </motion.a>
                <motion.a
                  href="mailto:hosannawalle@gmail.com"
                  className="bg-red-600 hover:bg-red-500 text-white p-3 rounded-full shadow-md"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Email"
                >
                  <Mail size={20} />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brown-700 dark:text-brown-300">
              Education
            </h2>
            <div className="w-20 h-1 bg-brown-500 mx-auto"></div>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative border-l-2 border-brown-400 pl-8 pb-12">
              {/* University Education */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12 relative"
              >
                <div className="absolute -left-10 mt-1.5 h-6 w-6 rounded-full bg-brown-500 flex items-center justify-center shadow-md">
                  <GraduationCap size={16} className="text-white" />
                </div>
                <motion.div
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border-l-4 border-brown-500"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-xl font-bold text-brown-600 dark:text-brown-400">
                      Bahir Dar University
                    </h3>
                    <div className="flex items-center text-gray-600 dark:text-gray-300 mt-2 md:mt-0">
                      <Calendar size={16} className="mr-1" />
                      <span>2021 - Present</span>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Bachelor of Science in Software Engineering
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Attending Bahir Dar University has been a transformative
                    experience that has significantly shaped my academic and
                    personal growth. As I pursue my studies in software
                    engineering, I have encountered numerous opportunities that
                    have enriched my understanding of technology and its
                    applications in the real world.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    As I continue my studies at Bahir Dar University, I am
                    excited about the future possibilities within the field of
                    software engineering. My goal is to specialize in artificial
                    intelligence and machine learning, areas that are rapidly
                    evolving and hold immense potential for innovation. I am
                    eager to contribute to projects that leverage technology for
                    social good while continuing to expand my skill set through
                    internships and collaborative research.
                  </p>
                </motion.div>
              </motion.div>

              {/* High School Education */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -left-10 mt-1.5 h-6 w-6 rounded-full bg-brown-500 flex items-center justify-center shadow-md">
                  <School size={16} className="text-white" />
                </div>
                <motion.div
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border-l-4 border-brown-500"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-xl font-bold text-brown-600 dark:text-brown-400">
                      Catholic High School
                    </h3>
                    <div className="flex items-center text-gray-600 dark:text-gray-300 mt-2 md:mt-0">
                      <Calendar size={16} className="mr-1" />
                      <span>2017 - 2021</span>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    High School Diploma
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    During my time at a Catholic high school, I was immersed in
                    an environment that emphasized not only academic excellence
                    but also moral and ethical development. The school's
                    commitment to fostering a sense of community and service
                    played a significant role in shaping my character and work
                    ethic. The curriculum was designed to encourage critical
                    thinking, collaboration, and respect for diverse
                    perspectives, which are essential skills in any professional
                    setting.
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section
        id="certifications"
        className="py-20 bg-brown-100/50 dark:bg-gray-800"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brown-700 dark:text-brown-300">
              Certifications
            </h2>
            <div className="w-20 h-1 bg-brown-500 mx-auto"></div>
          </motion.div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Fundamental Of Digital Marketing",
                organization: "AWAQI",
                year: "2023",
                link: "https://docs.google.com/document/d/191miR0oTmlEBu2S4Pv8aC0BYSeQyz3t-fPmNgVFb8aw/edit?usp=sharing",
              },
              {
                title: "Photoshop",
                organization: "AWAQI",
                year: "2023",
                link: "https://docs.google.com/document/d/1RRTONhdmCSz9nIWXH01b1x0Rp5VBqhf-kO7gm3JH25U/edit?usp=sharing",
              },
              {
                title: "Work Readiness",
                organization: "AWAQI",
                year: "2023",
                link: "https://docs.google.com/document/d/15zQvEp3wkhRCL2IQUKzML09Ma7m17o0-N9TvlbDQXY4/edit?usp=sharing",
              },
              {
                title: "Gig 101 Business",
                organization: "Mesirat",
                year: "2023",
                link: "https://docs.google.com/document/d/1qO0jthxJZZKY4nAv_PzwhWjDZbVGI4IiKOU09uTEmgk/edit?usp=sharing",
              },
              {
                title: "shecode Hackathon winning certification",
                organization: "AASTU",
                year: "2025",
                link: "https://www.canva.com/design/DAGzPqBNy2E/L8WfWQzBbdT_BkxfaAqLIQ/edit?utm_content=DAGzPqBNy2E&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
              },
              {
                title: "Gig Hackathon winning certification",
                organization: "AASTU",
                year: "2025",
                link: "https://www.canva.com/design/DAGzPjN--Es/SzWHQC1zhTlwU5sbg3YCXw/edit?utm_content=DAGzPjN--Es&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
              },
            ].map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 flex flex-col border-t-4 border-brown-500 hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 text-brown-600 dark:text-brown-400">
                    {cert.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {cert.organization} • {cert.year}
                  </p>
                </div>
                <div className="mt-4 border-t border-brown-200 dark:border-gray-700 pt-4">
                  <motion.a
                    href={cert.link}
                    className="flex items-center text-sm font-medium text-brown-600 dark:text-brown-400 hover:text-brown-700 dark:hover:text-brown-300"
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={16} className="mr-1" />
                    View Certificate
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brown-700 dark:text-brown-300">
              Achievements
            </h2>
            <div className="w-20 h-1 bg-brown-500 mx-auto"></div>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
              whileHover={{ y: -5 }}
            >
              <div className="md:flex">
                <div className="md:w-2/5">
                  <div className="relative h-64 md:h-full">
                    <Image
                      src="/p2.jpg"
                      alt="SheCodes Hackathon Winner Certificate"
                      width={300}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-brown-500/10 flex items-center justify-center"></div>
                  </div>
                </div>
                <div className="p-6 md:w-3/5">
                  <div className="flex items-center mb-4">
                    <div className="bg-brown-100 text-brown-700 dark:bg-brown-900/30 dark:text-brown-300 font-bold px-3 py-1 rounded-full text-sm">
                      1st Place
                    </div>
                    <div className="ml-3 text-gray-600 dark:text-gray-300 text-sm">
                      2025
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-brown-600 dark:text-brown-400">
                    SheCodes Hackathon Champion
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    I'm proud to have won the prestigious 2025 SheCodes
                    Hackathon, competing against talented teams from 14
                    universities. Our innovative solution stood out among 47
                    participating teams, demonstrating excellence in
                    problem-solving, technical implementation, and presentation.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    The competition challenged us to develop a technology
                    solution addressing real-world problems. Our project
                    combined technical innovation with social impact, earning
                    recognition from industry judges and establishing me as a
                    leader in the tech community.
                  </p>
                  <motion.a
                    href="#"
                    className="flex items-center text-sm font-medium text-brown-600 dark:text-brown-400 hover:text-brown-700 dark:hover:text-brown-300"
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* <ExternalLink size={16} className="mr-1" />
                    View Project Details */}
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <section id="achievements" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="w-20 h-1 bg-brown-500 mx-auto"></div>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
              whileHover={{ y: -5 }}
            >
              <div className="md:flex">
                <div className="md:w-8/5">
                  <div className="relative h-34 md:h-full">
                    <Image
                      src="/gigcertificate.png"
                      alt="GIG Hackathon Winner Certificate"
                      width={300}
                      height={600}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-brown-500/10 flex items-center justify-center"></div>
                  </div>
                </div>
                <div className="p-6 md:w-3/5">
                  <div className="flex items-center mb-4">
                    <div className="bg-brown-100 text-brown-700 dark:bg-brown-900/30 dark:text-brown-300 font-bold px-3 py-1 rounded-full text-sm">
                      1st Place
                    </div>
                    <div className="ml-3 text-gray-600 dark:text-gray-300 text-sm">
                      2025
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-brown-600 dark:text-brown-400">
                    GIG Hackathon winner
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    I'm proud to have won the prestigious 2025 GIG Hackathon,
                    competing against talented teams from various universities.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    The competition challenged us to develop a technology
                    solution addressing real-world problems. Our project
                    combined technical innovation with social impact, earning
                    recognition from industry judges and establishing me as a
                    leader in the tech community.
                  </p>
                  <motion.a
                    href="#"
                    className="flex items-center text-sm font-medium text-brown-600 dark:text-brown-400 hover:text-brown-700 dark:hover:text-brown-300"
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* <ExternalLink size={16} className="mr-1" /> */}
                    {/* View Project Details */}
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CV Section */}
      <section id="cv" className="py-20 bg-brown-100/50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brown-700 dark:text-brown-300">
              Curriculum Vitae
            </h2>
            <div className="w-20 h-1 bg-brown-500 mx-auto"></div>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-8">
              <motion.div
                className="lg:w-1/2"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 h-full">
                  <div className="relative h-[500px] mb-6 border-4 border-brown-300 rounded-lg overflow-hidden">
                    <Image
                      src="/cv.png"
                      alt="CV Preview"
                      width={500}
                      height={700}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-brown-500/10 flex items-center justify-center"></div>
                  </div>
                  <motion.a
                    href="https://www.canva.com/design/DAGjIi8FJ-k/dKeEWhAcmhc8ncJosc5AxA/edit?utm_content=DAGjIi8FJ-k&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                    className="flex items-center justify-center w-full bg-brown-500 hover:bg-brown-600 text-white py-3 px-4 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Download size={18} className="mr-2" />
                    Download CV
                  </motion.a>
                </div>
              </motion.div>

              <motion.div
                className="lg:w-1/2"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 h-full flex flex-col">
                  <h3 className="text-2xl font-bold mb-6 text-brown-600 dark:text-brown-400">
                    Connect With Me
                  </h3>

                  <div className="space-y-6 flex-grow">
                    <motion.a
                      href="https://github.com/hosanna1616"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-4 rounded-lg border border-brown-200 dark:border-gray-700 hover:bg-brown-50 dark:hover:bg-gray-800 transition-all duration-300"
                      whileHover={{
                        x: 5,
                        backgroundColor: "rgba(164, 114, 84, 0.1)",
                      }}
                    >
                      <div className="h-12 w-12 rounded-full bg-gray-800 flex items-center justify-center mr-4">
                        <Github size={24} className="text-white" />
                      </div>
                      <div>
                        <h4 className="font-medium text-brown-600 dark:text-brown-400">
                          GitHub
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          View my code repositories
                        </p>
                      </div>
                    </motion.a>

                    <motion.a
                      href="https://www.linkedin.com/in/hosanna-walle-457705259?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-4 rounded-lg border border-brown-200 dark:border-gray-700 hover:bg-brown-50 dark:hover:bg-gray-800 transition-all duration-300"
                      whileHover={{
                        x: 5,
                        backgroundColor: "rgba(164, 114, 84, 0.1)",
                      }}
                    >
                      <div className="h-12 w-12 rounded-full bg-blue-600 flex items-center justify-center mr-4">
                        <Linkedin size={24} className="text-white" />
                      </div>
                      <div>
                        <h4 className="font-medium text-brown-600 dark:text-brown-400">
                          LinkedIn
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Connect professionally
                        </p>
                      </div>
                    </motion.a>

                    <motion.a
                      href="@hoss1616"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-4 rounded-lg border border-brown-200 dark:border-gray-700 hover:bg-brown-50 dark:hover:bg-gray-800 transition-all duration-300"
                      whileHover={{
                        x: 5,
                        backgroundColor: "rgba(164, 114, 84, 0.1)",
                      }}
                    >
                      <div className="h-12 w-12 rounded-full bg-blue-500 flex items-center justify-center mr-4">
                        <Telegram size={24} className="text-white" />
                      </div>
                      <div>
                        <h4 className="font-medium text-brown-600 dark:text-brown-400">
                          Telegram
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Chat with me directly
                        </p>
                      </div>
                    </motion.a>

                    <motion.a
                      href="mailto:hosannawalle@gmail.com"
                      className="flex items-center p-4 rounded-lg border border-brown-200 dark:border-gray-700 hover:bg-brown-50 dark:hover:bg-gray-800 transition-all duration-300"
                      whileHover={{
                        x: 5,
                        backgroundColor: "rgba(164, 114, 84, 0.1)",
                      }}
                    >
                      <div className="h-12 w-12 rounded-full bg-red-600 flex items-center justify-center mr-4">
                        <Mail size={24} className="text-white" />
                      </div>
                      <div>
                        <h4 className="font-medium text-brown-600 dark:text-brown-400">
                          Email
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Send me an email
                        </p>
                      </div>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brown-700 dark:text-brown-300">
              My Skills
            </h2>
            <div className="w-20 h-1 bg-brown-500 mx-auto"></div>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            {/* Soft Skills */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h3 className="text-2xl font-bold mb-8 text-brown-600 dark:text-brown-400 text-center">
                Soft Skills
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { name: "Communication", icon: <MessageSquare size={24} /> },
                  { name: "Problem Solving", icon: <Brain size={24} /> },
                  { name: "Teamwork", icon: <Users size={24} /> },
                  { name: "Creativity", icon: <PaintBucket size={24} /> },
                  { name: "Adaptability", icon: <Zap size={24} /> },
                  { name: "Time Management", icon: <Clock size={24} /> },
                  { name: "Attention to Detail", icon: <Heart size={24} /> },
                  { name: "Critical Thinking", icon: <Coffee size={24} /> },
                ].map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="bg-brown-50 dark:bg-gray-800 rounded-lg p-4 flex flex-col items-center text-center shadow-md hover:shadow-lg transition-all duration-300"
                    whileHover={{
                      y: -5,
                      backgroundColor: "rgba(226, 206, 191, 0.5)",
                    }}
                  >
                    <div className="w-12 h-12 rounded-full bg-brown-200 dark:bg-brown-800 flex items-center justify-center mb-3 text-brown-600 dark:text-brown-400">
                      {skill.icon}
                    </div>
                    <h4 className="font-medium text-brown-700 dark:text-brown-300">
                      {skill.name}
                    </h4>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Hard Skills */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-8 text-brown-600 dark:text-brown-400 text-center">
                Technical Skills
              </h3>

              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden mb-8">
                <div className="flex flex-wrap border-b border-brown-200 dark:border-gray-700">
                  {["frontend", "backend", "testing", "rendering", "other"].map(
                    (tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveSkillTab(tab)}
                        className={`px-6 py-3 font-medium transition-all duration-300 ${
                          activeSkillTab === tab
                            ? "text-brown-600 dark:text-brown-400 border-b-2 border-brown-500"
                            : "text-gray-600 dark:text-gray-300 hover:text-brown-500 dark:hover:text-brown-400"
                        }`}
                      >
                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                      </button>
                    )
                  )}
                </div>

                <div className="p-6">
                  {activeSkillTab === "frontend" && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                    >
                      {[
                        { name: "HTML5", level: 90 },
                        { name: "CSS3", level: 85 },
                        { name: "JavaScript", level: 80 },
                        { name: "React", level: 85 },
                        { name: "Tailwind CSS", level: 90 },
                        { name: "Next.js", level: 75 },
                        { name: "TypeScript", level: 70 },
                        { name: "Framer Motion", level: 65 },
                      ].map((skill, index) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                          className="skill-card bg-brown-50 dark:bg-gray-900 rounded-lg shadow-md p-4"
                        >
                          <h4 className="text-lg font-medium mb-2 text-brown-600 dark:text-brown-400">
                            {skill.name}
                          </h4>
                          <div className="w-full bg-brown-200 dark:bg-gray-700 rounded-full h-2.5">
                            <motion.div
                              className="bg-brown-500 h-2.5 rounded-full"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              transition={{ duration: 1, delay: 0.2 }}
                              viewport={{ once: true }}
                            ></motion.div>
                          </div>
                          <p className="text-right mt-1 text-sm text-gray-600 dark:text-gray-300">
                            {skill.level}%
                          </p>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}

                  {activeSkillTab === "backend" && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                    >
                      {[
                        { name: "Node.js", level: 75 },
                        { name: "Express", level: 70 },
                        { name: "MongoDB", level: 65 },
                        { name: "SQL", level: 60 },

                        { name: "REST API", level: 85 },
                        { name: "GraphQL", level: 60 },
                        { name: "Java", level: 70 },
                      ].map((skill, index) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                          className="skill-card bg-brown-50 dark:bg-gray-900 rounded-lg shadow-md p-4"
                        >
                          <h4 className="text-lg font-medium mb-2 text-brown-600 dark:text-brown-400">
                            {skill.name}
                          </h4>
                          <div className="w-full bg-brown-200 dark:bg-gray-700 rounded-full h-2.5">
                            <motion.div
                              className="bg-brown-500 h-2.5 rounded-full"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              transition={{ duration: 1, delay: 0.2 }}
                              viewport={{ once: true }}
                            ></motion.div>
                          </div>
                          <p className="text-right mt-1 text-sm text-gray-600 dark:text-gray-300">
                            {skill.level}%
                          </p>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}

                  {activeSkillTab === "testing" && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                    >
                      {[
                        { name: "Jest", level: 70 },
                        { name: "Jemeter", level: 80 },
                        { name: "Selenium", level: 55 },
                        { name: "Postman", level: 80 },
                        { name: "Manual Testing", level: 85 },
                        { name: "Test Planning", level: 75 },
                        { name: "Debugging", level: 80 },
                      ].map((skill, index) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                          className="skill-card bg-brown-50 dark:bg-gray-900 rounded-lg shadow-md p-4"
                        >
                          <h4 className="text-lg font-medium mb-2 text-brown-600 dark:text-brown-400">
                            {skill.name}
                          </h4>
                          <div className="w-full bg-brown-200 dark:bg-gray-700 rounded-full h-2.5">
                            <motion.div
                              className="bg-brown-500 h-2.5 rounded-full"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              transition={{ duration: 1, delay: 0.2 }}
                              viewport={{ once: true }}
                            ></motion.div>
                          </div>
                          <p className="text-right mt-1 text-sm text-gray-600 dark:text-gray-300">
                            {skill.level}%
                          </p>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}

                  {activeSkillTab === "rendering" && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                    >
                      {[
                        { name: "Three.js", level: 60 },
                        { name: "WebGL", level: 55 },
                        { name: "Canvas API", level: 70 },
                        { name: "SVG", level: 75 },
                        { name: "D3.js", level: 65 },
                        { name: "Animation", level: 80 },
                        { name: "Responsive Design", level: 90 },
                        { name: "UI/UX", level: 85 },
                      ].map((skill, index) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                          className="skill-card bg-brown-50 dark:bg-gray-900 rounded-lg shadow-md p-4"
                        >
                          <h4 className="text-lg font-medium mb-2 text-brown-600 dark:text-brown-400">
                            {skill.name}
                          </h4>
                          <div className="w-full bg-brown-200 dark:bg-gray-700 rounded-full h-2.5">
                            <motion.div
                              className="bg-brown-500 h-2.5 rounded-full"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              transition={{ duration: 1, delay: 0.2 }}
                              viewport={{ once: true }}
                            ></motion.div>
                          </div>
                          <p className="text-right mt-1 text-sm text-gray-600 dark:text-gray-300">
                            {skill.level}%
                          </p>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}

                  {activeSkillTab === "other" && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                    >
                      {[
                        { name: "Git", level: 80 },
                        { name: "GitHub", level: 85 },
                        { name: "VS Code", level: 90 },
                        { name: "Figma", level: 75 },
                        { name: "Photoshop", level: 70 },
                        { name: "Agile/Scrum", level: 75 },
                        { name: "Docker", level: 60 },
                        { name: "CI/CD", level: 65 },
                      ].map((skill, index) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                          className="skill-card bg-brown-50 dark:bg-gray-900 rounded-lg shadow-md p-4"
                        >
                          <h4 className="text-lg font-medium mb-2 text-brown-600 dark:text-brown-400">
                            {skill.name}
                          </h4>
                          <div className="w-full bg-brown-200 dark:bg-gray-700 rounded-full h-2.5">
                            <motion.div
                              className="bg-brown-500 h-2.5 rounded-full"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              transition={{ duration: 1, delay: 0.2 }}
                              viewport={{ once: true }}
                            ></motion.div>
                          </div>
                          <p className="text-right mt-1 text-sm text-gray-600 dark:text-gray-300">
                            {skill.level}%
                          </p>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-brown-100/50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brown-700 dark:text-brown-300">
              My Projects
            </h2>
            <div className="w-20 h-1 bg-brown-500 mx-auto"></div>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Ethio shield",
                description:
                  " Designed and developed a responsive support portal for EthioShield, an antivirus platform, using React, Next.js, and Tailwind CSS. Crafted an intuitive UI with 24/7 contact features (phone, email, live chat) and multilingual support in Amharic, Oromo, Tigrinya, and English, tailored for Ethiopia’s diverse users. Implemented smooth animations and accessible navigation, reducing user friction by 30% in low-bandwidth settings. Integrated dynamic FAQs with real-time search, enhancing usability for 10K+ monthly visitors. Leveraged Vercel for seamless deployment and Git for version control, ensuring",
                image: "/image.png",
                github: "https://github.com/hosanna1616/anti-virus-web",
                demo: "https://anti-virus-web.vercel.app/",
              },
              {
                title: "Digital pet twin",
                description:
                  " Developed in collaboration with an agile and imaginative team lead by me, it responds dynamically to real-world weather conditions, invites users into playful, interactive games, and builds a sense of connection through nuanced, evolving interactions.This project earned 1st place honors at the GIG Hackathon 2025, recognized for its originality, technical sophistication, and experience-first design. Blending creativity with engineering precision, Digital Pet Twin showcases the future of interactive digital relationships and the kind of teamwork that turns bold ideas into tangible wins.",
                image: "/dd.png",
                github: "https://github.com/hosanna1616/digital-pet-twin",
                demo: "https://pettwin3.vercel.app/",
              },
              {
                title: "Flega",
                description:
                  "I crafted Flega DevConnect Hub with React, Next.js, and Tailwind CSS to empower developers to connect, collaborate, and elevate their GitHub presence. Its intuitive interface, powered by TypeScript and Framer Motion, introduces a gamified experience with XP levels, badges, and streaks, making networking joyful in low-bandwidth settings. Unique country and role-based search features let users discover peers effortlessly, fostering global bonds. Deployed on Vercel with Git for seamless updates, Flega transforms GitHub into a lively hub of sh",
                image: "/flegaweb.png",
                github: "https://github.com/hosanna1616/flega",
                demo: "https://flega.vercel.app/",
              },

              {
                title: "Glow Sphere",
                description:
                  " Inspired by Ethiopia’s vibrant community spirit, I crafted GlowSphere a dynamic web app built with  Next.js, and Tailwind CSS—to spark creativity and connection. Its responsive UI, powered by TypeScript and Framer Motion, features , enhancing accessibility.I designed GlowSphere to empower users with intuitive, culturally resonant experiences, transforming passive browsing into an immersive journey.Dive into GlowSphere and feel the power of girls’ voices rising together.",
                image: "/g.png",
                // github: "https://github.com/hosanna1616/interior",
                demo: "https://glow-sphere-hosanna.base44.app",
              },
              {
                title: "Ai Recruiter Agent",
                description:
                  "Hackathon winning project. developed an intelligent recruiter agent that revolutionizes the hiring process, making it seamless, efficient, and highly accurate. me and my group member developed a system that goes beyond resumes, evaluating skills, experience, personality traits, and cultural fit to match the best candidates with the right roles.For companies, we  developed a tool that streamlines hiring, ensuring they find professionals who align perfectly with their vision and work environment. For job seekers, we developed a solution that eliminates the guesswork, offering tailored recommendations based on their expertise and career aspirations.",
                image: "/Screenshot 2025-04-11 145301.png",
                github: "https://github.com/hosanna1616",
                demo: "https://ai-recruiter-9y2a.vercel.app/",
              },

              {
                title: "Interior Design website",
                description:
                  " built a visually immersive interior design website using Next.js that showcases creative work through dynamic animations, orb-based interactions, and seamless page transitions. Designed to evoke emotion and spark exploration, the site blends cinematic motion with technical precision, leveraging React, Tailwind CSS, and Framer Motion to deliver a fast, responsive experience across devices. I focused on accessibility, secure routing, and modular architecture to ensure both usability and scalability, crafting a digital gallery that transforms passive viewing into an engaging journey through design..",
                image: "/intpic.png",
                github: "https://github.com/hosanna1616/interior",
                demo: "https://interior-671w.vercel.app/",
              },

              {
                title: "Mafi Clothes",
                description:
                  "my very first project I created a dynamic and engaging platform that showcases the brand's identity through modern web design principles. Incorporating smooth animations throughout the site enhances visual interest and guides users through the content seamlessly. These animations are designed to be subtle yet impactful, ensuring they do not distract from the main message but rather complement the overall user experience.",
                image: "/m.png",
                github: "https://hosanna1616.github.io/mafimafi/h.html",
                demo: "https://hosanna1616.github.io/mafimafi/h.html",
              },
              {
                title: "jeon Beauty",
                description:
                  "Beauty product shoping website created to be a dynamic and engaging platform that showcases the brand's identity through modern web design principles. Incorporating smooth animations throughout the site enhances visual interest and responsivness.",
                image: "/j.png",
                github: "https://github.com/hosanna1616/jeon",
                demo: "https://jeonbeauty.netlify.app/",
              },
              {
                title: "Ai Environment Analayzer",
                description:
                  " developed an intelligent environment analyzer that transforms how we understand and respond to environmental changes.This technology enables industries, researchers, and policymakers to make informed decisions that protect natural resources and promote sustainability. By analyzing environmental patterns in real time, I developed a tool that helps mitigate risks, optimize resource management, and ensure a healthier planet for future generations.",
                image: "/Screenshot 2025-04-11 145608.png",
                github: "https://github.com/yourusername/blog-platform",
                demo: "https://github.com/yourusername/blog-platform",
              },
            ].map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg"
                whileHover={{ y: -10 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-brown-600 dark:text-brown-400">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex space-x-3">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm font-medium text-brown-600 dark:text-brown-400 hover:text-brown-700 dark:hover:text-brown-300"
                      whileHover={{ scale: 1.05, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={16} className="mr-1" />
                      GitHub
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm font-medium text-brown-600 dark:text-brown-400 hover:text-brown-700 dark:hover:text-brown-300"
                      whileHover={{ scale: 1.05, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={16} className="mr-1" />
                      Live Demo
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brown-700 dark:text-brown-300">
              Contact Me
            </h2>
            <div className="w-20 h-1 bg-brown-500 mx-auto"></div>
          </motion.div>
          <div className="max-w-3xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-brown-800 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-lg font-bold">Hosanna Walle</p>
              <p className="text-brown-300">full-stack developer</p>
            </div>
            <div className="flex space-x-4">
              <motion.a
                href="https://github.com/hosanna1616"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brown-300 hover:text-white"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                aria-label="GitHub"
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/hosanna-walle-457705259?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brown-300 hover:text-white"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                href="mailto:hosannawalle@gmail.com"
                className="text-brown-300 hover:text-white"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Email"
              >
                <Mail size={20} />
              </motion.a>
            </div>
          </div>
          <div className="mt-8 text-center text-brown-300">
            <p>
              &copy; {new Date().getFullYear()} Hosanna Walle. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
