import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import { auth, db } from "../../config/firestore";
import { addDoc, collection, doc, setDoc, getDoc, } from "firebase/firestore";

export const signup = createAsyncThunk(
  "signup",
  async (user) => {
    try {
     const userCredential  = await createUserWithEmailAndPassword(auth, user.email, user.password)
      let userdetails = {
        name: user.name,
        email: user.email,
        uid: userCredential .user.uid
      }
    await setDoc(doc(db, "users", userCredential .user.uid), userdetails);

      return userdetails;
    } catch (error) {
      console.log(error.message)
    }
  }
);

export const login = createAsyncThunk(
  "login",
  async (user) => {
    try {
      console.log("user from authslice",user)
    const userCredential  = await signInWithEmailAndPassword(auth, user.email, user.password)
      const userdetails = await getDoc(doc(db, "users" , userCredential.user.uid));
      const userdata = userdetails?.data();
      console.log("User that is logged in", userdata);
      return user; 
    } 
    catch (error) {
      console.log(error);
    }
  });

export const authSlice = createSlice({
  name: "auth",
  initialState: {
     User: [],
     Loading: false
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signup.pending, (state) => {
      state.Loading = true;
    });
    builder.addCase(signup.fulfilled, (state, action) => {
      state.User = action.payload;
      console.log("User from signup slice", action.payload);
      state.Loading = false;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.User = action.payload;
      console.log("User from login slice", action.payload);
      state.Loading = false;
    });
    builder.addCase(login.pending, (state) => {
      state.Loading = true;
    });
  },
});

export default authSlice.reducer;