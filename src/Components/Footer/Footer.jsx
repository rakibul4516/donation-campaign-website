import { Link,NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <div>

            <footer className="bg-white rounded-lg shadow dark:bg-gray-900">
                <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <Link to="/" className="flex items-center mb-4 sm:mb-0">
                            <img src={"https://i.ibb.co/9Hc9BdP/Logo.png"} className=" mr-3" alt="Flowbite Logo" />
                        </Link>
                        <ul className="flex flex-wrap items-center gap-8 mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                            <NavLink to="/" className="navlink text-lg">Home</NavLink>
                            <NavLink to="/donation" className="navlink text-lg">Donation</NavLink>
                            <NavLink to="/statistics" className="navlink text-lg">Statistics</NavLink>
                        </ul>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Donation Campaign</a>. All Rights Reserved.</span>
                </div>
            </footer>
        </div>
    );
};

export default Footer;