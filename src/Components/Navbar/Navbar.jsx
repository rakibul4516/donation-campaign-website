import { NavLink } from "react-router-dom";
import './Navbar.css'
const Navbar = () => {
    return (
        <div>
            <div className="flex justify-between w-10/12 mx-auto items-center">
                <img src="https://i.ibb.co/9Hc9BdP/Logo.png" alt="logo" />
                <div className=" flex gap-5">
                    <NavLink to="/" className="navlink">Home</NavLink>
                    <NavLink to="/donation" className="navlink">Donation</NavLink>
                    <NavLink to="/statistics" className="navlink">Statistics</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;