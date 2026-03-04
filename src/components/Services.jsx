import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Services() {
  const [active, setActive] = useState(0);

  const services = [
    {
      num: "01",
      icon: "✂️",
      title: "Hair Artistry",
      tagline: "Precision. Shine. Confidence.",
      desc: "Precision cuts, dimensional color and restorative treatments tailored to your hair texture and lifestyle.",
      items: [
        "Precision Cuts",
        "Color & Highlights",
        "Keratin Treatments",
        "Hair Spa Ritual",
        "Smoothening",
      ],
      accent: "#8FA8A3",
      bg: "#F4F7F6",
    },
    {
      num: "02",
      icon: "✨",
      title: "Skin & Glow",
      tagline: "Radiance. Restored.",
      desc: "Results-driven facials and personalized skincare crafted for luminous, healthy skin.",
      items: [
        "Custom Facials",
        "Gold Facial",
        "De-Tan Ritual",
        "Anti-Aging Care",
        "Skin Consultation",
      ],
      accent: "#C6A972",
      bg: "#FAF7F2",
    },
    {
      num: "03",
      icon: "👑",
      title: "Bridal Atelier",
      tagline: "Your Day. Perfected.",
      desc: "Timeless bridal artistry crafted to photograph beautifully and feel effortlessly you.",
      items: [
        "Bridal Makeup",
        "Pre-Bridal Ritual",
        "Reception Styling",
        "Hair Sculpting",
        "Saree Draping",
      ],
      accent: "#9B8579",
      bg: "#F7F3F1",
    },
  ];

  const current = services[active];

  // Mobile-first responsive logic:
  // We use a simple trick with a 'style' tag for media queries 
  // since this is a single-file component approach.
  const responsiveStyles = `
    .services-grid {
      display: grid;
      grid-template-columns: 1.2fr 0.8fr;
      gap: 60px;
    }
    .tabs-container {
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
      margin-bottom: 40px;
    }
    @media (max-width: 1024px) {
      .services-grid {
        grid-template-columns: 1fr;
        gap: 40px;
      }
    }
    @media (max-width: 640px) {
      .tabs-container {
        display: grid;
        grid-template-columns: 1fr;
        width: 100%;
      }
      .tab-button {
        width: 100%;
        text-align: center;
      }
      .content-panel {
        padding: 40px 24px !important;
      }
    }
  `;

  return (
    <section
      style={{
        padding: "clamp(60px,10vw,140px) 5vw",
        background: "#0b0b0b",
        color: "#fff",
        overflow: "hidden"
      }}
      id="services"
    >
      <style>{responsiveStyles}</style>
      
      <div style={{ maxWidth: "1300px", margin: "0 auto" }}>
        
        {/* Header Section */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          marginBottom: "60px"
        }}>
          <span style={{
            fontSize: "12px",
            letterSpacing: "0.4em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.4)",
            display: "block"
          }}>
            Experience Excellence
          </span>
          
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            gap: "30px"
          }}>
            <h2 style={{
              fontSize: "clamp(40px, 8vw, 80px)",
              fontWeight: 300,
              lineHeight: 1,
              margin: 0,
            }}>
              Our Services
            </h2>
            <p style={{
              maxWidth: "400px",
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.6)",
              fontSize: "16px",
              margin: 0
            }}>
              Meticulously curated treatments designed to elevate your natural beauty and provide a sanctuary of relaxation.
            </p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="tabs-container">
          {services.map((svc, i) => {
            const isActive = i === active;
            return (
              <button
                key={i}
                className="tab-button"
                onClick={() => setActive(i)}
                style={{
                  padding: "16px 32px",
                  borderRadius: "100px",
                  border: `1px solid ${isActive ? svc.accent : "rgba(255,255,255,0.15)"}`,
                  background: isActive ? svc.accent : "transparent",
                  color: isActive ? "#000" : "#fff",
                  cursor: "pointer",
                  fontSize: "14px",
                  fontWeight: 500,
                  letterSpacing: "0.5px",
                  transition: "all 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
                }}
              >
                <span style={{ marginRight: "8px" }}>{svc.icon}</span>
                {svc.title}
              </button>
            );
          })}
        </div>

        {/* Main Display Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="content-panel"
            style={{
              background: current.bg,
              color: "#111",
              borderRadius: "32px",
              padding: "clamp(40px, 7vw, 80px)",
              boxShadow: "0 40px 100px -20px rgba(0,0,0,0.5)",
            }}
          >
            <div className="services-grid">
              
              {/* Left Column: Details */}
              <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  style={{ fontSize: "64px", marginBottom: "20px" }}
                >
                  {current.icon}
                </motion.div>

                <h3 style={{
                  fontSize: "clamp(32px, 5vw, 56px)",
                  fontWeight: 400,
                  margin: "0 0 15px 0",
                  letterSpacing: "-0.02em"
                }}>
                  {current.title}
                </h3>

                <p style={{
                  fontSize: "18px",
                  color: current.accent,
                  fontWeight: 600,
                  marginBottom: "25px",
                  letterSpacing: "1px",
                  textTransform: "uppercase"
                }}>
                  {current.tagline}
                </p>

                <p style={{
                  lineHeight: 1.8,
                  color: "#444",
                  fontSize: "17px",
                  marginBottom: "40px",
                  maxWidth: "500px"
                }}>
                  {current.desc}
                </p>
              </div>

              {/* Right Column: List Items */}
              <div style={{ 
                display: "flex", 
                flexDirection: "column", 
                gap: "16px",
                justifyContent: "center" 
              }}>
                {current.items.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ x: 10, backgroundColor: "#fff" }}
                    style={{
                      padding: "24px 30px",
                      borderRadius: "20px",
                      background: "rgba(255,255,255,0.5)",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      border: "1px solid rgba(0,0,0,0.03)",
                      cursor: "pointer",
                    }}
                  >
                    <span style={{ fontWeight: 500, fontSize: "16px" }}>{item}</span>
                    <span style={{ color: current.accent, fontSize: "20px" }}>→</span>
                  </motion.div>
                ))}
              </div>

            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

export default Services;