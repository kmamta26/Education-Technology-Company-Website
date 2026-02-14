// import { motion } from "motion/react";
// import { useEffect, useState } from "react";


// type Logo = {
//   src: string;
//   alt: string;
// };

// const logos: Logo[] = [
//   { src: "/client1.png", alt: "Client 1" },
//   { src: "/client2.png", alt: "Client 2" },
//   { src: "/client3.png", alt: "Client 3" },
// ];

// export function ClientLogoSlider() {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % logos.length);
//     }, 2000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="overflow-hidden relative w-full">
//       <motion.div
//         animate={{ x: `-${index * 200}px` }}
//         transition={{ duration: 0.6 }}
//         className="flex gap-10 items-center"
//       >
//         {[...logos, ...logos].map((logo, i) => (
//           <img
//             key={i}
//             src={logo.src}
//             alt={logo.alt}
//             className="h-16 object-contain opacity-80 hover:opacity-100 transition"
//           />
//         ))}
//       </motion.div>
//     </div>
//   );
// }

// import { motion } from "framer-motion";

// type Logo = {
//   src: string;
//   alt: string;
// };

// const logos: Logo[] = [
//   { src: "/client1.png", alt: "Client 1" },
//   { src: "/client2.png", alt: "Client 2" },
//   { src: "/client3.png", alt: "Client 3" },
// ];

// export function ClientLogoSlider() {
//   return (
//     <div className="overflow-hidden w-full">
//       <motion.div
//         className="flex gap-10 items-center"
//         animate={{ x: ["0%", "-50%"] }}
//         transition={{
//           repeat: Infinity,
//           duration: 10,
//           ease: "linear",
//         }}
//       >
//         {[...logos, ...logos].map((logo, i) => (
//           <img
//             key={i}
//             src={logo.src}
//             alt={logo.alt}
//             className="h-16 object-contain opacity-80 hover:opacity-100 transition"
//           />
//         ))}
//       </motion.div>
//     </div>
//   );
// }


// import { motion } from "framer-motion";
// import client1 from "/client1.png";
// import client2 from "/client2.png";
// import client3 from "/client3.png";

// export function ClientLogoSlider() {
//   return (
//     <div className="overflow-hidden w-full">
//       <motion.div
//         className="flex gap-10 items-center"
//         animate={{ x: ["0%", "-50%"] }}
//         transition={{
//           repeat: Infinity,
//           duration: 10,
//           ease: "linear",
//         }}
//       >
//         {/* First set */}
//         <img src={client1} alt="Client 1" className="h-16 object-contain opacity-80 hover:opacity-100 transition" />
//         <img src={client2} alt="Client 2" className="h-16 object-contain opacity-80 hover:opacity-100 transition" />
//         <img src={client3} alt="Client 3" className="h-16 object-contain opacity-80 hover:opacity-100 transition" />

//         {/* Duplicate set for infinite scroll */}
//         <img src={client1} alt="Client 1" className="h-16 object-contain opacity-80 hover:opacity-100 transition" />
//         <img src={client2} alt="Client 2" className="h-16 object-contain opacity-80 hover:opacity-100 transition" />
//         <img src={client3} alt="Client 3" className="h-16 object-contain opacity-80 hover:opacity-100 transition" />
//       </motion.div>
//     </div>
//   );
// }

//@ts-nocheck
import client1 from "/client1.png";
import client2 from "/client2.png";
import client3 from "/client3.png";

export function ClientLogoSlider() {
  return (
    <div className="w-full py-8">
      <div className="flex flex-wrap justify-center items-center gap-12">
        <img
          src={client1}
          alt="Client 1"
          className="h-24 md:h-28 object-contain opacity-90 hover:opacity-100 transition"
        />
        <img
          src={client2}
          alt="Client 2"
          className="h-24 md:h-28 object-contain opacity-90 hover:opacity-100 transition"
        />
        <img
          src={client3}
          alt="Client 3"
          className="h-24 md:h-28 object-contain opacity-90 hover:opacity-100 transition"
        />
      </div>
    </div>
  );
}

