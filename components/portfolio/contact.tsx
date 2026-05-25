"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Mail, ArrowUpRight } from "lucide-react"

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contact" className="py-24 md:py-32 px-6 bg-secondary/50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="text-muted-foreground text-sm tracking-wide uppercase mb-4">
            Contact
          </p>

          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-foreground mb-6 text-balance">
            {`Let's work together`}
          </h2>

          <p className="text-muted-foreground leading-relaxed mb-8">
            {`I'm currently open to new opportunities and collaborations. Whether you have a project in mind, a question, or just want to say "Hi" -  my inbox is always open.`}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:leksa.boiko@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
            >
              <Mail size={16} />
              Say hello
            </a>
            <a
              href="https://www.linkedin.com/in/oleksandra-boiko-b83b92146/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground rounded-lg text-sm font-medium hover:bg-background transition-colors"
            >
              Connect on LinkedIn
              <ArrowUpRight size={16} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
