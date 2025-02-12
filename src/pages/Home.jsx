import { Link } from "react-router-dom";
import videoBg from '../assets/IMG_6278.jpg';
import servicesImg1 from '../assets/services-img-1.jpg';
import servicesImg2 from '../assets/services-img-2.jpg';
import servicesImg3 from '../assets/services-img-3.jpg';
import Footer from "../components/Footer";


export default function Home() {


    return (
        <main>

            <section id="hero-section" className="relative">
                <img src={videoBg} className="absolute top-0 left-0 right-0 bottom-0  h-full object-cover -z-[2]">
                    {/* <source src={running} type="video/mp4"/> */}
                </img>
                <div className="bg-black/50 absolute top-0 left-0 right-0 bottom-0 -z-[1]"></div>
                <div className="section-container flex items-center justify-between min-h-screen lg:min-h-[800px] text-white ">
                    <div className="max-w-[800px] pt-[128px] pb-[64px] ">
                        <h1 className="">Happy Valentines Day</h1>
                        <p className="my-6">Heres a little something to showcase our mems!</p>
                        <p className="my-6">Read the thingy below first</p>
                        <Link to='/react/portfolio' className="btn">LEMME SEEE</Link>
                    </div>
                </div>
            </section>

            {/* <section id="services-section">
                <div className="section-container pt-[50px] md:pt-[100px] pb-[25px] md:pb-[100px]">
                    {services.map((service, index) => (
                        <div key={index} className="flex items-center relative justify-between flex-col-reverse gap-10 md:static md:flex-row-reverse text-right lg:gap-20 pb-[50px] md:pb-[100px] odd:text-left md:pt-[50px] md:odd:flex-row last-of-type:pb-[50px]">
                            <div className={'bg-slate-100 h-[300px] md:h-[450px] absolute bottom-[25px] md:bottom-auto max-w-[90%] md:max-w-[40%] w-full -z-10 ' + (index % 2 === 0 ? '-left-4 md:-left-0' : '-right-4 md:-right-0')}></div>
                            <div className="w-full md:w-auto md:flex-1 relative h-[250px] md:h-[350px]">
                                <img src={service.servicesImage} alt={service.alt} />
                            </div>
                            <div className="flex-1">
                                <h2 className="mb-4">{service.servicesName}</h2>
                                <p>{service.servicesDescription}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section id="cta-section" className="relative">
                <div style={{ backgroundImage: `url(${ctaImage})` }} className="absolute top-0 left-0 bg-cover h-full w-full -z-[2]"></div>
                <div className="section-container max-w-2xl text-center py-[50px] md:py-[100px] text-white z-[3]">
                    <h2>Music</h2>
                    <p className="my-8">All my playlists for different moods</p>
                    <Link to='/music' className="btn">Listen to these songs</Link>
                </div>
                <div className="bg-black/50 absolute top-0 left-0 right-0 bottom-0 -z-[1]"></div>
            </section>
 */}
            {/* <InstagramSection/> */}
            <Footer />
        </main>
    )
}