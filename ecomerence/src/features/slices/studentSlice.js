import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {db} from "../../config/firestore"
import {collection, addDoc,  getDocs, setDoc, doc,deleteDoc, DocumentReference, updateDoc} from "firebase/firestore"
import { act } from "react";


export const fetchingStudents = createAsyncThunk(
    "fetchingStudents",
    async () => {
      const docs = await getDocs(collection(db, "Students"));
       const data = [] ;
     docs.forEach((doc) => {
  console.log("data in async function",doc.data());
   data.push({
    id: doc.id,
    ...doc.data()
   })
}
);
      return data;
       
    }
)
export const addingStudents = createAsyncThunk( 
    "addingStudents", 
    async (student)=>{   
        console.log("student in adding student action", student)
       const docRef = await addDoc(collection(db, "Students"), student)
       const newstudent = {
            id: docRef.id,
            ...student
        }
        return newstudent;
})
export const deleteStudent = createAsyncThunk(
    "deleteStudent",
    async (id) =>{
       await deleteDoc(doc(db, "Students", id));
       return id
       
    }
)
export const updateMyStudent = createAsyncThunk(
    "updateMyStudent",
    async(student)=>{
        const docRef = doc(db, "Students" , student.id)
        console.log("student in update student action", student)
        await updateDoc(docRef, student)
        return student
    }
)
export const studentSlice = createSlice({
    name:"Students",
    initialState: {
        Students: [],
        updateStudent: null
    },
    reducers:{updatestudent: (state,action)=>{
        console.log ("student in update student",action.payload)
        let studentbeingUpdate = state.Students.filter( (student)=> student.id === action.payload)
        state.updateStudent = studentbeingUpdate[0]
    }
     
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchingStudents.fulfilled, (state, action) => {
                    state.Students = action.payload;
     } )  
     builder.addCase(addingStudents.fulfilled, (state,action) =>{
        let studentadded = [action.payload, ...state.Students]
        state.Students = studentadded
     })
    builder.addCase(deleteStudent.fulfilled, (state, action)=>{
        let response = state.Students.filter((student)=> student.id !== action.payload)
      state.Students = response
      console.log("remaining students now",response)
    })
    builder.addCase(updateMyStudent.fulfilled, (state,action)=>{
     let response  = state.Students.map((student)=>   student.id === action.payload.id)
 state.Students = response
state.updateStudent = null
    })
}
   

   

})
export const {updatestudent } = studentSlice.actions;
export default studentSlice.reducer