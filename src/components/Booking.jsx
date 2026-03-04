import { useState } from "react";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

function Booking() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    service: "",
    message: "",
  });

  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "booking", ...form }),
    })
      .then(() => setDone(true))
      .catch((error) => alert(error));
  };

  const lat = 22.9829881;
  const lng = 72.6220093;
  const mapSrc = `https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14690.0!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin`;

  return (
    <section id="book" className="booking-section">
      <div className="booking-container">
        <div className="booking-header">
          <h2>Book Your Appointment</h2>
          <p>Visit us or reserve your slot online. We confirm bookings within a few hours.</p>
        </div>

        <div className="booking-grid">
          {/* Form Side - Primary on Mobile */}
          <div className="form-wrapper">
            {done ? (
              <div className="success-state">
                <div className="check-circle">✓</div>
                <h3>Booking Request Sent</h3>
                <p>Thank you! We'll confirm your appointment shortly.</p>
                <button className="reset-btn" onClick={() => setDone(false)}>Book Again</button>
              </div>
            ) : (
              <form name="booking" method="POST" data-netlify="true" onSubmit={handleSubmit}>
                <input type="hidden" name="form-name" value="booking" />
                
                <div className="input-field">
                  <label>Full Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    required
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>

                <div className="input-field">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+91 00000 00000"
                    required
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  />
                </div>

                <div className="row-group">
                  <div className="input-field">
                    <label>Preferred Date</label>
                    <input
                      type="date"
                      name="date"
                      required
                      onChange={(e) => setForm({ ...form, date: e.target.value })}
                    />
                  </div>

                  <div className="input-field">
                    <label>Service</label>
                    <select
                      name="service"
                      required
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                    >
                      <option value="">Select Service</option>
                      <option>Hair Artistry</option>
                      <option>Skin & Glow</option>
                      <option>Bridal & Occasion</option>
                      <option>Consultation</option>
                    </select>
                  </div>
                </div>

                <div className="input-field">
                  <label>Message (Optional)</label>
                  <textarea
                    name="message"
                    placeholder="Tell us about your requirements..."
                    rows="3"
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </div>

                <button type="submit" className="submit-btn">Send Appointment Request</button>
              </form>
            )}
          </div>

          {/* Map Side */}
          <div className="map-wrapper">
            <iframe
              src={mapSrc}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              title="Salon Location"
            />
          </div>
        </div>
      </div>

      <style>{`
        .booking-section { padding: 80px 5vw; background: #FAF9F6; font-family: 'Inter', sans-serif; }
        .booking-container { max-width: 1200px; margin: 0 auto; }
        
        .booking-header { text-align: center; margin-bottom: 50px; }
        .booking-header h2 { font-size: clamp(28px, 5vw, 48px); font-weight: 600; color: #111; margin-bottom: 12px; }
        .booking-header p { color: #666; font-size: 16px; line-height: 1.5; max-width: 500px; margin: 0 auto; }

        .booking-grid { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 40px; }
        
        .form-wrapper { background: #fff; padding: 40px; border-radius: 24px; box-shadow: 0 15px 40px rgba(0,0,0,0.04); }
        .map-wrapper { border-radius: 24px; overflow: hidden; min-height: 400px; box-shadow: 0 10px 30px rgba(0,0,0,0.05); }

        .input-field { margin-bottom: 20px; display: flex; flex-direction: column; }
        .input-field label { font-size: 12px; font-weight: 700; text-transform: uppercase; color: #444; margin-bottom: 8px; }
        
        .row-group { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; }

        input, select, textarea {
          padding: 14px 16px;
          border: 1.5px solid #eee;
          border-radius: 10px;
          font-size: 15px;
          background: #fcfcfc;
          transition: 0.3s;
        }

        input:focus { outline: none; border-color: #111; background: #fff; }

        .submit-btn {
          width: 100%;
          padding: 16px;
          background: #111;
          color: white;
          border: none;
          border-radius: 10px;
          font-weight: 600;
          cursor: pointer;
          transition: 0.2s;
        }

        /* MOBILE FIXES */
        @media (max-width: 900px) {
          .booking-section { padding: 60px 20px; }
          .booking-grid { grid-template-columns: 1fr; gap: 30px; }
          .form-wrapper { padding: 30px 20px; }
          .row-group { grid-template-columns: 1fr; } /* Stack date/service on mobile */
          .map-wrapper { height: 300px; min-height: unset; }
          .booking-header { margin-bottom: 30px; }
        }
      `}</style>
    </section>
  );
}

export default Booking;