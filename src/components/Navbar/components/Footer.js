import { NavLink } from 'react-router-dom'

const styles = {
    liststyle: {
        listStyleType:"none",
        padding:"0px",
        margin:"0px",
        fontSize:"14px",
        borderTopStyle:"solid",
        borderTopWidth:"1.5px",
        color:"white",
        paddingTop:"10px",
        paddingBottom:"10px"
    },
    linkpage: {
        textDecoration: "none",
        fontSize:"16px"
    }
}

const Footer = () => {
    return (
        <footer style={{
            fontFamily:"CenturyGothic",
            padding:"20px",
            display:"flex",
            flexDirection:"column",
            position:"absolute",
            left:"0",
            bottom:"0",
            width:"260px"
        }}>
            <ul style={styles.liststyle}>
                <li>
                    <NavLink style={styles.linkpage} to="/mentions-legales">
                        Mentions légales
                    </NavLink>
                </li>
                <li>
                    <NavLink style={styles.linkpage} to="/politique-de-confidentialite">
                        Politique de confidentialité
                    </NavLink>
                </li>
            </ul>
            <ul style={styles.liststyle}>
                <li>
                    Crédits :
                </li>
                <li>
                    - Charte graphique par Mathias Delligne
                </li>
                <li>
                    - Police Soulmaze par <a href="https://behance.com/madetype" target="_blank" rel="noreferrer" style={{textDecoration:"none"}}>MadeType</a>
                </li>
                <li>
                    - Développé par <a href="https://www.linkedin.com/in/louis-sachy/" target="_blank" rel="noreferrer" style={{textDecoration:"none"}}>Louis Sachy</a>
                </li>
            </ul>
            <span style={{fontSize:"12px", textAlign:"center", paddingTop:"10px"}}>Copyright {new Date().getFullYear()}</span>
        </footer>
    )
}

export default Footer