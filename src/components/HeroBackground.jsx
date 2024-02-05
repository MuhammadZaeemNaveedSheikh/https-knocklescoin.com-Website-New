import { useEffect } from "react";
import Rays from "../assets/Images/rays.svg";
import Cartoon from "../assets/Images/tokenomics_cartoon.gif";
import { gsap } from "gsap";

const HeroBackground = () => {
  useEffect(()=> {
    gsap.fromTo('#rays', {
      rotate: 15,
      opacity: 0
    }, {
      rotate: 0,
      opacity: 1,
      duration: 1,
    })
    gsap.fromTo('#drummer', {
      opacity: 0,
      scale: -0.8,
    }, {
      opacity: 1,
      scale: -1,
      duration: 1
    })
  }, [])
  return (
    <> 
      <img
        src={Rays}
        alt="Knockles Rays"
        className="absolute top-[35vw] sm:top-[15vw] right-1/2 translate-x-[20%] h-full scale-[2] mx-auto md:w-full md:top-0 md:right-[14%] md:scale-100"
        id="rays"
      />
      <img
        src={Cartoon}
        alt="Tokenomics Cartoon"
        className="absolute bottom-0 h-auto sm:right-[15%] xl:right-[10%] md:right-0 sm:w-[420px] md:w-[480px] xl:w-[580px] rotate-180 heroCartoon"
        id="drummer"
      />
    </>
  )
}

export default HeroBackground
