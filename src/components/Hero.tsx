import { github, instagram, linkedin, x_twitter } from "../helpers/images"

function Hero() {
  return (
    <section className="text-center min-h-screen flex items-center flex-col justify-center relative" id="home">
        <h2 className="text-2xl">I'm <span className="text-Apricot font-Handlee text-5xl">SakthiKumaran</span></h2>
        <p className="text-sm"> Bridging Creativity and Technology as a Full Stack Developer</p>
        <div className="flex flex-col items-center gap-3 fixed max-lg:absolute lg:right-[50px] right-[20px] bottom-0">
            <img src={github} className="w-[20px] cursor-pointer hover:scale-150 transition-all ease-in-out duration-300" alt="github" />
            <img src={linkedin} className="w-[20px] cursor-pointer hover:scale-150 transition-all ease-in-out duration-300" alt="linkedin" />
            <img src={instagram} className="w-[20px] cursor-pointer hover:scale-150 transition-all ease-in-out duration-300" alt="instagram" />
            <img src={x_twitter} className="w-[20px] cursor-pointer hover:scale-150 transition-all ease-in-out duration-300" alt="x-twitter" />
            <div className="bg-Apricot h-[70px] w-[4px] rounded-xl"/>
        </div>
    </section>
  )
}
export default Hero