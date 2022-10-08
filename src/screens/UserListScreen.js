import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { LogoIPB } from "../component/Logo";

export default function UserListScreen(props) {
  const users = [
    {
      _id: 1,
      name: "admin",
      email: "admin@admin.com",
      isAdmin: true,
      isSeller: false,
    },
  ];

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(listUsers());
  //   dispatch({ type: USER_DETAILS_RESET });
  // }, [dispatch, successDelete]);

  const deleteHandler = (user) => {
    if (window.confirm("Are you sure?")) {
      console.log("delete");
    }
  };

  return (
    <>
      <LogoIPB />
      <Navbar />
      <div className="listPage">
        <h1 className="ordersTitle">Users</h1>

        {
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>IS SELLER</th>
                <th>IS ADMIN</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  <td>{user._id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.isSeller ? "YES" : "NO"}</td>
                  <td>{user.isAdmin ? "YES" : "NO"}</td>
                  <td>
                    <button
                      type="button"
                      className="small"
                      onClick={() =>
                        props.history.push(`/user/${user._id}/edit`)
                      }
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="small"
                      onClick={() => deleteHandler(user)}
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
