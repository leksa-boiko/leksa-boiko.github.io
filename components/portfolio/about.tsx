"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const skills = [
  { category: "Core", items: ["JavaScript (ES6+)", "TypeScript", "React.js", "Next.js", "Redux/Toolkit", "Web Components", "Microfrontends"] },
  { category: "Styling & UI", items: ["SCSS/SASS,", "Styled-components", "TailwindCSS", "Material-UI", "Ant Design", "Atomic design", "Storybook"] },
  { category: "Testing", items: ["Jest", "React Testing Library", "Cypress", "Playwright", "Percy"] },
  { category: "Build & CI", items: ["Vite", "Webpack", "Vercel",  "Git", "GitHub/GitLab", "CI/CD pipelines"] },
  { category: "Data", items: ["REST APIs", "GraphQL", "Swagger",  "Postman"] },
  { category: "Performance", items: ["Core Web Vitals", "WCAG", "Lighthouse", "Datadog", "Screen Reader Testing"] },
  { category: "AI Tools", items: ["Cursor IDE", "GitHub Copilot", "ChatGPT", "Amazon Q", "Claude Code"] },
  { category: "English", items: ["Upper-Intermediate (B2)"] },
]

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-muted-foreground text-sm tracking-wide uppercase mb-4">
            About
          </p>
          
          {/* Two-column layout: Intro + Skills */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left: Introduction */}
            <div>
              <p className="text-xl md:text-xl font-light leading-relaxed text-foreground mb-6">
                {`I'm a frontend engineer experienced in building responsive, scalable and user-centric web applications using modern frontend technologies and engineering best practices.`}
              </p>
              <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                <p>
                  I specialize in React, Next.js, and TypeScript, creating modern interfaces that combine thoughtful design with robust engineering practices. I enjoy working on products where performance, maintainability, and user experience are equally important.
                </p>
                <p>
                  Throughout my career, I’ve contributed to a wide range of products - from finTech platforms and design systems to internal tools and customer-facing applications, collaborating closely with product, design, and backend teams.
                </p>
              </div>
            </div>
            
            {/* Right: Skills */}
            <div className="space-y-6">
              {skills.map((skillGroup, idx) => (
                <motion.div
                  key={skillGroup.category}
                  initial={{ opacity: 0, y: 12 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.1 + idx * 0.05 }}
                >
                  <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
                    {skillGroup.category}
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {skillGroup.items.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 text-xs text-foreground bg-muted rounded-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
