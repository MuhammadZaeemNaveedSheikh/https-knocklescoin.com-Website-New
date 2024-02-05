import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import Title from "./Title";
import ButtonPrimary from "./ButtonPrimary";
import Logo from "../assets/Images/logo.png";
import Img from "../assets/Images/community.png";
import Telegram from "../assets/Images/telegram.svg";
import Twitter from "../assets/Images/twitter.svg";

gsap.registerPlugin(ScrollTrigger);
const menu_links = {
  home: {
    to: "#home",
    text: "Home",
  },
  tokenomics: {
    to: "#tokenomics",
    text: "Knockmics",
  },
  roadmap: {
    to: "#knockle_maps",
    text: "Knockles Map",
  },
};

const social_buttons = {
  telegram: {
    to: import.meta.env.VITE_TELEGRAM,
    icon: Telegram,
  },
  twitter: {
    to: import.meta.env.VITE_TWITTER,
    icon: Twitter,
  },
};

const Footer = () => {
  useEffect(() => {
    gsap.fromTo(
      "#el",
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: "#el",
        },
      }
    );
  }, []);
  return (
    <footer
      className="bg-[#3A3964] rounded-tr-2xl rounded-tl-2xl -mt-[10px] pt-14"
      id="footer"
    >
      <div className="flex max-w-[1200px] mx-auto justify-center md:justify-between items-center flex-wrap gap-10 md:flex-nowrap mb-5">
        <div className="flex flex-col gap-5 ml-10 xl:ml-0">
          <Title classes={"text-5xl lg:text-9xl !text-left"} id={"el"}>
            Community
          </Title>
          <p className="text-white text-lg lg:text-xl" id="el">
            Join a fast-growing community of Knockles <br /> fans connected all
            over the world.
          </p>
          <div className="flex gap-2 mt-4">
            {Object.values(social_buttons).map((social, index) => (
              <ButtonPrimary
                variant={"primary"}
                size={"sm"}
                to={social.to}
                key={index}
                classes={`!px-0`}
                id={"el"}
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
        <img
          src={Img}
          alt="Knockles Footer"
          className="h-full min-w-[300px] w-[30vw] xl:max-w-[500px]"
          id="el"
        />
      </div>
      <Lower_bar />
    </footer>
  );
};

const Lower_bar = () => {
  return (
    <div className="bg-white flex justify-between items-center px-10 md:px-24 py-5">
      <Link
        to={""}
        onClick={() => window.scrollTo(0, 0)}
        className="flex items-center gap-1 md:gap-3"
      >
        <img src={Logo} alt="Knockles Logo" className="w-[57.3px] h-[57.3px]" />
        <h2 className="text-4xl uppercase font-secondary mt-2">Knockles</h2>
      </Link>
      <div className="justify-center items-center gap-12 xl:-translate-x-[40px] hidden lg:flex">
        {Object.values(menu_links).map((link, index) => (
          <a
            href={link.to}
            key={index}
            className="font-tertiary font-medium text-base uppercase leading-[21px] tracking-wide hover-underline-animation transition-all"
          >
            {link.text}
          </a>
        ))}
      </div>
      <ButtonPrimary
        variant={"primary"}
        size={"sm"}
        to={""}
        onClick={() => window.scrollTo(0, 0)}
        classes={"border-4 !px-0 md:ml-3"}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m4.5 15.75 7.5-7.5 7.5 7.5"
          />
        </svg>
      </ButtonPrimary>
    </div>
  );
};

export default Footer;
