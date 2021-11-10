import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap'
import logo from "../assets/images/logo.png"

const Header = () => {
    return (
        <header>
            <Navbar collapseOnSelect expand="lg" style={{backgroundColor:"#270D3D", fontFamily:"Soulmaze", height:"11vh"}}>
                <Container>
                    <Navbar.Brand href="/">
                        <img src={logo} alt="Logo de Justice" height="60px" width="60px" style={{marginRight:"10px"}}/>
                        <span style={{
                            borderTopStyle:"solid",
                            borderBottomStyle:"solid",
                            borderTopWidth:"1.5px",
                            borderBottomWidth:"1.5px",
                            fontSize:"35px",
                            color:"white",
                            verticalAlign:"middle"
                        }}>
                            Justice
                        </span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end" style={{fontSize:"23px"}}>
                        <Nav>
                            <Nav.Link href="#pricing">À propos</Nav.Link>
                            <NavDropdown title="Requêtes" id="collasible-nav-dropdown" style={{marginLeft:"3vw"}}>
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Divider/>
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                            <Button style={{
                                backgroundColor:"transparent",
                                borderWidth:"3px",
                                borderRadius:"45px",
                                borderColor:"white",
                                paddingTop:"10px",
                                paddingRight:"50px",
                                paddingLeft:"50px",
                                paddingBottom:"10px",
                                fontSize:"23px",
                                marginLeft:"3vw"
                                }}
                            >
                                    Se connecter
                            </Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header