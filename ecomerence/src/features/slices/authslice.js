import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {  createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../config/firestore";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";

export const signup = createAsyncThunk(
  "signup",
  async (user) => {
    try {
     const usercuserCredential = await createUserWithEmailAndPassword(auth, user.email, user.password)
      const userData = usercuserCredential.user;
      console.log(userData)
      let userdetails = {
        name: user.name,
        email: user.email,
        uid: userData.uid
      }
      const docref = await addDoc(collection(db, "users"), userdetails);
      console.log("Document written with ID: ", docref.id);
      return userData;
    } catch (error) {
      console.log(error.message)
    }
  }
);
export const authSlice = createSlice({
  name: "auth",
  initialState: {
     User: [],
  },
  reducers: {},
  extraReducers: (builder) => {},
});

export default authSlice.reducer;