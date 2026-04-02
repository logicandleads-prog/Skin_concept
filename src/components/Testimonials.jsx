// import { useState } from "react";
// import {
//   motion,
//   AnimatePresence,
// } from "framer-motion";

// const reviews = [
//   {
//     name: "Priya S.",
//     treatment: "Acne Treatment",
//     rating: 5,
//     text: "I struggled with acne for years, tried everything. Within 4 sessions here, my skin completely changed. The doctor actually understands skin deeply — not just surface treatments.",
//   },
//   {
//     name: "Riya M.",
//     treatment: "Hydra Facial",
//     rating: 5,
//     text: "My skin has never looked this glowing. It feels clean, hydrated and fresh even after weeks. Definitely not like regular salon facials.",
//   },
//   {
//     name: "Anjali K.",
//     treatment: "Laser Hair Removal",
//     rating: 5,
//     text: "After just a few sessions, hair growth reduced drastically. The process was smooth and almost painless. Totally worth it.",
//   },
//   {
//     name: "Neha P.",
//     treatment: "Pigmentation Treatment",
//     rating: 5,
//     text: "I had stubborn pigmentation on my face. Now it's almost gone. The results look natural, not artificial or overdone.",
//   },
//   {
//     name: "Simran D.",
//     treatment: "PRP Hair Therapy",
//     rating: 5,
//     text: "Hair fall reduced within a month and I can see new growth already. The treatment feels very professional and medically safe.",
//   },
//   {
//     name: "Kavya R.",
//     treatment: "Chemical Peel",
//     rating: 5,
//     text: "My skin texture improved so much after just one session. It looks smoother and brighter without any harsh effects.",
//   },
// ];


// function Testimonials() {
//   const [active, setActive] = useState(0);

//   const nextReview = () => setActive((prev) => (prev + 1) % reviews.length);
//   const prevReview = () => setActive((prev) => (prev - 1 + reviews.length) % reviews.length);

//   return (
//     <section className="testimonials-modern">
//       <div className="container-wrapper">
        
//         {/* Section Header */}
//         <header className="testimonials-header">
//           <span className="sub-label">Client Stories</span>
//           <h2 className="main-title" style={{fontWeight:600}}>What Our Guests Say</h2>
//           <p className="header-description">
//             Experience the excellence of Twenty Axe through the words of our valued clients.
//           </p>
//         </header>

//         <div className="layout-grid">
          
//           {/* Left Side: Visuals */}
//           <div className="image-side">
//             <img
//               src="https://plus.unsplash.com/premium_photo-1738416571378-46793a101767?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//               alt="Twenty Axe Interior"
//               className="static-bg"
//             />
//             <div className="image-overlay" />
//             <div className="floating-badge">Top Rated Salon</div>
//           </div>

//           {/* Right Side: Review Content */}
//           <div className="content-side">
//             <div className="branding-text">GUEST REVIEWS</div>
            
//             <div className="slider-wrapper">
//               <span className="big-quote">“</span>
              
//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={active}
//                   initial={{ opacity: 0, y: 15 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -15 }}
//                   transition={{ duration: 0.4 }}
//                   className="review-content"
//                 >
//                   <p className="testimonial-text">{reviews[active].text}</p>
//                   <div className="reviewer-meta">
//                     <h4 className="reviewer-name">{reviews[active].name}</h4>
//                     <div className="stars">{"★".repeat(reviews[active].rating)}</div>
//                   </div>
//                 </motion.div>
//               </AnimatePresence>

//               {/* Navigation Controls */}
//               <div className="navigation-ui">
//                 <button onClick={prevReview} className="nav-arrow" aria-label="Previous Review">←</button>
//                 <div className="pagination">
//                   {reviews.map((_, i) => (
//                     <span 
//                       key={i} 
//                       className={`dot ${i === active ? 'active' : ''}`} 
//                       onClick={() => setActive(i)}
//                     />
//                   ))}
//                 </div>
//                 <button onClick={nextReview} className="nav-arrow" aria-label="Next Review">→</button>
//               </div>
//             </div>

