import { useState } from "react";
import {
  motion,
  AnimatePresence,
} from "framer-motion";

const reviews = [
  {
    name: "Aman Shah",
    text: "Best salon in Ahmedabad! The attention to detail in their hair artistry is unmatched. Truly a premium experience.",
    rating: 5
  },
  {
    name: "Priya Patel",
    text: "I visited for bridal makeup and it was flawless. The staff is professional and the vibe is so relaxing.",
    rating: 5
  },
  {
    name: "Rahul Mehta",
    text: "Excellent service and very clean. Highly recommend their consultation for skin care. 10/10!",
    rating: 5
  }
];


function Testimonials() {
  const [active, setActive] = useState(0);

  const nextReview = () => setActive((prev) => (prev + 1) % reviews.length);
  const prevReview = () => setActive((prev) => (prev - 1 + reviews.length) % reviews.length);

  return (
    <section className="testimonials-modern">
      <div className="container-wrapper">
        
        {/* Section Header */}
        <header className="testimonials-header">
          <span className="sub-label">Client Stories</span>
          <h2 className="main-title">What Our Guests Say</h2>
          <p className="header-description">
            Experience the excellence of Twenty Axe through the words of our valued clients.
          </p>
        </header>

        <div className="layout-grid">
          
          {/* Left Side: Visuals */}
          <div className="image-side">
            <img
              src="https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1000"
              alt="Twenty Axe Interior"
              className="static-bg"
            />
            <div className="image-overlay" />
            <div className="floating-badge">Top Rated Salon</div>
          </div>

          {/* Right Side: Review Content */}
          <div className="content-side">
            <div className="branding-text">GUEST REVIEWS</div>
            
            <div className="slider-wrapper">
              <span className="big-quote">“</span>
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="review-content"
                >
                  <p className="testimonial-text">{reviews[active].text}</p>
                  <div className="reviewer-meta">
                    <h4 className="reviewer-name">{reviews[active].name}</h4>
                    <div className="stars">{"★".repeat(reviews[active].rating)}</div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Controls */}
              <div className="navigation-ui">
                <button onClick={prevReview} className="nav-arrow" aria-label="Previous Review">←</button>
                <div className="pagination">
                  {reviews.map((_, i) => (
                    <span 
                      key={i} 
                      className={`dot ${i === active ? 'active' : ''}`} 
                      onClick={() => setActive(i)}
                    />
                  ))}
                </div>
                <button onClick={nextReview} className="nav-arrow" aria-label="Next Review">→</button>
              </div>
            </div>

            {/* Google Link Footer */}
            <footer className="google-footer">
              <p className="footer-cta">Loved your look?</p>
              <a 
                href="https://search.google.com/local/writereview?placeid=YOUR_PLACE_ID" 
                target="_blank" 
                rel="noreferrer"
                className="google-btn"
              >
                Share your experience on Google
              </a>
            </footer>
          </div>
        </div>
      </div>

      <style>{`
        /* Container & Header */
        .testimonials-modern {
          min-height: 100vh;
          background: #ffffff;
          padding: 100px 4vw;
          display: flex;
          justify-content: center;
        }

        .container-wrapper {
          width: 100%;
          max-width: 1400px;
        }

        .testimonials-header {
          text-align: center;
          margin-bottom: 70px;
        }

        .sub-label {
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 5px;
          color: #637B77;
          font-weight: 700;
          display: block;
          margin-bottom: 12px;
        }

        .main-title {
          font-size: clamp(32px, 5vw, 54px);
          font-family: 'Playfair Display', serif;
          font-weight: 500;
          color: #1a1a1a;
          margin-bottom: 18px;
        }

        .header-description {
          font-size: 17px;
          color: #6a6a6a;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* The Grid Layout */
        .layout-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          background: #fcfcfb;
          border-radius: 40px;
          overflow: hidden;
          box-shadow: 0 40px 100px rgba(0,0,0,0.04);
        }

        /* Visual Column */
        .image-side { 
          position: relative; 
          height: 700px; 
          overflow: hidden; 
        }

        .static-bg { 
          width: 100%; 
          height: 100%; 
          object-fit: cover; 
        }

        .image-overlay { 
          position: absolute; 
          inset: 0; 
          background: rgba(99, 123, 119, 0.08); 
        }

        .floating-badge {
          position: absolute;
          bottom: 40px;
          left: 40px;
          background: white;
          padding: 14px 28px;
          border-radius: 100px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }

        /* Content Column */
        .content-side { 
          padding: 80px; 
          display: flex; 
          flex-direction: column; 
          justify-content: center; 
        }

        .branding-text { 
          font-size: 12px; 
          letter-spacing: 4px; 
          color: #637B77; 
          font-weight: 700; 
          margin-bottom: 40px; 
        }

        .slider-wrapper { 
          position: relative; 
          margin-bottom: 60px; 
        }

        .big-quote { 
          font-size: 110px; 
          color: #637B77; 
          opacity: 0.15; 
          position: absolute; 
          top: -60px; 
          left: -25px; 
          font-family: serif; 
        }
        
        .testimonial-text { 
          font-size: 26px; 
          line-height: 1.6; 
          color: #1a1a1a; 
          font-family: 'Playfair Display', serif; 
          margin-bottom: 35px; 
          font-style: italic; 
        }

        .reviewer-name { 
          font-size: 17px; 
          font-weight: 600; 
          color: #222; 
          margin-bottom: 6px; 
        }

        .stars { 
          color: #D4AF37; 
          font-size: 15px; 
          letter-spacing: 2px;
        }

        /* Navigation */
        .navigation-ui { 
          display: flex; 
          align-items: center; 
          gap: 30px; 
          margin-top: 55px; 
        }

        .nav-arrow { 
          background: none; 
          border: 1px solid #ddd; 
          width: 50px; 
          height: 50px; 
          border-radius: 50%; 
          cursor: pointer; 
          transition: all 0.3s ease; 
          display: flex; 
          align-items: center; 
          justify-content: center; 
          font-size: 20px; 
        }

        .nav-arrow:hover { 
          background: #1a1a1a; 
          color: white; 
          border-color: #1a1a1a; 
        }
        
        .pagination { 
          display: flex; 
          gap: 10px; 
        }

        .dot { 
          width: 25px; 
          height: 3px; 
          background: #e0e0e0; 
          transition: all 0.4s ease; 
          cursor: pointer;
        }

        .dot.active { 
          background: #637B77; 
          width: 50px; 
        }

        /* Footer Section */
        .google-footer { 
          border-top: 1px solid #eee; 
          padding-top: 45px; 
          display: flex; 
          align-items: center; 
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 20px;
        }

        .footer-cta { 
          font-size: 15px; 
          color: #777; 
        }

        .google-btn { 
          font-size: 14px; 
          font-weight: 600; 
          color: #1a1a1a; 
          text-decoration: none; 
          border: 1.5px solid #1a1a1a;
          padding: 12px 24px;
          border-radius: 12px;
          transition: all 0.3s ease;
        }

        .google-btn:hover { 
          background: #1a1a1a; 
          color: white; 
        }

        /* Responsive Breakpoints */
        @media (max-width: 1100px) {
          .layout-grid { grid-template-columns: 1fr; }
          .image-side { height: 450px; }
          .content-side { padding: 50px 30px; }
          .testimonials-header { margin-bottom: 40px; }
        }

        @media (max-width: 600px) {
          .testimonials-modern { padding: 60px 5vw; }
          .testimonial-text { font-size: 20px; }
          .google-footer { justify-content: center; text-align: center; }
          .google-btn { width: 100%; text-align: center; }
        }
      `}</style>
    </section>
  );
}
export default Testimonials;