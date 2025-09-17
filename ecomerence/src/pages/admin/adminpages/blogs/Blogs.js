import AdminNavbar from "../../../../components/adminNavbar/AdminNavbar"
import Styles from '../blogs/blogs.module.css'
export default function Blogs(){
    return(
        <div className={Styles.Blogs}>
           <div className={Styles.AdminNavbar}> <AdminNavbar/></div>
            <h1>Blogs</h1>
        </div>
    )
}