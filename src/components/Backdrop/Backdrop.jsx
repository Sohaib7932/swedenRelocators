/* eslint-disable react/prop-types */
const Backdrop = ({ isBackDropTrue }) => {
  return isBackDropTrue && <div className="backdrop-overlay"></div>;
};

export default Backdrop;
