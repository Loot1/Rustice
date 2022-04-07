import hexagon from "../assets/images/hexagon.png"
import hexagonmobile from "../assets/images/mobile-hexagon3.png"
import symbol from "../assets/images/justice_woman.png"
import logo from "../assets/images/logo.png"

export default function RequestPage() {
    return (
        <div>
            <section className="bg-[#270D3D] bg-[url('/public/background.jpg')] bg-cover" style={{height:"100vh"}}>
                {/* 68vh */}
                {/* char new de Discord ? */}
                <img src={hexagon} className="absolute lg:top-32 xl:top-0 object-scale-down hidden lg:flex" alt=""/>
                <img src={hexagonmobile} className="absolute bottom-0 object-cover lg:hidden w-3/4 sm:w-4/6 md:w-3/5" alt=""/>
                {/* <img src={symbol} className="absolute" alt="" style={{height:748, width:652, top:200, left:1000}}/> */}
            </section>
            <section className="bg-[#2A1D48] grid grid-cols-3 lg:grid-cols-5 md:py-16 lg:grid-cols-5 px-36">
                <div className="col-span-2 flex justify-center items-center">
                    <img src={logo} alt="Logo de Justice" width="60%" style={{}}/>
                </div>
                <div className="col-span-3">
                    <h2 className="text-4xl tracking-wide font-bold pb-4 mb-6 border-b-2">Justice</h2>
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