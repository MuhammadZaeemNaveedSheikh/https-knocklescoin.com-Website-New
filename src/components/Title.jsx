import PropTypes from "prop-types";

const Title = ({ children, classes, id }) => {
  return (
    <h1 id={id} className={`uppercase text-white font-bold font-secondary text-shadow text-center md:text-left ${classes}`}>
      {children}
    </h1>
  )
}

Title.propTypes = {
    children: PropTypes.any,
    classes: PropTypes.string,
    id: PropTypes.string,
}

export default Title
