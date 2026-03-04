import { useState } from "react";
import {
  motion,
  AnimatePresence,
} from "framer-motion";
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

  return (
    <section
      style={{
        padding: "clamp(90px,10vw,160px) 6vw",
        background: "#0b0b0b",
        color: "#fff",
      }}
      id="services"
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        
        {/* Heading */}
        <div
          style={{
            marginBottom: "clamp(70px,8vw,120px)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            gap: "40px",
          }}
        >
          <div>
            <span
              style={{
                fontSize: "12px",
                letterSpacing: "0.35em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.5)",
              }}
            >
              What We Offer
            </span>

            <h2
              style={{
                fontSize: "clamp(42px,6vw,88px)",
                fontWeight: 300,
                lineHeight: 1.05,
                marginTop: "20px",
              }}
            >
              Our Services
            </h2>
          </div>

          <p
            style={{
              maxWidth: "420px",
              lineHeight: 1.9,
              color: "rgba(255,255,255,0.65)",
              fontSize: "15px",
            }}
          >
            Every experience is curated around you — your features,
            your lifestyle, your vision.
          </p>
        </div>

        {/* Tabs */}
        <div
          style={{
            display: "flex",
            gap: "18px",
            flexWrap: "wrap",
            marginBottom: "60px",
          }}
        >
          {services.map((svc, i) => {
            const isActive = i === active;

            return (
              <button
                key={i}
                onClick={() => setActive(i)}
                style={{
                  padding: "14px 28px",
                  borderRadius: "50px",
                  border: `1px solid ${
                    isActive ? svc.accent : "rgba(255,255,255,0.25)"
                  }`,
                  background: isActive ? svc.accent : "transparent",
                  color: isActive ? "#000" : "#fff",
                  cursor: "pointer",
                  fontSize: "14px",
                  letterSpacing: "1px",
                  transition: "all 0.3s ease",
                  transform: isActive ? "scale(1.05)" : "scale(1)",
                }}
              >
                {svc.icon} {svc.title}
              </button>
            );
          })}
        </div>

        {/* Content Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            style={{
              background: current.bg,
              color: "#111",
              borderRadius: "24px",
              padding: "clamp(50px,6vw,90px)",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
              gap: "70px",
              boxShadow: "0 30px 80px rgba(0,0,0,0.25)",
            }}
          >
            {/* Left */}
            <div>
              <div style={{ fontSize: "54px", marginBottom: "25px" }}>
                {current.icon}
              </div>

              <h3
                style={{
                  fontSize: "clamp(32px,4vw,54px)",
                  fontWeight: 400,
                  marginBottom: "15px",
                }}
              >
                {current.title}
              </h3>

              <p
                style={{
                  fontStyle: "italic",
                  fontSize: "17px",
                  color: current.accent,
                  marginBottom: "25px",
                }}
              >
                {current.tagline}
              </p>

              <p
                style={{
                  lineHeight: 1.9,
                  color: "#333",
                  marginBottom: "45px",
                }}
              >
                {current.desc}
              </p>

              <button
                style={{
                  padding: "15px 34px",
                  background: current.accent,
                  border: "none",
                  borderRadius: "50px",
                  color: "#000",
                  cursor: "pointer",
                  fontWeight: 600,
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0px)";
                }}
              >
                View Pricing →
              </button>
            </div>

            {/* Right List */}
            <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
              {current.items.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ x: 6 }}
                  style={{
                    padding: "20px 26px",
                    borderRadius: "14px",
                    background: "#ffffff",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
                    cursor: "pointer",
                    transition: "0.3s ease",
                  }}
                >
                  <span style={{ fontWeight: 500, color: "#222" }}>
                    {item}
                  </span>

                  <span
                    style={{
                      color: current.accent,
                      fontWeight: 600,
                    }}
                  >
                    →
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
export default Services;