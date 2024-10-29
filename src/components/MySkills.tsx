import { skills } from "../contexts/context"
import MySkillsCard from "./MySkillsCard"

function MySkills() {
  return (
    <section className="flex flex-col items-center py-12 max-lg:px-4" id="skills">
        <div className="max-w-[900px] w-full">
            <h2 className="text-2xl mb-3 py-3">My Skills</h2>
            <div className="grid grid-cols-4 place-items-center gap-10 w-full max-lg:grid-cols-2">
                {
                    skills.map((item)=>(
                        <MySkillsCard name={item.name} image={item.image}/>
                    ))
                }
            </div>
        </div>
    </section>
  )
}
export default MySkills