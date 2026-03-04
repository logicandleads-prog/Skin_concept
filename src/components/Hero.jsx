import { useState, useEffect } from "react";
import {
  motion,
} from "framer-motion";

import img1 from "./../assets/heroSection/image1.jpg";
import img2 from "./../assets/heroSection/image2.jpg";
import img3 from "./../assets/heroSection/image3.jpg";
import img4 from "./../assets/heroSection/image4.jpg";
import img5 from "./../assets/heroSection/image5.jpg";
import img6 from "./../assets/heroSection/image6.jpg";
import img7 from "./../assets/heroSection/image7.jpg";
import img8 from "./../assets/heroSection/image8.jpg";

const SLIDES = [
  {
    id: "01",
    tag: "THE ARCHIVE",
    title: "SILHOUETTE \n & STRUCTURE",
    desc: "Precision cutting meets the fluidity of natural movement. A sanctuary for the modern aesthetic.",
    img: img1
  },
  {
    id: "02",
    tag: "LUMIÈRE",
    title: "CHROMATIC \n EVOLUTION",
    desc: "Scientific color theory blended with artistic intuition. Discover light-reflective luxury.",
    img: img2
  },
  {
    id: "03",
    tag: "ATELIER",
    title: "TEXTURE & FLOW",
    desc: "Layered craftsmanship designed with architectural precision and soft movement.",
    img: img3
  },
  {
    id: "04",
    tag: "NOIR EDITION",
    title: "MIDNIGHT GLOSS",
    desc: "Deep reflective tones sculpted under controlled studio lighting.",
    img: img4
  },
  {
    id: "05",
    tag: "SIGNATURE",
    title: "FORM & BALANCE",
    desc: "Modern silhouettes refined through disciplined cutting geometry.",
    img: img5
  },
  {
    id: "06",
    tag: "COUTURE",
    title: "SCULPTED LIGHT",
    desc: "Illuminated strands shaped to frame expression and identity.",
    img: img6
  },
  {
    id: "07",
    tag: "ESSENCE",
    title: "RAW ELEGANCE",
    desc: "Natural texture elevated through minimalist design philosophy.",
    img: img7
  },
  {
    id: "08",
    tag: "THE STUDIO",
    title: "MODERN AURA",
    desc: "Contemporary hair artistry influenced by fashion runway aesthetics.",
    img: img8
  },
];

function Hero() {
  const [index, setIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % SLIDES.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  const currentSlide = SLIDES[index];

  return (
    <section
      style={{
        height: "100vh",
        width: "100%",
        backgroundColor: "#000",
        color: "#fff",
        overflow: "hidden",
        position: "relative",
        zIndex: 1,
      }}
    >
      {/* BACKGROUND CROSSFADE */}
      <motion.div
        key={index}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${currentSlide.img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Gradient overlay for readability */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, rgba(0,0,0,0.85) 25%, rgba(0,0,0,0.4) 100%)",
          }}
        />
      </motion.div>

      {/* CONTENT */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          height: "100%",
          display: "flex",
          alignItems: "center",
          padding: "0 10%",
        }}
      >
        <div style={{ maxWidth: "800px" }}>
          <motion.span
            key={currentSlide.tag}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              display: "block",
              color: "#D4AF37",
              letterSpacing: "6px",
              fontSize: "12px",
              marginBottom: "20px",
              textTransform: "uppercase",
            }}
          >
            {currentSlide.tag}
          </motion.span>

          <motion.h1
            key={currentSlide.title}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            style={{
              fontSize: "clamp(42px, 8vw, 100px)",
              fontFamily: "serif",
              fontWeight: 300,
              lineHeight: 1,
              marginBottom: "30px",
              whiteSpace: "pre-line",
            }}
          >
            {currentSlide.title}
          </motion.h1>

          <motion.div
            key={index + "-line"}
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ duration: 1 }}
            style={{
              height: "1px",
              background: "rgba(255,255,255,0.4)",
              marginBottom: "30px",
            }}
          />

          <motion.p
            key={currentSlide.desc}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            style={{
              fontSize: "16px",
              color: "rgba(255,255,255,0.75)",
              maxWidth: "420px",
              lineHeight: "1.8",
              marginBottom: "50px",
            }}
          >
            {currentSlide.desc}
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            style={{
              background: "transparent",
              border: "1px solid #D4AF37",
              padding: "16px 40px",
              color: "#D4AF37",
              fontSize: "12px",
              textTransform: "uppercase",
              letterSpacing: "2px",
              cursor: "pointer",
              transition: "0.3s ease",
            }}
          >
            Book Private Session
          </motion.button>
        </div>
      </div>

      {/* PROGRESS BAR */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "2px",
          background: "rgba(255,255,255,0.1)",
          zIndex: 20,
        }}
      >
        <motion.div
          key={index}
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 7, ease: "linear" }}
          style={{
            height: "100%",
            background: "#D4AF37",
          }}
        />
      </div>
    </section>
  );
}

export default Hero;