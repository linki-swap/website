import Footer from "../components/Footer";
import Header from "../components/Header";
import Team from "../components/Team";
import Faq from "../components/Faq/Body";
import Hero from "../components/Hero";
import Connect from "../components/Connect";
import Features from "../components/Features";

const Home = () => {
  return (
    <div className="relative font-Inter bg-[#00071F] w-full overflow-hidden scroll-smooth">
      <div className="bg-[url('../assets/light.svg')] bg-no-repeat bg-left bg-cover">
        <Header />
        <Hero />
        <Connect />
        <Features />
        <Faq />
        <Team />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
