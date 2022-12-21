import Navbar from "../Navbar";
import Hero from "../Hero";
import homeImg from "../assets/12.jpg";
import Destination from "../Destination";
import Trip from "../Trip";
import Footer from "../Footer";
function Home() {
  return (
    <div>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={homeImg}
        title="Your Journey Your Story"
        text="Choose Your Favourite Destination"
        btnText="Travel Plan"
        url="/"
        btnClass="show"
      />
      <Destination />
      <Trip />
      <Footer />
    </div>
  );
}

export default Home;
