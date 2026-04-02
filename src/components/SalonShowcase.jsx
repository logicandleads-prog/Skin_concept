import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring
} from "framer-motion";

import img1 from "./../assets/heroSection/image1.jpg";
import img2 from "./../assets/heroSection/image2.jpg";
import img3 from "./../assets/heroSection/image3.jpg";
import img4 from "./../assets/heroSection/image4.jpg";
import img5 from "./../assets/heroSection/image5.jpg";

const features = [
  { id: "01", title: "Hair Artistry", img: img5},
  { id: "02", title: "Skin & Glow", img: img5 },
  { id: "03", title: "Bridal Rituals", img: img5 },
  { id: "04", title: "Wellness", img: img5 },
  { id: "05", title: "Luxury Spa", img: img5 },
];

function SalonShowcase() {
  const targetRef = useRef(null);
  
  // horizontal scroll logic
const { scrollYProgress } = useScroll({
  target: targetRef,
  offset: ["start start", "end start"],
});

const smoothProgress = useSpring(scrollYProgress, {
  stiffness: 100,
  damping: 30,
  mass: 0.5
});

const x = useTransform(smoothProgress, [0, 1], ["0%", "-75%"]);
const y = useTransform(smoothProgress, [0, 1], ["0px", "-50px"]);

  return (
    <section ref={targetRef} className="showcase-scroll-container">
      <div className="sticky-wrapper">
        
        {/* Static Background Header */}
        <div className="bg-title-wrapper">
          <h2 className="bg-title">COLLECTION</h2>
        </div>

        {/* Moving Content Side-to-Side */}
        <motion.div style={{ x, y }} className="horizontal-content">
          
          {/* Introductory Card */}
          <div className="intro-card">
            <span className="label">The Sanctuary</span>
            <h2>Skin<br/> Concept </h2>
            <p>correction of Hair & Skin Clinic</p>
          </div>

          {/* Feature Cards */}
          {features.map((item, i) => (
            <div key={i} className="feature-card">
              <div className="img-container">
                <img src={item.img} alt={item.title} />
                <div className="img-overlay"></div>
                <span className="card-number">{item.id}</span>
              </div>
              <div className="card-footer">
                <h3>{item.title}</h3>
                <div className="line"></div>
              </div>
            </div>
          ))}
          
        </motion.div>
      </div>

  <style>{`
  .showcase-scroll-container {
    position: relative;
    height: 400vh;
    background: #ffffff;
  }

  .sticky-wrapper {
    position: sticky;
    top: 0;
    height: 100vh;
    display: flex;
    align-items: center;
    overflow: hidden;
  }

  .bg-title-wrapper {
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: center;
    pointer-events: none;
  }

  .bg-title {
    font-size: 20vw;
    font-weight: 900;
    color: rgba(255,255,255,0.03);
    margin: 0;
    letter-spacing: -5px;
  }

  .horizontal-content {
  display: flex;
  gap: 150px;
  padding: 0 10vw;
  align-items: center;
  will-change: transform;
  }

  /* Intro Card Styling */
  .intro-card {
    min-width: 400px;
    color: black;
  }

  .intro-card .label { color: #000000; text-transform: uppercase; letter-spacing: 4px; font-size: 12px; font-weight: 700; }
  .intro-card h2 { font-size: 80px; margin: 20px 0; font-family: 'Playfair Display', serif; }
  .intro-card p { color: #888; font-size: 18px; line-height: 1.6; max-width: 300px; }

  /* Feature Card Styling */
  .feature-card {
    min-width: 450px;
    position: relative;
  }

  .img-container {
    position: relative;
    width: 100%;
    aspect-ratio: 4/5;
    overflow: hidden;
    border-radius: 4px;
  }

  .img-container img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.8s ease; }
  .feature-card:hover img { transform: scale(1.05); }
  .img-overlay { position: absolute; inset: 0; background: linear-gradient(to bottom, transparent, rgba(0,0,0,0.4)); }
  
  .card-number {
    position: absolute;
    top: 30px;
    right: 30px;
    color: white;
    font-family: monospace;
    font-size: 14px;
    opacity: 0.6;
  }

  .card-footer { margin-top: 30px; color: white; }
  .card-footer h3 { font-family: serif; font-size: 32px; font-weight: 300; margin-bottom: 15px; }
  .line { width: 40px; height: 1px; background: #637B77; transition: width 0.3s ease; }

  /* 📱 SMART MOBILE VIEW - REPLACING YOUR OLD MEDIA QUERY */
  @media (max-width: 768px) {
    .showcase-scroll-container { 
      height: auto !important; /* Disables the long scroll */
      padding: 60px 0;
    }

    .sticky-wrapper { 
      position: relative !important; 
      height: auto !important; 
      overflow: visible !important; 
    }

    .horizontal-content { 
      flex-direction: column !important; 
      gap: 60px !important; 
      padding: 0 24px !important; 
      transform: none !important; /* Force content to stay centered */
    }

    .intro-card { 
      min-width: 100% !important; 
      text-align: center;
      margin-bottom: 20px;
    }
    
    .intro-card h2 { font-size: 42px !important; }
    .intro-card p { margin: 0 auto; }

    .feature-card { 
      min-width: 100% !important; 
      width: 100% !important; 
    }

    .img-container {
      aspect-ratio: 1/1 !important; /* Square images look better on phones */
      border-radius: 12px; /* Softer look for mobile */
    }

    .card-footer h3 { 
      font-size: 26px !important; 
      margin-bottom: 10px; 
    }

    .bg-title { display: none; }
  }
`}</style>
    </section>
  );
}
export default SalonShowcase;