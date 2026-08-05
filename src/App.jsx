import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
// import Experience from "./components/Experience/Experience";
// import Learning from "./components/Learning/Learning";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        {/* <Experience />
        <Learning /> */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
