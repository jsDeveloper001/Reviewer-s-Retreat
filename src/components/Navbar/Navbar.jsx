import { NavLink } from "react-router-dom";
const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><NavLink to={'/'} className={({ isActive }) => isActive ? "primary-border text-[#23BE0A]" : ""
                        }>Home</NavLink></li>
                        <li><NavLink to={'/bookList'} className={({ isActive }) => isActive ? "primary-border text-[#23BE0A]" : ""
                        }>Listed Books</NavLink></li>
                        <li><NavLink to={'/statistics'} className={({ isActive }) => isActive ? "primary-border text-[#23BE0A]" : ""
                        }>Pages to Read</NavLink></li>
                        <li><NavLink to={'/about'} className={({ isActive }) => isActive ? "primary-border text-[#23BE0A]" : ""
                        }>About Us</NavLink></li>
                        <li><NavLink to={'/contact'} className={({ isActive }) => isActive ? "primary-border text-[#23BE0A]" : ""
                        }>Contact Us</NavLink></li>
                    </ul>
                </div>
                <a className="btn btn-ghost -ml-6 sm:ml-0 text-[15px] sm:text-xl md:lg lg:text-xl xl:text-2xl font-bold">Reviewer's Retreat</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink to={'/'} className={({ isActive }) => isActive ? "primary-border text-[#23BE0A]" : ""
                    }>Home</NavLink></li>
                    <li><NavLink to={'/bookList'} className={({ isActive }) => isActive ? "primary-border text-[#23BE0A]" : ""
                    }>Listed Books</NavLink></li>
                    <li><NavLink to={'/statistics'} className={({ isActive }) => isActive ? "primary-border text-[#23BE0A]" : ""
                    }>Pages to Read</NavLink></li>
                    <li><NavLink to={'/about'} className={({ isActive }) => isActive ? "primary-border text-[#23BE0A]" : ""
                    }>About Us</NavLink></li>
                    <li><NavLink to={'/contact'} className={({ isActive }) => isActive ? "primary-border text-[#23BE0A]" : ""
                    }>Contact Us</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end gap-2">
                <a className="btn btn-sm sm:btn primary-bg text-white">Sign In</a>
                <a className="btn btn-sm sm:btn secondary-button text-white">Sign Up</a>
            </div>
        </div>
    );
};

export default Navbar;