import { useState, useEffect, useRef, useMemo } from "react";
// import { motion, AnimatePresence, useScroll, useTransform   } from "framer-motion";
import { Instagram, Facebook, Twitter } from "lucide-react";
import twentyaxe from "./assets/twentyaxe-logo.png";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useScroll,
  useTransform,
  AnimatePresence,
  useMotionValueEvent,
} from "framer-motion";

// import imge from "../;
const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=Outfit:wght@300;400;500;600;700&display=swap');

:root {
  /* ── Exact salon colors from photo ── */
  --sage:        #7A9490;   /* wall color — sage green-grey */
  --sage-dark:   #5C7470;   /* deeper sage */
  --sage-light:  #A8BCBA;   /* lighter sage */
  --sage-pale:   #EFF4F3;   /* near-white sage tint */
  --sage-bg:     #F4F7F6;   /* page background */
  --sage-bg2:    #EBF0EF;   /* section alt background */

  --copper:      #C4846A;   /* rose gold / copper balloons */
  --copper2:     #D9A088;   /* lighter copper */
  --copper3:     #F0C4B0;   /* pale copper */
  --copper-pale: #FBF0EC;   /* blush copper background */

  --wood:        #C8A87A;   /* warm wood floor */
  --wood-dark:   #9A7A50;   /* deeper wood */
  --wood-pale:   #F5EDE0;   /* pale wood/cream */

  --marble:      #F8F6F2;   /* white marble */
  --black-chair: #1A1A1A;   /* styling chair black */
  --dark:        #1A1A1A;

  --text:        #1C2A28;   /* rich dark text */
  --text2:       #3D5552;   /* medium sage text */
  --text3:       #7A9490;   /* muted sage text */
  --white:       #FFFFFF;
}

*,*::before,*::after{margin:0;padding:0;box-sizing:border-box}
html{scroll-behavior:smooth}
body{font-family:'Outfit',sans-serif;background:var(--sage-bg);color:var(--text);overflow-x:hidden;cursor:none}

#cur{width:14px;height:14px;background:var(--copper);border-radius:50%;position:fixed;top:0;left:0;pointer-events:none;z-index:99999;transform:translate(-50%,-50%);transition:width .3s,height .3s}
#cur-ring{width:46px;height:46px;border:2px solid rgba(196,132,106,.5);border-radius:50%;position:fixed;top:0;left:0;pointer-events:none;z-index:99998;transform:translate(-50%,-50%)}

::-webkit-scrollbar{width:4px}
::-webkit-scrollbar-track{background:var(--sage-bg)}
::-webkit-scrollbar-thumb{background:var(--copper);border-radius:2px}

.display{font-family:'Playfair Display',serif}
.label{font-family:'Outfit',sans-serif;font-size:11px;font-weight:700;letter-spacing:.3em;text-transform:uppercase;color:var(--copper)}

