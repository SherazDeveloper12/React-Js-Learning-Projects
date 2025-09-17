import Styles from '../header/header.module.css'
import ImageAvatars from '../../components/avator/Avator';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
export default function header(){
    return (
        <div className={Styles.header}>
            <div className={Styles.logo}> 
               <h1>Fashion</h1>
            </div>
            <nav>
                <ul className={Styles.Ul}>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/about'>About us</a></li>
                    <li><a href='/contact'>Contact us</a></li>
                    <li><a href='/shop'>Shop</a></li>
                    <li><a href='/admin'>Admin</a></li>
                </ul>
                <div className={Styles.navIcons}>
                 <ShoppingCartIcon/>
               <ImageAvatars  name="Remy Sharp" image={require("../../assests/Product1.png")}/>
              </div>
            </nav>
        </div>
    )
}