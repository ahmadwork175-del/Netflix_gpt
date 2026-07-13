import React, { use, useEffect } from 'react'
import {  onAuthStateChanged } from "firebase/auth";
import {auth } from "../utils/firebase"
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

const Browse = () => {
const dispatch = useDispatch();
const navigate = useNavigate();

 useEffect(()=> {
     onAuthStateChanged(auth, (user) => {
  if (user) {
    const {uid , email , displayName , photoURL } = user
    console.log(user)
    dispatch(addUser({uid : uid , email: email  ,displayName: displayName , photoURL:  photoURL }))
     
  } else {
     dispatch(removeUser())
    
  }
});
 } , [] )

  return (
    <>
    <Header/>

    </>
  )
}

export default Browse