//             {/* Google Link Footer */}
//             <footer className="google-footer">
//               <p className="footer-cta">Loved your look?</p>
//               <a 
//                 href="https://search.google.com/local/writereview?placeid=YOUR_PLACE_ID" 
//                 target="_blank" 
//                 rel="noreferrer"
//                 className="google-btn"
//               >
//                 Share your experience on Google
//               </a>
//             </footer>
//           </div>
//         </div>
//       </div>

//       <style>{`
//         /* Container & Header */
//         .testimonials-modern {
//           min-height: 100vh;
//           background: #ffffff;
//           padding: 100px 4vw;
//           display: flex;
//           justify-content: center;
//         }

//         .container-wrapper {
//           width: 100%;
//           max-width: 1400px;
//         }

//         .testimonials-header {
//           text-align: center;
//           margin-bottom: 70px;
//         }

//         .sub-label {
//           font-size: 13px;
//           text-transform: uppercase;
//           letter-spacing: 5px;
//           color: #637B77;
//           font-weight: 700;
//           display: block;
//           margin-bottom: 12px;
//         }

//         .main-title {
//           font-size: clamp(32px, 5vw, 54px);
//           font-family: 'Playfair Display', serif;
//           font-weight: 500;
//           color: #1a1a1a;
//           margin-bottom: 18px;
//         }

//         .header-description {
//           font-size: 17px;
//           color: #6a6a6a;
//           max-width: 600px;
//           margin: 0 auto;
//           line-height: 1.6;
//         }

//         /* The Grid Layout */
//         .layout-grid {
//           display: grid;
//           grid-template-columns: 1fr 1fr;
//           background: #fcfcfb;
//           border-radius: 40px;
//           overflow: hidden;
//           box-shadow: 0 40px 100px rgba(0,0,0,0.04);
//         }

//         /* Visual Column */
//         .image-side { 
//           position: relative; 
//           height: 700px; 
//           overflow: hidden; 
//         }

//         .static-bg { 
//           width: 100%; 
//           height: 100%; 
//           object-fit: cover; 
//         }

//         .image-overlay { 
//           position: absolute; 
//           inset: 0; 
//           background: rgba(99, 123, 119, 0.08); 
//         }

//         .floating-badge {
//           position: absolute;
//           bottom: 40px;
//           left: 40px;
//           background: white;
//           padding: 14px 28px;
//           border-radius: 100px;
//           font-size: 12px;
//           font-weight: 700;
//           letter-spacing: 1.5px;
//           text-transform: uppercase;
//           box-shadow: 0 10px 30px rgba(0,0,0,0.1);
//         }

//         /* Content Column */
//         .content-side { 
//           padding: 80px; 
//           display: flex; 
//           flex-direction: column; 
//           justify-content: center; 
//         }

//         .branding-text { 
//           font-size: 12px; 
//           letter-spacing: 4px; 
//           color: #637B77; 
//           font-weight: 700; 
//           margin-bottom: 40px; 
//         }

//         .slider-wrapper { 
//           position: relative; 
//           margin-bottom: 60px; 
//         }

//         .big-quote { 
//           font-size: 110px; 
//           color: #637B77; 
//           opacity: 0.15; 
//           position: absolute; 
//           top: -60px; 
//           left: -25px; 
//           font-family: serif; 
//         }
        
//         .testimonial-text { 
//           font-size: 26px; 
//           line-height: 1.6; 
//           color: #1a1a1a; 
//           font-family: 'Playfair Display', serif; 
//           margin-bottom: 35px; 
//           font-style: italic; 
//         }

//         .reviewer-name { 
//           font-size: 17px; 
//           font-weight: 600; 
//           color: #222; 
//           margin-bottom: 6px; 
//         }

//         .stars { 
//           color: #D4AF37; 
//           font-size: 15px; 
//           letter-spacing: 2px;
//         }

//         /* Navigation */
//         .navigation-ui { 
//           display: flex; 
//           align-items: center; 
//           gap: 30px; 
//           margin-top: 55px; 
//         }

