import { TypeAnimation } from 'react-type-animation';
 
export const Typing = () => {
  return (
<TypeAnimation
  sequence={["I'm NP Leon", 10000, 'A Fullstack', 500, 'Developer ...', 10000]}
  style={{ fontSize: '1.5em', fontWeight:'bold', color: '#08182F' }}
  repeat={Infinity}
/>
  );
};