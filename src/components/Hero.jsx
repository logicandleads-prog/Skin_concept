// import { useState, useEffect, useRef, useCallback  } from "react";
// import {
//   motion,
// } from "framer-motion";

// import img1 from "./../assets/heroSection/image1.jpg";
// import img2 from "./../assets/heroSection/image2.jpg";
// import img3 from "./../assets/heroSection/image3.jpg";
// import img4 from "./../assets/heroSection/image4.jpg";
// import img5 from "./../assets/heroSection/image5.jpg";
// import img6 from "./../assets/heroSection/image6.jpg";
// import img7 from "./../assets/heroSection/image7.jpg";
// import img8 from "./../assets/heroSection/image8.jpg";

// const SLIDES = [
//   {
//     id: "01",
//     tag: "THE ARCHIVE",
//     title: "SILHOUETTE \n & STRUCTURE",
//     desc: "Precision cutting meets the fluidity of natural movement. A sanctuary for the modern aesthetic.",
//     img: img1
//   },
//   {
//     id: "02",
//     tag: "LUMIÈRE",
//     title: "CHROMATIC \n EVOLUTION",
//     desc: "Scientific color theory blended with artistic intuition. Discover light-reflective luxury.",
//     img: img2
//   },
//   {
//     id: "03",
//     tag: "ATELIER",
//     title: "TEXTURE & FLOW",
//     desc: "Layered craftsmanship designed with architectural precision and soft movement.",
//     img: img3
//   },
//   {
//     id: "04",
//     tag: "NOIR EDITION",
//     title: "MIDNIGHT GLOSS",
//     desc: "Deep reflective tones sculpted under controlled studio lighting.",
//     img: img4
//   },
//   {
//     id: "05",
//     tag: "SIGNATURE",
//     title: "FORM & BALANCE",
//     desc: "Modern silhouettes refined through disciplined cutting geometry.",
//     img: img5
//   },
//   {
//     id: "06",
//     tag: "COUTURE",
//     title: "SCULPTED LIGHT",
//     desc: "Illuminated strands shaped to frame expression and identity.",
//     img: img6
//   },
//   {
//     id: "07",
//     tag: "ESSENCE",
//     title: "RAW ELEGANCE",
//     desc: "Natural texture elevated through minimalist design philosophy.",
//     img: img7
//   },
//   {
//     id: "08",
//     tag: "THE STUDIO",
//     title: "MODERN AURA",
//     desc: "Contemporary hair artistry influenced by fashion runway aesthetics.",
//     img: img8
//   },
// ];

// function Hero() {
//   const [index, setIndex] = useState(0);

//   // Auto slide
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % SLIDES.length);
//     }, 7000);

//     return () => clearInterval(interval);
//   }, []);

//   const currentSlide = SLIDES[index];

//   return (
//     <section
//       style={{
//         height: "100vh",
//         width: "100%",
//         backgroundColor: "#000",
//         color: "#fff",
//         overflow: "hidden",
//         position: "relative",
//         zIndex: 1,
//       }}
//     >
//       {/* BACKGROUND CROSSFADE */}
//       <motion.div
//         key={index}
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1.2, ease: "easeInOut" }}
//         style={{
//           position: "absolute",
//           inset: 0,
//           backgroundImage: `url(${currentSlide.img})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         {/* Gradient overlay for readability */}
//         <div
//           style={{
//             position: "absolute",
//             inset: 0,
//             background:
//               "linear-gradient(to right, rgba(0,0,0,0.85) 25%, rgba(0,0,0,0.4) 100%)",
//           }}
//         />
//       </motion.div>

//       {/* CONTENT */}
//       <div
//         style={{
//           position: "relative",
//           zIndex: 10,
//           height: "100%",
//           display: "flex",
//           alignItems: "center",
//           padding: "0 10%",
//         }}
//       >
//         <div style={{ maxWidth: "800px" }}>
//           <motion.span
//             key={currentSlide.tag}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             style={{
//               display: "block",
//               color: "#D4AF37",
//               letterSpacing: "6px",
//               fontSize: "12px",
//               marginBottom: "20px",
//               textTransform: "uppercase",
//             }}
//           >
//             {currentSlide.tag}
//           </motion.span>

//           <motion.h1
//             key={currentSlide.title}
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//             style={{
//               fontSize: "clamp(42px, 8vw, 100px)",
//               fontFamily: "serif",
//               fontWeight: 300,
//               lineHeight: 1,
//               marginBottom: "30px",
//               whiteSpace: "pre-line",
//             }}
//           >
//             {currentSlide.title}
//           </motion.h1>

//           <motion.div
//             key={index + "-line"}
//             initial={{ width: 0 }}
//             animate={{ width: "100px" }}
//             transition={{ duration: 1 }}
//             style={{
//               height: "1px",
//               background: "rgba(255,255,255,0.4)",
//               marginBottom: "30px",
//             }}
//           />

//           <motion.p
//             key={currentSlide.desc}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1 }}
//             style={{
//               fontSize: "16px",
//               color: "rgba(255,255,255,0.75)",
//               maxWidth: "420px",
//               lineHeight: "1.8",
//               marginBottom: "50px",
//             }}
//           >
//             {currentSlide.desc}
//           </motion.p>

