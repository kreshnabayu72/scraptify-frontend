import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { HiasanReg } from "../component/Hiasan";
import {
  LogoEmail,
  LogoPassword,
  LogoUser,
  LogoNoTelp,
  LogoNIM,
  LogoScraptify,
  LogoIPB,
} from "../component/Logo";

export default function RegisterScreen(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [noHandphone, setNoHandphone] = useState("");
  const [nim, setNim] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
  };

  const [user, setUser] = useState({
    name: "name",
    email: "email",
    noHandphone: 123,
    nim: "G6123",
    image: null,
    seller: false,
  });

  return (
    <>
      <LogoScraptify />
      <div className="regMenu">
        <h1>Create Account</h1>
        <form className="regBox" onSubmit={submitHandler}>
          <div className="regInputs">
            <div className="userBoxReg oneReg">
              <h4>Nama Lengkap</h4>
              <div className="inputs">
                <div className="logoBorder">
                  <LogoUser />
                </div>
                <input
                  type="text"
                  required
                  onChange={(e) => setName(e.target.value)}
                  className="input"
                />
              </div>
            </div>
            <div className="emailBoxReg oneReg">
              <h4>Email</h4>
              <div className="inputs">
                <div className="logoBorder">
                  <LogoEmail />
                </div>
                <input
                  type="email"
                  className="input"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="emailBoxReg oneReg">
              <h4>Nomor Telepon</h4>
              <div className="inputs">
                <div className="logoBorder">
                  <LogoNoTelp />
                </div>
                <input
                  type="text"
                  className="input"
                  required
                  onChange={(e) => setNoHandphone(e.target.value)}
                />
              </div>
            </div>
            <div className="emailBoxReg oneReg">
              <h4>NIM</h4>
              <div className="inputs">
                <div className="logoBorder">
                  <LogoNIM />
                </div>
                <input
                  type="text"
                  className="input"
                  required
                  onChange={(e) => setNim(e.target.value)}
                />
              </div>
            </div>
            <div className="passBoxReg oneReg">
              <h4 style={{ marginTop: "-16px" }}>Password</h4>
              <div className="inputs">
                <div className="logoBorder">
                  <LogoPassword />
                </div>
                <input
                  type="password"
                  className="input"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
          </div>
          <button className="signBtn" type="submit">
            <h4 style={{ color: "#ffffff" }}>Create Account</h4>
          </button>
          <Link to={`/login`}>
            <p className="regLink">Sudah punya akun? Login</p>
          </Link>
        </form>
      </div>
      <LogoIPB />
      <HiasanReg />
    </>
  );
}
