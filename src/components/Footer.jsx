import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "#111111",
        color: "#fff",
        padding: "120px 8% 50px",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>

        {/* TOP SECTION */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1.2fr",
            gap: "60px",
            marginBottom: "100px",
          }}
          className="footer-grid"
        >

          {/* BRAND + DESCRIPTION */}
          <div>
            <h2
              style={{
                fontSize: "clamp(32px,5vw,60px)",
                fontWeight: 300,
                letterSpacing: "6px",
                marginBottom: "25px",
              }}
            >
              MAISON
            </h2>

            <p
              style={{
                color: "rgba(255,255,255,0.6)",
                lineHeight: 1.8,
                maxWidth: "420px",
                fontSize: "15px",
              }}
            >
              A modern beauty atelier where precision meets elegance.
              Every service is crafted to enhance confidence and individuality.
            </p>

            {/* SOCIAL ICONS */}
            <div
              style={{
                display: "flex",
                gap: "18px",
                marginTop: "30px",
              }}
            >
              {[FaInstagram, FaFacebookF, FaTwitter, FaYoutube].map(
                (Icon, i) => (
                  <div
                    key={i}
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      border: "1px solid rgba(255,255,255,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#D4AF37";
                      e.currentTarget.style.color = "#000";
                      e.currentTarget.style.border = "1px solid #D4AF37";
                      e.currentTarget.style.transform = "translateY(-4px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.color = "#fff";
                      e.currentTarget.style.border =
                        "1px solid rgba(255,255,255,0.2)";
                      e.currentTarget.style.transform = "translateY(0px)";
                    }}
                  >
                    <Icon size={16} />
                  </div>
                )
              )}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4
              style={{
                fontSize: "13px",
                letterSpacing: "3px",
                marginBottom: "25px",
                color: "#D4AF37",
                textTransform: "uppercase",
              }}
            >
              Quick Links
            </h4>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                fontSize: "15px",
              }}
            >
              {["Home", "Services", "About", "Contact"].map((item) => (
                <a
                  key={item}
                  href="#"
                  style={{
                    textDecoration: "none",
                    color: "rgba(255,255,255,0.7)",
                    transition: "0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#D4AF37")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color =
                      "rgba(255,255,255,0.7)")
                  }
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h4
              style={{
                fontSize: "13px",
                letterSpacing: "3px",
                marginBottom: "25px",
                color: "#D4AF37",
                textTransform: "uppercase",
              }}
            >
              Contact
            </h4>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "18px",
                fontSize: "15px",
                color: "rgba(255,255,255,0.7)",
              }}
            >
              <div style={{ display: "flex", gap: "10px" }}>
                <FaMapMarkerAlt />
                Ahmedabad, Gujarat
              </div>

              <div style={{ display: "flex", gap: "10px" }}>
                <FaPhoneAlt />
                +91 98765 43210
              </div>

              <div style={{ display: "flex", gap: "10px" }}>
                <FaEnvelope />
                hello@maison.com
              </div>
            </div>
          </div>

          {/* NEWSLETTER */}
          <div>
            <h4
              style={{
                fontSize: "13px",
                letterSpacing: "3px",
                marginBottom: "25px",
                color: "#D4AF37",
                textTransform: "uppercase",
              }}
            >
              Newsletter
            </h4>

            <p
              style={{
                color: "rgba(255,255,255,0.6)",
                fontSize: "14px",
                marginBottom: "20px",
              }}
            >
              Get updates on new rituals and seasonal offers.
            </p>

            <div style={{ display: "flex" }}>
              <input
                type="email"
                placeholder="Your email"
                style={{
                  flex: 1,
                  padding: "14px",
                  background: "transparent",
                  border: "1px solid rgba(255,255,255,0.2)",
                  color: "#fff",
                  outline: "none",
                }}
              />
              <button
                style={{
                  padding: "14px 20px",
                  background: "#D4AF37",
                  border: "none",
                  cursor: "pointer",
                  fontWeight: 600,
                }}
              >
                →
              </button>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.1)",
            paddingTop: "30px",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "20px",
            fontSize: "13px",
            color: "rgba(255,255,255,0.5)",
          }}
        >
          <div>© {currentYear} Maison. All Rights Reserved.</div>

          <div style={{ display: "flex", gap: "25px" }}>
            <span style={{ cursor: "pointer" }}>Privacy Policy</span>
            <span style={{ cursor: "pointer" }}>Terms of Service</span>
          </div>
        </div>
      </div>

      {/* Responsive */}
      <style>
        {`
        @media (max-width: 1000px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 50px !important;
          }
        }
        `}
      </style>
    </footer>
  );
}

export default Footer;