import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Title from "./Title";
import Path from "../assets/Images/path.png";
import Wheel from "../assets/Images/knockle_wheel.png";
import Stage1 from "../assets/Images/stage1.png";
import Stage2 from "../assets/Images/stage2.png";
import Stage3 from "../assets/Images/stage3.png";
import Stage4 from "../assets/Images/stage4.png";
import StageCard from "./StageCard";
import PathMob from "../assets/Images/path3.svg";
import { useEffect, useRef } from "react";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(ScrollTrigger);

const stages = [
  {
    img: Stage1,
    heading: "Stage 1",
    subheading: "Exploring the Trib",
    content: (
      <ul>
        <li>
          Assemble a team and community of Knockles enthusiasts and memers
        </li>
        <li>
          Dig deep into the origins and cultural significance of Knockles.{" "}
        </li>
        <li>
          Brainstorm unique features that will make our token stand out from the
          meme crowd.{" "}
        </li>
      </ul>
    ),
  },
  {
    img: Stage2,
    heading: "Stage 2",
    subheading: "Spreading the Meme Virus",
    content: (
      <ul>
        <li>
          Harness the power of our overlooked echidna brethren to spread the
          Knockles meme far and wide.{" "}
        </li>
        <li>
          Establish partnerships with meme influencers and meme-lords to
          increase the saturation of our meme-coin{" "}
        </li>
        <li>
          Launch a vibrant and interactive social media campaign to mobilize the
          meme community.
        </li>
      </ul>
    ),
  },
  {
    img: Stage3,
    heading: "Stage 3",
    subheading: "Embracing the Knockles Spirit",
    content: (
      <ul>
        <li>
          Channel our inner Knockles warriors and strengthen the
          community&apos;s bond by organizing meme meet-ups.
        </li>
        <li>
          Empower Knockles enthusiasts to contribute their artistic talents
          through meme contests and NFT creations.
        </li>
        <li>
          Collaborate with charitable organizations to make a positive impact in
          the real world.
        </li>
      </ul>
    ),
  },
  {
    img: Stage4,
    heading: "Stage 4",
    subheading: "Meme Legacy & Super Moon Jump",
    content: (
      <ul>
        <li>
          Cement our place in meme history as the ultimate Knockles project.{" "}
        </li>
        <li>Expand our ecosystem by partnering with top-tier exchanges. </li>
        <li>
          Achieve a mighty &quot;Super Moon Jump&quot; by rallying the Knockles
          tribe and riding the wave of success to new meme dimensions.
        </li>
      </ul>
    ),
  },
];

const xl_anim_path =
  "M256.282 1271.99C260.601 1245.88 252.898 1219.09 235.768 1200.65C172.647 1132.69 215.774 1022.5 303.5 1022.5H454.24C480.069 1022.5 501.008 990.221 501.008 961.409C501.008 932.599 480.069 925.5 454.24 925.5H246.348C227.853 925.5 212.859 892.518 212.859 871.887C212.859 851.256 227.853 836 246.348 836H342.645H438.943C459.456 836 476.087 817.45 476.087 794.567C476.087 771.581 457.234 760.44 436.631 760C367.62 758.525 329.332 750.462 278.5 748.5C256.51 747.651 204.98 723.784 196.797 701M212.859 720.5C147.388 656.94 208.826 583.048 299.818 583.048H428.491C455.282 583.048 477 561.203 477 534.252C477 507.308 455.282 485.463 428.491 485.463H212.859C193.675 485.463 178.123 469.817 178.123 450.523C178.123 431.224 193.675 415.584 212.859 415.584H412.624C433.902 415.584 451.151 398.231 451.151 376.828C451.151 355.33 433.73 338.001 412.36 337.589C340.78 336.21 296.674 329.968 243.95 328.133C221.141 327.339 200.491 313.632 192.004 292.322C176.104 252.4 209.343 210.209 251.616 216.657L303.057 224.503C351.952 231.962 388.751 180.678 366.313 136.349C355.943 115.864 335.022 102.963 312.167 102.963H285.581C241.676 102.963 92.9271 107.508 32 23";

