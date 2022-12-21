import Navbar from "../Navbar";
import Hero from "../Hero";
import ContactImg from "../assets/2.jpg";
import Footer from "../Footer";
import ContactUs from "../ContactUs";

function Contact() {
  return (
    <div>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={ContactImg}
        title="Contact"
        btnClass="hide"
      />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default Contact;
