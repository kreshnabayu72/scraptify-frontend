import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../component/Navbar";
import "../css/item.css";
import { WhatsApp, Cart, LogoIPB2 } from "../component/Logo";
import Footer from "../component/Footer";
import axios from "axios";
import data from "../data";
import { useParams } from "react-router";

export default function ProductScreen(props) {
  const addToCartHandler = () => {
    console.log("ADD");
  };

  const [product, setProduct] = useState({});

  const params = useParams();

  const products = data.products;

  useEffect(() => {
    setProduct(products.find((product) => product._id === params.id));
  }, []);

  return (
    <>
      <Navbar />
      <LogoIPB2 />
      <div>
        <div className="detailBox">
          <h1 className="detailTitle">Detail Barang</h1>
          <div className="detailItem">
            <div className="part partPhoto">
              <div className="part1part">
                {product.image ? (
                  <img
                    src={require(`../images/${product.image}`)}
                    className="mainPic"
                    alt="image"
                  />
                ) : (
                  <img
                    src={require(`../images/img1.png`)}
                    className="mainPic"
                    alt="image"
                  />
                )}
              </div>
            </div>
            <div className="part partDesc">
              <div className="part2part itemName">
                <h1>{product.name}</h1>
              </div>
              <div className="part2part itemDescr">
                <div className="deskripsiDiv">
                  <h4>Deskripsi</h4>
                </div>
                <p>{product.description}</p>
              </div>
            </div>
            <div className="part partSeller">
              <h4>Profil Penjual</h4>
              <div className="profil">
                <div className="pp">
                  <img src={require("../images/img1.png")} alt="" />
                </div>
                <div className="div">
                  <p>Seller name</p>
                  <a href={`https://wa.me/+6281381818181818`} target="blank">
                    <button className="iconWA">
                      <WhatsApp />
                      <p>Hubungi Penjual</p>
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="part partPrice">
              <div className="deskripsiDiv2">
                <h4>Harga</h4>
              </div>
              <p>Rp 20000</p>
              <div className="addToCart" onClick={addToCartHandler}>
                <Cart />
                <h4>Tambahkan Ke Keranjang</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
