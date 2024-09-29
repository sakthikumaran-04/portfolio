type MySkillsCardProps = {
    name:string,
    image:string
}

function MySkillsCard({name,image}:MySkillsCardProps) {
  return (
    <div className="bg-[#3d3e42] h-[160px] w-full cursor-pointer flex flex-col items-center justify-center p-4 rounded-lg gap-2 hover:bg-[#f0bf6c] transition-all ease-in-out duration-300">
        <div className="w-[80px] h-[100px] flex items-center">
            <img src={image} className="w-full object-fit object-center" alt={name} />
        </div>
        <p>{name}</p>
    </div>
  )
}
export default MySkillsCard