import '../header/header.css'
import ImageAvatars from '../../components/avator/Avator';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
export default function header(){
    return (
        <div className='header'>
            <div className="logo"> 
               <h1>Fashion</h1>
            </div>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Shop</li>
                </ul>
                <div className="nav-icons">
                 <ShoppingCartIcon/>
               <ImageAvatars  name="Remy Sharp" image={require("../../assests/Product1.png")}/>
              </div>
            </nav>
        </div>
    )
}