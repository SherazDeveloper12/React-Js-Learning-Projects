import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchingStudents, studentSlice } from "../../features/slices/studentSlice";
import AddStudent from "../../components/addStudent/AddStudent";
import Student from "../../components/Student/Student";
import Styles from '../../pages/shop/shop.module.css'
import Button from "../../components/button/Button";
export default function Shop() {
  const [isOpen, SetisOpen] = useState(false)
  const dispatch = useDispatch();
 const student = useSelector(store => store.studentSlice.updateStudent ) 


  {
    useEffect(() => {
      dispatch(fetchingStudents());
    }, [])
  }
  {
     useEffect(()=>{ if (student){
      SetisOpen(!isOpen)}
     },[student])
  }
  return (

    <div className={Styles.Shop_Container}>
      
      <Header />
      <div className={Styles.Stdabove}>
        <h1>Student Details</h1>
        <Button BgColor="green" label="Add Student" onClick={() => SetisOpen(!isOpen)} />
      </div>
      
      <Student />
      {isOpen && (
        <div className={Styles.PopUp_container}>
              <div className={Styles.outLay}></div>

        <div className={Styles.Popup}>
          <img onClick={() => SetisOpen(!isOpen)}  src={require("../../assests/close.png")}/>
          <AddStudent SetisOpen={SetisOpen} />
        </div>
        </div>
      )}


      <Footer />
    </div>

  );
}