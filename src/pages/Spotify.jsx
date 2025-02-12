import servicesImg3 from '../assets/services-img-3.jpg';



export default function Music() {

    const services = [
        {
            servicesName: 'Simp Central',
            servicesDescription: "As you can tell this is a new addition compared to the last two pages. Despite what happens, you know im your number one fan and am always wishing the best for you regardless of any outcome. In the time I've known you I've seen you make so much growth (not just physically fatty) and it makes me so happy to see you always improving no matter if its with your career or personal goals. I hope you always continue to be who you are despite all the hardships and difficulties you may face in the future and just know people always will trust your judgement even if you may not trust your own. Never change for anyone because your nurting personality is what makes you stand out above the rest and sensitivty is not weakness, its a part of you which helps you see empathy rather than vengance. I cannot speak for you, but i can unwaiveringly say you have made such a positive impact on my life and I just want to say im thankful and forever grateful for everything :) I really do cherish this playlist and I hope we can make it collaborative to enjoy our 99% match in music taste and memories. Im always here to listen and understand and I know you are too as you have always continued to show.", 
            servicesImage: servicesImg3, 
            alt: 'Photo Shooting image', 
            url: "https://open.spotify.com/embed/playlist/7oYxOPDvh7srXzX6Xpksh4?utm_source=generator"
        },
    ];


    return (
        <div className="relative">
            <section id="services-section">
                <div className="section-container pt-[50px] md:pt-[100px] pb-[25px] md:pb-[100px]">
                    {services.map((service, index) => (
                        <div key={index} className="flex items-center relative justify-between flex-col-reverse gap-10 md:static md:flex-row-reverse text-right lg:gap-20 pb-[50px] md:pb-[100px] odd:text-left md:pt-[50px] md:odd:flex-row last-of-type:pb-[50px]">
                            <div className={'bg-slate-100 h-[300px] md:h-[450px] absolute bottom-[25px] md:bottom-auto max-w-[90%] md:max-w-[40%] w-full -z-10 ' + (index % 2 === 0 ? '-left-4 md:-left-0' : '-right-4 md:-right-0')}></div>
                            <div className="w-full md:w-auto md:flex-1 relative h-[250px] md:h-[350px]">
                                {/* <img src={service.servicesImage} alt={service.alt} /> */}
                                <iframe style={{ width: "500px", height: "360px" }} allowFullScreen={true} src={service.url} />
                            </div>
                            <div className="flex-1">
                                <h2 className="mb-4">{service.servicesName}</h2>
                                <p>{service.servicesDescription}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}


