// import { useState, useEffect, useRef } from "react";
// import {
//   motion,
//   useInView,
//   useMotionValue,
//   useSpring,
// } from "framer-motion";

// function Counter({ from = 0, to, duration = 2, suffix = "" }) {
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true });

//   const motionValue = useMotionValue(from);
//   const spring = useSpring(motionValue, {
//     duration: duration * 1000,
//     bounce: 0,
//   });

//   const [display, setDisplay] = useState(from);

//   useEffect(() => {
//     if (inView) {
//       motionValue.set(to);
//     }
//   }, [inView, motionValue, to]);

//   useEffect(() => {
//     spring.on("change", (latest) => {
//       setDisplay(latest.toFixed(to % 1 !== 0 ? 1 : 0));
//     });
//   }, [spring, to]);

//   return (
//     <span ref={ref}>
//       {display}
//       <span style={{ fontSize: "0.35em", marginLeft: "6px" }}>{suffix}</span>
//     </span>
//   );
// }

// function Stats() {
//   const stats = [
//     { value: 5.0, suffix: "★", label: "Google Rating" },
//     { value: 500, suffix: "+", label: "Satisfied Clients" },
//     { value: 10, suffix: "+", label: "Premium Services" },
//     { value: 3, suffix: " yrs", label: "Years of Craft" },
//   ];

//   return (
//     <section
//       style={{
//         background: "linear-gradient(180deg,#0b0b0b 0%,#ffff 100%)",
//         padding: "180px 8vw",
//         position: "relative",
//         overflow: "hidden",
//       }}
//     >
//       {/* Background Glow */}
//       <div
//         style={{
//           position: "absolute",
//           top: "-200px",
//           left: "50%",
//           transform: "translateX(-50%)",
//           width: "900px",
//           height: "900px",
//           // background:
//             // "radial-gradient(circle, rgba(69, 3, 91, 0.5) 0%, transparent 80%)",
//           pointerEvents: "none",
//         }}
//       />

//       <div style={{ maxWidth: "1500px", margin: "0 auto" }}>
//         {/* Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           viewport={{ once: true }}
//           style={{
//             marginBottom: "140px",
//             textAlign: "center",
//           }}
//         >
//           <h2
//             style={{
//               fontSize: "clamp(40px,4vw,64px)",
//               fontWeight: 200,
//               letterSpacing: "-0.02em",
//               color: "#F5F5F5",
//               marginBottom: "25px",
//             }}
//           >
//             Measured in Excellence
//           </h2>

//           <div
//             style={{
//               width: "100px",
//               height: "2px",
//               background: "linear-gradient(90deg,#C6A972,#E0C58F)",
//               margin: "0 auto",
//             }}
//           />
//         </motion.div>

//         {/* Stats Grid */}
//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
//             gap: "60px",
//           }}
//         >
//           {stats.map((item, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 80 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1, delay: index * 0.2 }}
//               viewport={{ once: true }}
//               whileHover={{ y: -10 }}
//               style={{
//                 padding: "60px 40px",
//                 textAlign: "center",
//                 background: "rgba(255,255,255,0.03)",
//                 border: "1px solid rgba(255,255,255,0.08)",
//                 backdropFilter: "blur(12px)",
//                 transition: "0.4s ease",
//               }}
//             >
//               {/* Animated Number */}
//               <div
//                 style={{
//                   fontSize: "clamp(70px,6vw,110px)",
//                   fontWeight: 200,
//                   background: "linear-gradient(90deg,#D4AF37,#F3D98B,#D4AF37)",
//                   WebkitBackgroundClip: "text",
//                   WebkitTextFillColor: "transparent",
//                   lineHeight: 1,
//                   marginBottom: "20px",
//                 }}
//               >
//                 <Counter
//                   from={0}
//                   to={item.value}
//                   duration={2}
//                   suffix={item.suffix}
//                 />
//               </div>

//               {/* Label */}
//               <div
//                 style={{
//                   fontSize: "12px",
//                   letterSpacing: "0.4em",
//                   textTransform: "uppercase",
//                   color: "rgba(255,255,255,0.55)",
//                   fontWeight: 500,
//                 }}
//               >
//                 {item.label}
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Stats;

import { useState, useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

/* FORMAT NUMBER LIKE 50,000 */
function formatNumber(num) {
  return new Intl.NumberFormat("en-IN").format(num);
}

function Counter({ from = 0, to, duration = 2, prefix = "", suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const motionValue = useMotionValue(from);
  const spring = useSpring(motionValue, {
    duration: duration * 1000,
  });

  const [display, setDisplay] = useState(from);

  useEffect(() => {
    if (inView) motionValue.set(to);
  }, [inView, to]);

  useEffect(() => {
    const unsubscribe = spring.on("change", (latest) => {
      setDisplay(Math.floor(latest));
    });
    return () => unsubscribe();
  }, [spring]);

  return (
    <span ref={ref}>
      {prefix}
      {formatNumber(display)}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const stats = [
    { value: 5, suffix: "★", label: "Google Rating" },
    { value: 50000, prefix: "", suffix: "+", label: "Happy Clients" },
    { value: 10, suffix: "+", label: "Premium Treatments" },
    { value: 3, suffix: "+ yrs", label: "Experience" },
  ];

  return (
    <section
      style={{
        background: "#ffffff",
        padding: "140px 8vw",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "1400px",
          margin: "0 auto",
          gap: "80px",
          flexWrap: "wrap",
        }}
      >
        {/* LEFT SIDE (TEXT) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          style={{ flex: 1, minWidth: "300px" }}
        >
          <h2
            style={{
              fontSize: "clamp(42px,4vw,64px)",
              fontWeight: 300,
              color: "#2a1a2a",
              marginBottom: "20px",
            }}
          >
            Defined by Results,
            <br />
            Trusted by Thousands
          </h2>

          <p
            style={{
              fontSize: "16px",
              color: "#666",
              maxWidth: "420px",
              lineHeight: 1.8,
            }}
          >
            Every number reflects real transformations, precision treatments,
            and a commitment to delivering flawless skin outcomes.
          </p>
        </motion.div>

        {/* RIGHT SIDE (STATS) */}
       <div
  style={{
    flex: 1,
    minWidth: "300px",
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "60px 40px", // row gap / column gap
  }}
>
  {stats.map((item, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      viewport={{ once: true }}
    >
      {/* NUMBER */}
      <div
        style={{
          fontSize: "clamp(48px,5vw,80px)",
          fontWeight: 300,
          color: "#4F1C3D",
          lineHeight: 1,
        }}
      >
        <Counter
          from={0}
          to={item.value}
          prefix={item.prefix}
          suffix={item.suffix}
        />
      </div>

      {/* LABEL */}
      <div
        style={{
          fontSize: "12px",
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          color: "#777",
          marginTop: "8px",
        }}
      >
        {item.label}
      </div>

      {/* LINE */}
      <div
        style={{
          width: "50px",
          height: "1px",
          background: "#4F1C3D",
          marginTop: "10px",
          opacity: 0.3,
        }}
      />
    </motion.div>
  ))}
</div>
      </div>
    </section>
  );
}