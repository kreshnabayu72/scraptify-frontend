import React, { useEffect, useState } from "react";
import axios from "axios";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";
// import Product from "../components/product";
// import LoadingBox from "../components/LoadingBox";
// import MessageBox from "../components/MessageBox";
// import { useDispatch, useSelector } from "react-redux";
// import { listProducts } from "../actions/productActions";
// import { listTopSellers } from "../actions/userActions";
import { Link } from "react-router-dom";
import Category from "../component/Category";
import Navbar from "../component/Navbar";
// import "../css/home.css";
import Footer from "../component/Footer";
import Header from "../component/HomeHeader";
import Items from "../component/HomeItems";
import PageNums from "../component/ItemPageNums";
import { HiasanHome, HiasanHome2 } from "../component/Hiasan";
import { LogoIPB2 } from "../component/Logo";
import dummy from "../data";

export default function HomeScreen() {
  const [all, setAll] = useState({});

  const [data, setData] = useState(dummy);

  useEffect(() => {
    setCurrentItems(data.products.slice(indexFirstPost, indexLastPost));
  }, [data]);

  const [category, setCategory] = useState("");

  function filter(jenis) {
    const newBarangs = all.filter((barang) => {
      return barang.category === jenis;
    });
    setData(newBarangs);
    console.log(jenis);
  }
  function nofilter() {
    setData(Array.from(all));
    setCategory("");
  }

  //fungsi page
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(12);
  const [currentItems, setCurrentItems] = useState([]);

  const indexLastPost = currentPage * postPerPage;
  const indexFirstPost = indexLastPost - postPerPage;

  return (
    <>
      <Navbar />
      <LogoIPB2 />
      <Header filter={filter} cat={category} nofilter={nofilter} />
      <Items data={currentItems} />
      <PageNums setCurrentPage={setCurrentPage} />
      <HiasanHome2 />
      <Footer margin={"-100px"} />
    </>
  );
}
