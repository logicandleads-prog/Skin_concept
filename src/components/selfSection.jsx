import { motion } from "framer-motion";
import doctorImg from "./../assets/DR.jpeg";

export default function SelfSection() {
  return (
    <section
      style={{
        padding: "120px 6vw",
        background: "#FFFFFF",
        color: "#1A1A1A",
      }}
    >
      <div
        style={{
          maxWidth: "1300px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1.2fr",
          gap: "80px",
          alignItems: "center",
        }}
      >
        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ position: "relative" }}
        >
          <div
            style={{
              borderRadius: "24px",
              overflow: "hidden",
              boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={doctorImg}
              alt="Doctor"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />

            {/* light overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(180deg, transparent 70%, rgba(0,0,0,0.1))",
              }}
            />
          </div>

          {/* soft glow */}
          <div
            style={{
              position: "absolute",
              top: "-30px",
              left: "-30px",
              width: "150px",
              height: "150px",
              background: "rgba(79,28,61,0.08)",
              filter: "blur(80px)",
              zIndex: -1,
            }}
          />
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* TAG */}
          <span
            style={{
              color: "#4F1C3D",
              letterSpacing: "0.3em",
              fontSize: "12px",
              textTransform: "uppercase",
              display: "block",
              marginBottom: "20px",
            }}
          >
            About Doctor
          </span>

          {/* HEADING */}
          <h2
            style={{
              fontSize: "clamp(36px,4vw,56px)",
              fontWeight: 400,
              lineHeight: 1.2,
              marginBottom: "20px",
            }}
          >
            Hi, I’m Dr. <b style={{color:"var(--purple)"}}>PRIYANKA</b>
          </h2>

          {/* SUBTITLE */}
          <p
            style={{
              color: "#555",
              fontSize: "18px",
              lineHeight: 1.8,
              marginBottom: "30px",
              maxWidth: "500px",
            }}
          >
            Aesthetic specialist focused on delivering natural, refined results
            through advanced skin and laser treatments.
          </p>

          {/* DESCRIPTION */}
          <p
            style={{
              color: "#777",
              lineHeight: 1.9,
              marginBottom: "40px",
              fontSize: "16px",
            }}
          >
            With years of experience in clinical aesthetics, I combine science
            with artistry to enhance your natural beauty. My philosophy is
            simple — subtle, elegant improvements that build confidence and
            radiance over time.
          </p>

          {/* STATS */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2,1fr)",
              gap: "20px",
              marginBottom: "40px",
            }}
          >
            {[
              ["5+", "Years Experience"],
              ["1000+", "Happy Clients"],
              ["Advanced", "Technology"],
              ["Personalized", "Care"],
            ].map(([value, label]) => (
              <div key={label}>
                <div
                  style={{
                    fontSize: "22px",
                    color: "#4F1C3D",
                    marginBottom: "4px",
                  }}
                >
                  {value}
                </div>
                <div style={{ fontSize: "12px", color: "#888" }}>
                  {label}
                </div>
              </div>
            ))}
          </div>

          {/* BUTTON */}
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
        </motion.div>
      </div>

      {/* RESPONSIVE */}
      <style>{`
        @media (max-width: 900px) {
          section div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
            gap: 50px !important;
          }
        }
      `}</style>
    </section>
  );
}