//         .nav-arrow { 
//           background: none; 
//           border: 1px solid #ddd; 
//           width: 50px; 
//           height: 50px; 
//           border-radius: 50%; 
//           cursor: pointer; 
//           transition: all 0.3s ease; 
//           display: flex; 
//           align-items: center; 
//           justify-content: center; 
//           font-size: 20px; 
//         }

//         .nav-arrow:hover { 
//           background: #1a1a1a; 
//           color: white; 
//           border-color: #1a1a1a; 
//         }
        
//         .pagination { 
//           display: flex; 
//           gap: 10px; 
//         }

//         .dot { 
//           width: 25px; 
//           height: 3px; 
//           background: #e0e0e0; 
//           transition: all 0.4s ease; 
//           cursor: pointer;
//         }

//         .dot.active { 
//           background: #637B77; 
//           width: 50px; 
//         }

//         /* Footer Section */
//         .google-footer { 
//           border-top: 1px solid #eee; 
//           padding-top: 45px; 
//           display: flex; 
//           align-items: center; 
//           justify-content: space-between;
//           flex-wrap: wrap;
//           gap: 20px;
//         }

//         .footer-cta { 
//           font-size: 15px; 
//           color: #777; 
//         }

//         .google-btn { 
//           font-size: 14px; 
//           font-weight: 600; 
//           color: #1a1a1a; 
//           text-decoration: none; 
//           border: 1.5px solid #1a1a1a;
//           padding: 12px 24px;
//           border-radius: 12px;
//           transition: all 0.3s ease;
//         }

//         .google-btn:hover { 
//           background: #1a1a1a; 
//           color: white; 
//         }

//         /* Responsive Breakpoints */
//         @media (max-width: 1100px) {
//           .layout-grid { grid-template-columns: 1fr; }
//           .image-side { height: 450px; }
//           .content-side { padding: 50px 30px; }
//           .testimonials-header { margin-bottom: 40px; }
//         }

//         @media (max-width: 600px) {
//           .testimonials-modern { padding: 60px 5vw; }
//           .testimonial-text { font-size: 20px; }
//           .google-footer { justify-content: center; text-align: center; }
//           .google-btn { width: 100%; text-align: center; }
//         }
//       `}</style>
//     </section>
//   );
// }
// export default Testimonials;

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const reviews = [
  {
    name: "Priya S.",
    treatment: "Acne Treatment",
    rating: 5,
    text: "I struggled with acne for years, tried everything. Within 4 sessions here, my skin completely changed. The doctor actually understands skin deeply — not just surface treatments.",
  },
  {
    name: "Riya M.",
    treatment: "Hydra Facial",
    rating: 5,
    text: "My skin has never looked this glowing. It feels clean, hydrated and fresh even after weeks. Definitely not like regular salon facials.",
  },
  {
    name: "Anjali K.",
    treatment: "Laser Hair Removal",
    rating: 5,
    text: "After just a few sessions, hair growth reduced drastically. The process was smooth and almost painless. Totally worth it.",
  },
  {
    name: "Neha P.",
    treatment: "Pigmentation Treatment",
    rating: 5,
    text: "I had stubborn pigmentation on my face. Now it's almost gone. The results look natural, not artificial or overdone.",
  },
  {
    name: "Simran D.",
    treatment: "PRP Hair Therapy",
    rating: 5,
    text: "Hair fall reduced within a month and I can see new growth already. The treatment feels very professional and medically safe.",
  },
  {
    name: "Kavya R.",
    treatment: "Chemical Peel",
    rating: 5,
    text: "My skin texture improved so much after just one session. It looks smoother and brighter without any harsh effects.",
  },
];

