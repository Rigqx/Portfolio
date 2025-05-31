"use client"

import { motion } from "framer-motion"
import { Code, GitBranch, Layers, Database, Globe, Cpu } from "lucide-react"

const Skills = () => {
  const skills = [
    { name: "Java", icon: <Code className="w-5 h-5" /> },
    { name: "JavaScript", icon: <Code className="w-5 h-5" /> },
    { name: "C#", icon: <Code className="w-5 h-5" /> },
    { name: "Python", icon: <Code className="w-5 h-5" /> },
    { name: "React", icon: <Code className="w-5 h-5" /> },
    { name: "Git", icon: <GitBranch className="w-5 h-5" /> },
    { name: "Full-Stack", icon: <Layers className="w-5 h-5" /> },
    { name: "Databases", icon: <Database className="w-5 h-5" /> },
    { name: "REST APIs", icon: <Globe className="w-5 h-5" /> },
    { name: "Node.js", icon: <Cpu className="w-5 h-5" /> },
  ]

  const tools = ["Vite", "React", "Git", "Framer Motion", "Tailwind CSS", "Node.js"]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="skills" className="py-12 md:py-24 relative bg-zinc-950">
      {/* Dotted background pattern */}
      <div className="absolute inset-0 opacity-3">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle, #3f3f46 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          className="max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-white text-center mb-16 tracking-tight"
            variants={itemVariants}
          >
            My <span className="gradient-text">Skills</span>
          </motion.h2>

          {/* Programming Languages */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-8 tracking-tight text-center">Programming Languages</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {skills.slice(0, 4).map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="flex flex-col items-center p-6 bg-zinc-900/50 rounded-xl border border-zinc-800 hover:border-teal-900/50 transition-all duration-300 group"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-teal-400 mb-3 group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <span className="text-white font-medium">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tools & Technologies */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-8 tracking-tight text-center">Tools & Technologies</h3>
            <div className="bg-zinc-900/30 backdrop-blur-sm rounded-2xl p-8 border border-zinc-800">
              <div className="flex flex-wrap justify-center gap-4">
                {tools.map((tool, index) => (
                  <motion.span
                    key={tool}
                    className="px-6 py-3 bg-gradient-to-r from-teal-900/20 to-green-900/20 text-teal-300 rounded-full border border-teal-900/30 hover:border-teal-700/50 transition-all duration-300"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    viewport={{ once: true }}
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Core Strengths */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-white mb-8 tracking-tight text-center">Core Strengths</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Full-stack development", icon: "🚀" },
                { title: "Clean, maintainable code", icon: "✨" },
                { title: "UI/UX logic and design", icon: "🎨" },
                { title: "Problem-solving mindset", icon: "🧩" },
                { title: "Continuous learning", icon: "📚" },
                { title: "Team collaboration", icon: "🤝" },
              ].map((strength, index) => (
                <motion.div
                  key={strength.title}
                  className="flex items-center gap-4 p-4 bg-zinc-900/50 rounded-lg border border-zinc-800 hover:border-teal-900/30 transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{ x: 10, borderColor: "rgba(20, 184, 166, 0.3)" }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="text-2xl">{strength.icon}</span>
                  <span className="text-zinc-300">{strength.title}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
