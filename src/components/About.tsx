"use client"

import { motion } from "framer-motion"
import { Code2, Target, TrendingUp } from "lucide-react"

const About = () => {
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
    <section id="about" className="py-12 md:py-24 relative bg-zinc-950">
      {/* Dotted background pattern */}
      <div className="absolute inset-0 opacity-3">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle, #3f3f46 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-white text-center mb-16 tracking-tight"
            variants={itemVariants}
          >
            About <span className="gradient-text">Me</span>
          </motion.h2>

          {/* Main content grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Avatar/Image placeholder */}
            <motion.div variants={itemVariants} className="flex justify-center lg:justify-end">
              <div className="w-80 h-80 bg-gradient-to-br from-teal-900/20 to-green-900/20 rounded-2xl border border-zinc-800 flex items-center justify-center">
                <div className="text-6xl">👨‍💻</div>
              </div>
            </motion.div>

            {/* Bio content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-3xl font-bold text-white tracking-tight">My Journey</h3>
              <p className="text-lg text-zinc-400 leading-relaxed">
                I'm a 17-year-old passionate developer with 5–6 years of experience in the field. I specialize in Java,
                JavaScript, C#, and Python, and I absolutely love problem-solving.
              </p>
              <p className="text-lg text-zinc-400 leading-relaxed">
                My aspiration is to become a full-stack developer—and I believe I'm already well on my way. While I
                haven't monetized my projects yet, I'm eager to take on real-world opportunities.
              </p>
              <p className="text-lg text-zinc-400 leading-relaxed">
                Outside of development, I'm a fitness enthusiast. After losing 15kg, I'm now focused on gaining muscle
                and aim to become a hobbyist bodybuilder. Both coding and fitness require discipline, consistency, and
                the drive to push beyond limits.
              </p>
            </motion.div>
          </div>

          {/* Values grid */}
          <motion.div className="grid md:grid-cols-3 gap-8" variants={containerVariants}>
            <motion.div
              className="text-center p-8 bg-zinc-900/50 backdrop-blur-sm rounded-xl border border-zinc-800 hover:border-teal-900/50 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -5 }}
            >
              <Code2 className="w-12 h-12 text-teal-400 mx-auto mb-4" />
              <h4 className="text-xl font-medium text-white mb-3 tracking-tight">Problem Solver</h4>
              <p className="text-zinc-500">Love tackling complex challenges with clean, efficient code</p>
            </motion.div>

            <motion.div
              className="text-center p-8 bg-zinc-900/50 backdrop-blur-sm rounded-xl border border-zinc-800 hover:border-teal-900/50 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -5 }}
            >
              <Target className="w-12 h-12 text-teal-400 mx-auto mb-4" />
              <h4 className="text-xl font-medium text-white mb-3 tracking-tight">Goal-Driven</h4>
              <p className="text-zinc-500">Structured approach to both coding and personal development</p>
            </motion.div>

            <motion.div
              className="text-center p-8 bg-zinc-900/50 backdrop-blur-sm rounded-xl border border-zinc-800 hover:border-teal-900/50 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -5 }}
            >
              <TrendingUp className="w-12 h-12 text-teal-400 mx-auto mb-4" />
              <h4 className="text-xl font-medium text-white mb-3 tracking-tight">Always Growing</h4>
              <p className="text-zinc-500">Constantly learning new technologies and improving skills</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
