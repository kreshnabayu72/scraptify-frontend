import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import data from "../data";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { LogoIPB } from "../component/Logo";
export default function ProductListScreen(props) {
  // useEffect(() => {
  //   if (successCreate) {
  //     dispatch({ type: PRODUCT_CREATE_RESET });
  //     props.history.push(`/product/${createdProduct._id}/edit`);
  //   }
  //   if (successDelete) {
  //     dispatch({ type: PRODUCT_DELETE_RESET });
  //   }
  //   dispatch(listProducts({ seller: sellerMode ? userInfo1._id : "" }));
  // }, [
  //   createdProduct,
  //   dispatch,
  //   props.history,
  //   sellerMode,
  //   successCreate,
  //   successDelete,
  //   userInfo1._id,
  // ]);

  const products = data.products;

  const deleteHandler = (product) => {
    if (window.confirm("Are you sure to delete?")) {
      console.log("delete");
    }
  };

  const createHandler = () => {
    console.log("create");
  };

  return (
    <>
      <Navbar />
      <LogoIPB />
      <div className="listPage">
        <div className="listHeader">
          <h1 className="listTitle" style={{ marginLeft: "25px" }}>
            Products
          </h1>
          <button type="button" className="listBtn" onClick={createHandler}>
            <h1>Jual Produk</h1>
          </button>
        </div>

        {
          <table>
            <thead>
              <tr>
                <td>ID</td>
                <td>NAMA</td>
                <td>HARGA</td>
                <td>KATEGORI</td>
                <td>BRAND</td>
                <td>TINDAKAN</td>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product._id}>
                  <td>{product._id}</td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.category}</td>
                  <td>{product.brand}</td>
                  <td className="action">
                    <button
                      type="button"
                      className="small"
                      onClick={() =>
                        props.history.push(`/product/${product._id}/edit`)
                      }
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="small"
                      onClick={() => deleteHandler(product)}
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        }
      </div>
    </>
  );
}
