import img1 from "./../assets/heroSection/image1.jpg";
import img2 from "./../assets/heroSection/image2.jpg";
import img3 from "./../assets/heroSection/image3.jpg";
import img4 from "./../assets/heroSection/image4.jpg";
import img5 from "./../assets/heroSection/image5.jpg";
import img6 from "./../assets/heroSection/image6.jpg";
import img7 from "./../assets/heroSection/image7.jpg";
import img8 from "./../assets/heroSection/image8.jpg";

function Gallery() {
  const items = [
    {
      label: "laser treatment",
      sub: "Skin Transformation",
      img: img7
    },
    {
      label: "laser treatment",
      sub: "Skin Transformation",
      img: img7
    },
    {
      label: "laser treatment",
      sub: "Skin Transformation",
      img: img7
    },
    {
      label: "laser treatment",
      sub: "Skin Transformation",
      img: img7
    },
    {
      label: "laser treatment",
      sub: "Skin Transformation",
      img: img7
    },
    {
      label: "laser treatment",
      sub: "Skin Transformation",
      img: img7
    },
    {
      label: "laser treatment",
      sub: "Skin Transformation",
      img: img7
    },
    {
      label: "laser treatment",
      sub: "Skin Transformation",
      img: img7
    },
  ];

  return (
    <section
      id="gallery"
      style={{
        padding: "clamp(80px,10vw,160px) clamp(20px,6vw,80px)",
        background: "#ffffff",
      }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: "80px" }}>
          <h2
            style={{
              fontSize: "clamp(36px,6vw,72px)",
              fontWeight: 600,
              marginBottom: "16px",
            }}
            className="main-title"
          >
            Our <span style={{ color: "var(--dark)" }}>Transformations</span>
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
export default Gallery;