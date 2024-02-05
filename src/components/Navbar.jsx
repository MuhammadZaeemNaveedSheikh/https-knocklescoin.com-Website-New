import { gsap } from "gsap";
import { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import ButtonPrimary from "./ButtonPrimary";
import Logo from "../assets/Images/logo.png";
import Telegram from "../assets/Images/telegram.svg";
import Twitter from "../assets/Images/twitter.svg";
import Sound from "../assets/Images/sound.svg";
import Mute from "../assets/Images/mute.svg";
import Audio from "../assets/audio.mp3";

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
  }
};

const Navbar = () => {
  const location = useLocation();
  const noMusic = location.state;

  useEffect(() => {
    gsap.fromTo(
      "#navbar",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 2,
      }
    );
  }, []);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef();
  const togglePlay = () => {
    if (isPlaying) audioRef.current.pause();
    else audioRef.current.play();
    setIsPlaying(!isPlaying);
  };
  return (
    <nav
      id="navbar"
      className="w-full absolute top-0 left-0 z-50"
    >
      <div className="max-w-[1600px] mx-auto flex justify-between items-center pt-6 px-3 md:px-12 lg:px-24 ">
        <Link to={"/home"} className="flex items-center gap-3">
          <img
            src={Logo}
            alt="Knockles Logo"
            className="w-[57.3px] h-[57.3px]"
          />
          <h2 className="text-4xl uppercase font-secondary hidden md:block">
            Knockles
          </h2>
        </Link>
        <div className="justify-center items-center gap-12 xl:translate-x-[40px] hidden lg:flex">
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
        <div className="flex gap-2">
          {Object.values(social_buttons).map((social, index) => (
            <ButtonPrimary
              variant={"primary"}
              size={"sm"}
              to={social.to}
              target="_blank"
              rel="noreferrer"
              key={index}
              classes={`!px-0 ${
                index === 2 || index === 3 ? "hidden md:flex" : ""
              }`}
            >
              <img
                src={social.icon}
                alt={"Knockles Link"}
                width={18}
                height={18}
              />
            </ButtonPrimary>
          ))}
          <ButtonPrimary
            variant={"secondary"}
            size={"sm"}
            to={""}
            classes={"border-4 !px-0 md:ml-3"}
            onClick={togglePlay}
          >
            <img
              src={isPlaying ? Sound : Mute}
              alt="sound"
              width={20}
              height={20}
            />
          </ButtonPrimary>
        </div>
        <audio
          ref={audioRef}
          autoPlay={noMusic ? !noMusic : true}
          src={Audio}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />
      </div>
    </nav>
  );
};

export default Navbar;
