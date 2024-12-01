import ImageFrame from "../ImageFrame/ImageFrame";
import { Menu } from "../../components/NavBar/components/Menu/Menu";
import { NavUtils } from "./components/NavUtils/NavUtils";

import './NavBar.styles.scss';

const NavBar = () => {
    return <div className="nav-bar">
        <a href="/">
            <ImageFrame 
                src="https://res.cloudinary.com/dhudppeai/image/upload/v1733007220/Emma_Crown_rdnmwp.jpg"
                alt="logo-greenlander"
                width="320"
            />
        </a>
        <Menu />
        <NavUtils />
    </div>
}

export default NavBar;
