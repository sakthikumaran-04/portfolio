import { projects } from "../contexts/context"
import ProjectsCard from "./ProjectsCard"



function Projects() {
  return (
    <section className="flex flex-col items-center justify-center py-12 max-lg:px-4" id="projects">
        <div className="max-w-[900px]">
            <h2 className="text-2xl mb-3 pb-3">Recent Projects</h2>
            <div className="flex flex-col gap-3 items-center justify-center">
                {
                    projects.map((item)=>(
                        <ProjectsCard title={item.title} description={item.description} link={item.link} desktopImage={item.desktopImage} mobileImage={item.mobileImage}/>
                    ))
                }
            </div>
        </div>
    </section>
  )
}
export default Projects