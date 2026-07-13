import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useSelector } from "react-redux";

const Header = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user)

  console.log(user  )



  const buttonHandler = () => {
    signOut(auth)
      .then(() => {navigate("/")})
      .catch((error) => {});
  };

  
  return (
    <div className="w-full py-[24px] px-[32px] absolute z-50 flex justify-between bg-gradient-to-t to-black/80 from-black/10">
      <img
        className="w-40 "
        src="https://occ.a.nflxso.net/dnmt/api/v6/iL4oJVDYZ8KLSrJ6eG2OwtghbfQ/AAAAAeuLioOK1ZSC8bQbffYbz1gZFxugAQdkx7UsMvqKDtFJLk3EWkpY-w8IBimYy_0xmg1aTzugh7JDHsGzv6hqIL9_qklFo-PFSH81MwCe9rokU4kGkdki.svg"
        alt="logo.png"
      ></img>
      <div>
        {pathname === "/browse" ? (
          <span className="flex gap-2 items-center">
            <img  className="w-10 h-10" src={user?.photoURL} alt={user?.displayName}></img>
            <button onClick={buttonHandler} className="cursor-pointer">
              Sign Out  
            </button>
          </span>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Header;
