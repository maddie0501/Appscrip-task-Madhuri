import { useState } from "react";
import Image from "next/image";

export default function Footer() {
  const [open, setOpen] = useState(null);

  const toggle = (section) => {
    setOpen(open === section ? null : section);
  };
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="signup">
          <h4>BE THE FIRST TO KNOW</h4>
          <p>Sign up for updates from mettā muse.</p>
          <form className="subscribe-form">
            <input type="text" placeholder="Enter your e-mail..." />
            <button type="submit">SUBSCRIBE</button>
          </form>
        </div>

        <div className="contact">
          <h4>CONTACT US</h4>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>

          <h4>CURRENCY</h4>
          <div className="currency-display">
            <Image src="/usdicon.png" alt="USDicon" width={20} height={20} />
            <span className="dot">•</span>
            <span>USD</span>
          </div>
        </div>
      </div>

      <div className="footer-accordion">
        <div className="footer-accitem">
          <div className="accordion-header" onClick={() => toggle("muse")}>
            <h4>mettā muse</h4>
            <span>{open === "muse" ? "▲" : "▼"}</span>
          </div>
          {open === "muse" && (
            <div className="accordion-detail">
              <p>About Us</p>
              <p>Stories</p>
              <p>Artisans</p>
              <p>Boutiques</p>
              <p>Contact Us</p>
              <p>EU Compliances Docs</p>
            </div>
          )}
        </div>

        <div className="footer-accitem">
          <div className="accordion-header" onClick={() => toggle("quick")}>
            <h4>QUICK LINKS</h4>
            <span>{open === "quick" ? "▲" : "▼"}</span>
          </div>
          {open === "quick" && (
            <div className="accordion-detail">
              <p>Orders & Shipping</p>
              <p>Join/Login as Seller</p>
              <p>Payment & Pricing</p>
              <p>Return & Refunds</p>
              <p>FAQs</p>
              <p>Privacy Policy</p>
              <p>Terms & Conditions</p>
            </div>
          )}
        </div>

        <div className="footer-accitem">
          <div className="accordion-header" onClick={() => toggle("follow")}>
            <h4>FOLLOW US</h4>
            <span>{open === "follow" ? "▲" : "▼"}</span>
          </div>
          {open === "follow" && (
            <div className="accordion-detail">
              <Image
                src="/socials.png"
                alt="social links"
                width={50}
                height={20}
              />
            </div>
          )}
        </div>
      </div>

      <div className="footer-section2">
        <div className="footer-details-wrapper">
          <div className="footer-details">
            <p>mettā muse</p>
            <p>About Us</p>
            <p>Stories</p>
            <p>Artisans</p>
            <p>Boutiques</p>
            <p>Contact Us</p>
            <p>EU Compliances Docs</p>
          </div>

          <div className="footer-links">
            <h4>QUICK LINKS</h4>
            <p>Orders & Shipping</p>
            <p>Join/Login as Seller</p>
            <p>Payment & Pricing</p>
            <p>Return & Refunds</p>
            <p>FAQs</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>

          <div className="footer-follow">
            <h4>FOLLOW US</h4>
            <Image
              src="/socials.png"
              alt="social links"
              width={50}
              height={20}
            />
            <h4>mettā muse ACCEPTS</h4>
            <div className="payment-logos">
              <Image
                src="/payments.png"
                alt="Search"
                width={300}
                height={100}
              />
            </div>
          </div>
        </div>
      </div>

      <p className="footer-copy">
        Copyright © 2023 mettamuse. All rights reserved.
      </p>
    </footer>
  );
}
