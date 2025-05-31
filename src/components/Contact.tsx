"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Github, Linkedin, Send } from "lucide-react"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="contact" className="py-12 md:py-24 relative bg-teal-600">
      {/* Grid background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-white text-center mb-6 tracking-tight"
            variants={itemVariants}
          >
            Let's Work <span className="text-teal-100">Together</span>
          </motion.h2>

          <motion.p className="text-xl text-teal-100 text-center mb-16 max-w-2xl mx-auto" variants={itemVariants}>
            Ready to bring your ideas to life? I'm always excited to discuss new projects and opportunities.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">Get In Touch</h3>
              <p className="text-teal-100 mb-8 leading-relaxed">
                Whether you're looking for a freelancer or want to connect with a fellow developer, feel free to reach
                out! I'm always open to discussing technology, development, and new opportunities.
              </p>

              <div className="space-y-4">
                <motion.a
                  href="mailto:your.email@example.com"
                  className="flex items-center gap-4 text-teal-100 hover:text-white transition-colors duration-300"
                  whileHover={{ x: 10 }}
                >
                  <div className="p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                    <Mail size={20} className="text-white" />
                  </div>
                  <span>your.email@example.com</span>
                </motion.a>

                <motion.a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-teal-100 hover:text-white transition-colors duration-300"
                  whileHover={{ x: 10 }}
                >
                  <div className="p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                    <Github size={20} className="text-white" />
                  </div>
                  <span>GitHub Profile</span>
                </motion.a>

                <motion.a
                  href="https://linkedin.com/in/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-teal-100 hover:text-white transition-colors duration-300"
                  whileHover={{ x: 10 }}
                >
                  <div className="p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                    <Linkedin size={20} className="text-white" />
                  </div>
                  <span>LinkedIn Profile</span>
                </motion.a>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-teal-100 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-teal-100 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-teal-100 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full px-6 py-3 bg-white text-teal-600 rounded-full font-medium hover:bg-teal-50 transition-all duration-300 flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send size={20} />
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer
        className="mt-20 pt-8 border-t border-white/20 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <p className="text-teal-100">© 2024 Young Developer. Built with passion, code, and determination.</p>
      </motion.footer>
    </section>
  )
}

export default Contact
