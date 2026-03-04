import { useState, useEffect, useRef } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
} from "framer-motion";

function Counter({ from = 0, to, duration = 2, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const motionValue = useMotionValue(from);
  const spring = useSpring(motionValue, {
    duration: duration * 1000,
    bounce: 0,
  });

  const [display, setDisplay] = useState(from);

  useEffect(() => {
    if (inView) {
      motionValue.set(to);
    }
  }, [inView, motionValue, to]);

  useEffect(() => {
    spring.on("change", (latest) => {
      setDisplay(latest.toFixed(to % 1 !== 0 ? 1 : 0));
    });
  }, [spring, to]);

  return (
    <span ref={ref}>
      {display}
      <span style={{ fontSize: "0.35em", marginLeft: "6px" }}>{suffix}</span>
    </span>
  );
}

function Stats() {
  const stats = [
    { value: 5.0, suffix: "★", label: "Google Rating" },
    { value: 500, suffix: "+", label: "Satisfied Clients" },
    { value: 10, suffix: "+", label: "Premium Services" },
    { value: 3, suffix: " yrs", label: "Years of Craft" },
  ];

  return (
    <section
      style={{
        background: "linear-gradient(180deg,#0b0b0b 0%,#111 100%)",
        padding: "180px 8vw",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Glow */}
      <div
        style={{
          position: "absolute",
          top: "-200px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "900px",
          height: "900px",
          background:
            "radial-gradient(circle, rgba(212,175,55,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1500px", margin: "0 auto" }}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          style={{
            marginBottom: "140px",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(40px,4vw,64px)",
              fontWeight: 200,
              letterSpacing: "-0.02em",
              color: "#F5F5F5",
              marginBottom: "25px",
            }}
          >
            Measured in Excellence
          </h2>

          <div
            style={{
              width: "100px",
              height: "2px",
              background: "linear-gradient(90deg,#C6A972,#E0C58F)",
              margin: "0 auto",
            }}
          />
        </motion.div>

        {/* Stats Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
            gap: "60px",
          }}
        >
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              style={{
                padding: "60px 40px",
                textAlign: "center",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(12px)",
                transition: "0.4s ease",
              }}
            >
              {/* Animated Number */}
              <div
                style={{
                  fontSize: "clamp(70px,6vw,110px)",
                  fontWeight: 200,
                  background: "linear-gradient(90deg,#D4AF37,#F3D98B,#D4AF37)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  lineHeight: 1,
                  marginBottom: "20px",
                }}
              >
                <Counter
                  from={0}
                  to={item.value}
                  duration={2}
                  suffix={item.suffix}
                />
              </div>

              {/* Label */}
              <div
                style={{
                  fontSize: "12px",
                  letterSpacing: "0.4em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.55)",
                  fontWeight: 500,
                }}
              >
                {item.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;