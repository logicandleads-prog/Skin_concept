// import { useState } from "react";

// const encode = (data) => {
//   return Object.keys(data)
//     .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
//     .join("&");
// };

// function Booking() {
//   const [form, setForm] = useState({
//     name: "",
//     phone: "",
//     date: "",
//     service: "",
//     message: "",
//     other: "",
//   });

//   const [done, setDone] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const API_URL =
//       "https://script.google.com/macros/s/AKfycbxlYb7PQFfbcAgb4MvShxc5b1KXLWguje-bevUFune2jQ7d24vps4Vz9n4z0K31gQMQ/exec";
//     // const API_URL =
//     //   "https://script.google.com/macros/s/AKfycbxlYb7PQFfbcAgb4MvShxc5b1KXLWguje-bevUFune2jQ7d24vps4Vz9n4z0K31gQMQ/exec";

//     const query = new URLSearchParams({
//       name: form.name,
//       phone: form.phone,
//       date: form.date,
//       service: form.service,
//       message: form.message,
//     }).toString();

//     try {
//       const res = await fetch(`${API_URL}?${query}`);

//       if (res.ok) {
//         setDone(true);
//       } else {
//         alert("Failed to submit");
//       }
//     } catch (err) {
//       console.error(err);
//       alert("Error submitting form");
//     }
//   };

//   const lat = 23.1059368;
//   const lng = 72.5944719;
//   const mapSrc = `https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14690.0!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin`;

//   return (
//     <section id="book" className="booking-section">
//       <div className="booking-container">
//         <div className="booking-header">
//           <h2 className="main-title">Book Your Appointment</h2>
//           <p>
//             Visit us or reserve your slot online. We confirm bookings within a
//             few hours.
//           </p>
//         </div>

//         <div className="booking-grid">
//           {/* Form Side - Primary on Mobile */}
//           <div className="form-wrapper">
//             {done ? (
//               <div className="success-state">
//                 <div className="check-circle">✓</div>

//                 <h3>Booking Request Sent</h3>

//                 <p>
//                   Thank you! We’ve received your request and will confirm your
//                   appointment shortly.
//                 </p>

//                 <button className="reset-btn" onClick={() => setDone(false)}>
//                   Book Again
//                 </button>
//               </div>
//             ) : (
//               <form
//                 action="https://script.google.com/macros/s/AKfycbxlYb7PQFfbcAgb4MvShxc5b1KXLWguje-bevUFune2jQ7d24vps4Vz9n4z0K31gQMQ/exec"
//                 method="POST"
//                 target="hidden_iframe"
//                 onSubmit={() => setDone(true)}
//               >
//                 <iframe name="hidden_iframe" style={{ display: "none" }} />
//                 <input type="hidden" name="form-name" value="booking" />

//                 <div className="input-field">
//                   <label>Full Name</label>
//                   <input
//                     type="text"
//                     name="name"
//                     placeholder="Enter your name"
//                     required
//                     onChange={(e) => setForm({ ...form, name: e.target.value })}
//                   />
//                 </div>

//                 <div className="input-field">
//                   <label>Phone Number</label>
//                   <input
//                     type="tel"
//                     name="phone"
//                     placeholder="+91 00000 00000"
//                     required
//                     onChange={(e) =>
//                       setForm({ ...form, phone: e.target.value })
//                     }
//                   />
//                 </div>

//                 <div className="row-group">
//                   <div className="input-field">
//                     <label>Preferred Date</label>
//                     <input
//                       type="date"
//                       name="date"
//                       required
//                       onChange={(e) =>
//                         setForm({ ...form, date: e.target.value })
//                       }
//                     />
//                   </div>

//                   <div className="input-field">
//                     <label>Service</label>
//                     <select
//                       name="service"
//                       required
//                       onChange={(e) =>
//                         setForm({ ...form, service: e.target.value })
//                       }
//                     >
//                       <option value="">Select Service</option>
//                       <option>Hair Artistry</option>
//                       <option>Skin & Glow</option>
//                       <option>Bridal & Occasion</option>
//                       <option>Consultation</option>
//                       <option>Other</option>
//                     </select>
//                   </div>
//                 </div>

//                 <div className="input-field">
//                   <label>
//                     Message{" "}
//                     {form.service === "Other" ? "(Required)" : "(Optional)"}
//                   </label>

