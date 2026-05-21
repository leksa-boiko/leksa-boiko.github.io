import {
  Header,
  Hero,
  About,
  Experience,
  Education,
  Projects,
  Contact,
  Footer,
} from "@/components/portfolio"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
