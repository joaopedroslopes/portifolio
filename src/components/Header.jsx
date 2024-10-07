import { NavLink } from "react-router-dom";

function Header() {
    return (
        <>
            <header className="fixed w-full bg-white">
                <div className="w-full h-20 px-10 py-3 flex items-center justify-between">
                    <div className="font-bold text-2xl">
                        <NavLink to={'/'}><h1 className="text-black">João<span className="text-purple-600">Pedro</span></h1></NavLink>
                    </div>
                    <nav>
                        <ul className="flex gap-4 font-medium">
                            <li>
                                <NavLink
                                    to={'/'}
                                    className={({ isActive }) => isActive ? 'text-purple-600' : 'hover:text-purple-600'}
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={'/about'}
                                    className={({ isActive }) => isActive ? 'text-purple-600' : 'hover:text-purple-600'}
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={'/projects'}
                                    className={({ isActive }) => isActive ? 'text-purple-600' : 'hover:text-purple-600'}
                                >
                                    Projects
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={'/contact'}
                                    className={({ isActive }) => isActive ? 'text-purple-600' : 'hover:text-purple-600'}
                                >
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
}

export default Header;