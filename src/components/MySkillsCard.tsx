type MySkillsCardProps = {
    name:string,
    image:string
}

function MySkillsCard({name,image}:MySkillsCardProps) {
  return (
    <div className="bg-[#0A0A0A] border-[#ffffff24] border-2 h-[160px] w-full cursor-pointer flex flex-col items-center justify-center p-4 rounded-lg gap-2 hover:bg-[#f0bf6c] transition-all ease-in-out duration-300">
        <div className="w-[50px] h-[80px] flex items-center max-sm:w-[40px] max-sm:h-[70px]">
            <img src={image} className="w-full object-fit object-center" alt={name} />
        </div>
        <p>{name}</p>
    </div>
  )
}
export default MySkillsCard