
type ProjectsCardProps = {
    title:string,
    description:string,
    link:string,
    desktopImage:string,
    mobileImage:string
}

function ProjectsCard({title,description,link,desktopImage,mobileImage}:ProjectsCardProps) {
  return (
    <div className="grid grid-cols-2 max-w-[900px] bg-[#3d3e42] p-10 rounded-lg w-full place-items-center max-lg:grid-cols-1">
        <div className="order-2">
            <h3 className="text-2xl text-Apricot pb-2 max-lg:pt-3">{title}</h3>
            <p className="pb-2">{description}</p>
            <p>Link: <a href={link} target="_blank" className="text-blue-500">{link}</a></p>
        </div>
        <div className="flex items-center order-1">
            <img src={desktopImage} className="w-[300px] max-lg:w-3/4" alt={title} />
            <img src={mobileImage} className="w-[70px] max-lg:w-1/4 max-lg:mx-2" alt={title} />
        </div>
    </div>
  )
}
export default ProjectsCard