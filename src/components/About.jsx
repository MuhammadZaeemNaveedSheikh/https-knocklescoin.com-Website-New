import { useEffect, useState } from "react";
import Gif from "../assets/Images/about_cartoon.gif";
import Meme from "../assets/Images/deway_meme.png";
import ButtonPrimary from "./ButtonPrimary";
import Title from "./Title";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button, Tooltip } from "@material-tailwind/react";

gsap.registerPlugin(ScrollTrigger);
const CA_TEXT = "0x6982508145454Ce325dDbE47a25d4ec3d2311933";
const About = () => {
  // Animation
  useEffect(() => {
    gsap.fromTo(
      "#fade-in-up",
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.3,
        duration: 0.7,
        scrollTrigger: {
          trigger: "#fade-in-up",
        },
      }
    );
  }, []);
  
  const [toolTip, setTooltip] = useState("Copy")
  // Copy Text
  const copyText = () => {
    navigator.clipboard.writeText(CA_TEXT);
    setTooltip("Copied")
    setTimeout(()=>{
      setTooltip("Copy")
    }, 3000)
  };


  return (
    <section className="relative w-full bg-blue">
      <div className="w-full absolute mt-7 flex overflow-hidden justify-center items-center">
        <img
          src={Gif}
          alt="Knockles Gif"
          className="w-auto h-[388px] md:h-[669px]"
        />
        <img
          src={Gif}
          alt="Knockles Gif"
          className="w-auto h-[388px] md:h-[669px]"
        />
        <img
          src={Gif}
          alt="Knockles Gif"
          className="w-auto h-[388px] md:h-[669px]"
        />
      </div>
      <div className="absolute top-[288px] md:top-[550px] -translate-y-1/2 bg-gradient-to-t from-blue to-transparent w-full h-[300px]"></div>
      <div className="max-w-[1600px] mx-auto">
        <div className="relative text-white text-center z-10 leading-none max-w-[961px] w-[90%] md:w-auto mx-auto flex flex-col gap-10 pt-72">
          <Title classes={"!text-[99px] md:!text-[132.4px] !text-center"}>
            About Knockles
          </Title>
          <p className="text-[18px] md:text-[27px] leading-[37px] -mt-7">
            Many others have failed you in the past. You have been led astray by
            false prophecies, but the true Knockles has finally arrived to{" "}
            <span className="font-bold"> show you de way. </span>
            <br />
            <br /> The Knockles were once a lowly species, but once shown de way
            by their newly emerging true Chad leader Knockles, they began to
            prosper and eventually reached their full potential. They have began
            their march across the crypto space to deliver the greatest memes
            known to man.{" "}
          </p>
          <Tooltip content={toolTip}>
            <Button
              className={
                "w-full !py-2 rounded-lg bg-white !px-3 font-primary text-2xl border-2 border-black hover:scale-[0.99] hover:bg-opacity-95 transition-all ease-in-out text-black font-tertiary normal-case !text-[20px] max-w-[587px] mx-auto break-all !shadow-[0px_4px_0px_0px_rgb(0,0,0)] hover:!shadow-[0px_2px_0px_0px_rgb(0,0,0)]"
              }
              onClick={copyText}
            >
              CA : <span className="font-medium">{import.meta.env.VITE_CA}</span>
            </Button>
          </Tooltip>
        </div>
        <div className="flex justify-between items-center -mt-6 px-5 max-w-[1300px] mx-auto flex-col md:flex-row">
          <div className="">
            <p
              id="fade-in-up"
              className="max-w-[540px] mt-14 text-white mb-8 text-[18px] leading-[37px] md:text-[27px]"
            >
              <span className="font-bold">
                Knockles chad could be your dad.
              </span>
              <br /> They are clicking de way to a DEX near you. theres nothing
              that can get in de way of based dev Knockles.
            </p>
            <ButtonPrimary
              variant={"primary"}
              to={import.meta.env.VITE_TWITTER}
              target={"_blank"}
              rel={"nonreferrer"}
              classes={
                "font-secondary font-semibold text-black !pt-3 tracking-[1px] text-[32px]"
              }
              id="fade-in-up"
            >
              Join Community
            </ButtonPrimary>
          </div>
          <img
            src={Meme}
            alt="Knockles De Way"
            className="w-[587px]"
            id="fade-in-up"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
