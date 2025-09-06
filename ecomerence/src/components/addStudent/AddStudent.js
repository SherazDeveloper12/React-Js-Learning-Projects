import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { data } from "react-router-dom";
import { addingStudents, updateMyStudent } from "../../features/slices/studentSlice";
import { updateDoc } from "firebase/firestore";


export default function AddStudent (){
  const student = useSelector(store => store.studentSlice.updateStudent ) 
  useEffect (()=>{  console.log("student in add student component", student)
  },[student])

  const dispatch = useDispatch()
     const [name, setname] = useState("");
    const [Age, setage] = useState("");
    const [email, setemail] = useState("");
    const [Department, setdepartment] = useState("");
    useEffect(()=>{ if (student) {
  setname (student.name)
  setage (student.Age)
  setemail (student.email)
  setdepartment(student.Department)
  dispatch(updateMyStudent(student))
  console.log("student name in if student is available", name)
    } },[student])
   const ClickHandler = () =>{
   let  data = {
    name,
    Age,
    email,
    Department,
 }
 console.log("data in click handelr at shop",data)
if(student){
  dispatch(updateMyStudent(data))
  console.log("updatemystudent action is being runned")
  return
}

   dispatch(addingStudents(data))
 

//    setname("")
//  setage("")
//  setemail("")
//  setdepartment("")
 
   }
    return(
        
        <div className="addstudent-cont">
            <input value={name} type="text" placeholder="Type student Name here ..." onChange={(e)=>setname(e.target.value)}/>
            <input value={Age} type="text" placeholder="Type student AGE here ..." onChange={(e)=>setage(e.target.value)}/>
            <input value={email} type="text" placeholder="Type student email here ..."onChange={(e)=>setemail(e.target.value)}/>
            <input value={Department} type="text" placeholder="Type student Department here ..." onChange={(e)=>setdepartment(e.target.value)}/>
            <button onClick={ClickHandler}>{student? "Update Student":"Add Student"}</button>
        </div>
    )
}