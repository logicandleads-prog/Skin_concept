import { useRef } from "react";
import {
  motion,
} from "framer-motion";

import img1 from "./../assets/heroSection/image1.jpg";
import img2 from "./../assets/heroSection/image2.jpg";
import img3 from "./../assets/heroSection/image3.jpg";
import img4 from "./../assets/heroSection/image4.jpg";
import img5 from "./../assets/heroSection/image5.jpg";

const teamMembers = [
  {
    name: "Aarav Mehta",
    role: "Creative Director",
    image: img1
  },
  {
    name: "Sofia Kapoor",
    role: "Senior Stylist",
    image: img2
  },
  {
    name: "Reyansh Patel",
    role: "Master Barber",
    image: img3
  },
  {
    name: "Elena Sharma",
    role: "Color Specialist",
    image: img4
  },
  {
    name: "Elena Sharma",
    role: "Color Specialist",
    image: img5
  },
];

function Team() {
  const containerRef = useRef(null);

  return (
    <section
      style={{
        background: "#0A0A0A",
        padding: "140px 0",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* TITLE */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "80px",
        }}
      >
        <p
          style={{
            color: "#D4AF37",
            letterSpacing: "6px",
            fontSize: "12px",
            marginBottom: "20px",
          }}
        >
          OUR EXPERTS
        </p>

        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(36px, 5vw, 64px)",
            color: "#fff",
            fontWeight: 500,
          }}
        >
          Meet Our Team
        </h2>
      </div>

      {/* AUTO SCROLL CONTAINER */}
      <div
        ref={containerRef}
        style={{
          display: "flex",
          gap: "40px",
          width: "max-content",
        }}
      >
        <motion.div
          style={{
            display: "flex",
            gap: "40px",
          }}
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: "linear",
          }}
        >
          {[...teamMembers, ...teamMembers].map((member, index) => (
            <div
              key={index}
              style={{
                width: "320px",
                height: "420px",
                position: "relative",
                overflow: "hidden",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              {/* IMAGE */}
              <motion.img
                src={member.image}
                alt={member.name}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />

              {/* OVERLAY */}
              <motion.div
                whileHover={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.85) 20%, rgba(0,0,0,0.1) 100%)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  padding: "30px",
                }}
              >
                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: "#fff",
                    fontSize: "22px",
                    marginBottom: "6px",
                  }}
                >
                  {member.name}
                </h3>

                <p
                  style={{
                    color: "#D4AF37",
                    fontSize: "12px",
                    letterSpacing: "3px",
                  }}
                >
                  {member.role}
                </p>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
export default Team;