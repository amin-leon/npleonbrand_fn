import { TypeAnimation } from "react-type-animation";

export const Typing2 = () => {
  return (
    <TypeAnimation
      sequence={["I'm NP Leon", 5000, "A Fullstack", 500, "Developer", 1000]}
      style={{ fontSize: "1.5em", fontWeight: "bold", color: "white" }}
      repeat={Infinity}
    />
  );
};
