import Header from "./components/Header"
import Footer from "./components/Footer"
import woman from "./assets/images/justice_woman.png"

function App() {
    return (
        <div style={{backgroundColor: "#270D3D"}}>
            <Header/>
            <div style={{backgroundColor:"#2B1E49"}}>
                <img src={woman} alt="Logo de Justice" height="40%" width="40%"/>
            </div>
            <Footer/>
        </div>
    )
}

export default App