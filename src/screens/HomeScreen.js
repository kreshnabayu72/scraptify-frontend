import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Header from "../component/HomeHeader";
import Items from "../component/HomeItems";
import PageNums from "../component/ItemPageNums";
import { HiasanHome, HiasanHome2 } from "../component/Hiasan";
import { LogoIPB2 } from "../component/Logo";
import dummy from "../data";

export default function HomeScreen() {
  const [all, setAll] = useState([]);

  const [data, setData] = useState(dummy);

  useEffect(() => {
    setAll(data.products);
  }, []);

  useEffect(() => {
    setCurrentItems(data.products);
  }, [data]);

  const [category, setCategory] = useState("");

  function filter(jenis) {
    const newBarangs = filteredItems.filter((barang) => {
      return barang.category === jenis;
    });
    setFilteredItems(newBarangs);
  }

  function nofilter() {
    setFilteredItems(Array.from(all));
    setCategory("");
  }

  //fungsi page
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(12);
  const [currentItems, setCurrentItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    const sliceStart = (currentPage - 1) * postPerPage;
    const sliceEnd = sliceStart + postPerPage;
    if (currentItems)
      setFilteredItems(currentItems.slice(sliceStart, sliceEnd));
  }, [currentItems, currentPage]);

  return (
    <>
      <Navbar />
      <LogoIPB2 />
      <Header filter={filter} cat={category} nofilter={nofilter} />
      <Items data={filteredItems} />
      <PageNums setCurrentPage={setCurrentPage} />
      <HiasanHome2 />
      <Footer margin={"-100px"} />
    </>
  );
}
