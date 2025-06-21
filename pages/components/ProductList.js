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
            <h3 onClick={() => setSidebarOpen(!sidebarOpen)}>FILTER</h3>
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
        <Image src={image} alt={title} width={200} height={200} priority />
      </div>

      <h4 className="product-title">{title}</h4>

      <div className="product-details">
        <p className="signin-text">
          Sign in or Create an account to see pricing
        </p>
        <Image
          src="/Heart.png"
          alt="Like"
          width={20}
          height={20}
          className="likes"
          onClick={toggleLike}
        />
      </div>
    </div>
  );
}