//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.98 }}
//             style={{
//               background: "transparent",
//               border: "1px solid #D4AF37",
//               padding: "16px 40px",
//               color: "#D4AF37",
//               fontSize: "12px",
//               textTransform: "uppercase",
//               letterSpacing: "2px",
//               cursor: "pointer",
//               transition: "0.3s ease",
//             }}
//           >
//             Book Private Session
//           </motion.button>
//         </div>
//       </div>

//       {/* PROGRESS BAR */}
//       <div
//         style={{
//           position: "absolute",
//           bottom: 0,
//           left: 0,
//           width: "100%",
//           height: "2px",
//           background: "rgba(255,255,255,0.1)",
//           zIndex: 20,
//         }}
//       >
//         <motion.div
//           key={index}
//           initial={{ width: 0 }}
//           animate={{ width: "100%" }}
//           transition={{ duration: 7, ease: "linear" }}
//           style={{
//             height: "100%",
//             background: "#D4AF37",
//           }}
//         />
//       </div>
//     </section>
//   );
// }

// export default Hero;

// const treatments = [
//   {
//     id: "skin",
//     label: "Skin Brightening",
//     tag: "Pigmentation Treatment",
//     headline: "Reveal Your Skin's",
//     accent: "True Radiance",
//     desc: "Advanced chemical peels and laser therapy that dissolve years of pigmentation, sun damage and uneven tone — unveiling luminous, glass-like clarity.",
//     stats: [["6", "Sessions"], ["92%", "Success Rate"], ["21", "Days Result"]],
//     beforeLabel: "Uneven Tone",
//     afterLabel: "Glass Skin",
//     beforeGrad: "linear-gradient(160deg,#c9a07a 0%,#a0724a 40%,#b8865c 100%)",
//     afterGrad: "linear-gradient(160deg,#f5e6d8 0%,#eecfb0 40%,#f0d9c0 100%)",
//     beforeAccent: "#8B5E3C",
//     afterAccent: "#C9956A",
//     icon: (
//       <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
//         <circle cx="28" cy="28" r="20" stroke="#C9A96E" strokeWidth="1.5" fill="none"/>
//         <circle cx="28" cy="28" r="12" stroke="#C9A96E" strokeWidth="1" strokeDasharray="3 3" fill="none"/>
//         <path d="M28 16 Q34 22 28 28 Q22 34 28 40" stroke="#C9A96E" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
//         <circle cx="28" cy="28" r="2.5" fill="#C9A96E"/>
//       </svg>
//     ),
//   },
//   {
//     id: "acne",
//     label: "Acne & Scar Therapy",
//     tag: "Medical Dermatology",
//     headline: "Clear Skin,",
//     accent: "Clear Confidence",
//     desc: "Precision laser resurfacing and targeted serum therapy that systematically erase active acne and deep-set scars, restoring smooth, flawless texture.",
//     stats: [["8", "Sessions"], ["96%", "Clearance"], ["30", "Days Result"]],
//     beforeLabel: "Active Acne",
//     afterLabel: "Smooth & Clear",
//     beforeGrad: "linear-gradient(160deg,#c97a7a 0%,#a04a4a 40%,#b85c5c 100%)",
//     afterGrad: "linear-gradient(160deg,#f5e0e0 0%,#f0cfcf 40%,#f5e6e6 100%)",
//     beforeAccent: "#8B3C3C",
//     afterAccent: "#C96A6A",
//     icon: (
//       <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
//         <path d="M28 10 C20 10 14 17 14 26 C14 36 22 44 28 46 C34 44 42 36 42 26 C42 17 36 10 28 10Z" stroke="#C9A96E" strokeWidth="1.5" fill="none"/>
//         <path d="M21 24 Q25 20 28 24 Q31 28 35 24" stroke="#C9A96E" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
//         <circle cx="22" cy="30" r="2" fill="none" stroke="#C9A96E" strokeWidth="1"/>
//         <circle cx="34" cy="30" r="2" fill="none" stroke="#C9A96E" strokeWidth="1"/>
//       </svg>
//     ),
//   },
//   {
//     id: "hair",
//     label: "Laser Hair Removal",
//     tag: "Permanent Solution",
//     headline: "Permanently",
//     accent: "Smooth Skin",
//     desc: "State-of-the-art diode laser technology delivering permanent hair reduction across all skin types — silky-smooth results that last a lifetime.",
//     stats: [["6", "Sessions"], ["99%", "Reduction"], ["14", "Days Visible"]],
//     beforeLabel: "Unwanted Hair",
//     afterLabel: "Permanently Smooth",
//     beforeGrad: "linear-gradient(160deg,#6b7a5c 0%,#4a5c3c 40%,#5c6b4a 100%)",
//     afterGrad: "linear-gradient(160deg,#eef2ea 0%,#dde8d5 40%,#e8f0e2 100%)",
//     beforeAccent: "#3C4A2C",
//     afterAccent: "#6A8C50",
//     icon: (
//       <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
//         <line x1="20" y1="12" x2="20" y2="36" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round"/>
//         <line x1="26" y1="10" x2="26" y2="38" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round"/>
//         <line x1="32" y1="12" x2="32" y2="36" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round"/>
//         <path d="M16 42 Q28 38 40 42" stroke="#C9A96E" strokeWidth="2" strokeLinecap="round" fill="none"/>
//         <path d="M16 46 Q28 42 40 46" stroke="#C9A96E" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.4"/>
//       </svg>
//     ),
//   },
//   {
//     id: "antiaging",
//     label: "Anti-Aging & Botox",
//     tag: "Aesthetic Medicine",
//     headline: "Turn Back",
//     accent: "The Clock",
//     desc: "Expert-administered botox, fillers and PRP therapy that sculpt a naturally youthful appearance — refreshed, not frozen. Artistry in every injection.",
//     stats: [["1", "Session"], ["98%", "Satisfaction"], ["7", "Days Full Effect"]],
//     beforeLabel: "Fine Lines",
//     afterLabel: "Youthful Glow",
//     beforeGrad: "linear-gradient(160deg,#9a8870 0%,#7a6850 40%,#8a7860 100%)",
//     afterGrad: "linear-gradient(160deg,#faf5f0 0%,#f2e8de 40%,#f8f0e8 100%)",
//     beforeAccent: "#5C4A30",
//     afterAccent: "#B8946A",
//     icon: (
//       <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
//         <path d="M28 8 L30 20 L42 18 L34 27 L40 38 L28 32 L16 38 L22 27 L14 18 L26 20Z" stroke="#C9A96E" strokeWidth="1.5" fill="none" strokeLinejoin="round"/>
//         <circle cx="28" cy="28" r="5" stroke="#C9A96E" strokeWidth="1" fill="none"/>
//       </svg>
//     ),
//   },
//   {
//     id: "peel",
//     label: "Chemical Peels",
//     tag: "Skin Renewal",
//     headline: "Peel Away",
//     accent: "Imperfection",
//     desc: "Medical-grade TCA and glycolic acid peels precisely calibrated to your skin depth — stripping years of damage to reveal fresh, resurfaced radiance beneath.",
//     stats: [["3", "Sessions"], ["89%", "Texture Improvement"], ["10", "Days Recovery"]],
//     beforeLabel: "Dull & Textured",
//     afterLabel: "Renewed & Bright",
//     beforeGrad: "linear-gradient(160deg,#b0956a 0%,#8a7050 40%,#a08060 100%)",
//     afterGrad: "linear-gradient(160deg,#fff8f0 0%,#fdeedd 40%,#fff3e8 100%)",
//     beforeAccent: "#7A5A30",
//     afterAccent: "#C9A06A",
//     icon: (
//       <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
//         <path d="M14 38 Q18 28 28 22 Q38 16 44 20" stroke="#C9A96E" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
//         <path d="M14 44 Q20 34 28 30 Q36 26 42 28" stroke="#C9A96E" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.5"/>
//         <circle cx="28" cy="22" r="3" fill="none" stroke="#C9A96E" strokeWidth="1.5"/>
//         <path d="M25 22 L20 32" stroke="#C9A96E" strokeWidth="1" strokeLinecap="round"/>
//       </svg>
//     ),
//   },
// ];

