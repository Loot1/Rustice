import { Bars3Icon, UserIcon } from "@heroicons/react/24/outline"
import { NavLink } from "react-router"
import logo from "../../assets/images/logo.png"
import { CircledButton } from "../CircledButton"

const navigationLinks = [
    { to: "/requests", label: "Requêtes" },
    { to: "/about", label: "À propos" },
] as const

const navLinkClassName = ({ isActive }: { isActive: boolean }) =>
    `btn btn-ghost font-display h-auto min-h-0 rounded-sm bg-transparent px-2 py-1 text-2xl tracking-[2px] text-base-content shadow-none hover:!bg-base-content/15 hover:text-base-content ${
        isActive ? "!bg-base-content/15" : ""
    }`

export function Header() {
    return (
        <header className="bg-base-100 sticky w-full z-50 text-base-content">
            <nav aria-label="Navigation principale" className="flex items-center py-6 px-7 md:px-10">

                {/* Logo — ne rétrécit jamais */}
                <NavLink to="/" className="flex shrink-0 items-center">
                    <img src={logo} className="mr-3 w-[42px]" alt="Logo de Justice"/>
                    <span className="border-y-[1.5px] border-base-content font-display text-[35px] font-normal leading-tight">
                        Justice
                    </span>
                </NavLink>

                {/* Navigation desktop */}
                <div className="hidden lg:flex flex-1 items-center justify-end gap-8 ml-8">
                    {navigationLinks.map(({ to, label }) => (
                        <NavLink key={to} className={navLinkClassName} to={to}>
                            {label}
                        </NavLink>
                    ))}
                    <CircledButton>Se connecter</CircledButton>
                </div>

                {/* Actions mobile */}
                <div className="ml-auto flex items-center gap-1 lg:hidden">
                    <button
                        type="button"
                        aria-label="Connexion"
                        className="btn btn-ghost btn-square shadow-none hover:bg-transparent"
                    >
                        <UserIcon className="size-[35px] text-base-content" />
                    </button>
                    <div className="dropdown dropdown-end">
                        <button
                            type="button"
                            tabIndex={0}
                            aria-label="Menu de navigation"
                            className="btn btn-ghost btn-square shadow-none hover:bg-transparent"
                        >
                            <Bars3Icon className="size-[45px] text-base-content" />
                        </button>
                        <ul
                            tabIndex={0}
                            className="dropdown-content menu border border-base-content/20 rounded-box mt-3 w-52 p-3 shadow-xl"
                            style={{ backgroundColor: 'var(--color-base-100)' }}
                        >
                            {navigationLinks.map(({ to, label }) => (
                                <li key={to} className="my-1">
                                    <NavLink className={navLinkClassName} to={to}>
                                        {label}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

            </nav>
        </header>
    )
}
