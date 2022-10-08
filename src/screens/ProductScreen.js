import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../component/Navbar";
import "../css/item.css";
import { WhatsApp, Cart, LogoIPB2 } from "../component/Logo";
import Footer from "../component/Footer";
import axios from "axios";

export default function ProductScreen(props) {
  // const dispatch = useDispatch();
  // const productId = props.match.params.id;
  // const productDetails = useSelector((state) => state.productDetails);
  // const { loading, error, product } = productDetails;
  // const [noHP, setnoHP] = useState("");

  // useEffect(() => {
  //   dispatch(detailsProduct(productId));
  // }, [dispatch, productId]);

  // const addToCartHandler = () => {
  //   props.history.push(`/cart/${productId}`);
  // };
  // if (product) {
  //   axios
  //     .get(
  //       `https://scraptify-server.herokuapp.com/api/users/${product.seller._id}`
  //     )
  //     .then((result) => {
  //       setnoHP(result.data.noHandphone);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

  const addToCartHandler = () => {
    console.log("ADD");
  };

  return (
    <>
      <Navbar />
      <LogoIPB2 />
      <div>
        {
          <div className="detailBox">
            <h1 className="detailTitle">Detail Barang</h1>
            <div className="detailItem">
              <div className="part partPhoto">
                <div className="part1part">
                  <img src="" className="mainPic" alt="" />
                </div>
              </div>
              <div className="part partDesc">
                <div className="part2part itemName">
                  <h1>product.name</h1>
                </div>
                <div className="part2part itemDescr">
                  <div className="deskripsiDiv">
                    <h4>Deskripsi</h4>
                  </div>
                  <p>product.description</p>
                </div>
              </div>
              <div className="part partSeller">
                <h4>Profil Penjual</h4>
                <div className="profil">
                  <div className="pp">
                    <img src={"/images/img1.png"} alt="" />
                  </div>
                  <div className="div">
                    <p>product.seller.name</p>
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
        }
      </div>
      <Footer margin={"500px"} />
    </>
  );
}