// const FONTS = `@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Jost:wght@200;300;400;500&display=swap');`;

// function BeforeAfterSlider({ treatment }) {
//   const [sliderPos, setSliderPos] = useState(50);
//   const [dragging, setDragging] = useState(false);
//   const containerRef = useRef(null);

//   const getPos = useCallback((clientX) => {
//     const rect = containerRef.current?.getBoundingClientRect();
//     if (!rect) return 50;
//     const x = Math.min(Math.max(clientX - rect.left, 0), rect.width);
//     return Math.round((x / rect.width) * 100);
//   }, []);

//   const onMouseDown = (e) => { e.preventDefault(); setDragging(true); };
//   const onTouchStart = () => setDragging(true);

//   useEffect(() => {
//     const onMove = (e) => {
//       if (!dragging) return;
//       const clientX = e.touches ? e.touches[0].clientX : e.clientX;
//       setSliderPos(getPos(clientX));
//     };
//     const onUp = () => setDragging(false);
//     window.addEventListener("mousemove", onMove);
//     window.addEventListener("mouseup", onUp);
//     window.addEventListener("touchmove", onMove, { passive: true });
//     window.addEventListener("touchend", onUp);
//     return () => {
//       window.removeEventListener("mousemove", onMove);
//       window.removeEventListener("mouseup", onUp);
//       window.removeEventListener("touchmove", onMove);
//       window.removeEventListener("touchend", onUp);
//     };
//   }, [dragging, getPos]);
//   const faceLines = [
//     { d: "M50,30 Q55,28 60,30 Q65,28 70,30", label: "Forehead" },
//     { d: "M35,50 Q60,45 85,50", label: "Cheeks" },
//     { d: "M45,68 Q60,72 75,68", label: "Jawline" },
//     { d: "M45,38 Q48,35 52,38", label: "" },
//     { d: "M68,38 Q72,35 75,38", label: "" },
//   ];}

// export default function Hero() {
//   const [active, setActive] = useState(0);
//   const t = treatments[active];

