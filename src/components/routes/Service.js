import Navbar from "../Navbar";
import Hero from "../Hero";
import ServiceImg from "../assets/night.jpg";
import Footer from "../Footer";
import Trip from "../Trip";

function Service() {
  return (
    <div>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={ServiceImg}
        title="Service"
        btnClass="hide"
      />
      <Trip />
      <Footer />
    </div>
  );
}

export default Service;
