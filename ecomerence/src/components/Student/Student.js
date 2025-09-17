import { useDispatch, useSelector } from "react-redux"
import { deleteStudent, updatestudent } from '../../features/slices/studentSlice'
import Styles from '../../components/Student/student.module.css'
import Button from "../../components/button/Button"
export default function Student() {
  const students = useSelector((state) => state.studentSlice.Students)

  const dispatch = useDispatch()
  const deleteclickhandler = (id) => {
    console.log("item to  be deleted", id)
    dispatch(deleteStudent(id))
  }
  const updateclickhandler = (student) => {
    console.log("student to be update is", student.name)
    dispatch(updatestudent(student.id))
  }
  return (
    <>
      
      <div className={Styles.student_container}>
        <table >
          <tr>
            <th>Serial Number</th>
            <th>Student Name </th>
            <th>Student Profile Pic </th>
            <th>Student age</th>
            <th>Student email</th>
            <th>Student departement</th>
            <th>Controls</th>
          </tr>
          {students.map((student) => (
            <tr className={Styles.student}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td><img className={Styles.student_pp} src={student.imageUrl} /></td>
              <td>{student.Age}</td>
              <td>{student.email}</td>
              <td>{student.Department}</td>
              <td>
                <Button  label="Delete" BgColor="orange" onClick={() => deleteclickhandler(student.id)} />
                <Button label="Update"  BgColor="green" onClick={() => updateclickhandler(student)}/>
              
              </td>
            </tr>))
          }
        </table>
      </div>
    </>
  )
}