/* ── Keyframes ── */
@keyframes shimmerCopper{0%{background-position:-200% center}100%{background-position:200% center}}
@keyframes spinSlow{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
@keyframes floatBob{0%,100%{transform:translateY(0) rotate(0deg)}33%{transform:translateY(-14px) rotate(2deg)}66%{transform:translateY(6px) rotate(-1deg)}}
@keyframes pulseDot{0%,100%{opacity:.5;transform:scale(1)}50%{opacity:1;transform:scale(1.2)}}
@keyframes marqueeScroll{from{transform:translateX(0)}to{transform:translateX(-50%)}}
@keyframes popIn{from{opacity:0;transform:scale(.91)}to{opacity:1;transform:scale(1)}}
@keyframes slideLeft{from{opacity:0;transform:translateX(-36px)}to{opacity:1;transform:translateX(0)}}
@keyframes glowSage{0%,100%{box-shadow:0 0 30px rgba(122,148,144,.2)}50%{box-shadow:0 0 60px rgba(122,148,144,.5)}}
@keyframes borderCu{0%,100%{border-color:rgba(196,132,106,.3)}50%{border-color:rgba(196,132,106,.9)}}
@keyframes balloonFloat{0%{transform:translateY(100vh) scale(0) rotate(0deg);opacity:0}8%{opacity:.9;transform:translateY(82vh) scale(1) rotate(5deg)}90%{opacity:.3}100%{transform:translateY(-8vh) scale(.7) rotate(-10deg);opacity:0}}
@keyframes marbleSheen{0%{background-position:-200% -200%}100%{background-position:200% 200%}}


.reveal{opacity:0;transform:translateY(48px);transition:opacity .85s cubic-bezier(.16,1,.3,1),transform .85s cubic-bezier(.16,1,.3,1)}
.reveal.left{transform:translateX(-48px)}
.reveal.right{transform:translateX(48px)}
.reveal.scale{transform:scale(.9)}
.reveal.visible{opacity:1!important;transform:none!important}

/* ── Buttons ── */
.btn-sage{position:relative;display:inline-flex;align-items:center;justify-content:center;padding:18px 52px;background:linear-gradient(135deg,var(--sage),var(--sage-dark));border:none;color:#fff;font-family:'Outfit',sans-serif;font-size:12px;font-weight:700;letter-spacing:.25em;text-transform:uppercase;cursor:none;text-decoration:none;overflow:hidden;transition:all .4s;box-shadow:0 6px 28px rgba(122,148,144,.4)}
.btn-sage::before{content:'';position:absolute;inset:0;background:var(--black-chair);transform:scaleX(0);transform-origin:right;transition:transform .5s cubic-bezier(.16,1,.3,1)}
.btn-sage:hover::before{transform:scaleX(1);transform-origin:left}
.btn-sage span{position:relative;z-index:1}

.btn-copper{position:relative;display:inline-flex;align-items:center;justify-content:center;padding:18px 52px;background:linear-gradient(135deg,var(--copper),var(--wood-dark));border:none;color:#fff;font-family:'Outfit',sans-serif;font-size:12px;font-weight:700;letter-spacing:.25em;text-transform:uppercase;cursor:none;text-decoration:none;overflow:hidden;transition:all .4s;box-shadow:0 6px 28px rgba(196,132,106,.4)}
.btn-copper::before{content:'';position:absolute;inset:0;background:var(--sage-dark);transform:scaleX(0);transform-origin:right;transition:transform .5s cubic-bezier(.16,1,.3,1)}
.btn-copper:hover::before{transform:scaleX(1);transform-origin:left}
.btn-copper span{position:relative;z-index:1}

.btn-outline-sage{position:relative;display:inline-flex;align-items:center;justify-content:center;padding:17px 51px;background:transparent;border:2px solid var(--sage);color:var(--sage-dark);font-family:'Outfit',sans-serif;font-size:12px;font-weight:700;letter-spacing:.25em;text-transform:uppercase;cursor:none;text-decoration:none;overflow:hidden;transition:all .4s}
.btn-outline-sage::before{content:'';position:absolute;inset:0;background:linear-gradient(135deg,var(--sage),var(--sage-dark));transform:scaleX(0);transform-origin:right;transition:transform .5s cubic-bezier(.16,1,.3,1)}
.btn-outline-sage:hover::before{transform:scaleX(1);transform-origin:left}
.btn-outline-sage:hover{color:#fff}
.btn-outline-sage span{position:relative;z-index:1}

/* ── Nav ── */
.nav-link{font-family:'Outfit',sans-serif;font-size:12px;font-weight:600;letter-spacing:.16em;text-transform:uppercase;text-decoration:none;color:var(--text2);position:relative;padding-bottom:4px;transition:color .3s;cursor:none}
.nav-link::after{content:'';position:absolute;bottom:0;left:0;width:0;height:2px;background:linear-gradient(90deg,var(--sage),var(--copper));transition:width .4s cubic-bezier(.16,1,.3,1)}
.nav-link:hover{color:var(--sage-dark)}
.nav-link:hover::after{width:100%}

/* ── Service card ── */
.svc-card{background:var(--marble);border:2px solid rgba(122,148,144,.12);padding:52px 40px;position:relative;overflow:hidden;cursor:none;transition:all .4s cubic-bezier(.16,1,.3,1);box-shadow:0 4px 24px rgba(122,148,144,.08)}
.svc-card::after{content:'';position:absolute;bottom:0;left:0;right:0;height:4px;background:linear-gradient(90deg,var(--sage),var(--copper));transform:scaleX(0);transform-origin:left;transition:transform .5s cubic-bezier(.16,1,.3,1)}
.svc-card:hover{border-color:rgba(122,148,144,.4);transform:translateY(-10px);box-shadow:0 24px 64px rgba(122,148,144,.2)}
.svc-card:hover::after{transform:scaleX(1)}

/* ── Price card ── */
.price-card{background:var(--marble);border:2px solid rgba(122,148,144,.15);padding:44px 36px;position:relative;overflow:hidden;cursor:none;transition:all .4s cubic-bezier(.16,1,.3,1);box-shadow:0 4px 20px rgba(122,148,144,.07)}
.price-card:hover{transform:translateY(-8px);box-shadow:0 20px 60px rgba(122,148,144,.18);border-color:var(--sage)}
.price-card.featured{background:linear-gradient(145deg,var(--sage-pale),#E8F0EF);border:2px solid var(--sage);box-shadow:0 8px 40px rgba(122,148,144,.2)}
.price-card.featured::before{content:'Most Popular';position:absolute;top:20px;right:-32px;background:linear-gradient(135deg,var(--sage),var(--sage-dark));color:#fff;font-size:9px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;padding:6px 48px;transform:rotate(45deg)}

/* ── Testi card ── */
.testi-card{background:var(--marble);border:2px solid rgba(122,148,144,.15);padding:40px 32px;transition:all .4s;cursor:none}
.testi-card.active{border-color:var(--sage);box-shadow:0 12px 48px rgba(122,148,144,.2);transform:translateY(-6px)}

/* ── Form ── */
.finput{width:100%;background:var(--marble);border:2px solid rgba(122,148,144,.2);padding:16px 20px;color:var(--text);font-family:'Outfit',sans-serif;font-size:14px;font-weight:400;outline:none;transition:border-color .3s,box-shadow .3s;cursor:none}
.finput:focus{border-color:var(--sage);box-shadow:0 0 0 4px rgba(122,148,144,.12)}
.finput::placeholder{color:var(--text3)}
select.finput{background:var(--marble)}

/* ── Marquee ── */
.mwrap{overflow:hidden;border-top:2px solid rgba(122,148,144,.2);border-bottom:2px solid rgba(122,148,144,.2);padding:18px 0;background:var(--marble)}
.mtrack{display:flex;animation:marqueeScroll 26s linear infinite;white-space:nowrap}

/* ── Gallery hover ── */
.gal-item{position:relative;overflow:hidden;cursor:none}
.gal-overlay{position:absolute;inset:0;background:linear-gradient(to top,rgba(26,26,26,.85) 0%,rgba(92,116,112,.3) 60%,transparent 100%);opacity:0;transition:opacity .4s}
.gal-item:hover .gal-overlay{opacity:1}
.gal-label{position:absolute;bottom:24px;left:24px;right:24px;z-index:2;opacity:0;transform:translateY(10px);transition:all .4s}
.gal-item:hover .gal-label{opacity:1;transform:translateY(0)}

/* ── WhatsApp float ── */
.wa-float{position:fixed;bottom:32px;right:32px;z-index:5000;width:62px;height:62px;background:linear-gradient(135deg,#25D366,#128C7E);border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:none;box-shadow:0 6px 32px rgba(37,211,102,.45);transition:transform .3s;animation:pulseDot 2.5s ease-in-out infinite}
.wa-float:hover{transform:scale(1.12)}

/* ── Tab button ── */
.tab-btn{flex:1;padding:20px;border:2px solid rgba(122,148,144,.2);font-family:'Outfit',sans-serif;font-size:12px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;cursor:none;transition:all .4s;background:var(--marble);color:var(--text2)}
.tab-btn.active{background:linear-gradient(135deg,var(--sage),var(--sage-dark));border-color:var(--sage-dark);color:#fff;box-shadow:0 8px 28px rgba(122,148,144,.35)}
`;

/* ── CURSOR ── */
function Cursor() {
  const c = useRef(null),
    r = useRef(null);
  const pos = useRef({ x: 0, y: 0 }),
    ring = useRef({ x: 0, y: 0 });
  useEffect(() => {
    const move = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (c.current) {
        c.current.style.left = e.clientX + "px";
        c.current.style.top = e.clientY + "px";
      }
    };
    const anim = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.12;
      ring.current.y += (pos.current.y - ring.current.y) * 0.12;
      if (r.current) {
        r.current.style.left = ring.current.x + "px";
        r.current.style.top = ring.current.y + "px";
      }
      requestAnimationFrame(anim);
    };
    window.addEventListener("mousemove", move);
    anim();
    return () => window.removeEventListener("mousemove", move);
  }, []);
  return (
    <>
      <div ref={c} id="cur" />
      <div ref={r} id="cur-ring" />
    </>
  );
}

/* ── BALLOONS (from photo) ── */
function Balloons() {
  const balls = Array.from({ length: 14 }, (_, i) => ({
    id: i,
    left: `${5 + Math.random() * 90}%`,
    delay: `${Math.random() * 14}s`,
    dur: `${14 + Math.random() * 12}s`,
    size: `${12 + Math.random() * 14}px`,
    color:
      i % 3 === 0
        ? "var(--copper)"
        : i % 3 === 1
          ? "var(--copper3)"
          : "var(--wood)",
  }));
  return (
    <div
      style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 1 }}
    >
      {balls.map((b) => (
        <div
          key={b.id}
          style={{
            position: "absolute",
            bottom: "-20px",
            left: b.left,
            width: b.size,
            height: b.size,
            borderRadius: "50% 50% 50% 48%",
            background: b.color,
            animation: `balloonFloat ${b.dur} ${b.delay} infinite linear`,
            opacity: 0.35,
            boxShadow: `inset -2px -2px 4px rgba(0,0,0,.15)`,
          }}
        />
      ))}
    </div>
  );
}

/* ── REVEAL ── */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setTimeout(
              () => e.target.classList.add("visible"),
              (e.target.dataset.delay || 0) * 120,
            );
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08 },
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

/* ── NAV ── */

function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  // Detect scroll position
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 40);
  });

  const navLinks = [
    { name: "Atelier", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Pricing", href: "#pricing" },
    { name: "Book", href: "#book" },
  ];

  return (
    <>
      {/* FONTS + LINK STYLES */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;600&display=swap');

        .nav-link {
          font-family: 'Inter', sans-serif;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-size: 11px;
          position: relative;
          color: #fff;
          text-decoration: none;
          opacity: 0.8;
          transition: opacity 0.3s ease;
        }

        .nav-link:hover {
          opacity: 1;
        }

        .nav-link::after {
          content: "";
          position: absolute;
          bottom: -6px;
          left: 0;
          width: 0%;
          height: 1px;
          background: #D4AF37;
          transition: width 0.35s ease;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        @media (max-width: 1024px) {
          .desktop-menu {
            display: none !important;
          }
        }
      `}</style>

      {/* PROFESSIONAL NAVBAR */}
      <motion.nav
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: "fixed",
          top: isScrolled ? "18px" : "0",
          left: 0,
          right: 0,
          margin: "0 auto",

          width: isScrolled ? "92%" : "100%",
          maxWidth: "1400px",
          height: isScrolled ? "72px" : "95px",

          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",

          padding: "0 80px",

          background: isScrolled ? "rgba(243, 241, 241, 0.6)" : "transparent",

          backdropFilter: isScrolled ? "blur(22px)" : "none",

          border: isScrolled
            ? "1px solid rgba(212,175,55,0.18)"
            : "1px solid transparent",

          borderRadius: isScrolled ? "100px" : "0px",

          boxShadow: isScrolled ? "0 20px 40px rgba(0,0,0,0.35)" : "none",

          transition:
            "width 0.4s ease, height 0.4s ease, top 0.4s ease, background 0.4s ease, border 0.4s ease",

          zIndex: 9999,
        }}
      >
        {/* LOGO */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src={twentyaxe}
            alt="TwentyAxe Salon"
            style={{
              height: isScrolled ? "126px" : "58px",
              width: "auto",
              filter: isScrolled ? "brightness(1)" : "brightness(1.2)",
              transition: "all 0.4s ease",
            }}
          />
        </div>

        {/* DESKTOP LINKS */}
        <div
          className="desktop-menu"
          style={{
            display: "flex",
            gap: "42px",
            alignItems: "center",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="nav-link"
              style={{
                color: isScrolled ? "#000" : "#fff",
                transition: "color 0.3s ease",
              }}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* RIGHT SIDE */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
          }}
        >
          <a
            href="#book"
            style={{
              padding: "12px 30px",
              background: "#D4AF37",
              color: "#000",
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "2px",
              textTransform: "uppercase",
              textDecoration: "none",
              borderRadius: "3px",
              transition: "all 0.3s ease",
            }}
          >
            Reserve
          </a>

          {/* BURGER MENU */}
          <div
            onClick={() => setIsMobileMenuOpen(true)}
            style={{
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              gap: "6px",
            }}
          >
            <div
              style={{
                width: "26px",
                height: "2px",
                background: "#D4AF37",
              }}
            />
            <div
              style={{
                width: "18px",
                height: "2px",
                background: "#D4AF37",
                alignSelf: "flex-end",
              }}
            />
          </div>
        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at 90% 10%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 90% 10%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 90% 10%)" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: "fixed",
              inset: 0,
              background: "#0A0A0A",
              zIndex: 10000,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "0 10%",
            }}
          >
            {/* CLOSE */}
            <div
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                position: "absolute",
                top: "32px",
                right: "32px",
                fontSize: "12px",
                letterSpacing: "4px",
                color: "#D4AF37",
                cursor: "pointer",
              }}
            >
              CLOSE ✕
            </div>

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(36px, 6vw, 72px)",
                  color: "#fff",
                  textDecoration: "none",
                  marginBottom: "18px",
                }}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

const SLIDES = [
  {
    id: "01",
    tag: "THE ARCHIVE",
    title: "SILHOUETTE \n & STRUCTURE",
    desc: "Precision cutting meets the fluidity of natural movement. A sanctuary for the modern aesthetic.",
    img: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=100",
  },
  {
    id: "02",
    tag: "LUMIÈRE",
    title: "CHROMATIC \n EVOLUTION",
    desc: "Scientific color theory blended with artistic intuition. Discover light-reflective luxury.",
    img: "https://images.unsplash.com/photo-1620331311520-246422fd82f9?auto=format&fit=crop&q=100",
  },
  {
    id: "03",
    tag: "ATELIER",
    title: "TEXTURE & FLOW",
    desc: "Layered craftsmanship designed with architectural precision and soft movement.",
    img: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=100",
  },
  {
    id: "04",
    tag: "NOIR EDITION",
    title: "MIDNIGHT GLOSS",
    desc: "Deep reflective tones sculpted under controlled studio lighting.",
    img: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=100",
  },
  {
    id: "05",
    tag: "SIGNATURE",
    title: "FORM & BALANCE",
    desc: "Modern silhouettes refined through disciplined cutting geometry.",
    img: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&q=100",
  },
  {
    id: "06",
    tag: "COUTURE",
    title: "SCULPTED LIGHT",
    desc: "Illuminated strands shaped to frame expression and identity.",
    img: "https://images.unsplash.com/photo-1500840216050-6ffa99d75160?auto=format&fit=crop&q=100",
  },
  {
    id: "07",
    tag: "ESSENCE",
    title: "RAW ELEGANCE",
    desc: "Natural texture elevated through minimalist design philosophy.",
    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&q=100",
  },
  {
    id: "08",
    tag: "THE STUDIO",
    title: "MODERN AURA",
    desc: "Contemporary hair artistry influenced by fashion runway aesthetics.",
    img: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&q=100",
  },
];

function Hero() {
  const [index, setIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const intervalRef = useRef(null);

  // 🔥 Preload images once
  useEffect(() => {
    const preload = async () => {
      const promises = SLIDES.map((slide) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = slide.img;
          img.onload = resolve;
        });
      });

      await Promise.all(promises);
      setLoaded(true);
    };

    preload();
  }, []);

  // 🔥 Stable interval (no drift)
  useEffect(() => {
    if (!loaded) return;

    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % SLIDES.length);
    }, 7000);

    return () => clearInterval(intervalRef.current);
  }, [loaded]);

  if (!loaded) return null;

  const currentSlide = SLIDES[index];

  return (
    <section
      style={{
        height: "100vh",
        width: "100%",
        backgroundColor: "#000",
        color: "#fff",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* BACKGROUND CROSSFADE */}
      <motion.div
        key={index}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.8, ease: "easeInOut" }}
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${currentSlide.img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, rgba(0,0,0,0.85) 25%, rgba(0,0,0,0.3) 100%)",
          }}
        />
      </motion.div>

      {/* NAV */}

      {/* CONTENT */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          height: "100%",
          display: "flex",
          alignItems: "center",
          padding: "0 10%",
        }}
      >
        <div style={{ maxWidth: "800px" }}>
          <motion.span
            key={currentSlide.tag}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            style={{
              display: "block",
              color: "#D4AF37",
              letterSpacing: "8px",
              fontSize: "11px",
              marginBottom: "20px",
            }}
          >
            {currentSlide.tag}
          </motion.span>

          <motion.h1
            key={currentSlide.title}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            style={{
              fontSize: "clamp(40px, 8vw, 100px)",
              fontFamily: "serif",
              fontWeight: 300,
              lineHeight: 0.9,
              marginBottom: "30px",
              whiteSpace: "pre-line",
            }}
          >
            {currentSlide.title}
          </motion.h1>

          <motion.div
            key={index + "-line"}
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ duration: 1.2 }}
            style={{
              height: "1px",
              background: "rgba(255,255,255,0.3)",
              marginBottom: "30px",
            }}
          />

          <motion.p
            key={currentSlide.desc}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            style={{
              fontSize: "16px",
              color: "rgba(255,255,255,0.6)",
              maxWidth: "400px",
              lineHeight: "1.8",
              marginBottom: "50px",
            }}
          >
            {currentSlide.desc}
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            style={{
              background: "transparent",
              border: "1px solid #D4AF37",
              padding: "18px 45px",
              color: "#D4AF37",
              fontSize: "12px",
              textTransform: "uppercase",
              letterSpacing: "2px",
              cursor: "pointer",
              transition: "0.4s ease",
            }}
          >
            Book Private Session
          </motion.button>
        </div>
      </div>

      {/* SOCIAL MEDIA */}

      {/* PROGRESS BAR */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "2px",
          background: "rgba(255,255,255,0.1)",
          zIndex: 20,
        }}
      >
        <motion.div
          key={index}
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 7, ease: "linear" }}
          style={{ height: "100%", background: "#D4AF37" }}
        />
      </div>
    </section>
  );
}

