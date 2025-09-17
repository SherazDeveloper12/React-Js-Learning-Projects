import Admin from "../../pages/admin/Admin"
import { GoTriangleLeft } from "react-icons/go";
import { ImUsers } from "react-icons/im";
import { FaTachometerAlt } from "react-icons/fa";
import Styles from '../adminNavbar/adminNavbar.module.css'
import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
export default function AdminNavbar() {
    const [ActiveTab, SetActiveTab] = useState('Dashboard')
    const location = useLocation()
    useEffect(() => {
        const path = location.pathname
        if (path === '/dashboard') { SetActiveTab("Dashboard") }
        else if (path === '/') { SetActiveTab("Home") }
        if (path === '/products') { SetActiveTab("Products") }
        if (path === '/blogs') { SetActiveTab("Blogs") }
        if (path === '/users') { SetActiveTab("Users") }
    }, [location.pathname])

    console.log("activetab is", ActiveTab)
    return (
        <div className={Styles.AdminNavbar}>
            <nav>
                <ul>
                    <li>
                        <Link className={ActiveTab === "Dashboard" ? Styles.active : ""} to="/admin"><FaTachometerAlt /> Dashboard   {ActiveTab === "Dashboard" && (<GoTriangleLeft className={Styles.triangle} />)}</Link>
                        
                        </li>
                    <li><Link className={`ActiveTab === "Home" ? Styles.active : "" Styles.tab`} to="/">Home  {ActiveTab === "Home" && (<GoTriangleLeft className={Styles.triangle} />)}</Link></li>
                    <li><Link className={ActiveTab === "Products" ? Styles.active : ""} to="/products">Products  {ActiveTab === "Products" && (<GoTriangleLeft className={Styles.triangle} />)}</Link></li> 
                    <li><Link className={ActiveTab === "Blogs" ? Styles.active : ""} to="/blogs">Blogs   {ActiveTab === "Blogs" && (<GoTriangleLeft className={Styles.triangle} />)}</Link></li>
                    <li>   <Link className={ActiveTab === "Users" ? Styles.active : ""} to="/users"><ImUsers />Users   {ActiveTab === "Users" && (<GoTriangleLeft className={Styles.triangle} />)}</Link></li>
                </ul>
            </nav>
            <p>admin nav bar</p>
        </div>
    )
}