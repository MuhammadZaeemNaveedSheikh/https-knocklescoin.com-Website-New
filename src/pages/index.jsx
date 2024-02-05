import { Link } from "react-router-dom";
import Logo from "../assets/Images/logo.png";
import ButtonPrimary from "../components/ButtonPrimary";
const Index = () => {
  return (
    <div className="flex justify-center items-center flex-col h-[100svh] bg-[#F9C88D] gap-24">
      <img src={Logo} alt="Knockles Logo" width={348} height={348} />
      <div className="flex flex-col justify-center items-stretch gap-10">
        <ButtonPrimary variant={'primary'} to={'/home'}>Enter knockles</ButtonPrimary>
        <Link to={'/home'} className="text-center uppercase text-sm text-[#1D1D1D] font-body leading-[33.60px] hover:text-black hover:scale-105 transition-all" state={true}>Enter without sound</Link>
      </div>
    </div>
  );
};

export default Index;
