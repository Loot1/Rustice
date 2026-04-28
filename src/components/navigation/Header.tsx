import { Bars3Icon, UserIcon, XMarkIcon } from "@heroicons/react/24/outline"
import { useState } from "react"
import { NavLink } from "react-router"
import logo from "../../assets/images/logo.png"
import { CircledButton } from "../CircledButton"

const navigationLinks = [
    { to: "/requests", label: "Requêtes" },
    { to: "/about", label: "À propos" },
] as const

const desktopMenuClassName = "menu menu-horizontal items-center p-0"
const mobileMenuClassName = "menu menu-vertical bg-base-100 p-0 pb-2 pl-9"
const navLinkItemClassName = "lg:ml-8 text-2xl lg:my-0 my-7"
const navLinkClassName = "btn btn-ghost font-display h-auto min-h-0 rounded-none bg-transparent px-0 py-0 text-2xl tracking-[2px] text-base-content shadow-none hover:bg-transparent hover:text-base-300"
const iconButtonClassName = "btn btn-ghost btn-square absolute flex text-3xl text-base-content shadow-none hover:bg-transparent hover:text-base-content lg:hidden"

export function Header() {
    const [open, setOpen] = useState(false)
    const mobileMenuPositionClassName = open ? "top-20" : "top-[-490px]"

    return (
        <header className="bg-base-100 sticky w-full z-50 text-base-content">
            <nav aria-label="Navigation principale" className='navbar min-h-0 bg-transparent py-6 px-7 md:px-10'>
                <div className='navbar-start flex cursor-pointer items-center font-bold text-2xl'>
                    <NavLink to="/" className="flex items-center">
                        <img src={logo} className="mr-3 w-[42px]" alt="Logo de Justice"/>
                        <span className="headerTitle">
                            Justice
                        </span>
                    </NavLink>
                </div>
                <button
                    type="button"
                    aria-expanded={open}
                    aria-controls="mobile-navigation"
                    aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
                    onClick={() => setOpen(!open)}
                    className={`${iconButtonClassName} right-8 top-6`}
                >
                    {open ? <XMarkIcon className="size-[45px] text-base-content" /> : <Bars3Icon className="size-[45px] text-base-content" />}
                </button>
                <button
                    type="button"
                    aria-label="Connexion"
                    onClick={() => setOpen(!open)}
                    className={`${iconButtonClassName} right-24 top-7`}
                >
                    <UserIcon className="size-[35px] text-base-content" />
                </button>
                <div className="navbar-end hidden lg:flex lg:flex-1 lg:justify-end">
                    <ul className={desktopMenuClassName}>
                        {navigationLinks.map(({ to, label }) => (
                            <li key={to} className={navLinkItemClassName}>
                                <NavLink className={navLinkClassName} to={to}>
                                    {label}
                                </NavLink>
                            </li>
                        ))}
                        <li className="hidden items-center lg:flex">
                            <CircledButton>Se connecter</CircledButton>
                        </li>
                    </ul>
                </div>
                <div
                    id="mobile-navigation"
                    className={`absolute left-0 z-[-1] w-full bg-base-100 transition-all duration-500 ease-in lg:hidden ${mobileMenuPositionClassName}`}
                >
                    <ul className={mobileMenuClassName}>
                        {navigationLinks.map(({ to, label }) => (
                            <li key={to} className={navLinkItemClassName}>
                                <NavLink className={navLinkClassName} to={to}>
                                    {label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </header>
    )
}