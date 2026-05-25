"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowUpRight, Github } from "lucide-react"

const projects = [
  {
    title: "Design System - PIE Design",
    description:
      "A design system is like a recipe for creating visually appealing and user-friendly products. Just as a recipe uses ingredients and instructions to help you make a delicious meal, a design system uses components, patterns and documentation to help us design amazing apps and websites.",
    technologies: ["React.js", "Next.js", "Redux.js", "Redux Toolkit", "TypeScript", "SCSS", "Storybook", "Web Components", "Lit library", "Vite", "Turborepo", "Jest", "Playwright", "Percy", "Datadog", "REST APIs", "Lighthouse", "Performance Optimization", "WCAG", "Screen Reader Testing", "Core Web Vitals"],
    liveUrl: "https://www.pie.design/all-about-pie/what-is-pie/",
    githubUrl: "https://github.com/justeattakeaway/pie",
    featured: true,
  },
  {
    title: "Advisory Platform - One View",
    description:
      "OneView is an all-in-one advisory and portfolio management platform developed by ViewTrade for investment managers, brokers, RIAs, and family offices. The platform provides a unified portal for managing multiple client accounts, trading equities and options, monitoring risk and compliance, and accessing real-time market insights.",
    technologies: ["React.js", "Redux.js", "Redux Toolkit", "TypeScript", "SCSS", "Styled-components", "Atomic design", "Webpack", "Formik", "Yup", "Chart.js", "Jest", "React Testing Library", "Cypress",  "Sentry", "REST APIs", "Lighthouse", "Performance Optimization"],
    liveUrl: "https://www.viewtrade.com/oneview-landing-page-product-sheet-download/",
    githubUrl: "https://www.viewtrade.com/wp-content/uploads/2023/04/VWT_SalesSheet-OneView_2023-04-12.pdf",
    featured: true,
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
              href="https://github.com/leksa-boiko"
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
