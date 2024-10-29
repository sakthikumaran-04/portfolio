import { digitalIpsum } from "../helpers/images"

function Testimonial() {
  return (
    <section className="flex items-center justify-center py-20 max-lg:px-4">
        <div>
            <h2 className="text-2xl mb-3 pb-3">Testimonial</h2>
            <div className="max-w-[900px] flex items-center justify-center lg:gap-20 gap-5 flex-wrap-reverse">
                <div>
                    <p className=" text-sm"><span className="bg-Apricot inline-block min-h-[4px] min-w-[50px] rounded-xl -translate-y-1 mx-2"></span>He was an <span className="text-Apricot">asset</span> to our team and is <span className="text-Apricot">hardworking</span>.He has shown impressive results. He has gained skills in doing front-end projects and was an <span className="text-Apricot">advantage</span> for our company. I confidently recommend N Sakthikumaran to join your team. I know he will be a beneficial <span className="text-Apricot">asset to your organization</span></p>
                    <div className="absolute right-5 lg:right-24 text-center">
                    <p className="text-sm pt-5">Priyanka Agarwal</p>
                    <p className="text-xs">Managing Director,Digital Ipsum</p>
                </div>
                </div>
                <img src={digitalIpsum} className="rounded-lg" alt="" />
            </div>
        </div>
    </section>
  )
}
export default Testimonial