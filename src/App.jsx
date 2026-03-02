// import React, { useEffect, useState, useContext, Suspense } from "react";
// import {
//   BrowserRouter as Router,
//   Route,
//   Navigate,
//   Routes,
//   useLocation,
// } from "react-router-dom";
// import Auth from "./pages/Auth";
// import { AuthContext } from "./shared/context/auth-context";
// import { useAuth } from "./shared/hooks/auth-hook";
// import LoadingSpinner from "./shared/components/UIElements/LoadingSpinner";

// const DefaultLayout = React.lazy(() => import("./layout/DefaultLayout"));

// const RequireAuth = ({ children }) => {
//   const auth = useContext(AuthContext);
//   const location = useLocation();
//   if (!auth.isLoggedIn) {
//     return <Navigate to="/auth" state={{ from: location }} replace />;
//   }
//   return children;
// };

// const App = () => {
//   // const storedTheme = useSelector((state) => state.theme)
//   const { token, login, logout, userId, firstName, lastName, title, srcLink } =
//     useAuth();
//   const [isAuthChecked, setIsAuthChecked] = useState(false);

//   useEffect(() => {
//     setIsAuthChecked(true);
//   }, []);

//   if (!isAuthChecked) {
//     return <LoadingSpinner asOverlay />;
//   }

//   return (
//     <AuthContext.Provider
//       value={{
//         isLoggedIn: !!token,
//         userId,
//         firstName,
//         lastName,
//         title,
//         srcLink,
//         token,
//         login,
//         logout,
//       }}
//     >
//       <Router>
//         <Suspense fallback={<LoadingSpinner />}>
//           <Routes>
//             <Route path="/auth" element={<Auth />} />
//             <Route
//               path="*"
//               element={
//                 <RequireAuth>
//                   <DefaultLayout />
//                 </RequireAuth>
//               }
//             />
//           </Routes>
//         </Suspense>
//       </Router>
//     </AuthContext.Provider>
//   );
// };

// export default App;

// import React, { useState } from 'react';
// import { Scissors, Clock, MapPin, Phone, Instagram, ArrowRight, Check, Menu, X } from 'lucide-react';

// /**
//  * TWENTY AXE SALOON - PRO FRONTEND
//  * Features: 
//  * - Netlify Form Integration
//  * - Dynamic Service Menu
//  * - Responsive "Industrial Luxury" UI
//  */

// const TwentyAxeApp = () => {
//   const [isNavOpen, setIsNavOpen] = useState(false);
//   const [submitted, setSubmitted] = useState(false);

//   // --- DATA ---
//   const services = [
//     { id: 1, title: "Signature Haircut", price: "₹500", time: "45 min" },
//     { id: 2, title: "Beard Crafting", price: "₹300", time: "30 min" },
//     { id: 3, title: "Luxury Shave", price: "₹400", time: "40 min" },
//     { id: 4, title: "Hair Coloring", price: "₹1200+", time: "90 min" },
//   ];

//   // --- HANDLERS ---
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSubmitted(true);
//     // Netlify picks up the form submission automatically via the 'data-netlify' attribute
//   };

//   return (
//     <div className="bg-[#0f0f0f] text-gray-100 font-sans antialiased">
      
//       {/* --- HEADER --- */}
//       <nav className="fixed w-full z-50 bg-[#0f0f0f]/80 backdrop-blur-lg border-b border-white/5">
//         <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
//           <div className="text-2xl font-black tracking-widest text-[#d4af37]">
//             TWENTY AXE <span className="text-white font-light">| SALOON</span>
//           </div>
          
//           <div className="hidden md:flex space-x-10 text-xs uppercase tracking-[0.2em] font-bold">
//             <a href="#services" className="hover:text-[#d4af37] transition">Services</a>
//             <a href="#booking" className="hover:text-[#d4af37] transition text-[#d4af37]">Book Appointment</a>
//           </div>

//           <button className="md:hidden" onClick={() => setIsNavOpen(!isNavOpen)}>
//             {isNavOpen ? <X /> : <Menu />}
//           </button>
//         </div>
//       </nav>

//       {/* --- HERO SECTION --- */}
//       <section className="relative h-screen flex items-center justify-center pt-20">
//         <div className="absolute inset-0 overflow-hidden">
//           <img 
//             src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074&auto=format&fit=crop" 
//             className="w-full h-full object-cover opacity-30"
//             alt="Interior"
//           />
//           <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0f0f0f]"></div>
//         </div>

