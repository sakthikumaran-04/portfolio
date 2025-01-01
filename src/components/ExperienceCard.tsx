function ExperienceCard() {
  return (
    <div className="grid grid-cols-[90px_40px_1fr] place-items-start h-full">
        <div className="relative flex items-center">
            <div className="bg-[#5d5e61] text-white px-4 py-1 rounded-l-lg text-sm">2024</div>
            <div className="w-0 h-0 border-t-[1rem] border-t-transparent border-b-[1rem] border-b-transparent border-l-[0.5rem] border-l-[#5d5e61]"></div>
        </div>
        <div className="flex flex-col items-center gap-2 h-full">
            <div className="blur-circle"></div>
            <div className="min-h-[calc(100%-30px)] w-[5px] bg-white rounded-full"></div>
        </div>
        <div className="max-w-[750px]">
            <h3 className="text-lg">React Application Developer (Intern)</h3>
            <p className="text-xs pb-2 text-Apricot">Digital Ipsum, Kolkata (Remote)</p>
            <p className="text-sm max-md:text-xs">Developed and maintained dynamic, responsive web applications using React.js.Collaborated with cross-functional teams to deliver optimized and user-friendly interfaces.Implemented reusable components and managed state efficiently to improve performance. Contributed to the overall enhancement of project workflows and team efficiency.</p>
        </div>
    </div>
  )
}
export default ExperienceCard