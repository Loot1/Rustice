import { NavLink } from "react-router";

export function Footer() {
    return (
        <footer className="bg-base-100 text-base-content px-8 md:px-12 lg:px-20 xl:px-36">
            <div className="lg:w-3/4">
                <div className="pt-10 pb-4 border-b-2">
                    <h2 className="text-4xl tracking-wide font-bold">Justice</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 py-6 md:py-8">
                    <ul>
                        <li>
                            <NavLink to="/legal-notice" className="hover:underline">
                                Mentions légales
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/privacy-policy" className="hover:underline">
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
                                Développé par <a href="https://www.linkedin.com/in/louis-sachy/" target="_blank" rel="noreferrer" className="hover:underline">Louis Sachy</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="voicey-muted text-sm text-center py-4 md:py-6">
                <span>© {new Date().getFullYear()} Justice. All rights reserved.</span>
            </div>
        </footer>
    )
}