const features = [
  {
    id: "01",
    title: "Styling Atelier",
    img: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1000",
  },
  {
    id: "02",
    title: "The Facial Suite",
    img: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=1000",
  },
  {
    id: "03",
    title: "Premium Rituals",
    img: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1000",
  },
];

function SalonShowcase() {
  const containerRef = useRef(null);

  // Use scroll progress for a smooth "Scale" and "Fade" on the background text
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], [300, -300]);
  const scaleImg = useTransform(scrollYProgress, [0, 1], [0.9, 1.1]);

  return (
    <div
      ref={containerRef}
      style={{
        background: "#637B77",
        minHeight: "300vh",
        position: "relative",
        boxShadow: "0 -20px 100px rgba(0,0,0,0.5)",
      }}
    >
      {/* FIXED HEADER: 
         This container stays locked to the top of the screen while you scroll 
      */}
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        {/* LARGE BACKGROUND TEXT */}
        <motion.h2
          style={{
            position: "absolute",
            fontSize: "25vw",
            fontWeight: 900,
            color: "rgba(255,255,255,0.04)",
            whiteSpace: "nowrap",
            zIndex: 1,
            y: yText, // Moves based on scroll
          }}
        >
          EST. TWENTYAXE
        </motion.h2>

        {/* FLOATING IMAGE GALLERY */}
        <div
          style={{
            display: "flex",
            gap: "100px",
            zIndex: 5,
            padding: "0 10vw",
            alignItems: "center",
          }}
        >
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: i * 0.2 }}
              style={{ width: "350px", position: "relative" }}
            >
              <div
                style={{
                  padding: "15px",
                  border: "1px solid rgba(255,255,255,0.2)",
                  background: "rgba(255,255,255,0.05)",
                  backdropFilter: "blur(15px)",
                }}
              >
                <motion.img
                  style={{
                    scale: scaleImg,
                    width: "100%",
                    aspectRatio: "3/4",
                    objectFit: "cover",
                  }}
                  src={item.img}
                />
              </div>

              <div style={{ marginTop: "30px" }}>
                <span
                  style={{
                    color: "#D4AF37",
                    fontFamily: "monospace",
                    fontSize: "12px",
                    letterSpacing: "4px",
                  }}
                >
                  {item.id}
                </span>
                <h3
                  style={{
                    color: "#fff",
                    fontFamily: "serif",
                    fontSize: "28px",
                    fontWeight: 300,
                    marginTop: "10px",
                  }}
                >
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        <div
          style={{
            position: "absolute",
            bottom: "60px",
            right: "60px",
            writingMode: "vertical-rl",
            textTransform: "uppercase",
            letterSpacing: "8px",
            fontSize: "10px",
            color: "rgba(255,255,255,0.4)",
          }}
        >
          Architecture — Design — Rituals
        </div>
      </div>

      {/* Philosophy Card Section */}
      <div
        style={{
          height: "100vh",
          position: "relative",
          zIndex: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 10%",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{
            background: "#FAF9F6",
            color: "#637B77",
            padding: "80px",
            maxWidth: "600px",
            boxShadow: "0 50px 100px rgba(0,0,0,0.1)",
          }}
        >
          <h4
            style={{
              letterSpacing: "5px",
              fontSize: "12px",
              textTransform: "uppercase",
              marginBottom: "20px",
            }}
          >
            The Philosophy
          </h4>
          <p
            style={{ fontSize: "20px", lineHeight: "1.8", fontFamily: "serif" }}
          >
            We believe that beauty is not a service, but a sequence of refined
            moments. Our sanctuary provides the silence your soul requires.
          </p>
          <div
            style={{
              marginTop: "40px",
              width: "40px",
              height: "1px",
              background: "#637B77",
            }}
          />
        </motion.div>
      </div>
    </div>
  );
}

