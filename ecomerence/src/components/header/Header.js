import Styles from '../header/header.module.css'
import ImageAvatars from '../../components/avator/Avator';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../features/slices/authslice';
import Button from '../button/Button';
import { use } from 'react';

export default function Header() {
 const user = useSelector((state) => state.auth.User);
    const dispatch = useDispatch();
    const clickhandler = () => {
        dispatch(logout());
    }
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
                  {user?   <Button label="Logout" onClick={() => { clickhandler() }} BgColor="blue" /> 
                  : 
                  <Link to="/login"><Button label="Login" BgColor="blue" /></Link> }
                    <ShoppingCartIcon />
                    <ImageAvatars name="Remy Sharp" image={require("../../assests/Product1.png")} />
                </div>
            </nav>
        </div>
    )
}