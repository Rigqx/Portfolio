"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Calendar, Wrench, Gamepad2 } from "lucide-react"

const Projects = () => {
  const currentProjects = [
    {
      title: "DanskOverblik",
      description: "A Danish calendar showing holidays, observances, and cultural days.",
      icon: Calendar,
      color: "from-teal-500 to-green-500",
      tech: ["React", "Vite", "TypeScript", "TailwindCSS", "shadcn"],
      link: "https://dansksoversigt.dk",
      github: "#",
      status: "Live",
    },
    {
      title: "Utilbase",
      description: "A collection of developer utilities to streamline workflows.",
      icon: Wrench,
      color: "from-green-500 to-teal-500",
      tech: ["React", "Vite", "TypeScript", "TailwindCSS", "shadcn"],
      link: "https://utilbase.info",
      github: "#",
      status: "Live",
    },
  ]

  const pastProjects = [
    {
      title: "MCUdvikling",
      description: "A freelance Minecraft hub where I sold scripts, plugins, and maps.",
      icon: Gamepad2,
      color: "from-teal-500 to-green-500",
      tech: ["Next.js", "TypeScript", "TailwindCSS"],
      status: "Archived",
    },
  ]

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
    <section id="projects" className="py-12 md:py-24 relative bg-black">
      {/* Grid background pattern */}
      <div className="absolute inset-0 opacity-2">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, #3f3f46 1px, transparent 1px), linear-gradient(to bottom, #3f3f46 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-white text-center mb-16 tracking-tight"
            variants={itemVariants}
          >
            My <span className="gradient-text">Projects</span>
          </motion.h2>

          {/* Current Projects */}
          <motion.div variants={itemVariants} className="mb-20">
            <h3 className="text-2xl font-bold text-white mb-8 tracking-tight">Current Projects</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {currentProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  className="bg-zinc-900 backdrop-blur-sm rounded-2xl p-8 border border-zinc-800 hover:border-teal-900/50 transition-all duration-300 group"
                  whileHover={{ scale: 1.02, y: -5 }}
                  variants={itemVariants}
                >
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${project.color} mr-4`}>
                        <project.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white tracking-tight">{project.title}</h4>
                        <span className="text-sm text-teal-400 font-medium">{project.status}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-zinc-400 mb-6 leading-relaxed">{project.description}</p>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h5 className="text-sm font-medium text-zinc-300 mb-3">Tech Stack</h5>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-teal-500/10 text-teal-300 rounded-full text-sm border border-teal-900/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 pt-4 border-t border-zinc-800">
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors font-medium"
                      whileHover={{ scale: 1.05 }}
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </motion.a>
                    <motion.a
                      href={project.github}
                      className="flex items-center gap-2 text-zinc-400 hover:text-zinc-300 transition-colors font-medium"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Github size={16} />
                      Code
                    </motion.a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Past Projects */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-white mb-8 tracking-tight">Past Projects</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {pastProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  className="bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-8 border border-zinc-800"
                  whileHover={{ scale: 1.02 }}
                  variants={itemVariants}
                >
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${project.color} mr-4 opacity-75`}>
                        <project.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-zinc-300 tracking-tight">{project.title}</h4>
                        <span className="text-sm text-zinc-500 font-medium">{project.status}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-zinc-400 mb-6 leading-relaxed">{project.description}</p>

                  {/* Tech Stack */}
                  <div>
                    <h5 className="text-sm font-medium text-zinc-400 mb-3">Tech Stack</h5>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-zinc-800 text-zinc-400 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
