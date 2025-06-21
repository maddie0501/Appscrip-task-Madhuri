import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  const closeSidebar = () => setIsSidebarOpen(false);
  return (
    <>
     <Head>
        <title>Product Listing Page</title>
        <meta name="description" content="Browse our products and find the best deals online!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="sticky">
        <p>Lorem ipsum dolor</p>
        <p>Lorem ipsum dolor</p>
        <p>Lorem ipsum dolor</p>
      </div>

      <div className="navbar">
        <div className="hamburger" onClick={toggleSidebar}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>

        <div className="header-left">
          <Image src="/Logo.png" alt=" Logo" width={30} height={30} />


        </div>
        <h1 className="brand-text">LOGO</h1>
        
        <div className="navbar-right">
          <Image src="/search-normal.png" alt="Search" width={20} height={20} />
          <Image src="/heart.png" alt="Wishlist" width={20} height={20} />
          <Image src="/shopping-bag.png" alt="Cart" width={20} height={20} />
          <div className="desktop-icons">
            <Image src="/profile.png" alt="Profile" width={20} height={20} />
            <p className="lang-selector">
              ENG <span>▼</span>
            </p>
          </div>
        </div>
      </div>

      <div className="header-center">
        <p>SHOP</p>
        <p>SKILLS</p>
        <p>STORIES</p>
        <p>ABOUT</p>
        <p>CONTACT US</p>
      </div>

      {isSidebarOpen && (
        <div className={`mobile-sidebar ${isSidebarOpen ? "show" : ""}`}>
          <button className="close-btn" onClick={closeSidebar}>
            ✕
          </button>
          <div className="sidebar-links">
            <p>SHOP</p>
            <p>SKILLS</p>
            <p>STORIES</p>
            <p>ABOUT</p>
            <p>CONTACT US</p>
          </div>
        </div>
      )}

      {isSidebarOpen && <div className="overlay" onClick={closeSidebar}></div>}

      <section className="hero-section">
        <div className="breadcrumbs">
          <h4>HOME</h4>
          <span>|</span>
          <h4>SHOP</h4>
        </div>
        <h2 className="hero-header">DISCOVER OUR PRODUCTS</h2>
        <p className="hero-description">
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
          <span className="line-break">
            <br />
          </span>
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
          dolor.
        </p>
      </section>
    </>
  );
}
