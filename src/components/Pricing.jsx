import { useState, useEffect, useRef } from "react";

function Pricing() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const plans = [
    {
      name: "Hair Artistry",
      icon: "✂️",
      col: "#7A948F",
      items: [
        ["Precision Haircut", "₹299"],
        ["Luxury Styling", "₹499"],
        ["Global Color", "₹1,299+"],
        ["Balayage / Highlights", "₹1,999+"],
        ["Keratin Therapy", "₹2,499+"],
        ["Signature Hair Spa", "₹699"],
      ],
    },
    {
      name: "Skin & Glow",
      icon: "✨",
      col: "#C6A972",
      featured: true,
      items: [
        ["Express Cleanup", "₹399"],
        ["De-Tan Therapy", "₹599"],
        ["Classic Facial", "₹799"],
        ["24K Gold Facial", "₹1,499"],
        ["Anti-Aging Ritual", "₹1,799"],
        ["Full Body Radiance", "₹1,299"],
      ],
    },
    {
      name: "Bridal Couture",
      icon: "👑",
      col: "#8B6B4E",
      items: [
        ["Bridal Signature Look", "₹4,999+"],
        ["Pre-Bridal Package", "₹7,999+"],
        ["Engagement Glam", "₹2,999"],
        ["Party Makeup", "₹1,499"],
        ["Hair Styling", "₹999+"],
        ["Saree Draping", "₹499"],
      ],
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="pricing"
      style={{
        padding: "clamp(100px,12vw,180px) 6vw",
        position: "relative",
        background:
          "linear-gradient(180deg,#f9f7f3 0%,#f3efe8 50%,#f9f7f3 100%)",
        overflow: "hidden",
      }}
    >
      {/* Background Glow Layers */}
      <div
        style={{
          position: "absolute",
          top: "-150px",
          left: "-150px",
          width: "400px",
          height: "400px",
          background:
            "radial-gradient(circle, rgba(198,169,114,0.18) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(40px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-200px",
          right: "-200px",
          width: "500px",
          height: "500px",
          background:
            "radial-gradient(circle, rgba(122,148,144,0.15) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(50px)",
        }}
      />

      <div
        style={{ maxWidth: "1400px", margin: "0 auto", position: "relative" }}
      >
        {/* Heading */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "clamp(70px,8vw,120px)",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(40px)",
            transition: "all 1s cubic-bezier(.19,1,.22,1)",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(40px,6vw,85px)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              color: "#111",
              marginBottom: "20px",
            }}
          >
            Signature Pricing
          </h2>

          <p
            style={{
              maxWidth: "650px",
              margin: "0 auto",
              fontSize: "18px",
              lineHeight: "1.9",
              color: "#555",
            }}
          >
            Designed for those who appreciate refinement. Transparent pricing
            paired with exceptional craftsmanship.
          </p>
        </div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
            gap: "45px",
          }}
        >
          {plans.map((plan, i) => (
            <div
              key={i}
              style={{
                position: "relative",
                padding: "55px 42px",
                borderRadius: "30px",
                background:
                  "linear-gradient(145deg,rgba(255,255,255,0.9),rgba(255,255,255,0.6))",
                backdropFilter: "blur(20px)",
                border: plan.featured
                  ? `2px solid ${plan.col}`
                  : "1px solid rgba(0,0,0,0.06)",
                boxShadow: "0 30px 90px rgba(0,0,0,0.08)",
                transition:
                  "transform .6s cubic-bezier(.19,1,.22,1), box-shadow .6s ease",
                opacity: visible ? 1 : 0,
                transform: visible
                  ? "translateY(0)"
                  : `translateY(${80 + i * 20}px)`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  "translateY(-16px) scale(1.02)";
                e.currentTarget.style.boxShadow =
                  "0 45px 120px rgba(0,0,0,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 30px 90px rgba(0,0,0,0.08)";
              }}
            >
              {plan.featured && (
                <div
                  style={{
                    position: "absolute",
                    top: "-20px",
                    right: "30px",
                    background: `linear-gradient(90deg, ${plan.col}, #111)`,
                    color: "#fff",
                    padding: "8px 18px",
                    borderRadius: "30px",
                    fontSize: "11px",
                    letterSpacing: ".15em",
                    fontWeight: 600,
                  }}
                >
                  MOST LOVED
                </div>
              )}

              <div style={{ textAlign: "center", marginBottom: "35px" }}>
                <div style={{ fontSize: "50px" }}>{plan.icon}</div>
                <h3
                  style={{
                    fontSize: "28px",
                    fontWeight: 700,
                    marginTop: "12px",
                    color: "#111",
                  }}
                >
                  {plan.name}
                </h3>
              </div>

              {plan.items.map(([name, price], j) => (
                <div
                  key={j}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "15px 0",
                    borderBottom: "1px solid rgba(0,0,0,0.05)",
                    fontSize: "15px",
                  }}
                >
                  <span style={{ color: "#444" }}>{name}</span>
                  <span
                    style={{
                      fontWeight: 700,
                      color: plan.col,
                    }}
                  >
                    {price}
                  </span>
                </div>
              ))}

              <div style={{ marginTop: "40px", textAlign: "center" }}>
                <a
                  href="#book"
                  style={{
                    display: "inline-block",
                    padding: "15px 45px",
                    borderRadius: "50px",
                    background: `linear-gradient(90deg, ${plan.col}, #111)`,
                    color: "#fff",
                    fontWeight: 600,
                    letterSpacing: ".05em",
                    textDecoration: "none",
                    transition: "all .3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                >
                  Book Experience
                </a>
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            textAlign: "center",
            marginTop: "70px",
            fontSize: "13px",
            color: "#777",
            fontStyle: "italic",
          }}
        >
          Final pricing confirmed during consultation. Premium products and
          personalized care are included in every experience.
        </div>
      </div>
    </section>
  );
}

export default Pricing;