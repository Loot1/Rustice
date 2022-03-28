import logo from "../assets/images/logo.png"
import justicewoman from "../assets/images/justice_woman.png"

export default function HomePage() {
    return (
        <div>
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
            <section style={{width:"100%", display:"flex", marginTop:"50px", marginBottom:"50px"}}>
                <div style={{width:"40%", display:"flex", justifyContent:"center", alignItems:"center"}}>
                    <img src={logo} alt="Logo de Justice" width="60%" style={{}}/>
                </div>
                <div style={{width:"60%", paddingRight:"50px"}}>
                    <h2 style={{
                        borderBottomStyle:"solid",
                        borderBottomWidth:"1.5px",
                        color:"white",
                        paddingBottom:"10px",
                        fontSize:"40px"
                    }}>Justice</h2>
                    <p>**Justice est un bot Discord de blacklist.** En effet, il constitue une base de données de personnes malveillantes. Les propriétaires de serveurs Discord peuvent l'ajouter, ils choisissent entre le mode actif et le mode passif.</p>
                    <p>Le **mode actif** empêche de rejoindre votre serveur toute personne blaclistée de Justice, et le **mode passif** permet d'informer les modérateurs du serveur Discord dans un salon prédéfini qu'un utilisateur a rejoint le serveur et que celui-ci est blaclisté de Justice.</p>
                    <p>**Justice se distingue des autres bots** de ce genre car il met un point d'honneur sur les preuves. En effet, toute demande de blacklist doit s'appuyer sur des preuves et tout le monde a la possibilité grâce à une commande de visionner celles-ci.</p>
                    <p>**Si une personne est blacklistée** et que vous croyez impensable que cette personne ait enfreint le code de conduite, ou bien que l'équipe de Justice a commis une erreur ou un abus de pouvoir, allez donc voir les preuves et vous ne douterez plus.</p>
                    <p>**Nous avons pour souhait d'établir une vraie confiance entre Justice et les propriétaires de serveur.**</p>
                </div>
            </section>
        </div>
    )
}