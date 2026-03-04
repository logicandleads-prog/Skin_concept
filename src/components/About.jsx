function About() {
  return (
    <section
      id="about"
      style={{
        padding: "160px 80px",
        background: "var(--sage-bg)",
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
            "radial-gradient(ellipse at 80% 50%,rgba(122,148,144,.08) 0%,transparent 60%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "120px",
          alignItems: "center",
        }}
      >
        <div>
          <div className="reveal left">
            <span className="label">Our Story</span>
          </div>
          <div
            className="reveal left"
            data-delay="1"
            style={{ marginTop: "18px" }}
          >
            <h2
              className="display"
              style={{
                fontSize: "clamp(44px,5vw,78px)",
                fontWeight: 900,
                lineHeight: 1.05,
                color: "var(--text)",
              }}
            >
              Beauty Is An
              <br />
              <em style={{ color: "var(--sage-dark)" }}>Experience,</em>
              <br />
              Not a Service.
            </h2>
          </div>
          <div
            className="reveal"
            data-delay="2"
            style={{
              marginTop: "28px",
              width: "80px",
              height: "3px",
              background: "linear-gradient(90deg,var(--sage),var(--copper))",
            }}
          />
          <div className="reveal" data-delay="3" style={{ marginTop: "28px" }}>
            <p
              style={{
                fontSize: "17px",
                fontWeight: 400,
                lineHeight: "2",
                color: "var(--text2)",
              }}
            >
              At Twentyaxe, led by{" "}
              <strong style={{ color: "var(--sage-dark)" }}>
                Chandni Patel
              </strong>
              , we believe beauty begins with understanding. Our sage-green
              sanctuary is designed to calm your mind while our expert team
              transforms your look.
            </p>
          </div>
          <div className="reveal" data-delay="4" style={{ marginTop: "16px" }}>
            <p
              style={{
                fontSize: "17px",
                fontWeight: 400,
                lineHeight: "2",
                color: "var(--text2)",
              }}
            >
              We study your face, your hair, your lifestyle — then craft results
              that feel authentically <em>you</em>. That's why Jashoda Nagar
              keeps coming back for more.
            </p>
          </div>
          <div className="reveal" data-delay="5" style={{ marginTop: "44px" }}>
            <a href="#book" className="btn-outline-sage">
              <span>Meet Our Team →</span>
            </a>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          {[
            {
              icon: "🌿",
              title: "Calm & Cozy Space",
              desc: "Our sage-green salon is designed to relax you from the moment you walk in — clean, peaceful, and beautifully maintained.",
              col: "var(--sage)",
            },
            {
              icon: "💡",
              title: "Intelligent Advice",
              desc: "Chandni Patel's team analyzes your specific face shape, hair texture, and skin type before recommending anything.",
              col: "var(--copper)",
            },
            {
              icon: "⭐",
              title: "5-Star Results",
              desc: "Jashoda Nagar's highest-rated salon. Consistently praised for transformations that exceed every expectation.",
              col: "var(--wood-dark)",
            },
          ].map((f, i) => (
            <div
              key={i}
              className="reveal"
              data-delay={i + 1}
              style={{
                background: "var(--marble)",
                border: "2px solid rgba(122,148,144,.12)",
                padding: "30px 36px",
                display: "flex",
                gap: "20px",
                transition: "all .35s",
                cursor: "none",
                boxShadow: "0 2px 16px rgba(122,148,144,.06)",
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
              <div style={{ fontSize: "28px", flexShrink: 0 }}>{f.icon}</div>
              <div>
                <div
                  className="display"
                  style={{
                    fontSize: "21px",
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
                    fontWeight: 400,
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