import { NavLink } from 'react-router-dom'

import logo from "../../../assets/images/logo.png"

export default function Header() {
    return (
        <header style={{ fontFamily: "Soulmaze" }}>
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "20px"
            }}>
                <NavLink to="/">
                    <img src={logo} alt="Logo de Justice" height="65px" width="65px" style={{ marginRight: "10px" }} />
                </NavLink>
                <span style={{
                    borderTopStyle: "solid",
                    borderBottomStyle: "solid",
                    borderTopWidth: "1.5px",
                    borderBottomWidth: "1.5px",
                    fontSize: "35px"
                }}>
                    Justice
                </span>
            </div>
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "10px",
                paddingBottom: "25px"
            }}>
                <button style={{
                    backgroundColor: "transparent",
                    borderWidth: "3px",
                    borderRadius: "45px",
                    borderColor: "white",
                    paddingTop: "10px",
                    paddingRight: "40px",
                    paddingLeft: "40px",
                    paddingBottom: "10px",
                    fontSize: "20px",
                    fontFamily: "Soulmaze",
                    color: "white"
                }}>
                    Se connecter
                </button>
            </div>
            <ul style={{
                listStyleType: "none",
                padding: "0px",
                margin: "0px",
                fontSize: "20px"
            }}>
                <li>
                    <NavLink
                        id="navitem"
                        style={({ isActive }) => {
                            return {
                                display: "block",
                                padding: "8px 16px",
                                textDecoration: "none",
                                backgroundColor: isActive ? "#2B1E49" : null
                            }
                        }} 
                        to="/"
                    >
                        Accueil
                    </NavLink>
                </li>
                <li>
                <NavLink
                        id="navitem"
                        style={({ isActive }) => {
                            return {
                                display: "block",
                                padding: "8px 16px",
                                textDecoration: "none",
                                backgroundColor: isActive ? "#2B1E49" : null
                            }
                        }} 
                        to="/informations"
                    >
                        Informations
                    </NavLink>
                </li>
                <li>
                <NavLink
                        id="navitem"
                        style={({ isActive }) => {
                            return {
                                display: "block",
                                padding: "8px 16px",
                                textDecoration: "none",
                                backgroundColor: isActive ? "#2B1E49" : null
                            }
                        }} 
                        to="/requetes"
                    >
                        Requêtes
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        id="navitem"
                        style={({ isActive }) => {
                            return {
                                display: "block",
                                padding: "8px 16px",
                                textDecoration: "none",
                                backgroundColor: isActive ? "#2B1E49" : null
                            }
                        }} 
                        to="/a-propos"
                    >
                        À propos
                    </NavLink>
                </li>
            </ul>
        </header>
    )
}