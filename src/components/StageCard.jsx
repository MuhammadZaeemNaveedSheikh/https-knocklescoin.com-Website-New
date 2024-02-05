import PropTypes from "prop-types";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger)

const StageCard = ({ img, heading, subheading, content }) => {
  useEffect(()=> {
    gsap.fromTo('#el', {
      y: 100,
      opacity: 0,
    }, {
      y: 0,
      opacity: 1,
      stagger: 0.3,
      scrollTrigger: {
        trigger: '#card-wrapper'
      }
    })
  }, [])
  return (
    <div className="max-w-[600px]" id="card-wrapper">
      <div className="flex justify-start items-center gap-3 md:gap-9">
        <img src={img} alt="Knockle Stage" className="w-24 h-24 lg:w-auto lg:h-auto" />
        <div>
          <h2 id="el" className="font-secondary text-5xl md:text-7xl font-black uppercase text-purple">
            {heading}
          </h2>
          <p id="el" className="font-handwriting text-xl md:text-4xl">{subheading}</p>
        </div>
      </div>
      <div id="el" className="[&>*]:list-disc font-body-sec text-xl mt-12 ml-7">{content}</div>
    </div>
  );
};

StageCard.propTypes = {
  img: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  content: PropTypes.any,
};

export default StageCard;
