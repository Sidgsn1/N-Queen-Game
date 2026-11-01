import { Crown, Moon, Sun } from 'lucide-react'
import { NavLink } from 'react-router'

const Navbar = () => {

    const getNavLinkClass = ({ isActive }) => {
        return isActive
            ? "bg-purple-600 text-white px-4 py-2 rounded-lg"
            : "text-gray-400 hover:text-white px-4 py-2 rounded-lg transition"
    }

    return (
        <nav className="w-full flex items-center justify-between px-8 py-4 bg-slate-900 text-white">

            {/* Logo */}
            <section className="flex items-center gap-2">
                <Crown className="text-purple-400" size={26} />
                <h1 className="text-xl font-bold">N Queen</h1>
            </section>

            {/* Navigation Links */}
            <section className="flex gap-4 items-center">
                <NavLink to="/" className={getNavLinkClass}>
                    Solver
                </NavLink>

                <NavLink to="/how-it-works" className={getNavLinkClass}>
                    How it Works
                </NavLink>

                <NavLink to="/about" className={getNavLinkClass}>
                    About
                </NavLink>
            </section>

            {/* Theme Icons */}
            <section className="flex items-center gap-4">
                <Moon size={20} className="cursor-pointer" />
                <Sun size={20} className="cursor-pointer" />
            </section>

        </nav>
    )
}

export default Navbar