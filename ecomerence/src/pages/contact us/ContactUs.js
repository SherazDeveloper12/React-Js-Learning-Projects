import Header from "../../components/header/Header";
import AdminNavbar from "../../components/adminNavbar/AdminNavbar";
import Styles from '../../pages/contact us/contactus.module.css'
export default function ConttactUs() {
  return (
    <div className={Styles.contactus}>
     <div className={Styles.Header}> <Header/>
     </div>   
        <div className={Styles.contactus_content}>  
          <h1>Contact Us</h1>
      <p>If you have any questions, feel free to reach out!</p>
      </div>
    
    </div>
  );
}