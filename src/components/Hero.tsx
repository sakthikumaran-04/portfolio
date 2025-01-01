import { github, instagram, linkedin, x_twitter } from "../helpers/images"

function Hero() {
  return (
    <section className="text-center min-h-[100svh] flex items-center flex-col justify-center relative" id="home">
        <h2 className="text-2xl max-sm:text-xl">I'm <span className="text-Apricot font-Handlee text-5xl max-sm:text-4xl">SakthiKumaran</span></h2>
        <p className="text-sm max-sm:text-xs"> Bridging Creativity and Technology as a Full Stack Developer</p>
        <div className="flex flex-col items-center gap-3 fixed max-lg:absolute lg:right-[50px] right-[20px] bottom-0">
            <a href="https://www.github.com/sakthikumaran-04/" target="_blank"><img src={github} className="w-[20px] cursor-pointer hover:scale-150 transition-all ease-in-out duration-300" alt="github" /></a>
            <a href="https://www.linkedin.com/in/sakthikumaran-n/" target="_blank" rel="noopener noreferrer"><img src={linkedin} className="w-[20px] cursor-pointer hover:scale-150 transition-all ease-in-out duration-300" alt="linkedin" /></a>
            <a href="https://www.instagram.com/_sakthikumaran_/" target="_blank" rel="noopener noreferrer"><img src={instagram} className="w-[20px] cursor-pointer hover:scale-150 transition-all ease-in-out duration-300" alt="instagram" /></a>
            <a href="https://www.x.com/sakthi_kumaran_" target="_blank" rel="noopener noreferrer"><img src={x_twitter} className="w-[20px] cursor-pointer hover:scale-150 transition-all ease-in-out duration-300" alt="x-twitter" /></a>
            <div className="bg-Apricot h-[70px] w-[4px] rounded-xl"/>
        </div>
        <div className="relative mt-2">
          <span className="flex h-3 w-3 absolute -right-1 -top-1">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-600 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-600"></span>
          </span>
          <p className="bg-yellow-600 p-1 px-2 rounded-xl text-sm">Available For Full Time Jobs</p>
        </div>
    </section>
  )
}
export default Hero