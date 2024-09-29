import { location, mail, phone } from "../helpers/images"

function ContactMe() {
  return (
    <section className="bg-[#3d3e42] py-12 flex items-center justify-center max-lg:px-4" id="contactMe">
        <div className="max-w-[900px] w-full">
            <h2 className="text-4xl mb-3 pb-3">Contact Me</h2>
            <div className="grid grid-cols-4 gap-5 text-lg max-lg:grid-cols-1">
                <a href="mailto:sakthikumaranofficial@gmail.com" className="flex lg:col-start-1 lg:col-end-3  items-center justify-center gap-2 bg-Midnight-Gray w-full p-3 rounded-lg text-Apricot">
                    <img src={mail} className="w-[25px]" alt="" />
                    <p className="max-sm:text-sm">Sakthikumaranofficial@gmail.com</p>
                </a>
                <a href="tel:+919364408334" className="flex items-center justify-center lg:col-start-3 lg:col-end-5 gap-2 bg-Midnight-Gray w-full p-3 rounded-lg text-Apricot">
                    <img src={phone} className="w-[25px]" alt="" />
                    <p className="max-sm:text-sm">(+91) 9364408334</p>
                </a>
                <a href="https://www.google.com/maps/place/Coimbatore,+Tamil+Nadu/@11.0139689,76.967235,12z/data=!3m1!4b1!4m6!3m5!1s0x3ba859af2f971cb5:0x2fc1c81e183ed282!8m2!3d11.0168445!4d76.9558321!16zL20vMDE5ZmM0?entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D" className="flex items-center justify-center lg:col-start-[-4] lg:col-end-[-2] gap-2 bg-Midnight-Gray w-full p-3 rounded-lg text-Apricot">
                    <img src={location} className="w-[25px]" alt="" />
                    <p className="max-sm:text-sm">Coimabatore, Tamil Nadu, India</p>
                </a>
            </div>
        </div>
    </section>
  )
}
export default ContactMe