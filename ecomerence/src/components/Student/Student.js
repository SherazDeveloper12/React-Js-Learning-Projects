import { useDispatch, useSelector } from "react-redux"
import {deleteStudent, updatestudent} from '../../features/slices/studentSlice'
import '../../components/Student/student.css'
export default function Student() {
  const students = useSelector((state)=> state.studentSlice.Students)
    console.log("students in Shop page",students)
    const dispatch = useDispatch()
    const deleteclickhandler = (id)=>{
      console.log("item to  be deleted",id)
      dispatch(deleteStudent(id))
    }
    const updateclickhandler = (student)=>{
      console.log("student to be update is" , student.name)
      dispatch(updatestudent(student.id))
    }
    return (
      <> <h1>Student Details</h1>
         <div className="student-container">
  <table >
    <tr>
    <th>Serial Number</th>
    <th>Student Name </th>
    <th>Student age</th>
    <th>Student email</th>
    <th>Student departement</th>
    <th>Controls</th>
    </tr>
    {students.map((student) =>(
    <tr className="student">
      <td>{student.id}</td>
      <td>{student.name}</td>
      <td>{student.Age}</td>
      <td>{student.email}</td>
      <td>{student.Department}</td>
      <td>
        <button onClick={()=>deleteclickhandler(student.id)}>Delete</button>
      <button onClick={()=>updateclickhandler(student)}>Update</button>
      </td>
    </tr>))
         }
  </table>
    </div>
    </>
    )
}