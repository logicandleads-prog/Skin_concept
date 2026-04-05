import { useState, useEffect } from "react";
import twentyaxe from "./../assets/skin-concept-removebg-preview.png";
import {
  motion,
  useScroll,
  AnimatePresence,
  useMotionValueEvent,
} from "framer-motion";

function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  const navLinks = [
    { name: "Atelier", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Pricing", href: "#pricing" },
    { name: "Book", href: "#book" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;600&display=swap');

        .nav-link {
          font-family: 'Inter', sans-serif;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-size: 11px;
          position: relative;
          text-decoration: none;
          opacity: 0.8;
          transition: all 0.3s ease;
        }

        .nav-link:hover { opacity: 1; }

        @media (max-width: 1024px) {
          .desktop-menu { display: none !important; }
          .nav-container { padding: 0 20px !important; }
          .reserve-btn { display: none !important; } /* Hide on small mobile to save space */
        }
        
        @media (min-width: 480px) {
          .reserve-btn { display: block !important; }
        }
      `}</style>

      <motion.nav
        className="nav-container"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          position: "fixed",
          top: isScrolled ? "15px" : "0",
          left: 0,
          right: 0,
          margin: "0 auto",
          width: isScrolled ? "94%" : "100%",
          maxWidth: "1400px",
          height: isScrolled ? "70px" : "90px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 80px",
          background: isScrolled ? "rgba(252, 251, 252, 0.5)" : "transparent",
          backdropFilter: isScrolled ? "blur(15px)" : "none",
          border: isScrolled
            ? "3px solid rgba(0, 0, 0, 0.2)"
            : "1px solid transparent",
          borderRadius: isScrolled ? "100px" : "0px",
          zIndex: 9999,
          transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        {/* LOGO */}
        <div style={{ display: "flex", alignItems: "  " }}>
          <img
            src={twentyaxe}
            alt="SkinConcept"
            style={{
              height: isScrolled ? "60px" : "80px", // Scaled down for mobile sanity
              width: "auto",
              filter: isScrolled ? "brightness(1)" : "brightness(1.2)",
              transition: "height 0.4s ease",
              position: "relative",
              "top": -3,

            }}
          />
        </div>

        {/* DESKTOP MENU */}
        <div className="desktop-menu" style={{ display: "flex", gap: "35px" }}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="nav-link"
              style={{ color: isScrolled ? "#000" : "#000", fontSize: "13px" }}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* ACTIONS */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <a
            href="#book"
            className="reserve-btn"
            style={{
              padding: "10px 22px",
              background: "var(--purple)",
              color: "#fff",
              fontSize: "10px",
              fontWeight: 800,
              letterSpacing: "2px",
              textTransform: "uppercase",
              textDecoration: "none",
              borderRadius: "50px",
              transition: "transform 0.3s ease",
            }}
          >
            Reserve
          </a>

          {/* BURGER BOX */}
          <div
            onClick={() => setIsMobileMenuOpen(true)}
            style={{
              cursor: "pointer",
              padding: "8px",
              display: "flex",
              flexDirection: "column",
              gap: "5px", // Consistent spacing between lines
              transition: "transform 0.2s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <div
              style={{
                width: "22px",
                height: "2px",
                background: isScrolled ? "#000" : "#fff",
                borderRadius: "10px",
                transition: "background 0.4s ease",
              }}
            />
            <div
              style={{
                width: "22px",
                height: "2px",
                background: isScrolled ? "#000" : "#fff",
                borderRadius: "10px",
                transition: "background 0.4s ease",
              }}
            />
            <div
              style={{
                width: "22px",
                height: "2px",
                background: isScrolled ? "#000" : "#fff",
                borderRadius: "10px",
                transition: "background 0.4s ease",
              }}
            />
          </div>
        </div>
      </motion.nav>

      {/* FULLSCREEN MOBILE OVERLAY */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: "fixed",
              inset: 0,
              background: "#0F0F0F",
              zIndex: 10000,
              display: "flex",
              flexDirection: "column",
              padding: "40px",
            }}
          >
            <div
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                alignSelf: "flex-end",
                color: "#D4AF37",
                fontSize: "12px",
                letterSpacing: "3px",
                cursor: "pointer",
                marginBottom: "60px",
              }}
            >
              CLOSE ✕
            </div>

            <div
              style={{ display: "flex", flexDirection: "column", gap: "30px" }}
            >
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "42px",
                    color: "#fff",
                    textDecoration: "none",
                  }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            <div
              style={{
                marginTop: "auto",
                borderTop: "1px solid rgba(212,175,55,0.2)",
                paddingTop: "30px",
              }}
            >
              <p
                style={{
                  color: "#D4AF37",
                  fontSize: "10px",
                  letterSpacing: "4px",
                }}
              >
                SKIN CONCEPT © 2024 - ALL RIGHTS RESERVED
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Nav;
