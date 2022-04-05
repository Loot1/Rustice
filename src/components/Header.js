import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../assets/images/logo.png"

export default function Header() {
    let links = [
        {name:"Informations", link:"/informations"},
        {name:"Requêtes", link:"/requetes"},
        {name:"À propos", link:"/a-propos"}
    ]
    let [open,setOpen] = useState(false)
    return (
        <header className='bg-[#270D3D] w-full fixed relative z-50 top-0 left-0'>
            <div className='md:flex items-center justify-between py-6 px-7 md:px-10'>
                <div className='font-bold text-2xl cursor-pointer flex items-center'>
                    <NavLink to="/" className="flex items-center">
                        <img src={logo} className="mr-3" alt="Logo de Justice" width="42px"/>
                        <span className="pt-0.5 pb-1" style={{
                            borderTopStyle: "solid",
                            borderBottomStyle: "solid",
                            borderTopWidth: "1.5px",
                            borderBottomWidth: "1.5px",
                            fontSize: "35px",
                            fontFamily: "ShowcardGothic",
                            fontWeight:"normal"
                        }}>
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
                <ul className={`lg:flex bg-[#270D3D] lg:items-center lg:pb-0 pb-2 absolute lg:static lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20' : 'top-[-490px]'}`} >
                    {
                        links.map((link) => (
                            <li key={link.name} className='lg:ml-8 text-xl lg:my-0 my-7'>
                                <NavLink className='hover:text-gray-400 duration-500' style={{fontFamily: "ShowcardGothic"}} to={link.link}>{link.name}</NavLink>
                            </li>
                        ))
                    }
                    {/* <button className='py-2 px-6 rounded md:ml-8 duration-500'>
                        Get Started
                    </button> */}
                    <button className="ml-16 border-white text-white hidden lg:flex" style={{
                        borderStyle: "solid",
                        borderWidth: "3px",
                        borderRadius: "45px",
                        paddingTop: "10px",
                        paddingRight: "40px",
                        paddingLeft: "40px",
                        paddingBottom: "10px",
                        fontSize: "20px",
                        fontFamily: "ShowcardGothic"
                    }}>
                        Se connecter
                    </button>
                </ul>
            </div>
        </header>
    )
}