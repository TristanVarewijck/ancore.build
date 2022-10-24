import Typed from "react-typed";

export const AutoType = ({ words, forwardSpeed, backwardSpeed, isLoop }) => {
  return (
    <Typed
      strings={words}
      typeSpeed={forwardSpeed}
      backSpeed={backwardSpeed}
      loop={isLoop}
    ></Typed>
  );
};
