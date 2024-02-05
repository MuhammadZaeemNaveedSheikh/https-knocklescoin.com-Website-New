import ButtonPrimary from "./ButtonPrimary";
import HeroBackground from "./HeroBackground";
import Title from "./Title";
import Ethcoins from "../assets/Images/solscan.svg";
import Dextools from "../assets/Images/dextools.svg";
import Quote from "../assets/Images/quote.svg";
import Spray from "../assets/Images/spray.png";
import { useEffect } from "react";
import { gsap } from "gsap";

const social_buttons = {
  dextools: {
    to: import.meta.env.VITE_CHART,
    icon: Dextools,
  },
  ethreal: {
    to: import.meta.env.VITE_SOLSCAN,
    icon: Ethcoins,
  },
};

const HeroSection = () => {
  useEffect(() => {
    gsap.fromTo(
      "#text",
      {
        x: -100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        stagger: 0.3,
        delay: 1,
      }
    );
    gsap.fromTo(
      "#quote",
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        delay: 1.5,
      }
    );
  }, []);

  return (
    <section
      className="bg-[#C8E8FF] relative w-full overflow-hidden h-[100svh] max-h-[1000px]"
      id="home"
    >
      <img
        src={Spray}
        alt="Spray Paint Knockles"
        className="w-full h-full absolute inset-0 opacity-100 mix-blend-soft-light"
      />
      <div className="relative max-w-[1600px] mx-auto h-[100svh] max-h-[1000px]">
        <HeroBackground />
        <div className="relative z-10 ml-0 md:ml-16 lg:ml-24 h-full flex flex-col justify-start xl:justify-center items-center md:items-start pt-28 xl:pt-0">
          <div className="flex flex-col gap-5 justify-center items-center md:items-start xl:-mt-[20vh]">
            <div className="flex flex-col gap-2 md:gap-16">
              <h2
                className="text-purple text-4xl sm:text-5xl uppercase font-secondary tracking-[1.16px] md:-mb-10 text-center md:text-left hero-subheading"
                id="text"
              >
                Welcome to
              </h2>
              <Title
                classes={
                  "text-[100px] sm:mt-0 sm:text-[120px] xl:text-[220.41px] leading-none hero-heading"
                }
                id={"text"}
              >
                Knockles
              </Title>
            </div>
            <div
              id="text"
              className="flex flex-col md:flex-row justify-center md:justify-start items-center gap-3"
            >
              <ButtonPrimary
                variant={"secondary"}
                classes={
                  "font-secondary tracking-[0.48px] text-3xl !w-[265px] md:w-[192px] max-w-52 pt-2 pb-1 text-center"
                }
              >
                Buy Now
              </ButtonPrimary>
              <div className="flex gap-3">
                {Object.values(social_buttons).map((social, index) => (
                  <ButtonPrimary
                    variant={"primary"}
                    size={"sm"}
                    to={social.to}
                    key={index}
                    classes={`!px-0`}
                    target={"_blank"}
                    rel={"noreferrer"}
                  >
                    <img
                      src={social.icon}
                      alt={"Knockles Link"}
                      width={18}
                      height={18}
                    />
                  </ButtonPrimary>
                ))}
              </div>
            </div>
          </div>
          <div className="max-w-[420px] font-tertiary hidden md:flex flex-col gap-5 absolute bottom-[7%] left-0 quote-wrapper">
            <img
              id="quote"
              src={Quote}
              alt="Quote Marks"
              width={39}
              height={32}
            />
            <p
              id="quote"
              className="text-[19px] font-bold tracking-[-0.4px] quote"
            >
              &quot;These creatures are the pinnacle of evolution, their
              physical abilities are matched by nothing but their intelligence.
              They are an example of what every living organism strives to
              be.&quot;
            </p>
            <p id="quote" className="text-[19px] quote">
              Charles Darwin
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
