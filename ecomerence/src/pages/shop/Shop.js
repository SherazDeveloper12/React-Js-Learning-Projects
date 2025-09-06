import Header  from "../../components/header/Header";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchingStudents, studentSlice } from "../../features/slices/studentSlice";
import AddStudent from "../../components/addStudent/AddStudent";
import Student from "../../components/Student/Student";
export default function Shop() {
   
    const dispatch = useDispatch();
     {
       useEffect(() => { 
          dispatch(fetchingStudents());
          }, [])
     }
  return (
 
    <div>
        <Header/>
     <Student/>
     <AddStudent/>
    </div>
  );
}