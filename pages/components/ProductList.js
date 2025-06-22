import { useState, useEffect } from "react";
import Image from "next/image";
import Head from "next/head";
import axios from "axios";

export default function ProductPage() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("RECOMMENDED");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [productData, setProductData] = useState([]);
  const closeSidebar = () => setSidebarOpen(false);

  const [liked, setLiked] = useState(false);
  const toggleLike = () => setLiked(!liked);

  const options = [
    "RECOMMENDED",
    "NEWEST",
    "POPULAR",
    "PRICE: LOW TO HIGH",
    "PRICE: HIGH TO LOW",
  ];

  const accordionItems = [
    {
      label: "IDEAL FOR",
      content: ["MEN", "WOMEN", "BABY & KIDS"],
    },
    {
      label: "OCCASION",
      content: ["CASUAL", "FESTIVE", "WEDDING"],
    },
    {
      label: "WORK",
      content: ["OFFICE", "REMOTE", "FREELANCE"],
    },
    {
      label: "FABRIC",
      content: ["COTTON", "LINEN", "SILK"],
    },
    {
      label: "SEGMENT",
      content: ["LUXURY", "MID-RANGE", "ECONOMY"],
    },
    {
      label: "SUITABLE FOR",
      content: ["SUMMER", "WINTER", "ALL SEASONS"],
    },
    {
      label: "RAW MATERIALS",
      content: ["NATURAL", "SYNTHETIC", "RECYCLED"],
    },
    {
      label: "PATTERN",
      content: ["PLAIN", "STRIPED", "PRINTED"],
    },
  ];

  const toggleDropdown = () => setOpen((prev) => !prev);

  const handleSelect = (option) => {
    setSelected(option);
    setOpen(false);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("https://fakestoreapi.com/products");
        setProductData(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <>
      <Head>
        <title>Product Listing</title>
        <meta
          name="description"
          content="Browse our recommended and newest products."
        />
      </Head>

      <div className="product-section">
        <div className="section-header">
          <div className="section-items">
            <p>3425 ITEMS</p>

            <a href="#" onClick={() => setSidebarOpen(!sidebarOpen)}>
              {sidebarOpen ? "HIDE FILTER" : "SHOW FILTER"}
            </a>
          </div>

          <div className="filter">
            <h4 onClick={() => setSidebarOpen(!sidebarOpen)}>FILTER</h4>
          </div>

          <div className="sort-dropdown">
            <div className="sort-selected" onClick={toggleDropdown}>
              {selected} <span className="arrow">▼</span>
              {open && (
                <ul className="sort-options">
                  {options.map((option) => (
                    <li
                      key={option}
                      className={option === selected ? "active" : ""}
                      onClick={() => handleSelect(option)}
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>

        <section className="body-container">
          {sidebarOpen && (
            <div className="leftside">
              <button className="close-btn" onClick={closeSidebar}>
                ✕
              </button>
              <form className="custom-checkbox">
                <input type="checkbox" />
                <label>CUSTOMIZABLE</label>
              </form>

              {accordionItems.map((item, i) => (
                <div className="accordion-item" key={i}>
                  <input
                    type="checkbox"
                    id={`acc${i + 1}`}
                    className="accordion-checkbox"
                  />
                  <label htmlFor={`acc${i + 1}`} className="accordion-label">
                    {item.label}
                    <br />
                    <p>ALL</p>
                  </label>
                  <div className="accordion-content">
                    <form className="accordion-items-checkbox">
                      {item.content.map((option, index) => (
                        <div key={index}>
                          <input
                            type="checkbox"
                            id={`${item.label}-${option}`}
                          />
                          <label htmlFor={`${item.label}-${option}`}>
                            {option}
                          </label>
                        </div>
                      ))}
                    </form>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className={`product-grid ${sidebarOpen ? "sidebar-open" : ""}`}>
            {productData.map(({ title, image, id }) => (
              <ProductCard title={title} image={image} key={id} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

function ProductCard({ title, image }) {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => setLiked(!liked);

  return (
    <div className="product-card">
      <div className="product-img">
        <Image
          src={image}
          alt={title}
          width={200}
          height={200}
          priority
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      </div>

      <h3 className="product-title">{title}</h3>

      <div className="product-details">
        <p className="signin-text">
          Sign in or Create an account to see pricing
        </p>
        <div onClick={toggleLike}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill={liked ? "red" : "none"}
            viewBox="0 0 24 24"
            stroke={liked ? "red" : "black"}
            strokeWidth="2"
            className="likes"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 21C12 21 5 13.5 5 9.5C5 6.42 7.42 4 10.5 4C12.04 4 13.54 4.81 14.25 6.08C14.96 4.81 16.46 4 18 4C21.08 4 23.5 6.42 23.5 9.5C23.5 13.5 16.5 21 16.5 21H12Z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
