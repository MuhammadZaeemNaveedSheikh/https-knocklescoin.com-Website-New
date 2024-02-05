import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";

let memes = Object.keys(import.meta.glob("../../public/memes/*.png"), {
  import: "default",
  as: "raw",
  eager: true, // defaults to false
});

memes = memes.map((meme) => meme.replaceAll("../../public/", "/"));

const preLoaderModifier = 2;

const slider_options = {
  spaceBetween: 0,
  slidesPerView: 3*preLoaderModifier,
  centeredSlides: true,
  loop: true,
  lazy: false,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  freeMode: {
    enabled: true,
    momentumBounce: false,
  },
  speed: 4000,
  breakpoints: {
    768: {
      slidesPerView: 4.5*preLoaderModifier,
      spaceBetween: 0,
    },
    1600: {
      slidesPerView: 6*preLoaderModifier,
      spaceBetween: 0,
    },
  },
  modules: [Autoplay, FreeMode],
};

const MemeSlider = () => {
  const [open, setOpen] = useState(false);
  const [currImg, setCurrImg] = useState(memes[0]);

  const handleOpen = (meme) => {
    setCurrImg(meme);
    setOpen(!open);
  };


  return (
    <div>
      <Swiper {...slider_options} className={`w-[200vw]`}>
        {memes.map((meme, index) => (
          <SwiperSlide key={index} onClick={() => handleOpen(meme)}>
            <img src={meme} alt="" className="w-full h-full" />
          </SwiperSlide>
        ))}
        <Dialog
          open={open}
          handler={handleOpen}
          size="xs"
          className="focus:outline-none"
        >
          <DialogHeader className="pb-0 flex justify-between items-center">
            <Typography variant="paragraph" color="blue-gray">
              Meme
            </Typography>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 hover:scale-105 cursor-pointer"
              onClick={handleOpen}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </DialogHeader>
          <DialogBody>
            <img src={currImg} className="w-full h-full" />
          </DialogBody>
        </Dialog>
      </Swiper>
    </div>
  );
};

export default MemeSlider;
