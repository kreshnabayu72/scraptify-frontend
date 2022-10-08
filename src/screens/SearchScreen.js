import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import data from "../data";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Items from "../component/HomeItems";
import { LogoIPB2 } from "../component/Logo";

export default function SearchScreen(props) {
  const { name = "all", category = "all" } = useParams();
  const productList = { products: data.products };
  const { loading, error, products } = productList;

  // useEffect(() => {}, [category, dispatch, name]);

  console.log(products);
  return (
    <>
      <Navbar />
      <LogoIPB2 />
      <div>
        <>
          {products.length === 0 && (
            <h1 className="center">Produk tidak ditemukan</h1>
          )}
          <h1 className="searchTitle center">Hasil Pencarian Untuk "{name}"</h1>
          <Items data={products} />
        </>
      </div>
      <Footer />
    </>
  );
}
