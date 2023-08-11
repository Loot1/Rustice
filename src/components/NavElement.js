import { NavLink } from 'react-router-dom'

export default function NavElement({link, children}) {
    return (
        <li className="lg:ml-8 text-2xl lg:my-0 my-7">
            <NavLink
                className="hover:text-gray-400 duration-500"
                style={{fontFamily:"ShowcardGothic", letterSpacing:"2px"}}
                to={link}
            >
                {children}
            </NavLink>
        </li>
    )
}