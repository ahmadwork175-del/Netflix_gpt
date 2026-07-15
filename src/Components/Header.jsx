import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from "../utils/constant";

const Header = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user)
  const dispatch = useDispatch();

   useEffect(()=> {
        onAuthStateChanged(auth, (user) => {
     if (user) {
       const {uid , email , displayName , photoURL } = user
       
       dispatch(addUser({uid : uid , email: email  ,displayName: displayName , photoURL:  photoURL }))
       navigate("/browse") 
     } else {
        dispatch(removeUser())
         navigate("/") 
       
     }
   });
    } , [] )
   



  const buttonHandler = () => {
    signOut(auth)
      .then(() => {navigate("/")})
      .catch((error) => {});
  };

  
  return (
    <div className="w-full py-[24px] px-[32px] absolute z-50 flex justify-between bg-gradient-to-t to-black/80 from-black/10 ">
      <img
        className="w-40 "
        src={LOGO}
        alt="logo.png"
      ></img>
      <div>
        {pathname === "/browse" ? (
          <span className="flex gap-2 items-center">
            <img  className="w-10 h-10" src={user?.photoURL} alt={user?.displayName}></img>
            <button onClick={buttonHandler} className="cursor-pointer text-white">
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
