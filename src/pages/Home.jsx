import About from "../components/About"
import Footer from "../components/Footer"
import HeroSection from "../components/HeroSection"
import KnockleMaps from "../components/KnockleMaps"
import MemeSlider from "../components/MemeSlider"
import Navbar from "../components/Navbar"
import Tokenomics from "../components/Tokenomics"

const Home = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <MemeSlider />
      <About />
      <Tokenomics />
      <KnockleMaps />
      <Footer />
    </main>
  )
}

export default Home
