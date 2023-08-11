import hexagon from "../assets/images/hexagon.png"
import hexagonmobile from "../assets/images/mobile-hexagon.png"
import logo from "../assets/images/logo.png"
import { useState } from "react"

export default function HomePage() {
    const [name, setName] = useState(null);

    const handleChange = event => {
        setName(event.target.value);
    };
    return (
        <>
            <section className="bg-[#270D3D] bg-[url('/public/background.jpg')] bg-cover grid grid-cols-1 lg:grid-cols-2" style={{height:"100vh", marginTop:"-97px"}}>
                {/* 68vh */}
                {/* char new de Discord ? */}
                
                <div className="flex mt-32 justify-center">
                    <form style={{
                        borderWidth: "3px",
                        borderRadius: "18px",
                        borderColor: "white",
                        borderStyle: "solid",
                        height: "68px"
                    }}>
                        <input value={name} onChange={handleChange} style={{
                            backgroundColor: "transparent",
                            fontSize: "20px",
                            color: "white",
                            paddingTop: "16px",
                            paddingRight: "30px",
                            paddingLeft: "30px",
                            paddingBottom: "16px",
                            height: "68px"
                        }}/>
                        <input type="submit" value="Submit"/>
                    </form>
                </div>
                <img src={hexagon} className="absolute lg:top-32 xl:top-0 object-scale-down hidden lg:flex" alt=""/>
                <img src={hexagonmobile} className="absolute bottom-0 object-cover lg:hidden w-100 sm:w-4/6 md:w-2/4" alt=""/>
            </section>

            <section className="bg-[#2A1D48] grid grid-cols-3 lg:grid-cols-5 md:py-16 pt-32">
                <div className="col-span-3 mx-10 sm:mx-16 md:mx-20 xl:mx-32 2xl:mx-38">
                    <h2 className="tracking-wide font-bold pb-4 mb-6 border-b-2" style={{fontSize: "3.6rem", letterSpacing:"5px", fontFamily:"CenturyGothic-Bold"}}>Justice</h2>
                    <p className="mb-8"><strong>Justice est un bot Discord de blacklist.</strong> En effet, il constitue une base de données de personnes malveillantes. Les propriétaires de serveurs Discord peuvent l'ajouter, ils choisissent entre le mode actif et le mode passif.</p>
                    <p className="mb-8">Le <strong>mode actif</strong> empêche de rejoindre votre serveur toute personne blaclistée de Justice, et le <strong>mode passif</strong> permet d'informer les modérateurs du serveur Discord dans un salon prédéfini qu'un utilisateur a rejoint le serveur et que celui-ci est blaclisté de Justice.</p>
                    <p className="mb-8"><strong>Justice se distingue des autres bots</strong> de ce genre car il met un point d'honneur sur les preuves. En effet, toute demande de blacklist doit s'appuyer sur des preuves et tout le monde a la possibilité grâce à une commande de visionner celles-ci.</p>
                    <p className="mb-8"><strong>Si une personne est blacklistée</strong> et que vous croyez impensable que cette personne ait enfreint le code de conduite, ou bien que l'équipe de Justice a commis une erreur ou un abus de pouvoir, allez donc voir les preuves et vous ne douterez plus.</p>
                    <p className="mb-8"><strong>Nous avons pour souhait d'établir une vraie confiance entre Justice et les propriétaires de serveur.</strong></p>
                </div>
                <div className="col-span-5 lg:col-span-2 flex justify-center items-center mb-8">
                    <img src={logo} alt="Logo de Justice" width="50%" style={{}}/>
                </div>
            </section>
        </>
    )
}