function Testimonials() {
  const [active, setActive] = useState(0);

  const nextReview = () => setActive((p) => (p + 1) % reviews.length);
  const prevReview = () =>
    setActive((p) => (p - 1 + reviews.length) % reviews.length);

  return (
    <section className="testimonials-modern">
      <div className="container-wrapper">
        {/* Header */}
        <header className="testimonials-header">
          <span className="sub-label">Client Stories</span>
          <h2 className="main-title">What Our Guests Say</h2>
          <p className="header-description">
            Experience the excellence of Twenty Axe through the words of our valued clients.
          </p>
        </header>

        <div className="layout-grid">
          {/* LEFT IMAGE */}
          <div className="image-side">
            <img
              src="https://plus.unsplash.com/premium_photo-1738416571378-46793a101767?q=80&w=1074&auto=format&fit=crop"
              alt="Interior"
              className="static-bg"
            />
            <div className="image-overlay" />
            <div className="floating-badge">Top Rated Salon</div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="content-side">
            <div className="branding-text">GUEST REVIEWS</div>

            <div className="slider-wrapper">
              <span className="big-quote">“</span>

              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <p className="testimonial-text">
                    {reviews[active].text}
                  </p>

                  <div className="reviewer-meta">
                    <h4 className="reviewer-name">
                      {reviews[active].name}
                    </h4>
                    <div className="stars">
                      {"★".repeat(reviews[active].rating)}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              <div className="navigation-ui">
                <button onClick={prevReview} className="nav-arrow">←</button>

                <div className="pagination">
                  {reviews.map((_, i) => (
                    <span
                      key={i}
                      className={`dot ${i === active ? "active" : ""}`}
                      onClick={() => setActive(i)}
                    />
                  ))}
                </div>

                <button onClick={nextReview} className="nav-arrow">→</button>
              </div>
            </div>

            {/* Footer */}
            <footer className="google-footer">
              <p className="footer-cta">Loved your look?</p>
              <a href="https://share.google/2GJN5VqwlvH8hi8up" target="_blank" className="google-btn">
                Share your experience on Google
              </a>
            </footer>
          </div>
        </div>
      </div>

      <style>{`
        .testimonials-modern {
          min-height: 100vh;
          padding: clamp(60px, 8vw, 100px) clamp(16px, 4vw, 60px);
          display: flex;
          justify-content: center;
        }

        .container-wrapper {
          width: 100%;
          max-width: 1400px;
        }

        .testimonials-header {
          text-align: center;
          margin-bottom: clamp(30px, 6vw, 70px);
        }

        .main-title {
          font-size: clamp(28px, 5vw, 54px);
          margin-bottom: 12px;
        }

        .header-description {
          font-size: clamp(14px, 1.5vw, 17px);
          max-width: 600px;
          margin: auto;
        }

        .layout-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          border-radius: 30px;
          overflow: hidden;
        }

        .image-side {
          position: relative;
          height: clamp(300px, 60vw, 700px);
        }

        .static-bg {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .image-overlay {
          position: absolute;
          inset: 0;
          background: rgba(99,123,119,0.08);
        }

        .floating-badge {
          position: absolute;
          bottom: 20px;
          left: 20px;
          padding: 10px 18px;
          font-size: 11px;
          background: white;
          border-radius: 50px;
        }

        .content-side {
          padding: clamp(30px, 6vw, 80px);
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .testimonial-text {
          font-size: clamp(18px, 2.2vw, 26px);
          line-height: 1.6;
        }

        .navigation-ui {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-top: 30px;
          flex-wrap: wrap;
        }

        .nav-arrow {
          width: clamp(40px, 5vw, 50px);
          height: clamp(40px, 5vw, 50px);
          border-radius: 50%;
          border: 1px solid #ddd;
        }

        .dot {
          width: 20px;
          height: 3px;
          background: #ddd;
        }

        .dot.active {
          width: 40px;
          background: #637B77;
        }

        .google-footer {
          margin-top: 40px;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
        }

        .google-btn {
          padding: 10px 20px;
          border: 1px solid #000;
        }

        /* TABLET */
        @media (max-width: 1100px) {
          .layout-grid {
            grid-template-columns: 1fr;
          }

          .image-side {
            height: 400px;
          }
        }

        /* MOBILE */
        @media (max-width: 600px) {
          .testimonial-text {
            font-size: 18px;
          }

          .google-footer {
            justify-content: center;
            text-align: center;
          }

          .google-btn {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}

export default Testimonials;