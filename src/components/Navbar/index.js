import Header from "./components/Header"
import Footer from "./components/Footer"

export default function Navbar() {
    return (
        <nav style={{
            backgroundColor:"#270D3D",
            margin:"0px",
            padding:"0px",
            height:"100%",
            overflow:"auto",
            position:"fixed",
            width:"300px"
        }}>
            <Header/>
            <Footer/>
        </nav>
    )
}