const lg_anim_path =
  "M248.283 1612.81C252.602 1578.79 244.898 1543.89 227.769 1519.86C164.649 1431.34 207.775 1287.8 295.5 1287.8H446.98C472.809 1287.8 493.747 1245.75 493.747 1208.22C493.747 1170.69 472.809 1145.5 446.98 1145.5H178.5C160.005 1145.5 145.012 1118.48 145.012 1091.61C145.012 1064.73 160.005 1044.86 178.5 1044.86H335.387H431.683C452.196 1044.86 468.826 1020.69 468.826 990.885C468.826 960.943 449.974 946.43 429.372 945.856C360.361 943.935 322.074 933.431 271.243 930.876C249.253 929.77 197.724 898.679 189.542 869M215.856 927.597C150.386 844.801 211.823 748.545 302.814 748.545H431.485C458.275 748.545 479.993 720.088 479.993 684.981C479.993 649.883 458.275 621.426 431.485 621.426H215.856C196.673 621.426 181.121 601.044 181.121 575.912C181.121 550.772 196.672 530.399 215.856 530.399H415.617C436.895 530.399 454.144 507.794 454.144 479.914C454.144 451.908 436.723 429.336 415.354 428.799C343.775 427.002 299.67 418.871 246.947 416.481C224.138 415.447 203.488 397.591 195.001 369.832C179.101 317.827 212.34 262.867 254.613 271.267L306.053 281.488C354.946 291.203 391.745 224.398 369.307 166.654C358.938 139.969 338.017 123.164 315.162 123.164H288.577C244.673 123.164 95.926 129.084 35 19";

const isMobile = () => {
  return window.innerWidth <= 960;
};

const KnockleMaps = () => {
  const wheelRef = useRef(null);
  useEffect(() => {
    if (isMobile()) return;

    const el = wheelRef.current;
    const animation_path =
      window.innerWidth >= 1140 ? xl_anim_path : lg_anim_path;
    var tl = gsap.timeline({
      scrollTrigger: {
        scrub: 2,
      },
      defaults: {
        duration: 1,
      },
    });
    tl.to(
      el,
      {
        motionPath: animation_path,
        rotate: 360 * -16,
        ease: "power4.inOut",
        reversed: true,
      },
      window.innerWidth >= 1140 ? 2.5 : 0.9
    );
  });

  return (
    <section
      className="pt-32 relative xl:static overflow-hidden bg-orange bg-[url('/src/assets/Images/spray.png')] bg-blend-soft-light bg-center bg-cover"
      id="knockle_maps"
    >
      <div className="max-w-[1600px] mx-auto static xl:relative flex flex-col items-start justify-center gap-32 lg:flex-row lg:justify-between lg:items-start px-7 md:px-24 md:gap-5">
        <div>
          <p className="absolute font-handwriting text-3xl -rotate-[15deg] top-64 left-52 md:left-72 z-20">
            roadmap
          </p>
          <Title
            classes={
              "text-8xl !text-left lg:text-[160px] leading-none relative z-10"
            }
          >
            Knockles
            <br />
            Map
          </Title>
          <img
            src={Wheel}
            alt="Knockle Maps"
            className="absolute w-24 h-24 z-20 mt-10 top-64 right-16 lg:-left-24 xl:top-[16rem] lg:top-96 xl:-left-8"
            // id="animate-head"
            ref={wheelRef}
          />
          <img
            src={Path}
            alt="Knockle Maps"
            className="absolute -left-44 xl:left-0 h-[1600px] xl:h-[1350px] w-auto z-10 hidden lg:block"
          />
          <img
            src={PathMob}
            alt="Knockle Maps"
            className="absolute -top-16 -right-16 block lg:hidden"
          />
        </div>
        <div className="flex flex-col gap-20 mb-20 relative z-10">
          {stages.map((stage, index) => (
            <StageCard {...stage} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default KnockleMaps;