//   return (
//     <div style={{
//       minHeight: "100vh",
//       background: "linear-gradient(135deg,#0D0721 0%,#1A0E3D 45%,#2D1B69 100%)",
//       fontFamily: "'Jost',sans-serif",
//       display: "flex",
//       flexDirection: "column",
//       overflow: "hidden",
//       position: "relative",
//     }}>
//       <style>{`
//         ${FONTS}
//         * { box-sizing: border-box; margin: 0; padding: 0; }
//         @keyframes fadeUp {
//           from { opacity: 0; transform: translateY(24px); }
//           to   { opacity: 1; transform: translateY(0); }
//         }
//         .hero-text-block { animation: fadeUp 0.55s ease both; }
//         .tab-pill {
//           display: flex; align-items: center; gap: 8px;
//           padding: 9px 18px;
//           background: rgba(255,255,255,0.05);
//           border: 1px solid rgba(255,255,255,0.1);
//           color: rgba(255,255,255,0.5);
//           font-size: 12px; letter-spacing: 0.12em; text-transform: uppercase;
//           font-family: 'Jost',sans-serif; font-weight: 300;
//           cursor: pointer; transition: all 0.3s; white-space: nowrap;
//         }
//         .tab-pill:hover { border-color: rgba(201,169,110,0.5); color: rgba(201,169,110,0.85); }
//         .tab-pill.active {
//           background: rgba(201,169,110,0.15);
//           border-color: #C9A96E;
//           color: #C9A96E;
//         }
//         .stat-box {
//           display: flex; flex-direction: column; align-items: center;
//           padding: 14px 20px;
//           border-right: 1px solid rgba(255,255,255,0.1);
//         }
//         .stat-box:last-child { border-right: none; }
//         .cta-primary {
//           background: #C9A96E; color: #2D1B69;
//           padding: 14px 34px; font-size: 12px;
//           letter-spacing: 0.2em; text-transform: uppercase;
//           border: none; cursor: pointer; font-family: 'Jost',sans-serif;
//           font-weight: 500; transition: all 0.3s;
//         }
//         .cta-primary:hover { background: #fff; }
//         .cta-secondary {
//           background: transparent; color: rgba(255,255,255,0.7);
//           padding: 14px 34px; font-size: 12px;
//           letter-spacing: 0.2em; text-transform: uppercase;
//           border: 1px solid rgba(255,255,255,0.25); cursor: pointer;
//           font-family: 'Jost',sans-serif; font-weight: 300; transition: all 0.3s;
//         }
//         .cta-secondary:hover { border-color: #C9A96E; color: #C9A96E; }
//         .dot-nav {
//           width: 8px; height: 8px; border-radius: 50%;
//           background: rgba(255,255,255,0.2);
//           border: none; cursor: pointer; transition: all 0.3s; padding: 0;
//         }
//         .dot-nav.active { background: #C9A96E; transform: scale(1.3); }
//         @media (max-width: 900px) {
//           .hero-inner { flex-direction: column !important; padding: 6rem 1.5rem 3rem !important; }
//           .hero-left { max-width: 100% !important; }
//           .hero-right { width: 100% !important; height: 360px !important; }
//           .tabs-strip { overflow-x: auto; padding-bottom: 8px; }
//           .tabs-strip::-webkit-scrollbar { height: 0; }
//         }
//       `}</style>

//       {/* Background decorative orbs */}
//       <div style={{ position: "absolute", width: 600, height: 600, top: -150, right: -150, borderRadius: "50%", background: "radial-gradient(circle,rgba(124,92,191,0.12) 0%,transparent 70%)", pointerEvents: "none" }}/>
//       <div style={{ position: "absolute", width: 400, height: 400, bottom: -100, left: "10%", borderRadius: "50%", background: "radial-gradient(circle,rgba(201,169,110,0.07) 0%,transparent 70%)", pointerEvents: "none" }}/>

//       {/* Navbar */}
//       <div style={{ position: "absolute", top: 0, left: 0, right: 0, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 4rem", height: 72, zIndex: 20 }}>
//         <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.3rem", fontWeight: 500, color: "#fff", letterSpacing: "0.05em" }}>
//           Skin Concept Clinic
//         </div>
//         <div style={{ fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: "#C9A96E", fontWeight: 300 }}>
//           Ahmedabad · Est. 2015
//         </div>
//       </div>

//       {/* Treatment tabs */}
//       <div style={{ position: "absolute", top: 72, left: 0, right: 0, zIndex: 20, padding: "0 4rem" }}>
//         <div className="tabs-strip" style={{ display: "flex", gap: 8, paddingTop: 16 }}>
//           {treatments.map((tr, i) => (
//             <button
//               key={tr.id}
//               className={`tab-pill${active === i ? " active" : ""}`}
//               onClick={() => setActive(i)}
//             >
//               <div style={{ width: 6, height: 6, borderRadius: "50%", background: active === i ? "#C9A96E" : "rgba(255,255,255,0.3)", flexShrink: 0 }}/>
//               {tr.label}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Main hero body */}
//       <div className="hero-inner" style={{ flex: 1, display: "flex", alignItems: "center", gap: "4rem", padding: "9rem 4rem 3rem", marginTop: 32 }}>

//         {/* LEFT: text content */}
//         <div className="hero-left" key={t.id} style={{ maxWidth: 480, flexShrink: 0 }}>

//           {/* Tag */}
//           <div style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 24 }}>
//             <div style={{ width: 30, height: 1, background: "#C9A96E" }}/>
//             <span style={{ fontSize: 10, letterSpacing: "0.4em", textTransform: "uppercase", color: "#C9A96E", fontWeight: 400 }}>{t.tag}</span>
//           </div>

