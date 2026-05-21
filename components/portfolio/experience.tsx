"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowUpRight } from "lucide-react"

const experiences = [
  {
    period: "Jan 2022 — Present",
    title: "Frontend Engineer",
    company: "Highload Solutions",
    url: "#",
    description:
        "Designed and evolved custom frontend solutions, including a scalable CMS Builder, reusable npm packages with shared tools and feature modules, and internal services for centralized localization and translation management. " +
        "Managed deployment workflows using Vercel, leveraging preview and production environments to support reliable releases, while monitoring performance and stability with Vercel Analytics.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    project: ["React", "Next.js", "TypeScript", "markDown"],
  },
  {
    period: "Jan 2022 — Present",
    title: "Frontend Engineer",
    company: "Patrianna",
    url: "https://www.patrianna.com/",
    description:
        "Designed and evolved custom frontend solutions, including a scalable CMS Builder, reusable npm packages with shared tools and feature modules, and internal services for centralized localization and translation management. " +
        "Managed deployment workflows using Vercel, leveraging preview and production environments to support reliable releases, while monitoring performance and stability with Vercel Analytics.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    project: ["React", "Next.js", "TypeScript", "markDown"],
  },
  {
    period: "Jan 2022 — Present",
    title: "Frontend Engineer",
    company: "Ciklum | Just Eat Takeaway.com",
    url: "https://ciklum.com.ua/",
    description:
      "Contributed to the development of PIE Design, an open-source, customizable UI component library designed for creating responsive and user-friendly interfaces. Explore component implementations in Storybook or review the source code in the monorepo on GitHub. Later transitioned to the 'Product Experience' team to develop a unified customer-facing frontend for Just Eat Takeaway.com, collaborating on multiple initiatives to elevate other teams' products to company standards.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    project: ["React", "Next.js", "TypeScript", "markDown"],
  },
  {
    period: "Mar 2020 — Dec 2021",
    title: "Frontend Engineer",
    company: "Yalantis | ViewTrade Holding Corp.",
    url: "https://yalantis.ua/",
    description:
      "Worked across multiple FinTech products, including electronic trading systems, digital onboarding, billing management, and client-facing platforms for international financial institutions, brokerages, and wealth management firms.",
    technologies: ["React", "TypeScript", "CSS", "Storybook"],
  },
  {
    period: "Jun 2018 — Feb 2020",
    title: "Frontend Engineer",
    company: "Civenty",
    url: "https://coventit.com/",
    description:
      "Developed and scaled multiple country-specific lead generation websites with localized language support, using a shared architecture to enable fast deployment while adapting design for each market, which improved efficiency and conversion across regions.",
    technologies: ["React", "JavaScript", "GraphQL", "Jest"],
  },
  {
    period: "Aug 2016 — May 2018",
    title: "Frontend Engineer",
    company: "Unique Technologies LLC",
    url: "https://uniquetechnologi.es/uk/",
    description:
      "Developed a trading platform for the agricultural sector, building responsive web applications and custom frontend solutions to enable seamless transactions and improve platform usability.",
    technologies: ["JavaScript", "React", "Sass", "WordPress"],
  },
]

export function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-24 md:py-32 px-6 bg-secondary/50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-muted-foreground text-sm tracking-wide uppercase mb-12">
            Experience
          </p>

          <div className="space-y-0">
            {experiences.map((exp, idx) => (
              <motion.a
                key={idx}
                href={exp.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 + idx * 0.1 }}
                className="group block py-8 border-t border-border first:border-t-0 transition-colors -mx-6 px-6"
              >
                <div className="grid md:grid-cols-[180px_1fr] gap-4 md:gap-8">
                  <p className="text-sm text-muted-foreground font-mono">
                    {exp.period}
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <h3 className="text-foreground font-medium">
                        {exp.title} · <span className="text-foreground">{exp.company}</span>
                      </h3>
                      <ArrowUpRight 
                        size={16} 
                        className="text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" 
                      />
                    </div>


                    
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-1">
                      {exp.technologies.map((tech) => (
                          <span
                              key={tech}
                              className="px-2.5 py-1 bg-white text-muted-foreground rounded-md text-xs font-medium"
                          >
                          {tech}
                        </span>
                      ))}
                    </div>

                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="mt-12"
          >
            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-2 text-sm text-foreground font-medium hover:text-muted-foreground transition-colors"
            >
              View Full Resume
              <ArrowUpRight size={16} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
