import "./App.css";
import Header from "./Componenets/Header/Header";
import Nav from "./Componenets/Nav/Nav";
import About from "./Componenets/About/About";
import Experience from "./Componenets/Experience/Experience";
import Services from "./Componenets/Services/Services";
import Portfolio from "./Componenets/Portfolio/Portfolio";
import Testimonials from "./Componenets/Testimonials/Testimonials"
import Contact from "./Componenets/Contact/Contact";
import Footer from "./Componenets/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