//           {/* Headline */}
//           <h1 className="hero-text-block" style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(2.8rem,5vw,4.2rem)", fontWeight: 300, color: "#fff", lineHeight: 1.1, marginBottom: "0.6rem", animationDelay: "0s" }}>
//             {t.headline}
//           </h1>
//           <h1 className="hero-text-block" style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(2.8rem,5vw,4.2rem)", fontWeight: 400, color: "#C9A96E", lineHeight: 1.1, fontStyle: "italic", marginBottom: "1.8rem", animationDelay: "0.08s" }}>
//             {t.accent}
//           </h1>

//           {/* Description */}
//           <p className="hero-text-block" style={{ fontSize: 15, color: "rgba(255,255,255,0.55)", lineHeight: 1.85, fontWeight: 300, marginBottom: "2.5rem", animationDelay: "0.16s" }}>
//             {t.desc}
//           </p>

//           {/* Stats */}
//           <div className="hero-text-block" style={{ display: "flex", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", marginBottom: "2.5rem", animationDelay: "0.24s" }}>
//             {t.stats.map(([num, lbl]) => (
//               <div className="stat-box" key={lbl}>
//                 <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "2rem", fontWeight: 300, color: "#C9A96E", lineHeight: 1 }}>{num}</span>
//                 <span style={{ fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginTop: 4 }}>{lbl}</span>
//               </div>
//             ))}
//           </div>

//           {/* CTAs */}
//           <div className="hero-text-block" style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: "3rem", animationDelay: "0.32s" }}>
//             <button className="cta-primary">Book Consultation</button>
//             <button className="cta-secondary">See All Results</button>
//           </div>

//           {/* Icon + hint */}
//           <div className="hero-text-block" style={{ display: "flex", alignItems: "center", gap: 16, animationDelay: "0.4s" }}>
//             {t.icon}
//             <div>
//               <div style={{ fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: 4 }}>Drag the slider</div>
//               <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", fontWeight: 300 }}>Explore real before &amp; after transformation</div>
//             </div>
//           </div>
//         </div>

//         {/* RIGHT: Before/After slider */}
//         <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: 16 }}>

//           {/* Slider frame */}
//           <div style={{
//             position: "relative",
//             width: "100%",
//             height: 480,
//             border: "1px solid rgba(201,169,110,0.25)",
//             overflow: "hidden",
//           }}>
//             {/* Decorative corner marks */}
//             {[[0,0,"top:0;left:0"], [0,1,"top:0;right:0"], [1,0,"bottom:0;left:0"], [1,1,"bottom:0;right:0"]].map(([r,c,pos],i) => (
//               <div key={i} style={{
//                 position: "absolute",
//                 ...(r===0?{top:0}:{bottom:0}),
//                 ...(c===0?{left:0}:{right:0}),
//                 width: 20, height: 20,
//                 borderTop: r===0 ? "2px solid #C9A96E" : "none",
//                 borderBottom: r===1 ? "2px solid #C9A96E" : "none",
//                 borderLeft: c===0 ? "2px solid #C9A96E" : "none",
//                 borderRight: c===1 ? "2px solid #C9A96E" : "none",
//                 zIndex: 5, pointerEvents: "none",
//               }}/>
//             ))}
//             <BeforeAfterSlider key={t.id} treatment={t} />
//           </div>

//           {/* Nav dots + treatment name */}
//           <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
//             <div style={{ display: "flex", gap: 8 }}>
//               {treatments.map((_, i) => (
//                 <button key={i} className={`dot-nav${active === i ? " active" : ""}`} onClick={() => setActive(i)} />
//               ))}
//             </div>
//             <div style={{ fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)" }}>
//               {active + 1} / {treatments.length} · {t.label}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom strip */}
//       <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", padding: "1.2rem 4rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
//         <div style={{ display: "flex", gap: "3rem" }}>
//           {[["5.0 ★", "Google Rating"], ["1000+", "Patients Treated"], ["Chandkheda", "Ahmedabad, Gujarat"]].map(([v, l]) => (
//             <div key={l} style={{ display: "flex", gap: 8, alignItems: "baseline" }}>
//               <span style={{ fontSize: 13, color: "#C9A96E", fontWeight: 400 }}>{v}</span>
//               <span style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", letterSpacing: "0.1em" }}>{l}</span>
//             </div>
//           ))}
//         </div>
//         <div style={{ fontSize: 11, color: "rgba(255,255,255,0.2)", letterSpacing: "0.15em", fontStyle: "italic", fontFamily: "'Cormorant Garamond',serif" }}>
//           Open · Closes 9 pm
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

import img1 from "./../assets/heroSection/image1.jpg";
import img2 from "./../assets/heroSection/image2.jpg";
import img3 from "./../assets/heroSection/image3.jpg";
import img5 from "./../assets/before.png";
import img4 from "./../assets/after.png";

import B_acne from "./../assets/heroImages/before/before_acne.png";
import A_acne from "./../assets/heroImages/after/after_acne.png";

import B_skin_bright from "./../assets/heroImages/before/skin_brightess.png";
import A_skin_bright from "./../assets/heroImages/after/skin_brightess.png";

import B_anti_age from "./../assets/heroImages/before/anti_age.png";
import A_anti_age from "./../assets/heroImages/after/anti_age.png";

