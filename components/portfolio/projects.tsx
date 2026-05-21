"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowUpRight, Github } from "lucide-react"

const projects = [
  {
    title: "Design System",
    description:
      "A comprehensive component library built with React, TypeScript, and Tailwind CSS. Features 50+ accessible components with full documentation and Storybook integration.",
    technologies: ["React", "TypeScript", "Tailwind", "Storybook"],
    liveUrl: "#",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    title: "Performance Dashboard",
    description:
      "Real-time analytics dashboard for monitoring web performance metrics. Built with Next.js and featuring server-side rendering for optimal loading times.",
    technologies: ["Next.js", "Chart.js", "PostgreSQL", "Vercel"],
    liveUrl: "#",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    title: "CLI Tool",
    description:
      "A command-line interface for scaffolding React projects with best practices baked in. Includes ESLint, Prettier, and TypeScript configurations.",
    technologies: ["Node.js", "TypeScript", "Commander", "Inquirer"],
    liveUrl: null,
    githubUrl: "https://github.com",
    featured: false,
  },
  {
    title: "Portfolio Template",
    description:
      "Open-source portfolio template built with Next.js and Framer Motion. Designed for developers who want a clean, professional online presence.",
    technologies: ["Next.js", "Framer Motion", "MDX", "Tailwind"],
    liveUrl: "#",
    githubUrl: "https://github.com",
    featured: false,
  },
]

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-muted-foreground text-sm tracking-wide uppercase mb-12">
            Projects
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 + idx * 0.1 }}
                className="group relative bg-card border border-border rounded-xl p-6 hover:border-muted-foreground/30 transition-colors"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-lg font-medium text-foreground">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-3">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-foreground transition-colors"
                          aria-label={`View ${project.title} on GitHub`}
                        >
                          <Github size={18} />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-foreground transition-colors"
                          aria-label={`View ${project.title} live`}
                        >
                          <ArrowUpRight size={18} />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-secondary text-muted-foreground rounded-md text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="mt-12 text-center"
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              View more on GitHub
              <ArrowUpRight size={16} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