/* ── ABOUT ── */
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

/* ── SERVICES ── */
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
        padding: "clamp(80px,10vw,160px) 6vw",
        background: "#0f0f0f",
        color: "#fff",
      }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        {/* Heading */}
        <div
          style={{
            marginBottom: "clamp(60px,8vw,120px)",
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
                letterSpacing: "0.4em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.5)",
              }}
            >
              What We Offer
            </span>

            <h2
              style={{
                fontSize: "clamp(40px,6vw,90px)",
                fontWeight: 200,
                lineHeight: 1,
                marginTop: "20px",
              }}
            >
              Our Services
            </h2>
          </div>

          <p
            style={{
              maxWidth: "420px",
              lineHeight: 1.8,
              color: "rgba(255,255,255,0.6)",
            }}
          >
            Every experience is curated around you — your features, your
            lifestyle, your vision.
          </p>
        </div>

        {/* Tabs */}
        <div
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
            marginBottom: "50px",
          }}
        >
          {services.map((svc, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              style={{
                padding: "14px 28px",
                borderRadius: "50px",
                border: `1px solid ${
                  i === active ? svc.accent : "rgba(255,255,255,0.2)"
                }`,
                background: i === active ? svc.accent : "transparent",
                color: i === active ? "#000" : "#fff",
                cursor: "pointer",
                fontSize: "14px",
                letterSpacing: "1px",
                transition: "0.3s ease",
              }}
            >
              {svc.icon} {svc.title}
            </button>
          ))}
        </div>

        {/* Content Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.5 }}
            style={{
              background: current.bg,
              color: "#111",
              borderRadius: "20px",
              padding: "clamp(40px,6vw,80px)",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
              gap: "60px",
            }}
          >
            {/* Left */}
            <div>
              <div style={{ fontSize: "50px", marginBottom: "20px" }}>
                {current.icon}
              </div>

              <h3
                style={{
                  fontSize: "clamp(30px,4vw,56px)",
                  fontWeight: 300,
                  marginBottom: "15px",
                }}
              >
                {current.title}
              </h3>

              <p
                style={{
                  fontStyle: "italic",
                  fontSize: "18px",
                  color: current.accent,
                  marginBottom: "25px",
                }}
              >
                {current.tagline}
              </p>

              <p
                style={{
                  lineHeight: 1.8,
                  color: "#444",
                  marginBottom: "40px",
                }}
              >
                {current.desc}
              </p>

              <button
                style={{
                  padding: "14px 30px",
                  background: current.accent,
                  border: "none",
                  borderRadius: "50px",
                  color: "#000",
                  cursor: "pointer",
                  fontWeight: 600,
                }}
              >
                View Pricing →
              </button>
            </div>

            {/* Right List */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              {current.items.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ x: 8 }}
                  style={{
                    padding: "18px 24px",
                    borderRadius: "12px",
                    background: "#fff",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    boxShadow: "0 8px 30px rgba(0,0,0,0.05)",
                    cursor: "pointer",
                  }}
                >
                  <span style={{ fontWeight: 500 }}>{item}</span>
                  <span style={{ color: current.accent }}>→</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

