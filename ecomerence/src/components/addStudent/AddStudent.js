import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { data, isRouteErrorResponse } from "react-router-dom";
import { addingStudents, updateMyStudent } from "../../features/slices/studentSlice";
import { updateDoc } from "firebase/firestore";
import Styles from '../../components/addStudent/addstudent.module.css'
import Button from "../../components/button/Button"
export default function AddStudent (props){
  const student = useSelector(store => store.studentSlice.updateStudent ) 
  useEffect (()=>{  console.log("student in add student component", student)
  },[student])

  const dispatch = useDispatch()
     const [name, setname] = useState("");
    const [Age, setage] = useState("");
    const [email, setemail] = useState("");
    const [Department, setdepartment] = useState("");
    const [imageUrl, setimageUrl] = useState("");
   const imgRef = useRef(null);
    useEffect(()=>{ if (student) {
  setname (student.name)
  setage (student.Age)
  setemail (student.email)
  setdepartment(student.Department)
  setimageUrl(student.imageUrl)
  console.log("student name in if student is available", name)
    } },[student])
   const ClickHandler = () =>{
   let  data = {
    name,
    Age,
    email,
    Department,
    imageUrl,
 }
 console.log("img url in add click hadnler is =====> ", imageUrl)
 console.log("student data in add student compnent before any action",data)
 
 console.log("data in click handelr at shop",data)
if(student){

  dispatch(updateMyStudent({...data,id:student.id}))
  console.log("updatemystudent action is being runned")
 
}
else{
  console.log("add student action is being runned")
   dispatch(addingStudents(data))
 }
props.SetisOpen((prev)=> !prev)
   setname("")
 setage("")
 setemail("")
 setdepartment("")
 if (imgRef.current) {
      imgRef.current.value = ""; // Clear the file input
    }
  
 
   }
   const handleimagechange = async (e) =>{
  const file = e.target.files[0]
    if(!file)return
        console.log("pic uploaded to image uploader is ",file.name)
        const data = new FormData()
        data.append("file" ,  file)
        data.append("upload_preset", "image_uploader_preset" )
        data.append("cloud_name","dcli1vwir")
       const response =  await fetch("https://api.cloudinary.com/v1_1/dcli1vwir/image/upload",  {
           method: "post",
        body: data})
     const jsonResponse = await response.json()
     const url = jsonResponse.url
     console.log("img url is ", url)
    setimageUrl(url) 
   }
    return(
        
        <div className={Styles.addstudent_cont}>
            <input value={name} type="text" placeholder="Type student Name here ..." onChange={(e)=>setname(e.target.value)}/>
            <input value={Age} type="text" placeholder="Type student AGE here ..." onChange={(e)=>setage(e.target.value)}/>
            <input value={email} type="text" placeholder="Type student email here ..."onChange={(e)=>setemail(e.target.value)}/>
            <input value={Department} type="text" placeholder="Type student Department here ..." onChange={(e)=>setdepartment(e.target.value)}/>
            <input  ref={imgRef} type="file" onChange={handleimagechange}/>
            <Button onClick={ClickHandler} label={student? "Update Student":"Add Student"} BgColor="green" />
           
        </div>
    )
}