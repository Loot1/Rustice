import logo from "../assets/images/logo.png"
import justicewoman from "../assets/images/justice_woman.png"

export default function HomePage() {
    return (
        <div className="bg-[#2B1E49]">
            <h1 className="text-3xl font-bold underline">
                Hello world!
            </h1>
            <section style={{width:"100%", display:"flex", marginTop:"50px"}}>
                <div style={{width:"60%"}}>
                    <div style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <form>
                            <input type="search" id="id" name="User ID" placeholder="Rechercher un utilisateur" style={{
                                backgroundColor: "transparent",
                                borderWidth: "3px",
                                borderRadius: "18px",
                                borderColor: "white",
                                borderStyle: "solid",
                                paddingTop: "16px",
                                paddingRight: "50px",
                                paddingLeft: "50px",
                                paddingBottom: "16px",
                                fontSize: "20px",
                                color: "white"
                            }}/>
                            <input type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
                <div style={{width:"40%"}}>
                    <img src={justicewoman} alt="Logo de Justice" width="100%" style={{}}/>
                </div>
            </section>
        </div>
    )
}