//                   <textarea
//                     name="message"
//                     placeholder="Tell us about your requirements..."
//                     rows="3"
//                     value={form.message || ""}
//                     required={form.service === "Other"}
//                     onChange={(e) =>
//                       setForm({ ...form, message: e.target.value })
//                     }
//                   />
//                 </div>

//                 <button type="submit" className="submit-btn">
//                   Send Appointment Request
//                 </button>
//               </form>
//             )}
//           </div>

//           {/* Map Side */}
//           <div className="map-wrapper">
//             <iframe
//               src={mapSrc}
//               width="100%"
//               height="100%"
//               style={{ border: 0 }}
//               loading="lazy"
//               title="Salon Location"
//             />
//           </div>
//         </div>
//       </div>

//       <style>{`
// .booking-section {
//   padding: 90px 5vw;
//   background: #ffffff;
//   font-family: 'Inter', sans-serif;
// }

// .booking-container {
//   max-width: 1200px;
//   margin: 0 auto;
// }

// .booking-header {
//   text-align: center;
//   margin-bottom: 60px;
// }

// .booking-header h2 {
//   font-size: clamp(30px, 5vw, 48px);
//   font-weight: 600;
//   color: #1a1a1a;
//   margin-bottom: 14px;
//   letter-spacing: -0.5px;
// }

// .booking-header p {
//   color: #6b6b6b;
//   font-size: 16px;
//   line-height: 1.6;
//   max-width: 520px;
//   margin: 0 auto;
// }

// .booking-grid {
//   display: grid;
//   grid-template-columns: 1.1fr 0.9fr;
//   gap: 50px;
//   align-items: stretch;
// }

// /* FORM */
// .form-wrapper {
//   background: #ffffff;
//   padding: 50px 45px;
//   border-radius: 24px;
//   box-shadow: 0 25px 60px rgba(0, 0, 0, 0.06);
//   border: 1px solid #f0ece6;
// }

// /* MAP */
// .map-wrapper {
//   border-radius: 24px;
//   overflow: hidden;
//   min-height: 500px;
//   box-shadow: 0 20px 50px rgba(0, 0, 0, 0.06);
// }

// /* INPUTS */
// .input-field {
//   margin-bottom: 22px;
//   display: flex;
//   flex-direction: column;
// }

// .input-field label {
//   font-size: 12px;
//   font-weight: 600;
//   letter-spacing: 1px;
//   text-transform: uppercase;
//   color: #444;
//   margin-bottom: 8px;
// }

// .row-group {
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   gap: 18px;
// }

// input,
// select,
// textarea {
//   padding: 15px 16px;
//   border: 1.5px solid #e8e4de;
//   border-radius: 12px;
//   font-size: 15px;
//   background: #faf9f7;
//   transition: all 0.25s ease;
// }

// input:focus,
// select:focus,
// textarea:focus {
//   outline: none;
//   border-color: #2b0d0d;
//   background: #ffffff;
//   box-shadow: 0 0 0 3px rgba(43, 13, 13, 0.08);
// }

// /* BUTTON */
// .submit-btn {
//   width: 100%;
//   padding: 17px;
//   background: #d5cdcd;
//   color: white;
//   border: 1px solid #e8e4de;
//   border-radius: 14px;
//   font-weight: 600;
//   letter-spacing: 0.5px;
//   cursor: pointer;
//   transition: all 0.3s ease;
//   color: #000000;
// }

// .submit-btn:hover {
//   background: var(--purple);
//   transform: translateY(-2px);
//   color: #fff;
//   box-shadow: 0 10px 25px rgba(43, 13, 13, 0.25);
// }

// /* SUCCESS CARD - Light Premium */
// .success-state {
//   padding: 50px 35px;
//   text-align: center;
//   background: #ffffff;
//   border-radius: 24px;
//   border: 1px solid #e8f5e9;
//   box-shadow: 0 20px 50px rgba(0, 0, 0, 0.05);
//   animation: fadeInUp 0.5s ease;
// }

// .check-circle {
//   width: 80px;
//   height: 80px;
//   margin: 0 auto 25px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   font-size: 36px;
//   font-weight: bold;
//   color: white;
//   border-radius: 50%;
//   background: linear-gradient(135deg, #22c55e, #16a34a);
//   box-shadow: 0 10px 25px rgba(34, 197, 94, 0.35);
// }

// .success-state h3 {
//   font-size: 24px;
//   font-weight: 600;
//   color: #1a1a1a;
//   margin-bottom: 10px;
// }

