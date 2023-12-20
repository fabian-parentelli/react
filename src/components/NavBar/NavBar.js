import Brand from "../Brand/Brand.js";
import ListNav from "../ListNav.js/ListNav.js";
import CartWidget from "../CartWidget/CartWidget.js";
import './navBar.css';
import { useLoginContext } from "../../context/LoginContext.js";

const NavBar = () => {

    const { user, logout } = useLoginContext();

    return (
        <div className="navBar">
            <div className="navBarUp">
                <Brand />
                <CartWidget />
            </div>
            <ListNav />
            {user.logged && 
                <div>
                    <p>Bienvenido: {user.email}</p>
                    <button onClick={logout}>Logout</button>
                </div>
            }
        </div>
    );
};

export default NavBar;