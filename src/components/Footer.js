import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
    return (
        <footer>
            <Container style={{
                height:"40vh",
                backgroundColor:"#270D3D",
                fontFamily:"CenturyGothic",
                color:"white",
                paddingLeft:"0px",
                paddingRight:"10vw",
                paddingTop:"35px",
                fontSize:"17px"
            }}>
                <div style={{
                    borderBottomStyle:"solid",
                    borderBottomWidth:"1.5px"
                }}>
                    <span style={{fontSize:"40px", fontWeight:"bold"}}>
                        Justice
                    </span>
                </div>
                <Row style={{marginTop:"20px", marginLeft:"2px"}}>
                    <Col>
                        <a href="/mentions-legales">
                            <p style={{marginBottom:"0.4rem"}}>
                                Mentions légales
                            </p>
                        </a>
                        <a href="/politique-de-confidentialite">
                            <p style={{marginBottom:"0.4rem"}}>
                                Politique de confidentialité
                            </p>
                        </a>
                        <a href="/contact">
                            <p style={{marginBottom:"0.4rem"}}>
                                Contact
                            </p>
                        </a>
                    </Col>
                    <Col>
                        <p style={{marginBottom:"0.4rem"}}>
                            Crédits :
                        </p>
                        <p style={{marginBottom:"0.4rem"}}>
                            - Charte graphique & Web design par Mathias Delligne
                        </p>
                        <p style={{marginBottom:"0.4rem"}}>
                            - Police d'écriture Soulmaze par <a href="https://behance.com/madetype" target="_blank">MadeType</a>
                        </p>
                        <p style={{marginBottom:"0.4rem"}}>
                            - Développé par <a href="https://www.linkedin.com/in/louis-sachy/" target="_blank">Louis Sachy</a>
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer