import React from "react";
import Homepage from "./components/Homepage";
import Product from "./components/ProductList";
import Footer from "../pages/components/Footer";

export default function Home() {
  return (
    <>
      <Homepage />
      <Product />
      <Footer />
    </>
  );
}
