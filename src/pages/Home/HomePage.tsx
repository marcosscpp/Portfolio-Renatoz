import About from "./About";
import Editor from "./Editor";
import Gallery from "./Gallery";
import HeroSection from "./Hero/HeroSection";
import ThankYouSection from "./ThankYou/ThankYouSection";
import Footer from "@components/Footer";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <div className="container">
        <Gallery />
      </div>
      <About />
      <Editor />
      <ThankYouSection />
      <Footer>
        COPYRIGHT © 2025 - Copy Renatoz - Todos os direitos reservados.
      </Footer>
    </>
  );
};

export default HomePage;
