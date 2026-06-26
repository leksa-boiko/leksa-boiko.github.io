"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowUpRight } from "lucide-react"

const experiences = [
  {
    period: "Sep 2025 — Apr 2026",
    title: "Frontend Engineer",
    company: "Highload Solutions",
    url: "#",
    description:
        "Implemented microfrontend architecture using Web Components to enable scalable, independently deployable frontend modules." +
        "Ensured WCAG-compliant accessibility by applying semantic markup, keyboard navigation support, best practices, and inclusive interaction patterns.",
    technologies: ["React.js", "TypeScript", "Tailwind CSS", "AWS (S3, Lambda, CloudWatch, Secrets Manager)", "Jest", "RTL", "GraphQL", "Datadog", "Lighthouse / Web Vitals", "Performance Optimization", "AI-Driven Development", "Amazon Q", "GitHub Copilot", "CI/CD piplines"],
  },
  {
    period: "Apr 2025 — Aug 2025",
    title: "Frontend Engineer",
    company: "Patrianna",
    url: "https://www.patrianna.com/",
    description:
        "Designed and evolved custom frontend solutions, including a scalable CMS Builder, reusable npm packages with shared tools and feature modules, and internal services for centralized localization and translation management. " +
        "Managed deployment workflows using Vercel, leveraging preview and production environments to support reliable releases, while monitoring performance and stability with Vercel Analytics.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Biulder.io", "S3 Bucket", "Jest", "React Testing Library", "Cypress", "REST APIs", "CRUD", "Postman", "Swagger", "Lighthouse", "Performance Optimization", "AI-Driven Development", "Cursor IDE", "CI/CD"],
  },
  {
    period: "May 2024 — Jan 2025",
    title: "Frontend Engineer",
    company: "Ciklum | Just Eat Takeaway.com",
    url: "https://ciklum.com.ua/",
    description:
      "Contributed to the creation and development of the PIE Web Component library, an open-source Web Component System powering web platforms across Just Eat Takeaway. In 2025, PIE won the Best Design System Adoption award at Zeroheight Design System Awards.",
    technologies: ["React.js", "Next.js", "Redux.js", "Redux Toolkit", "TypeScript", "SCSS", "Storybook", "Web Components", "Lit library", "Vite", "Turborepo", "Jest", "React Testing Library", "Playwright", "Percy", "Datadog", "REST APIs", "CRUD", "Postman", "Swagger", "Lighthouse", "Performance Optimization", "WCAG", "Screen Reader Testing", "Core Web Vitals"],
  },
  {
    period: "Aug 2019 — Feb 2024",
    title: "Frontend Engineer",
    company: "Yalantis | ViewTrade Holding Corp.",
    url: "https://yalantis.ua/",
    description:
      "Core contributor across a suite of FinTech products: electronic trading platforms, digital onboarding, billing management, and client-facing portals for international brokerages and wealth management firms.",
    technologies: ["React.js", "Redux.js", "Redux Toolkit", "TypeScript", "SCSS", "Styled-components", "Material-UI", "Atomic design", "Webpack", "Parcel", "Formik", "Yup", "Chart.js", "Jest", "React Testing Library", "Cypress",  "Sentry", "REST APIs", "CRUD", "GraphQL", "Postman", "Swagger", "Lighthouse", "Performance Optimization"],
  },
  {
    period: "Sep 2018 — Aug 2019",
    title: "Frontend Engineer",
    company: "Civenty",
    url: "https://coventit.com/",
    description:
      "Developed and scaled multiple country-specific lead generation websites with localized language support, using a shared architecture to enable fast deployment while adapting design for each market, which improved efficiency and conversion across regions.",
    technologies: ["JavaScript",  "HTML5", "CSS", "LESS", "REST APIs", "CRUD", "Swagger"],
  },
  {
    period: "Apr 2017 — Apr 2018",
    title: "Frontend Engineer",
    company: "Unique Technologies LLC",
    url: "https://uniquetechnologi.es/uk/",
    description:
      "Built a trading platform for the agricultural sector - responsive SPAs with custom frontend features, delivering a reliable transaction experience across devices and browsers.",
    technologies: ["JavaScript", "HTML5", "CSS", "JQuery", "WordPress"],
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


                    
                    <ul className="text-muted-foreground text-sm leading-relaxed">
                      {exp.description}
                    </ul>

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
              href="files/Oleksandra_Boiko_Frontend_Engineer_Resume.pdf"
              target="_blank"
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
