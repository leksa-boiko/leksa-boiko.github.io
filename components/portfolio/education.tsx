"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { GraduationCap } from "lucide-react"

const education = [
  {
    degree: "Master's degree in System Analysis and Management",
    institution: "Dnipro University of Technology",
    years: "Sep 2017 — Jun 2019",
    focus: "System Analysis, Algorithms & Software Development",
  },
  {
    degree: "Bachelor’s degree in System Analysis",
    institution: "Oles Honchar Dnipro National University",
    years: "Sep 2013 — May 2017",
    focus: "System Analysis, Algorithms & Software Development",
  },
]

export function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="education" className="py-24 md:py-32 md:pb-0 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-muted-foreground text-sm tracking-wide uppercase mb-12">
            Education
          </p>

          <div className="space-y-0">
            {education.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 + idx * 0.1 }}
                className="group py-8 border-t border-border first:border-t-0"
              >
                <div className="grid md:grid-cols-[180px_1fr] gap-4 md:gap-8">
                  <p className="text-sm text-muted-foreground font-mono">
                    {edu.years}
                  </p>
                  
                  <div className="space-y-2">
                    <div className="flex items-start gap-3">
                      <GraduationCap 
                        size={20} 
                        className="text-muted-foreground mt-0.5 flex-shrink-0" 
                      />
                      <div className="space-y-1">
                        <h3 className="text-foreground font-medium">
                          {edu.degree}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {edu.institution}
                        </p>
                        <p className="text-muted-foreground/70 text-sm">
                          Focus: {edu.focus}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
