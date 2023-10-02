import Brand from "../Brand/Brand.js";
import ListNav from "../ListNav.js/ListNav.js";
import CartWidget from "../CartWidget/CartWidget.js";

import './navBar.css';

const NavBar = () => {

    return(
        <div className="navBar">
            <Brand />
            <ListNav />
            <CartWidget />
        </div>
    );
};

export default NavBar;