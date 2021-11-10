import logo from "../../../assets/images/logo.png"

const styles = {
    navitem: {
        display:"block",
        padding:"8px 16px",
        textDecoration:"none"
    }
}

const Header = () => {
    return (
        <header style={{fontFamily:"Soulmaze"}}>
            <div style={{
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                padding:"20px"
            }}>
                <img src={logo} alt="Logo de Justice" height="70px" width="70px" style={{marginRight:"10px"}}/>
                <span style={{
                    borderTopStyle:"solid",
                    borderBottomStyle:"solid",
                    borderTopWidth:"1.5px",
                    borderBottomWidth:"1.5px",
                    fontSize:"35px"
                }}>
                    Justice
                </span>
            </div>
            <div style={{
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                padding:"10px",
                paddingBottom:"25px"
            }}>
                <button style={{
                    backgroundColor:"transparent",
                    borderWidth:"3px",
                    borderRadius:"45px",
                    borderColor:"white",
                    paddingTop:"10px",
                    paddingRight:"40px",
                    paddingLeft:"40px",
                    paddingBottom:"10px",
                    fontSize:"20px",
                    fontFamily:"Soulmaze",
                    color:"white"
                }}>
                    Se connecter
                </button>
            </div>
            <ul style={{
                listStyleType:"none",
                padding:"0px",
                margin:"0px",
                fontSize:"20px"
            }}>
                <li>
                    <a class="active" href="#home" id="navitem" style={styles.navitem}>
                        Accueil
                    </a>
                </li>
                <li>
                    <a href="#news" id="navitem" style={styles.navitem}>
                        Informations
                    </a>
                </li>
                <li>
                    <a href="#contact" id="navitem" style={styles.navitem}>
                        Requêtes
                    </a>
                </li>
                <li>
                    <a href="#about" id="navitem" style={styles.navitem}>
                        À propos
                    </a>
                </li>
            </ul>
        </header>
    )
}

export default Header