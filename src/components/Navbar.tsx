import { useState } from "react"
import { bars, xmark } from "../helpers/images"

function Navbar() {

  const [showMenu, setShowMenu] = useState<boolean>(false)
  return (
    <nav className="flex justify-between lg:px-16 py-4 fixed w-full z-10 bg-[#000000] max-lg:flex max-lg:justify-between max-lg:px-6">
        <h1 className="text-2xl font-bold text-white hidden max-lg:block">{"<SK/>"}</h1>
        <ul className={`${showMenu?"right-[0px]":"right-[-300px]"} transition-all duration-300 ease-in-out flex gap-8 items-center max-lg:fixed max-lg:flex-col top-0 max-lg:p-10 max-lg:px-20 max-lg:bg-[#0A0A0A] max-lg:min-h-full justify-center text-[#A1A1A1]`}>
            <h1 className="text-2xl font-bold text-white max-lg:hidden">{"<SK/>"}</h1>
            <img src={xmark} className="w-[20px] absolute top-8 right-8 cursor-pointer max-lg:block hidden" onClick={()=>setShowMenu(false)} alt="close menu" />
            <a href="#about" onClick={()=>setShowMenu(false)}><li className="hover:text-Apricot cursor-pointer">About</li></a>
            <a href="#skills" onClick={()=>setShowMenu(false)}><li className="hover:text-Apricot cursor-pointer">Skills</li></a>
            <a href="#projects" onClick={()=>setShowMenu(false)}><li className="hover:text-Apricot cursor-pointer">Projects</li></a>
            <a href="#experience" onClick={()=>setShowMenu(false)}><li className="hover:text-Apricot cursor-pointer">Experience</li></a>
            <a href="#contactMe" className="bg-white text-black text-md py-1 px-3 rounded-lg hover:text-white border-[#ffffff24] border-2 p-3 hover:bg-slate-700 transition-all ease-in-out cursor-pointer duration-300 hidden max-lg:block" onClick={()=>setShowMenu(false)}>Contact Me</a>
        </ul>
        <a href="#contactMe" className="bg-white text-black text-md py-1 px-3 rounded-lg hover:bg-[#0A0A0A] hover:text-white border-[#ffffff24] border-2 transition-all ease-in-out cursor-pointer duration-300 max-lg:hidden">Contact Me</a>
        <img src={bars} className="w-[20px] cursor-pointer max-lg:block hidden" onClick={()=>setShowMenu(true)} alt="open menu" />
    </nav>
  )
}
export default Navbar