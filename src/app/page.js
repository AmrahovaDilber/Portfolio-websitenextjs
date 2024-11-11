import Header from "./components/Header";
import Skills from './components/Skills';
import Contact from "./components/Contact";
import HeroSection from "./components/HeroSection";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import BackToTop from "./components/BackToTop";
export default function Home() {
  return (
    <main className="flex bg-gradient-to-b from-indigo-950 to-black  min-h-screen flex-col   ">
      <div className="relative">
        <Header></Header>
        <HeroSection></HeroSection>
        <Projects></Projects>
        <Resume></Resume>
        <Skills></Skills>
        <Contact></Contact>
        <Footer></Footer>
        <BackToTop></BackToTop>
      </div>
    </main>
  );
}
