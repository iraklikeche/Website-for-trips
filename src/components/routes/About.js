import Navbar from "../Navbar";
import Hero from "../Hero";
import AboutImg from "../assets/night.jpg";
import Footer from "../Footer";
import AboutUs from "../AboutUs";

function About() {
  return (
    <div>
      <Navbar />
      <Hero cName="hero-mid" heroImg={AboutImg} title="About" btnClass="hide" />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default About;
