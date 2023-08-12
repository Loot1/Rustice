import { NavLink } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="bg-[#270D3D] text-white px-8 md:px-12 lg:px-20 xl:px-36">
            <div className="lg:w-3/4">
                <div className="pt-10 pb-4 border-b-2">
                    <h2 className="text-4xl tracking-wide font-bold">Justice</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 py-6 md:py-8">
                    <ul>
                        <li>
                            {/* "text-gray-400 hover:text-teal-400 duration-300 text-sm cursor-pointer leading-6" */}
                            <NavLink to="/mentions-legales" className="footerLink">
                                Mentions légales
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/politique-de-confidentialite" className="footerLink">
                                Politique de confidentialité
                            </NavLink>
                        </li>
                    </ul>
                    <div className="flex justify-end">
                        <ul className="pt-6 sm:pt-0">
                            <li className="font-semibold">
                                Crédits :
                            </li>
                            <li>
                                Design & Charte graphique par Mathias Delligne
                            </li>
                            <li>
                                Développé par <a href="https://www.linkedin.com/in/louis-sachy/" target="_blank" rel="noreferrer" className="footerLink">Louis Sachy</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="text-center text-gray-400 text-sm py-4 md:py-6">
                <span>© {new Date().getFullYear()} Justice. All rights reserved.</span>
            </div>
        </footer>
    )
}