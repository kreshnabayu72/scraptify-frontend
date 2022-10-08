import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import Axios from "axios";
// import { detailsUser, updateUserProfile } from "../actions/userActions";
// import { USER_UPDATE_PROFILE_RESET } from "../constants/userConstants";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { LogoIPB2 } from "../component/Logo";

export default function ProfileScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [noHandphone, setNoHandphone] = useState("");
  const [nim, setNim] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [image, setImage] = useState("");
  const [sellerName, setSellerName] = useState("");
  const [sellerLogo, setSellerLogo] = useState("");
  const [sellerDescription, setSellerDescription] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  // const userSignin = useSelector((state) => state.userSignin);
  // const { userInfo1 } = userSignin;
  // const userDetails = useSelector((state) => state.userDetails);
  // const { loading, error, user } = userDetails;
  // const dispatch = useDispatch();
  // const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  // const {
  //   success: successUpdate,
  //   error: errorUpdate,
  //   loading: loadingUpdate,
  // } = userUpdateProfile;
  const [user, setUser] = useState({});
  const [loadingUpload, setLoadingUpload] = useState(false);
  const [errorUpload, setErrorUpload] = useState("");
  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append("image", file);
  };

  useEffect(() => {
    if (!user) {
      setUser({
        name: "name",
        email: "email",
        noHandphone: 123,
        nim: "G6123",
        image: null,
        seller: false,
      });
    } else {
      setName(user.name);
      setEmail(user.email);
      setNoHandphone(user.noHandphone);
      setNim(user.nim);
      setImage(user.image);
      if (user.seller) {
        console.log(user.seller.name);
        setSellerName(user.seller.name);
        setSellerLogo(user.seller.logo);
        setSellerDescription(user.seller.description);
      }
    }
  }, [user]);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Navbar />
      <LogoIPB2 />
      <div className="profAccount">
        <h1 className="profilTitle">Pengaturan Akun</h1>
        <div>
          <div className="accBox">
            <div className="accleft">
              <img
                className="medium-profile"
                src={require("../images/img1.png")}
                alt="Name"
              ></img>
              <input
                type="file"
                id="imageFile"
                label="Choose Image"
                onChange={uploadFileHandler}
                style={{ display: "none" }}
              ></input>
              {isEditing && (
                <label for="imageFile">
                  <div className="profBtnUpload">
                    <h1>Ganti Foto</h1>
                  </div>
                </label>
              )}
            </div>

            <form className="accright" onSubmit={submitHandler}>
              <div className="profIn">
                <h1>Nama Lengkap</h1>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter name"
                  value={name}
                  onChange={(e) => {
                    if (isEditing) setName(e.target.value);
                  }}
                ></input>
              </div>
              <div className="profIn">
                <h1>NIM</h1>
                <input
                  id="nim"
                  type="text"
                  placeholder="Enter nim"
                  value={nim}
                  onChange={(e) => {
                    if (isEditing) setNim(e.target.value);
                  }}
                ></input>
              </div>
              <div className="profIn">
                <h1>Email</h1>
                <input
                  id="email"
                  type="text"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => {
                    if (isEditing) setEmail(e.target.value);
                  }}
                ></input>
              </div>

              <div className="profIn">
                <h1>Password</h1>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => {
                    if (isEditing) setPassword(e.target.value);
                  }}
                ></input>
              </div>

              <div className="profIn">
                <h1>No HP</h1>
                <input
                  id="noHandphone"
                  type="text"
                  placeholder="Enter No Handphone"
                  value={noHandphone}
                  onChange={(e) => {
                    if (isEditing) setNoHandphone(e.target.value);
                  }}
                ></input>
              </div>
              {isEditing && (
                <button className="profBtnSave" type="submit">
                  <h1>Simpan Perubahan</h1>
                </button>
              )}
              {!isEditing && (
                <button
                  className="profBtnSave"
                  onClick={() => setIsEditing(true)}
                >
                  <h1>Edit Profil</h1>
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
      <Footer margin={"180px"} />
    </>
  );
}
