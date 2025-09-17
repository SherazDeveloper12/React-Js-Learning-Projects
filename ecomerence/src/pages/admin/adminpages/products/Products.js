import Button from '../../../../components/button/Button'
import AdminNavbar from "../../../../components/adminNavbar/AdminNavbar"
import Styles from '../products/products.module.css'
import AddProduct2 from '../../../../components/addProduct2/AddProduct'
import ProductsTable from '../../../../components/productsTable/ProductsTable'
import { useState } from 'react'
export default function Products() {
    const [AddProduct2isOpen, SetAddProduct2] = useState(false)

    return (
        <div className={Styles.Products}>
            <div className={Styles.AdminNavbar}> <AdminNavbar  /></div>
            <div className={Styles.Products_container}>
                <div className={Styles.Products_TopBox}>
                    <h1>Products</h1>
                    <Button onClick={() => SetAddProduct2(!AddProduct2isOpen)} className={Styles.Btn} label="Add Product" textColor="rgb(100, 105, 112)" BgColor="rgba(255, 255, 255, 1)" />
                    {AddProduct2isOpen && (
                        <AddProduct2 SetAddProduct2={SetAddProduct2}/>
                    )}
                </div>
                <div className={Styles.ProductsTable}><ProductsTable SetAddProduct2={SetAddProduct2}/></div>
            </div>

        </div>
    )
}