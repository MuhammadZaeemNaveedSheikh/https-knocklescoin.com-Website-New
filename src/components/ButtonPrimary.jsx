import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ButtonPrimary = ({ children, variant, size, to, classes, onClick, id , target, rel}) => {
  let variant_classes = "";
  if (variant === "primary") {
    variant_classes = "bg-white px-3";
  } else {
    variant_classes = "bg-yellow px-5";
  }

  let size_classes = "";
  if (size === "sm") {
    size_classes = "w-[41.18px] h-[41.18px] flex justify-center items-center rounded-full shadow-[4px_4px_0px_0px_rgb(0,0,0)] hover:shadow-[2px_2px_0px_0px_rgb(0,0,0)] ";
  } else {
    size_classes = "w-full py-2 rounded-lg shadow-[0px_4px_0px_0px_rgb(0,0,0)] hover:shadow-[0px_2px_0px_0px_rgb(0,0,0)]";
  }

  return (
    <Link
      className={`${variant_classes} ${size_classes} font-primary uppercase text-2xl border-2 border-black hover:scale-[0.99] hover:bg-opacity-95 transition-all ease-in-out ${classes}`}
      to={to}
      onClick={onClick}
      id={id}
      rel={rel}
      target={target}
    >
      {children}
    </Link>
  );
};

ButtonPrimary.propTypes = {
  children: PropTypes.any,
  variant: PropTypes.string, // "primary" | "secondary"
  size: PropTypes.string, // "sm" | "md"
  to: PropTypes.string,
  onClick: PropTypes.func,
  classes: PropTypes.string,
  id: PropTypes.string,
  target: PropTypes.string,
  rel: PropTypes.string,
};

export default ButtonPrimary;