// Meet Our Team Section
const teamMembers = [
  {
    name: "Aarav Mehta",
    role: "Creative Director",
    image:
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=100",
  },
  {
    name: "Sofia Kapoor",
    role: "Senior Stylist",
    image:
      "https://images.unsplash.com/photo-1620331311520-246422fd82f9?auto=format&fit=crop&q=100",
  },
  {
    name: "Reyansh Patel",
    role: "Master Barber",
    image:
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=100",
  },
  {
    name: "Elena Sharma",
    role: "Color Specialist",
    image:
      "https://images.unsplash.com/photo-1500840216050-6ffa99d75160?auto=format&fit=crop&q=100",
  },
  {
    name: "Elena Sharma",
    role: "Color Specialist",
    image:
      "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&q=100",
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

/* ── PRICING ── */

/* Scroll Reveal Hook */

function useScrollReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, visible];
}

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

/* ── GALLERY ── */
function Gallery() {
  const items = [
    {
      label: "Rose Gold Color",
      sub: "Hair Transformation",
      img: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80",
    },
    {
      label: "Salon Interior",
      sub: "Clean & Cozy Vibes",
      img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80",
    },
    {
      label: "Gold Facial",
      sub: "Skin Transformation",
      img: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&q=80",
    },
    {
      label: "Precision Cut",
      sub: "Modern Styling",
      img: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80",
    },
    {
      label: "Keratin",
      sub: "Silk Smooth Results",
      img: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&q=80",
    },
    {
      label: "Bridal Makeup",
      sub: "Occasion Ready",
      img: "https://images.unsplash.com/photo-1520975922323-5b3c1a3d5d1b?auto=format&fit=crop&q=80",
    },
  ];

  return (
    <section
      id="gallery"
      style={{
        padding: "clamp(80px,10vw,160px) clamp(20px,6vw,80px)",
        background: "#f7f5f2",
      }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: "80px" }}>
          <h2
            style={{
              fontSize: "clamp(36px,6vw,72px)",
              fontWeight: 900,
              marginBottom: "16px",
            }}
          >
            Our <span style={{ color: "#C6A972" }}>Transformations</span>
          </h2>
          <p
            style={{
              maxWidth: "600px",
              margin: "0 auto",
              fontSize: "16px",
              lineHeight: "1.8",
              color: "#666",
            }}
          >
            Real clients. Real results. Luxury artistry crafted with precision.
          </p>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: "30px",
          }}
        >
          {items.map((item, i) => (
            <div
              key={i}
              style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: "24px",
                height: "380px",
                cursor: "pointer",
                boxShadow: "0 20px 60px rgba(0,0,0,0.08)",
                transition: "all .5s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "translateY(-10px)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "translateY(0)")
              }
            >
              <img
                src={item.img}
                alt={item.label}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform .6s ease",
                }}
              />

              {/* Overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.1))",
                  display: "flex",
                  alignItems: "flex-end",
                  padding: "30px",
                  color: "#fff",
                }}
              >
                <div>
                  <h3 style={{ fontSize: "22px", fontWeight: 700 }}>
                    {item.label}
                  </h3>
                  <p style={{ fontSize: "14px", opacity: 0.8 }}>{item.sub}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── TESTIMONIALS ── */

const testimonials = [
  {
    id: "01",
    text: "The structural precision of the cut is unmatched. A sanctuary of quiet luxury.",
    name: "Elena Vance",
    role: "Creative Director",
  },
  {
    id: "02",
    text: "Bespoke color palettes curated specifically for my skin tone. Pure artistry.",
    name: "Sophia Laurent",
    role: "Bridal Client",
  },
];

function Testimonials() {
  const [active, setActive] = useState(0);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax elements for that "Deep" feeling
  const yImage = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <section
      ref={containerRef}
      style={{
        height: "140vh",
        background: "#FAF9F6", // Cream base
        position: "relative",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {/* 1. LARGE BACKGROUND IMAGE (The "Mood" Layer) */}
      <motion.div
        style={{
          position: "absolute",
          right: "5%",
          width: "45vw",
          height: "60vh",
          y: yImage,
          zIndex: 1,
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1000"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.8,
          }}
          alt="Salon Mood"
        />
        {/* Sage Overlay to tie it back to your brand color */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(99, 123, 119, 0.2)",
          }}
        />
      </motion.div>

      {/* 2. VERTICAL BRANDING */}
      <div
        style={{
          position: "absolute",
          left: "5%",
          top: "10%",
          writingMode: "vertical-rl",
          textTransform: "uppercase",
          letterSpacing: "10px",
          fontSize: "12px",
          color: "#637B77",
          fontWeight: 600,
        }}
      >
        Maison De Beauté — Les Témoignages
      </div>

      {/* 3. THE FLOATING TESTIMONIAL CARD */}
      <motion.div
        style={{
          marginLeft: "15%",
          width: "35vw",
          zIndex: 10,
          y: yText,
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 30 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span
              style={{
                fontSize: "14px",
                color: "#D4AF37",
                fontFamily: "monospace",
              }}
            >
              {testimonials[active].id} / 0{testimonials.length}
            </span>

            <h2
              style={{
                fontFamily: "serif",
                fontSize: "clamp(32px, 4vw, 56px)",
                lineHeight: 1.2,
                color: "#1a1a1a",
                margin: "30px 0",
                fontWeight: 400,
                fontStyle: "italic",
              }}
            >
              "{testimonials[active].text}"
            </h2>

            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <div
                style={{ width: "40px", height: "1px", background: "#637B77" }}
              />
              <div>
                <p
                  style={{
                    margin: 0,
                    fontWeight: 700,
                    fontSize: "18px",
                    color: "#1a1a1a",
                  }}
                >
                  {testimonials[active].name}
                </p>
                <p
                  style={{
                    margin: 0,
                    fontSize: "12px",
                    color: "#637B77",
                    textTransform: "uppercase",
                    letterSpacing: "2px",
                  }}
                >
                  {testimonials[active].role}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* CUSTOM BUTTONS (Minimalist) */}
        <div style={{ display: "flex", gap: "30px", marginTop: "60px" }}>
          <button
            onClick={() =>
              setActive((prev) =>
                prev === 0 ? testimonials.length - 1 : prev - 1,
              )
            }
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "20px",
              color: "#1a1a1a",
            }}
          >
            ←
          </button>
          <button
            onClick={() =>
              setActive((prev) => (prev + 1) % testimonials.length)
            }
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "20px",
              color: "#1a1a1a",
            }}
          >
            →
          </button>
        </div>
      </motion.div>

      {/* 4. DESIGN ELEMENT (The "Sage Line") */}
      <div
        style={{
          position: "absolute",
          bottom: "0",
          right: "0",
          width: "30vw",
          height: "1px",
          background: "#637B77",
          opacity: 0.3,
        }}
      />
    </section>
  );
}
/* ── BOOKING ── */

