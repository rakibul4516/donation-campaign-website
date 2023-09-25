import { NavLink } from "react-router-dom";
import './Navbar.css'
const Navbar = () => {
    const navitems = <>
        <NavLink to="/" className="navlink text-lg">Home</NavLink>
        <NavLink to="/donation" className="navlink text-lg">Donation</NavLink>
        <NavLink to="/statistics" className="navlink text-lg">Statistics</NavLink>
    </>
    return (
        <div>
            <div className="z-30 relative md:px-4 lg:px-4 mt-4">
                <div className="navbar flex justify-between w-10/12 mx-auto items-center">
                    <img className="" src={'https://i.ibb.co/9Hc9BdP/Logo.png'} alt="logo" />
                    <div className="">
                        <div className="dropdown">
                            <label tabIndex={1} className="btn btn-ghost md:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content rounded-box abuslate -left-10 z-[10]  shadow bg-base-100 ">
                                {navitems}
                            </ul>
                        </div>
                    </div>
                    <div className="navbar-center hidden md:flex">
                        <ul className="menu menu-horizontal  gap-4 rounded-box">
                            {navitems}
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Navbar;

