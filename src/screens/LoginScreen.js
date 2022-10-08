import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  LogoEmail,
  LogoPassword,
  LogoScraptify,
  LogoIPB,
} from "../component/Logo";
import { HiasanLogin } from "../component/Hiasan";

export default function SigninScreen(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const nav = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("LOGIN");
  };

  return (
    <>
      <LogoScraptify />
      <div className="loginMenu">
        <h1>Sign in to continue</h1>
        <form onSubmit={submitHandler} className="loginBox">
          <div className="loginInputs">
            <div className="emailBox">
              <h4>Email</h4>
              <div className="inputs">
                <div className="logoBorder">
                  <LogoEmail />
                </div>
                <input
                  type="email"
                  id="email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  className="input"
                />
              </div>
            </div>
            <div className="emailBox">
              <h4>Password</h4>
              <div className="inputs">
                <div className="logoBorder">
                  <LogoPassword />
                </div>
                <input
                  type="password"
                  id="password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  className="input"
                />
              </div>
            </div>
          </div>

          <button className="signBtn" onClick={() => nav("/")}>
            <h4 style={{ color: "#ffffff" }}>Sign in</h4>
          </button>

          <Link to={`/register`}>
            <p className="regLink">No account? Create one</p>
          </Link>
        </form>
      </div>
      <LogoIPB />
      <HiasanLogin />
    </>
  );
}
