"use client"

import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
      <section className="min-h-screen flex flex-col justify-center px-6 pt-20 pb-12">
        <div className="max-w-5xl mx-auto w-full">
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
          >
            <div className="flex items-center gap-4 mb-2">
              <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-border">
                <Image
                    src="/images/avatar.jpg"
                    alt="Oleksandra Boiko"
                    fill
                    className="object-cover"
                    priority
                />
              </div>
              <p className="text-muted-foreground text-sm tracking-wide uppercase">
                Senior Frontend Engineer
              </p>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-foreground text-balance leading-[1.1]">
              Building digital experiences with precision and care
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-6xl leading-relaxed">
              Frontend Engineer with 7+ years building production web applications across FinTech, e-commerce, and SaaS. Proven success in designing microfrontend architectures, delivering scalable design systems adopted by 5+ product teams, and solving key performance issues in data-heavy trading interfaces. Experienced across the entire delivery process, from system design to production monitoring.
            </p>
          </motion.div>

          <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-12 flex flex-wrap items-center gap-6"
          >
            <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Get in touch
            </a>

            <div className="flex items-center gap-4">
              <a
                  href="https://github.com/leksa-boiko"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                  href="https://www.linkedin.com/in/oleksandra-boiko-b83b92146/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                  href="mailto:leksa.boiko@gmail.com"
                  className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:block"
          >
            <a
                href="#about"
                className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Scroll to about section"
            >
              <span className="text-xs tracking-wide">Scroll</span>
              <motion.div
                  animate={{ y: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowDown size={16} />
              </motion.div>
            </a>
          </motion.div>
        </div>
      </section>
  )
}