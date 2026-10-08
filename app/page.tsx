import Nav from "@/components/Nav";
import Rail from "@/components/Rail";
import SmoothScroll from "@/components/SmoothScroll";
import { Background, Contact, Footer, Hero, MoreWork, Projects, Skills } from "@/components/sections";

export default function Home() {
  return (
    <>
      <Nav />
      <Rail />
      <SmoothScroll />
      <main id="top" className="mx-auto max-w-[1280px] border-x border-line bg-bg [overflow-x:clip]">
        <Hero />
        <Skills />
        <Projects />
        <Background />
        <MoreWork />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