// .success-state p {
//   font-size: 15px;
//   color: #666;
//   margin-bottom: 30px;
//   line-height: 1.6;
// }

// .reset-btn {
//   padding: 13px 30px;
//   font-size: 14px;
//   font-weight: 600;
//   border-radius: 40px;
//   border: none;
//   cursor: pointer;
//   background: #070000;
//   color: white;
//   transition: all 0.3s ease;
// }

// .reset-btn:hover {
//   background: #D4AF37;
//   transform: translateY(-2px);
//   box-shadow: 0 8px 20px rgba(43, 13, 13, 0.25);
// }

// /* ANIMATIONS */
// @keyframes fadeInUp {
//   from {
//     opacity: 0;
//     transform: translateY(20px);
//   }
//   to {
//     opacity: 1;
//     transform: translateY(0);
//   }
// }

// /* MOBILE */
// @media (max-width: 900px) {
//   .booking-section {
//     padding: 60px 20px;
//   }

//   .booking-grid {
//     grid-template-columns: 1fr;
//     gap: 35px;
//   }

//   .form-wrapper {
//     padding: 35px 25px;
//   }

//   .row-group {
//     grid-template-columns: 1fr;
//   }

//   .map-wrapper {
//     height: 320px;
//     min-height: unset;
//   }
// }
//       `}</style>
//     </section>
//   );
// }

// export default Booking;
import { useState } from "react";

function Booking() {
  const [done, setDone] = useState(false);

  const API_URL =
    "https://script.google.com/macros/s/AKfycby5sznP_VSsxq_3B1HMLD0RakRvNnFcaU_jQIgPkjSVioDMs2XN_Bmwd90knAqHXW_x/exec";

  const lat = 23.1059368;
  const lng = 72.5944719;

  const mapSrc = `https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14690.0!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin`;

  return (
    <section className="booking">
      <div className="container">
        <h2>Book Your Appointment</h2>
        <p className="subtitle">
          Quick booking. We’ll confirm within a few hours.
        </p>

        <div className="grid">
          {/* FORM */}
          <div className="card">
            {done ? (
              <div className="success">
                <div className="tick">✓</div>
                <h3>Booking Sent</h3>
                <p>We’ll contact you shortly.</p>
                <button onClick={() => setDone(false)}>
                  Book Again
                </button>
              </div>
            ) : (
              <>
                <iframe
                  name="hidden_iframe"
                  style={{ display: "none" }}
                ></iframe>

                <form
                  action={API_URL}
                  method="POST"
                  target="hidden_iframe"
                  onSubmit={() => setTimeout(() => setDone(true), 600)}
                >
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    required
                  />

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    required
                  />

                  <input type="date" name="date" required />

                  <select name="service" required>
                    <option value="">Select Service</option>
                    <option>Hair Artistry</option>
                    <option>Skin & Glow</option>
                    <option>Bridal</option>
                  </select>

                  <textarea
                    name="message"
                    placeholder="Your message..."
                  />

                  <button type="submit">Submit Booking</button>
                </form>
              </>
            )}
          </div>

          {/* MAP */}
          <div className="map">
            <iframe
              src={mapSrc}
              loading="lazy"
              title="map"
            ></iframe>
          </div>
        </div>
      </div>

      <style>{`
        .booking {
          padding: 80px 20px;
          font-family: sans-serif;
          background: #fafafa;
        }

        .container {
          max-width: 1100px;
          margin: auto;
        }

        h2 {
          text-align: center;
          font-size: 32px;
          margin-bottom: 10px;
        }

        .subtitle {
          text-align: center;
          color: #666;
          margin-bottom: 40px;
        }

        .grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
        }

        .card {
          background: white;
          padding: 30px;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.08);
        }

        form {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        input, select, textarea {
          padding: 12px;
          border-radius: 10px;
          border: 1px solid #ddd;
          font-size: 14px;
        }

        input:focus, select:focus, textarea:focus {
          border-color: #000;
          outline: none;
        }

        button {
          padding: 14px;
          background: black;
          color: white;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          font-weight: 600;
        }

        button:hover {
          background: #333;
        }

        .map iframe {
          width: 100%;
          height: 100%;
          min-height: 400px;
          border-radius: 16px;
          border: none;
        }

        .success {
          text-align: center;
        }

        .tick {
          font-size: 40px;
          color: green;
        }

        @media (max-width: 768px) {
          .grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}

export default Booking;