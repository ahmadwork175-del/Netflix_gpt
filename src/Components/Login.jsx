import React, { useRef, useState } from "react";
import Header from "./Header";
import { formValidationChecker } from "../utils/validation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";
import { useNavigate } from "react-router-dom";
import accountIcon from "../assets/accounticon.jpg";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignUpForm, setSignUpForm] = useState(false);
  const [errorMessage, setErrorMessage] = useState({});
  const [viewPassword, setViewPassword] = useState(false);
  const [userError, setUserError] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [buttonHandle, setButtonHandle] = useState(false);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const toggleSignUpForm = () => {
    setSignUpForm(!isSignUpForm);
    setErrorMessage({});
    setUserError();
  };
  const formHandler = () => {
    if (!isSignUpForm) {
      const result = formValidationChecker(
        email.current.value,
        password.current.value,
      );
      setErrorMessage(result);

      if (result.email === false || result.password === false) return;
      setButtonHandle(true);
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
          setUserError(errorMessage);
          setButtonHandle(true);
        })
        .finally(() => {
          setButtonHandle(false);
        });
    } else {
      const result = formValidationChecker(
        email.current.value,
        password.current.value,
      );
      setErrorMessage(result);
      if (
        result.email === false ||
        result.password === false ||
        result.name === false
      )
        return;
      setButtonHandle(!buttonHandle);
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          const user = userCredential.user;
          setButtonHandle(!buttonHandle);
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
            photoURL: accountIcon,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;

              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                }),
              );
            })
            .catch((error) => {
              setErrorMessage(error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setUserError(errorMessage);
          setButtonHandle(!buttonHandle);
        });
    }
  };

  return (
    <>
      <Header />

      <div className="relative h-screen ">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/eaa165a3-80a7-44cb-8df6-be1a7e225369/web/PK-en-20260706-TRIFECTA-perspective_e3544a9d-6c8b-40de-8218-bb8c30f55481_large.jpg"
          alt="hero-img"
        />
        <div className="absolute z-100 top-50 right-0 left-0 m-auto bg-black/80  p-10   text-white  w-full max-w-[400px]  rounded-md ">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              formHandler();
            }}
            className=" flex flex-col "
          >
            {userError && (
              <div className="p-3 border-red-500 border-1 ">
                <p className="text-red-500 font-bold"> {userError}</p>
              </div>
            )}
            <h2 className="text-3xl font-bold mb-8">
              {" "}
              {isSignUpForm ? "Sign Up" : "Sign In"}
            </h2>
            {isSignUpForm && (
              <div>
                {" "}
                <input
                  ref={name}
                  className="mb-3 p-3 w-full border-1 border-white/20 bg-gray-800 rounded-md"
                  type="text"
                  placeholder=" Full name"
                ></input>
                <p className="text-red-500 p-2">
                  {errorMessage.name === false ? "Name is not valid" : ""}
                </p>
              </div>
            )}

            <input
              ref={email}
              className="mb-3 p-3 border-1 border-white/20 bg-gray-800 rounded-md"
              type="email"
              placeholder="Email Address"
            ></input>
            <p className="text-red-500 p-2">
              {errorMessage.email === false ? "Email is not valid" : ""}
            </p>
            <div className="relative">
              <input
                ref={password}
                className="mb-3 w-full p-3 border-1 border-white/20 bg-gray-800 rounded-md"
                type={viewPassword ? "text" : "password"}
                placeholder="Password"
              ></input>
              <button
                className="absolute top-3 right-4 "
                type="button"
                onClick={() => setViewPassword(!viewPassword)}
              >
                {viewPassword ? "Hide" : "View"}
              </button>
            </div>
            <p className="text-red-500 p-2">
              {errorMessage.password === false ? "Password is not valid" : ""}
            </p>
            <button
              type="submit"
              disabled={buttonHandle ? true : false}
              className={` ${buttonHandle ? "bg-red-950" : "bg-red-700"}  p-3 rounded-md mt-6 cursor-pointer `}
            >
              {" "}
              {isSignUpForm ? " Sign Up" : "Sign In"}{" "}
            </button>
          </form>
          <p className="mt-15 p-2">
            {isSignUpForm ? "Already account ?" : "You are new "}{" "}
            <button
              onClick={() => toggleSignUpForm()}
              className="font-bold cursor-pointer pl-1  "
            >
              {" "}
              {isSignUpForm ? "Sign In" : "Sign Up"} now{" "}
            </button>
          </p>
          <div></div>
        </div>
        <div className="absolute inset-0  bg-gradient-to-t from-black/80 via-black/60 to-black/80 "></div>
      </div>
    </>
  );
};

export default Login;