//         <div className="relative z-10 text-center px-4">
//           <h2 className="text-[#d4af37] font-bold tracking-[0.5em] mb-4 uppercase text-sm">Ahmedabad's Finest</h2>
//           <h1 className="text-6xl md:text-9xl font-black mb-8 leading-tight">
//             SHARPEN <br/> <span className="text-[#d4af37]">YOUR EDGE</span>
//           </h1>
//           <div className="flex flex-wrap justify-center gap-6">
//             <a href="#booking" className="bg-[#d4af37] text-black px-10 py-5 font-bold uppercase tracking-widest hover:bg-white transition-all">
//               Reserve a Chair
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* --- STATS / TRUST --- */}
//       <section className="py-12 border-y border-white/5 bg-[#141414]">
//         <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
//           <div>
//             <div className="text-3xl font-black text-[#d4af37]">5.0</div>
//             <div className="text-xs uppercase tracking-widest text-gray-500">Google Rating</div>
//           </div>
//           <div className="border-x border-white/5">
//             <div className="text-3xl font-black text-[#d4af37]">88+</div>
//             <div className="text-xs uppercase tracking-widest text-gray-500">Verified Reviews</div>
//           </div>
//           <div>
//             <div className="text-3xl font-black text-[#d4af37]">10+</div>
//             <div className="text-xs uppercase tracking-widest text-gray-500">Expert Stylists</div>
//           </div>
//         </div>
//       </section>

//       {/* --- SERVICES --- */}
//       <section id="services" className="py-32 px-6 max-w-5xl mx-auto">
//         <div className="text-center mb-20">
//           <h3 className="text-4xl font-black italic mb-4 uppercase">The Service Menu</h3>
//           <div className="w-20 h-1 bg-[#d4af37] mx-auto"></div>
//         </div>

//         <div className="grid gap-8">
//           {services.map((s) => (
//             <div key={s.id} className="flex justify-between items-end border-b border-white/10 pb-4 group hover:border-[#d4af37] transition-all">
//               <div>
//                 <h4 className="text-xl font-bold uppercase tracking-tight group-hover:text-[#d4af37]">{s.title}</h4>
//                 <p className="text-gray-500 text-sm mt-1 flex items-center">
//                   <Clock size={14} className="mr-2" /> {s.time}
//                 </p>
//               </div>
//               <div className="text-2xl font-light text-[#d4af37] italic">{s.price}</div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* --- BOOKING FORM (Netlify Integrated) --- */}
//       <section id="booking" className="py-32 bg-[#141414]">
//         <div className="max-w-4xl mx-auto px-6">
//           <div className="bg-[#0f0f0f] border border-white/5 p-10 md:p-20 shadow-2xl rounded-sm">
//             {submitted ? (
//               <div className="text-center py-10">
//                 <Check className="mx-auto text-green-500 mb-6" size={60} />
//                 <h2 className="text-3xl font-bold mb-4">Request Received</h2>
//                 <p className="text-gray-400">We will call you to confirm your time slot.</p>
//                 <button onClick={() => setSubmitted(false)} className="mt-8 text-[#d4af37] underline">Make another booking</button>
//               </div>
//             ) : (
//               <form 
//                 name="saloon-booking" 
//                 method="POST" 
//                 data-netlify="true" 
//                 onSubmit={handleSubmit}
//                 className="space-y-8"
//               >
//                 {/* Netlify Requirement */}
//                 <input type="hidden" name="form-name" value="saloon-booking" />
                
//                 <div className="grid md:grid-cols-2 gap-8">
//                   <div className="space-y-2">
//                     <label className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold">Client Name</label>
//                     <input required name="name" type="text" className="w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-[#d4af37] transition" placeholder="Your Name" />
//                   </div>
//                   <div className="space-y-2">
//                     <label className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold">Mobile Number</label>
//                     <input required name="phone" type="tel" className="w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-[#d4af37] transition" placeholder="+91 00000 00000" />
//                   </div>
//                 </div>

//                 <div className="space-y-2">
//                   <label className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold">Select Service</label>
//                   <select name="service" className="w-full bg-[#1a1a1a] border border-white/10 p-4 focus:outline-none focus:border-[#d4af37]">
//                     {services.map(s => <option key={s.id} value={s.title}>{s.title}</option>)}
//                   </select>
//                 </div>

//                 <button type="submit" className="w-full bg-white text-black py-5 font-black uppercase tracking-[0.3em] hover:bg-[#d4af37] transition-all flex justify-center items-center">
//                   Request Appointment <ArrowRight className="ml-4" size={20} />
//                 </button>
//               </form>
//             )}
//           </div>
//         </div>
//       </section>

//       {/* --- FOOTER --- */}
//       <footer className="py-20 px-6 border-t border-white/5 text-center">
//         <div className="flex justify-center space-x-6 mb-10 text-gray-500">
//           <Instagram className="hover:text-white cursor-pointer" />
//           <Phone className="hover:text-white cursor-pointer" />
//           <MapPin className="hover:text-white cursor-pointer" />
//         </div>
//         <p className="text-gray-500 text-xs uppercase tracking-[0.5em]">Jashodanagar, Ahmedabad</p>
//         <p className="mt-4 text-[10px] text-gray-700 uppercase">© 2026 Twenty Axe Saloon. All Rights Reserved.</p>
//       </footer>

//     </div>
//   );
// };

// export default TwentyAxeApp;

import React from 'react'
import TwentyaxeSalon from './TwentyaxeSalon'
// import SalonApp from "./SalonApp";

export default function App() {
  return (
    <TwentyaxeSalon />
    // <SalonApp />
  )
}
