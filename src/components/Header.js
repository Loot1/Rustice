import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import NavElement from './NavElement'
import logo from "../assets/images/logo.png"
import CircledButton from './CircledButton'

export default function Header() {
    let [open, setOpen] = useState(false)
    return (
        <header className="bg-[#270D3D] sticky w-full z-50">
            <div className='md:flex items-center justify-between py-6 px-7 md:px-10'>
                <div className='font-bold text-2xl cursor-pointer flex items-center'>
                    <NavLink to="/" className="flex items-center">
                        <img src={logo} className="mr-3" alt="Logo de Justice" width="42px"/>
                        <span className="pt-0.5 pb-1 headerTitle">
                            Justice
                        </span>
                    </NavLink>
                </div>
                <div onClick={() => setOpen(!open)} className='flex text-3xl absolute right-8 top-6 cursor-pointer lg:hidden'>
                    <ion-icon name={open ? 'close' : 'menu'} style={{color:"white", fontSize:"45px"}}></ion-icon>
                </div>
                <div onClick={() => setOpen(!open)} className='flex text-3xl absolute right-24 top-7 cursor-pointer lg:hidden'>
                    <ion-icon name="person" style={{color:"white", fontSize:"35px"}}></ion-icon>
                </div>
                <ul className={`bg-[#270D3D] lg:flex lg:items-center lg:pb-0 pb-2 absolute lg:static lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20' : 'top-[-490px]'}`} >
                    <NavElement link="/requetes">Requêtes</NavElement>
                    <NavElement link="/a-propos">À propos</NavElement>
                    <CircledButton>Se connecter</CircledButton>
                </ul>
            </div>
        </header>
    )
}