import B_peel from "./../assets/heroImages/before/peel.png";
import A_peel from "./../assets/heroImages/after/peel.png";


import B_laser from "./../assets/heroImages/before/laser.png";
import A_laser from "./../assets/heroImages/after/laser.png";

const SLIDES = [
  {
    id: "01",
    tag: "Skin Brightening",
    title: "REVEAL YOUR\nTRUE RADIANCE",
    desc: "Advanced laser therapy and chemical peels that dissolve years of pigmentation and sun damage — unveiling luminous, glass-like clarity.",
    stats: [
      ["92%", "Success Rate"],
      ["6", "Sessions"],
      ["21", "Days Result"],
    ],
    beforeLabel: "Uneven Tone",
    afterLabel: "Glass Skin",
    beforeHint: "Dark spots · Pigmentation · Dullness",
    afterHint: "Even · Bright · Luminous",
    beforeImg: B_skin_bright,
    afterImg: A_skin_bright,
  },
  {
    id: "02",
    tag: "Acne & Scar Therapy",
    title: "CLEAR SKIN,\nCLEAR CONFIDENCE",
    desc: "Precision laser resurfacing and targeted serum therapy that systematically erase active acne and deep-set scars, restoring flawless texture.",
    stats: [
      ["96%", "Clearance"],
      ["8", "Sessions"],
      ["30", "Days Result"],
    ],
    beforeLabel: "Active Acne",
    // afterLabel: "Smooth & Clear",
    beforeHint: "Breakouts · Scars · Redness",
    afterHint: "Smooth · Clear · Confident",
    beforeImg: B_acne,
    afterImg: A_acne,
  },
  {
    id: "03",
    tag: "Laser Hair Removal",
    title: "PERMANENTLY\nSMOOTH SKIN",
    desc: "State-of-the-art diode laser technology delivering permanent hair reduction across all skin types — silky results that last a lifetime.",
    stats: [
      ["99%", "Reduction"],
      ["6", "Sessions"],
      ["14", "Days Visible"],
    ],
    beforeLabel: "Unwanted Hair",
    afterLabel: "Hair-Free Forever",
    beforeHint: "Coarse hair · Ingrowths · Stubble",
    afterHint: "Smooth · Soft · Permanent",
    beforeImg: B_laser,
    afterImg: A_laser,
  },
  {
    id: "04",
    tag: "Anti-Aging & Botox",
    title: "TURN BACK\nTHE CLOCK",
    desc: "Expert-administered botox, fillers and PRP therapy that sculpt a naturally youthful appearance — refreshed, not frozen. Artistry in every injection.",
    stats: [
      ["98%", "Satisfaction"],
      ["1", "Session"],
      ["7", "Days Effect"],
    ],
    beforeLabel: "Fine Lines",
    afterLabel: "Youthful Glow",
    beforeHint: "Wrinkles · Sagging · Tired look",
    afterHint: "Lifted · Plump · Radiant",
    beforeImg: B_anti_age,
    afterImg: A_anti_age,
  },
  {
    id: "05",
    tag: "Chemical Peels",
    title: "PEEL AWAY\nIMPERFECTION",
    desc: "Medical-grade TCA and glycolic acid peels precisely calibrated to your skin depth — revealing fresh, resurfaced radiance beneath.",
    stats: [
      ["89%", "Texture Lift"],
      ["3", "Sessions"],
      ["10", "Days Recovery"],
    ],
    beforeLabel: "Dull & Textured",
    afterLabel: "Renewed & Bright",
    beforeHint: "Dullness · Rough texture · Pores",
    afterHint: "Smooth · Fresh · Renewed",
    beforeImg: B_peel,
    afterImg: A_peel,
  },
];

