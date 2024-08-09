import About from "@/components/about";
import { Blogs } from "@/components/blogs";
import CalCalender from "@/components/cal-calender";
import { CustomeCarousel } from "@/components/carousel";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <CalCalender />
      <Blogs />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
