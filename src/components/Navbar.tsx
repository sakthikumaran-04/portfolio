import { useState } from "react"
import { bars, logo, xmark } from "../helpers/images"

function Navbar() {

  const [showMenu, setShowMenu] = useState<boolean>(false)

  return (
    <nav className="grid grid-cols-3 items-center place-items-center lg:px-12 py-3 fixed w-full z-10 bg-Midnight-Gray max-lg:flex max-lg:justify-between max-lg:px-6">
        <img src={logo} className="w-[220px]" alt="logo"/>
        <ul className={`${showMenu?"right-[0px]":"right-[-300px]"} transition-all duration-300 ease-in-out flex gap-8 items-center max-lg:fixed max-lg:flex-col top-0 max-lg:p-10 max-lg:px-20 max-lg:bg-[#3d3e42] max-lg:min-h-full justify-center`}>
            <img src={xmark} className="w-[20px] absolute top-8 right-8 cursor- max-lg:block hidden" onClick={()=>setShowMenu(false)} alt="close menu" />
            <a href="#about" onClick={()=>setShowMenu(false)}><li className="hover:text-Apricot cursor-pointer">About</li></a>
            <a href="#skills" onClick={()=>setShowMenu(false)}><li className="hover:text-Apricot cursor-pointer">Skills</li></a>
            <a href="#projects" onClick={()=>setShowMenu(false)}><li className="hover:text-Apricot cursor-pointer">Projects</li></a>
            <a href="#experience" onClick={()=>setShowMenu(false)}><li className="hover:text-Apricot cursor-pointer">Experience</li></a>
            <a href="#contactMe" className="bg-slate-600 p-3 rounded-lg hover:bg-slate-700 transition-all ease-in-out cursor-pointer duration-300 hidden max-lg:block" onClick={()=>setShowMenu(false)}>Contact Me</a>
        </ul>
        <a href="#contactMe" className="bg-slate-600 p-3 rounded-lg hover:bg-slate-700 transition-all ease-in-out cursor-pointer duration-300 max-lg:hidden">Contact Me</a>
        <img src={bars} className="w-[20px] cursor-pointer max-lg:block hidden" onClick={()=>setShowMenu(true)} alt="open menu" />
    </nav>
  )
}
export default Navbar