function BeforeAfterSlider({ slide }) {
  const [pos, setPos] = useState(50);
  const [dragging, setDragging] = useState(false);
  const ref = useRef(null);

  const calcPos = useCallback((clientX) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return 50;
    return Math.round(
      Math.min(Math.max(((clientX - rect.left) / rect.width) * 100, 2), 98),
    );
  }, []);

  useEffect(() => {
    const onMove = (e) => {
      if (!dragging) return;
      setPos(calcPos(e.touches ? e.touches[0].clientX : e.clientX));
    };
    const onUp = () => setDragging(false);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchmove", onMove, { passive: true });
    window.addEventListener("touchend", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("touchend", onUp);
    };
  }, [dragging, calcPos]);

  // Reset slider position on slide change
  useEffect(() => {
    setPos(50);
  }, [slide.id]);

  return (
    <div
      ref={ref}
      onMouseDown={(e) => {
        e.preventDefault();
        setDragging(true);
      }}
      onTouchStart={() => setDragging(true)}
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        cursor: dragging ? "grabbing" : "col-resize",
        userSelect: "none",
        overflow: "hidden",
      }}
    >
      {/* BEFORE — full background image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${slide.beforeImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.18)",
          }}
        />
      </div>

      {/* AFTER — clipped image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${slide.afterImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          clipPath: `inset(0 ${100 - pos}% 0 0)`,
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.1)",
          }}
        />
      </div>

      {/* Divider line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: `${pos}%`,
          width: 2,
          background: "#fff",
          transform: "translateX(-50%)",
          pointerEvents: "none",
          zIndex: 4,
        }}
      />

      {/* Handle */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: `${pos}%`,
          transform: "translate(-50%,-50%)",
          width: 48,
          height: 48,
          borderRadius: "50%",
          background: "#fff",
          border: "2.5px solid #C9A96E",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 5,
          cursor: dragging ? "grabbing" : "grab",
          boxShadow: "0 4px 24px rgba(0,0,0,0.22)",
          pointerEvents: "none",
        }}
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path
            d="M7 5L4 10L7 15"
            stroke="#C9A96E"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13 5L16 10L13 15"
            stroke="#C9A96E"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <line
            x1="10"
            y1="4"
            x2="10"
            y2="16"
            stroke="#C9A96E"
            strokeWidth="1"
            strokeDasharray="2 2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* BEFORE label */}
      <div
        style={{
          position: "absolute",
          top: 20,
          left: 16,
          background: "rgba(0,0,0,0.55)",
          color: "#fff",
          fontSize: 10,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          padding: "5px 12px",
          fontFamily: "Jost,sans-serif",
          fontWeight: 300,
          zIndex: 6,
          pointerEvents: "none",
        }}
      >
        {slide.beforeLabel}
      </div>

      {/* AFTER label */}
      <div
        style={{
          position: "absolute",
          top: 20,
          right: 16,
          background: "#C9A96E",
          color: "#2D1B69",
          fontSize: 10,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          padding: "5px 12px",
          fontFamily: "Jost,sans-serif",
          fontWeight: 500,
          zIndex: 6,
          pointerEvents: "none",
          opacity: pos > 25 ? 1 : 0,
          transition: "opacity 0.3s",
        }}
      >
        {slide.afterLabel}
      </div>

      {/* % revealed */}
      <div
        style={{
          position: "absolute",
          bottom: 16,
          left: "50%",
          transform: "translateX(-50%)",
          background: "rgba(0,0,0,0.5)",
          color: "#C9A96E",
          fontSize: 11,
          letterSpacing: "0.12em",
          padding: "4px 16px",
          fontFamily: "Jost,sans-serif",
          fontWeight: 300,
          zIndex: 6,
          pointerEvents: "none",
          whiteSpace: "nowrap",
        }}
      >
        {pos}% revealed
      </div>

      {/* Corner decoration marks */}
      {[
        [
          { top: 0, left: 0 },
          {
            borderTop: "2px solid rgba(201,169,110,0.7)",
            borderLeft: "2px solid rgba(201,169,110,0.7)",
          },
        ],
        [
          { top: 0, right: 0 },
          {
            borderTop: "2px solid rgba(201,169,110,0.7)",
            borderRight: "2px solid rgba(201,169,110,0.7)",
          },
        ],
        [
          { bottom: 0, left: 0 },
          {
            borderBottom: "2px solid rgba(201,169,110,0.7)",
            borderLeft: "2px solid rgba(201,169,110,0.7)",
          },
        ],
        [
          { bottom: 0, right: 0 },
          {
            borderBottom: "2px solid rgba(201,169,110,0.7)",
            borderRight: "2px solid rgba(201,169,110,0.7)",
          },
        ],
      ].map(([pos2, border], i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            ...pos2,
            width: 22,
            height: 22,
            ...border,
            zIndex: 7,
            pointerEvents: "none",
          }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = (next) => {
    setDirection(next > index ? 1 : -1);
    setIndex(next);
  };
  const prev = () => goTo((index - 1 + SLIDES.length) % SLIDES.length);
  const next = () => goTo((index + 1) % SLIDES.length);

  const slide = SLIDES[index];

  const textVariants = {
    enter: (d) => ({ opacity: 0, y: d > 0 ? 32 : -32 }),
    center: { opacity: 1, y: 0 },
    exit: (d) => ({ opacity: 0, y: d > 0 ? -32 : 32 }),
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Jost:wght@200;300;400;500&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #fff; }
        .nav-arrow {
          width: 52px; height: 52px; border-radius: 50%;
          background: rgba(255,255,255,0.12);
          border: 1px solid rgba(255,255,255,0.25);
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; transition: all 0.25s;
          backdrop-filter: blur(6px);
        }
        .nav-arrow:hover { background: #C9A96E; border-color: #C9A96E; color: #2D1B69; }
        .dot { width: 7px; height: 7px; border-radius: 50%; background: rgba(255,255,255,0.3); border: none; cursor: pointer; padding: 0; transition: all 0.3s; }
        .dot.active { background: #C9A96E; transform: scale(1.4); }
        @media (max-width: 900px) {
          .hero-body { flex-direction: column !important; padding: 5rem 1.5rem 2rem !important; gap: 2rem !important; }
          .hero-left { max-width: 100% !important; }
          .hero-right { width: 100% !important; height: 300px !important; }
          .hero-title { font-size: 2.4rem !important; }
          .nav-arrows-desktop { display: none !important; }
          .stat-row { gap: 1rem !important; }
        }

        /* Hide on mobile (screens smaller than 768px) */
@media (max-width: 767px) {
  .desktop-only-nav {
    display: none !important;
  }
}

/* Show on desktop */
@media (min-width: 768px) {
  .desktop-only-nav {
    display: flex !important;
  }
}

      `}</style>

      <section
        style={{
          minHeight: "100vh",
          width: "100%",
          height: "auto",
          background: "#ffffff",
          color: "#1A0E3D",
          overflow: "hidden",
          position: "relative",
          fontFamily: "'Jost',sans-serif",
          top: 20,
        }}
      >
        {/* ── TREATMENT TABS ── */}
        <div
          style={{
            position: "absolute",
            top: 72,
            left: 0,
            right: 0,
            zIndex: 20,
            display: "flex",
            gap: 0,
            borderBottom: "1px solid rgba(45,27,105,0.1)",
            background: "#fff",
          }}
          className="desktop-only-nav"
        >
          {SLIDES.map((s, i) => (
            <button
              key={s.id}
              onClick={() => goTo(i)}
              style={{
                flex: 1,
                padding: "10px 4px",
                background: "none",
                border: "none",
                borderBottom:
                  i === index
                    ? "2px solid var(--purple)"
                    : "2px solid transparent",
                fontSize: 10,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: i === index ? "#2D1B69" : "#8C7AB5",
                cursor: "pointer",
                fontFamily: "'Jost',sans-serif",
                fontWeight: i === index ? 500 : 300,
                transition: "all 0.3s",
                marginBottom: -1,
                whiteSpace: "nowrap",
              }}
            >
              {s.tag}
            </button>
          ))}
        </div>

        {/* ── HERO BODY ── */}
        <div
          className="hero-body"
          style={{
            position: "relative",
            zIndex: 10,
            height: "100%",
            display: "flex",
            alignItems: "center",
            gap: "3rem",
            // padding: "8.5rem 4rem 2rem",
            padding: "clamp(5rem, 8vw, 8.5rem) clamp(1.2rem, 4vw, 4rem) 2rem",
          }}
        >
          {/* ── LEFT: text ── */}
          <div style={{ flex: 1, minWidth: "280px", maxWidth: "600px" }}>
            <span
              style={{
                color: "#4F1C3D",
                letterSpacing: "0.3em",
                fontSize: "12px",
                fontWeight: 600,
              }}
            >
              {slide.tag}
            </span>

            <h1
              style={{
                fontSize: "clamp(2.2rem,4vw,3.2rem)",
                margin: "20px 0",
                whiteSpace: "pre-line",
                color: "#111",
              }}
            >
              {slide.title}
            </h1>

            <p
              style={{
                color: "#555",
                lineHeight: 1.7,
                fontSize: "clamp(14px, 1.4vw, 16px)",
              }}
            >
              {slide.desc}
            </p>

            {/* BEFORE AFTER */}
            <div style={{ display: "flex", gap: "40px", marginTop: "30px" }}>
              <div>
                <div style={{ fontSize: "11px", color: "#888" }}>BEFORE</div>
                <div style={{ fontSize: "18px", color: "#777" }}>
                  {slide.beforeHint}
                </div>
              </div>

              <div>
                <div style={{ fontSize: "11px", color: "#4F1C3D" }}>AFTER</div>
                <div style={{ fontSize: "20px", color: "#111" }}>
                  {slide.afterHint}
                </div>
              </div>
            </div>

            {/* STATS */}
            <div
              style={{
                display: "flex",
                gap: "30px",
                marginTop: "30px",
                flexWrap: "wrap",
              }}
            >
              {slide.stats.map(([val, lbl]) => (
                <div key={lbl}>
                  <div style={{ fontSize: "26px", fontWeight: 600 }}>{val}</div>
                  <div style={{ fontSize: "12px", color: "#777" }}>{lbl}</div>
                </div>
              ))}
            </div>

            {/* BUTTONS */}
            <div
              style={{
                marginTop: "30px",
                display: "flex",
                gap: "15px",
                flexWrap: "wrap",
              }}
            >
              <button
                style={{
                  padding: "14px 32px",
                  background: "var(--purple)",
                  border: "none",
                  color: "#fff",
                  borderRadius: "8px",
                  cursor: "pointer",
                  letterSpacing: "0.1em",
                  fontSize: "12px",
                  textTransform: "uppercase",
                  boxShadow: "0 10px 20px rgba(79,28,61,0.2)",
                }}
              >
                Book Appointment
              </button>

              <button
                style={{
                  border: "1px solid #ddd",
                  padding: "12px 28px",
                  background: "transparent",
                  cursor: "pointer",
                }}
              >
                View Results
              </button>
            </div>
          </div>

          {/* ── RIGHT: Before/After slider ── */}
          <div style={{ flex: 1, minWidth: 280 }}>
            <div
              style={{
                width: "100%",
                height: "clamp(320px, 65vw, 650px)",
                maxHeight: "85vh",
                overflow: "hidden",
                borderRadius: 12,
                position: "relative",
              }}
            >
              <BeforeAfterSlider slide={slide} />
            </div>

            {/* dots */}
            <div
              style={{
                marginTop: 12,
                display: "flex",
                justifyContent: "center",
                gap: 6,
              }}
            >
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    border: "none",
                    background: i === index ? "#4F1C3D" : "#ccc",
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* ── PROGRESS BAR ── */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: 2,
            background: "rgba(45,27,105,0.1)",
            zIndex: 20,
          }}
        >
          <motion.div
            key={index}
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 7, ease: "linear" }}
            style={{ height: "100%", background: "#4F1C3D" }}
          />
        </div>
      </section>
    </>
  );
}
