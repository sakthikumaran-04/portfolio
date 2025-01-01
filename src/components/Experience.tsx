import ExperienceCard from "./ExperienceCard"

function Experience() {
  return (
    <section className="flex items-center justify-center py-20 bg-[#0A0A0Aff] max-lg:px-4" id="experience">
        <div className="max-w-[900px] w-full">
            <h2 className="text-2xl mb-3 pb-3">Experience</h2>
            <div className="flex items-center justify-center">
                <ExperienceCard />
            </div>
        </div>
    </section>
  )
}
export default Experience