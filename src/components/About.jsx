function About() {
  return (
<section
  id="about"
  style={{
    padding: "clamp(80px,10vw,160px) clamp(20px,6vw,80px)",
    background: "#ffffff",
    position: "relative",
    overflow: "hidden",
  }}
>
  <div
    style={{
      position: "absolute",
      top: 0,
      right: 0,
      width: "50%",
      height: "100%",
      background:
        "radial-gradient(ellipse at 80% 50%,rgba(0, 255, 217, 0.08) 0%,transparent 60%)",
    //  "#ffffff",
        pointerEvents: "none",
    }}
  />

  <div
    style={{
      maxWidth: "1400px",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
      gap: "clamp(40px,6vw,120px)",
      alignItems: "center",
    }}
  >
    {/* LEFT SIDE */}
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <span
        style={{
          fontSize: "14px",
          fontWeight: 600,
          letterSpacing: "2px",
          color: "var(--sage-dark)",
          textTransform: "uppercase",
        }}
      >
        Our Story
      </span>

      <h2
        style={{
          fontSize: "clamp(34px,5vw,78px)",
          fontWeight: 900,
          lineHeight: 1.05,
          color: "var(--dark)",
          marginTop: "18px",
        }}
      >
        Beauty Is An
        <br />
        <em style={{ color: "var(--purple)" }}>Experience,</em>
        <br />
        Not a Service.
      </h2>

      <div
        style={{
          marginTop: "28px",
          width: "80px",
          height: "3px",
          background: "linear-gradient(90deg,var(--sage),var(--copper))",
        }}
      />

      <p
        style={{
          fontSize: "17px",
          lineHeight: "2",
          color: "var(--text2)",
          marginTop: "28px",
          maxWidth: "600px",
        }}
      >
        At Skin concept, led by{" "}
        <strong style={{ color: "var(--sage-dark)" }}>Chandni Patel</strong>,
        we believe beauty begins with understanding. Our sage-green sanctuary
        is designed to calm your mind while our expert team transforms your
        look.
      </p>

      <p
        style={{
          fontSize: "17px",
          lineHeight: "2",
          color: "var(--text2)",
          marginTop: "16px",
          maxWidth: "600px",
        }}
      >
        We study your face, your hair, your lifestyle — then craft results that
        feel authentically <em>you</em>. That's why Jashoda Nagar keeps coming
        back for more.
      </p>

      <a
        href="#book"
        style={{
          marginTop: "40px",
          display: "inline-block",
          padding: "16px 34px",
          borderRadius: "100px",
          border: "2px solid var(--sage)",
          textDecoration: "none",
          color: "var(--sage-dark)",
          fontWeight: 600,
          transition: "all .3s",
          width: "fit-content",
        }}
      >
        Meet Our Team →
      </a>
    </div>

    {/* RIGHT SIDE FEATURES */}
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "clamp(16px,2vw,24px)",
      }}
    >
      {[
        {
          icon: "🌿",
          title: "Calm & Cozy Space",
          desc: "Our sage-green salon is designed to relax you from the moment you walk in — clean, peaceful, and beautifully maintained.",
        },
        {
          icon: "💡",
          title: "Intelligent Advice",
          desc: "Chandni Patel's team analyzes your face shape, hair texture, and skin type before recommending anything.",
        },
        {
          icon: "⭐",
          title: "5-Star Results",
          desc: "Jashoda Nagar's highest-rated salon. Consistently praised for transformations that exceed every expectation.",
        },
      ].map((f, i) => (
        <div
          key={i}
          style={{
            background: "var(--white)",
            border: "2px solid rgba(122,148,144,.12)",
            padding: "clamp(20px,3vw,30px)",
            display: "flex",
            gap: "20px",
            transition: "all .35s",
            borderRadius: "12px",
            boxShadow: "0 2px 16px rgba(122,148,144,.06)",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "var(--sage)";
            e.currentTarget.style.boxShadow =
              "0 8px 40px rgba(122,148,144,.16)";
            e.currentTarget.style.transform = "translateX(8px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "rgba(122,148,144,.12)";
            e.currentTarget.style.boxShadow =
              "0 2px 16px rgba(122,148,144,.06)";
            e.currentTarget.style.transform = "none";
          }}
        >
          <div
            style={{
              fontSize: "28px",
              flexShrink: 0,
            }}
          >
            {f.icon}
          </div>

          <div>
            <div
              style={{
                fontSize: "20px",
                fontWeight: 700,
                color: "var(--text)",
                marginBottom: "8px",
              }}
            >
              {f.title}
            </div>

            <div
              style={{
                fontSize: "15px",
                color: "var(--text2)",
                lineHeight: "1.8",
              }}
            >
              {f.desc}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
  );
}
export default About;