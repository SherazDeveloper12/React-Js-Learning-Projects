import AdminNavbar from "../../../../components/adminNavbar/AdminNavbar"
import Styles from '../users/users.module.css'
export default function Users(){
    return(
        <div className={Styles.Users}>
                  <div className={Styles.AdminNavbar}> <AdminNavbar/></div>
            <h1>Users</h1>
        </div>
    )
}