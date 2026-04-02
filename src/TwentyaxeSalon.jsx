import { useState, useEffect, useRef } from "react";

import Nav from "./components/Nav";
import Hero from "./components/Hero";
import SalonShowcase from "./components/SalonShowcase";
import SelfSection from "./components/selfSection";
import About from "./components/About";
import Stats from "./components/Stats";
import Services from "./components/Services";
import Team from "./components/TeamMember";
import Pricing from "./components/Pricing";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Booking from "./components/Booking";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=Outfit:wght@300;400;500;600;700&display=swap');

:root {
  /* ── Exact Skin  colors from photo ── */
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
  // --purple:       #4F1C3D;   /* deep purple accent */
  --purple:       #7A0063;   /* deep purple accent */
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
  const [enabled, setEnabled] = useState(false);

  const c = useRef(null);
  const r = useRef(null);

  const pos = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // detect desktop pointer
    const media = window.matchMedia("(pointer: fine)");
    setEnabled(media.matches);

    const handleChange = (e) => setEnabled(e.matches);
    media.addEventListener("change", handleChange);

    return () => media.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (!enabled) return;

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
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div ref={c} id="cur" />
      <div ref={r} id="cur-ring" />
    </>
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

/* ── APP ── */
export default function App() {
  useReveal();
  return (
    <div>
      <style>{CSS}</style>
      <Cursor />
      <Nav />
      <Hero />
      <SelfSection />
      <SalonShowcase />
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
      {/* */}
    </div>
  );
}