function Booking() {
  const lat = 22.9829881;
  const lng = 72.6220093;

  // High-end Embed URL with the exact Pin location
  const mapSrc = `https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1000!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin`;
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    message: "",
  });

  const [done, setDone] = useState(false);
  const [focused, setFocused] = useState(null);

  const up = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  return (
    <section
      id="book"
      style={{
        padding: "120px 6vw",
        background: "#F8F7F4",
      }}
    >
      <div
        style={{
          maxWidth: "1500px",
          margin: "0 auto",
        }}
      >
        {/* Section Heading */}
        <div style={{ textAlign: "center", marginBottom: "80px" }}>
          <h2
            style={{
              fontSize: "clamp(36px,4vw,60px)",
              fontWeight: 500,
              letterSpacing: "-0.02em",
              marginBottom: "16px",
              color: "#1E1E1E",
            }}
          >
            Book Your Appointment
          </h2>
          <p
            style={{
              maxWidth: "600px",
              margin: "0 auto",
              color: "#6A6A6A",
              fontSize: "16px",
              lineHeight: 1.8,
            }}
          >
            Visit us or reserve your slot online. We confirm bookings within a
            few hours.
          </p>
        </div>

        {/* Grid Layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "60px",
          }}
          className="booking-grid"
        >
          {/* Google Map */}
          <div
            style={{
              borderRadius: "24px",
              overflow: "hidden",
              boxShadow: "0 20px 60px rgba(0,0,0,0.08)",
              minHeight: "500px",
            }}
          >
            <iframe
              // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.2081829352213!2d72.6416629!3d22.979391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e87a98bc75ebf%3A0xbc2a329aa680db5f!2sTwenty%20Axe%20Saloon!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
              src={mapSrc}
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(0.2) contrast(1.1)" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Twenty Axe Saloon Location"
            />
          </div>

          {/* Form */}
          <div
            style={{
              background: "#FFFFFF",
              padding: "60px 50px",
              borderRadius: "28px",
              boxShadow: "0 30px 80px rgba(0,0,0,0.06)",
            }}
          >
            {done ? (
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: "60px", marginBottom: "20px" }}>✓</div>
                <h3
                  style={{
                    fontSize: "28px",
                    marginBottom: "16px",
                    color: "#111",
                  }}
                >
                  Booking Request Sent
                </h3>
                <p
                  style={{
                    color: "#666",
                    fontSize: "15px",
                    lineHeight: 1.8,
                  }}
                >
                  Thank you! We'll confirm your appointment shortly.
                </p>
                <button
                  onClick={() => setDone(false)}
                  style={{
                    marginTop: "30px",
                    padding: "14px 30px",
                    borderRadius: "50px",
                    border: "1px solid #111",
                    background: "transparent",
                    cursor: "pointer",
                  }}
                >
                  Book Again
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setDone(true);
                }}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                {[
                  ["name", "Full Name", "text"],
                  ["phone", "WhatsApp Number", "tel"],
                ].map(([k, ph, tp]) => (
                  <input
                    key={k}
                    type={tp}
                    required
                    placeholder={ph}
                    value={form[k]}
                    onChange={(e) => up(k, e.target.value)}
                    onFocus={() => setFocused(k)}
                    onBlur={() => setFocused(null)}
                    style={{
                      padding: "16px 18px",
                      borderRadius: "12px",
                      border:
                        focused === k ? "2px solid #B38B59" : "1px solid #DDD",
                      fontSize: "15px",
                      outline: "none",
                      transition: "all .3s ease",
                    }}
                  />
                ))}

                <input
                  type="date"
                  value={form.date}
                  onChange={(e) => up("date", e.target.value)}
                  style={{
                    padding: "16px 18px",
                    borderRadius: "12px",
                    border: "1px solid #DDD",
                    fontSize: "15px",
                  }}
                />

                <select
                  required
                  value={form.service}
                  onChange={(e) => up("service", e.target.value)}
                  style={{
                    padding: "16px 18px",
                    borderRadius: "12px",
                    border: "1px solid #DDD",
                    fontSize: "15px",
                  }}
                >
                  <option value="" disabled>
                    Select Service
                  </option>
                  <option>Hair Artistry</option>
                  <option>Skin & Glow</option>
                  <option>Bridal & Occasion</option>
                  <option>Consultation</option>
                </select>

                <textarea
                  rows={4}
                  placeholder="Special request..."
                  value={form.message}
                  onChange={(e) => up("message", e.target.value)}
                  style={{
                    padding: "16px 18px",
                    borderRadius: "12px",
                    border: "1px solid #DDD",
                    fontSize: "15px",
                    resize: "vertical",
                  }}
                />

                <button
                  type="submit"
                  style={{
                    marginTop: "10px",
                    padding: "18px",
                    borderRadius: "50px",
                    border: "none",
                    background: "linear-gradient(135deg,#B38B59,#D6B98C)",
                    color: "#fff",
                    fontSize: "15px",
                    fontWeight: 500,
                    cursor: "pointer",
                    transition: "all .3s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.transform = "translateY(-3px)")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.transform = "translateY(0)")
                  }
                >
                  Send Appointment →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Responsive Fix */}
      <style>{`
        @media(max-width: 1024px){
          .booking-grid{
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

/* ── FOOTER ── */

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "linear-gradient(180deg, #0f0f0f 0%, #151515 100%)",
        color: "#fff",
        padding: "140px 8% 60px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* SOFT TOP GLOW */}
      <div
        style={{
          position: "absolute",
          top: "-200px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "700px",
          height: "700px",
          background:
            "radial-gradient(circle, rgba(212,175,55,0.15) 0%, transparent 70%)",
          filter: "blur(120px)",
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative", zIndex: 2 }}>
        {/* LARGE BRAND MARK */}
        <div
          style={{
            fontSize: "clamp(40px, 8vw, 90px)",
            fontWeight: 200,
            letterSpacing: "8px",
            marginBottom: "80px",
            textAlign: "center",
          }}
        >
          MAISON
        </div>

        {/* GRID SECTION */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "70px",
            marginBottom: "120px",
          }}
        >
          {/* ABOUT */}
          <div>
            <h4
              style={{
                color: "#D4AF37",
                fontSize: "12px",
                letterSpacing: "4px",
                marginBottom: "25px",
                textTransform: "uppercase",
              }}
            >
              About
            </h4>

            <p
              style={{
                color: "rgba(255,255,255,0.6)",
                lineHeight: "1.9",
                fontSize: "15px",
                maxWidth: "320px",
              }}
            >
              A sanctuary where ritual meets architecture. Every appointment is
              a private journey curated for refinement and elegance.
            </p>
          </div>

          {/* STUDIO */}
          <div>
            <h4
              style={{
                color: "#D4AF37",
                fontSize: "12px",
                letterSpacing: "4px",
                marginBottom: "25px",
                textTransform: "uppercase",
              }}
            >
              Studio
            </h4>

            <div style={{ lineHeight: "2.2", fontSize: "15px" }}>
              <div>Jashoda Nagar, Ahmedabad</div>
              <div>Tue — Sun</div>
              <div>10:00 AM — 08:00 PM</div>
              <div style={{ marginTop: "15px", fontWeight: 600 }}>
                +91 98765 43210
              </div>
            </div>
          </div>

          {/* EXPLORE */}
          <div>
            <h4
              style={{
                color: "#D4AF37",
                fontSize: "12px",
                letterSpacing: "4px",
                marginBottom: "25px",
                textTransform: "uppercase",
              }}
            >
              Explore
            </h4>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "15px",
                fontSize: "15px",
              }}
            >
              {["Atelier", "Menu", "Reflections", "Journal"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  style={{
                    textDecoration: "none",
                    color: "rgba(255,255,255,0.7)",
                    position: "relative",
                    width: "fit-content",
                    transition: "0.3s",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "#D4AF37")}
                  onMouseLeave={(e) =>
                    (e.target.style.color = "rgba(255,255,255,0.7)")
                  }
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* CTA PANEL */}
          <div
            style={{
              padding: "40px",
              background: "rgba(255,255,255,0.05)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <h4
              style={{
                fontSize: "22px",
                fontWeight: 300,
                marginBottom: "25px",
              }}
            >
              Begin Your Transformation
            </h4>

            <a
              href="#book"
              style={{
                display: "inline-block",
                padding: "18px 40px",
                border: "1px solid #D4AF37",
                color: "#D4AF37",
                textDecoration: "none",
                fontSize: "12px",
                letterSpacing: "3px",
                textTransform: "uppercase",
                transition: "0.4s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "#D4AF37";
                e.target.style.color = "#000";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "transparent";
                e.target.style.color = "#D4AF37";
              }}
            >
              Reserve Session
            </a>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.1)",
            paddingTop: "35px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "20px",
            fontSize: "12px",
            color: "rgba(255,255,255,0.4)",
            letterSpacing: "2px",
            textTransform: "uppercase",
          }}
        >
          <div>© {currentYear} Maison TwentyAxe</div>

          <div style={{ display: "flex", gap: "30px" }}>
            <span style={{ cursor: "pointer" }}>Privacy</span>
            <span style={{ cursor: "pointer" }}>Terms</span>
            <span style={{ color: "#D4AF37", cursor: "pointer" }}>
              Instagram
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ── WHATSAPP ── */
function WhatsAppFloat() {
  return (
    <a href="https://wa.me/91XXXXXXXXXX" className="wa-float">
      <svg width="30" height="30" viewBox="0 0 24 24" fill="white">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.564 4.14 1.534 5.876L0 24l6.29-1.51A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.896 0-3.676-.5-5.21-1.374l-.374-.22-3.862.928.972-3.76-.243-.387A9.935 9.935 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
      </svg>
    </a>
  );
}

/* ── APP ── */
export default function App() {
  useReveal();
  return (
    <div>
      <style>{CSS}</style>
      <Cursor />
      {/* <Balloons /> */}
      <Nav />
      {/* <div style={{ position: "relative", zIndex: 1 }}> */}
      <Hero />
      {/* </div> */}

      {/* <div style={{ position: "relative", zIndex: 2 }}> */}
      <SalonShowcase />
      {/* </div> */}
      <About />
      <Team />
      <Stats />
      <Services />
      <Pricing />
      <Gallery />
      <Testimonials />
      <Booking />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
