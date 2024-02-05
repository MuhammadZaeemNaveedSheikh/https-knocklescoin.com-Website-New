import Spray from "../assets/Images/spray.png";
import Background from "../assets/Images/god.png";
import MobileBackground from "../assets/Images/god_phone.png";
import MainChar from "../assets/Images/main_character.png";
import Title from "./Title";
import ButtonPrimary from "./ButtonPrimary";
import CoinLeft from "../assets/Images/coin_left.gif";
import CoinRight from "../assets/Images/coin_right.gif";

const Tokenomics = () => {
  return (
    <section
      className="relative w-full h-[1172px] overflow-hidden "
      id="tokenomics"
    >
      <div className="max-w-[1600px] mx-auto">
        <img
          src={Background}
          className="absolute inset-0 largeScreenWidth !h-full lg:!h-[1500px] w-full top-0 z-0 hidden md:block "
        />
        <img
          src={MobileBackground}
          className="absolute inset-0 w-full h-full z-0 block md:hidden"
        />
        <img
          src={Spray}
          className="opacity-80 absolute inset-0 w-full h-full z-30 hidden md:block mix-blend-soft-light"
        />
        <div className="relative max-w-[990px] xl:max-w-[1080px] mx-auto flex flex-col justify-center items-center gap-24 mt-12 md:mt-0 md:gap-72 font-tertiary text-[#17245E]">
          <Title classes={"text-[72px] md:text-[160px] !text-center mt-12"}>
            Knockmics
          </Title>
          <p className="font-handwriting absolute top-36 md:top-64 left-1/2 sm:translate-x-1/4 md:translate-x-1/2 text-xl sm:text-3xl text-black -rotate-[15deg]">
            aka: tokenomics
          </p>
          <Card />
        </div>
      </div>
    </section>
  );
};

const Card = () => {
  return (
    <div className="relative bg-white rounded-xl min-h-[474px] w-[80%] md:w-full border-2 border-black shadow-[0px_4px_0px_0px_black]">
      <div className="flex flex-col justify-center items-start gap-5 max-w-[600px] m-10 mt-20 lg:m-20">
        <p className="font-bold text-md lg:text-xl">Total Supply</p>
        <p className="font-bold text-6xl hidden lg:block">1,000,000,000</p>
        <p className="font-bold text-4xl tracking-tighter block lg:hidden">
          1 Billion
        </p>
        <p className="text-md lg:text-xl mb-5 font-medium">
          No team token. LP tokens are burnt and mint authority disabled.
        </p>
        <ButtonPrimary
          variant={"secondary"}
          classes={
            "font-secondary w-full max-w-[192px] text-black text-3xl pb-1 text-center z-50"
          }
        >
          Buy Now
        </ButtonPrimary>
      </div>
      <img
        src={MainChar}
        alt="Knockles Character Main"
        className="absolute right-0 bottom-0 hidden md:block"
      />
      <img
        src={CoinLeft}
        alt="Knockles Coin"
        className="absolute left-0 top-0 w-[93px] md:w-[143px] -translate-y-1/4 -translate-x-1/2"
      />
      <img
        src={CoinRight}
        alt="Knockles Coin"
        className="absolute right-0 bottom-0 w-[84px] md:w-auto md:h-[136px] md:-translate-y-1/2 translate-x-1/2"
      />
    </div>
  );
};

export default Tokenomics;
