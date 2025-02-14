import { Link } from "react-router-dom";
import miamiVlog from '../assets/miami.mp4';
import laVlog from '../assets/laVlog.mp4';
import bayVlog from '../assets/bayArea.mp4';
import servicesImg1 from '../assets/IMG_8575.jpg';
import servicesImg2 from '../assets/andy.jpg';
import servicesImg3 from '../assets/mimi.jpg';
import servicesImg4 from '../assets/mimi.jpg';
// import servicesImg5 from '../assets/miami1.jpg';
import Modal from 'react-modal';
import React from 'react';



import ctaImage from '../assets/wallpaper.png';
import ctaImage1 from '../assets/airplane.jpg';
import vid1 from '../assets/vid1.mp4';



export default function Foryou() {


    const vlogs = [
        { servicesName: 'For You :)', servicesDescription: "", servicesImage: vid1, alt: 'Photo Shooting image' },
    ];

    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [videoSelected, setVideo] = React.useState(undefined);

    function openModal(videoSelected) {
        setVideo(videoSelected)
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div>
            <div className="relative">
                <div className="relative">
                    {/* <section id="services-section">
                        <div className="section-container pt-[50px] md:pt-[100px] pb-[25px] md:pb-[100px]">

                            {vlogs.map((service, index) => (
                                 <div key={index} className="flex items-center relative justify-between flex-col-reverse gap-10 md:static md:flex-row-reverse text-right lg:gap-20 pb-[50px] md:pb-[100px] odd:text-left md:pt-[50px] md:odd:flex-row last-of-type:pb-[50px]">
                                 <div className={'bg-slate-100 h-[300px] md:h-[450px] absolute bottom-[25px] md:bottom-auto max-w-[90%] md:max-w-[40%] w-full -z-10 ' + (index % 2 === 0 ? '-left-4 md:-left-0' : '-right-4 md:-right-0')}></div>
                                 <div className="w-250 md:w-auto md:flex-1 relative h-[250px] md:h-[350px]">
                                        <video pause muted id="myVideo" className="border rounded-lg shadow-xl h-full w-full" onClick={() => openModal(service.servicesImage)}>
                                            <source src={service.servicesImage} type="video/mp4" />
                                        </video>
                                    </div>
                                    <div className="">
                                        <h3 className="mt-4 text-base lg:text-md">{service.servicesName}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section> */}
                </div>

                <section id="">
                    <div className="section-container pt-[50px] md:pt-[100px] pb-[25px] md:pb-[100px]">
                        <div className="grid grid-cols-3 gap-20">
                            {vlogs.map((service, index) => (
                                <div key={index} className="flex flex-col text-center">
                                    <div className={'mt-5 bg-slate-100 h-[300px] md:h-[400px] absolute bottom-[25px] md:bottom-auto max-w-[90%] md:max-w-[40%] w-full -z-10 ' + (index % 2 === 0 ? '-left-4 md:-left-0' : '-right-4 md:-right-0')}></div>
                                    <div className="w-full md:w-auto md:flex-1 relative h-[250px] md:h-[350px]">
                                        <video pause muted id="myVideo" className="border rounded-lg shadow-xl hover:scale-125 h-full w-full" onClick={() => openModal(service.servicesImage)}>
                                            <source src={service.servicesImage} type="video/mp4" />
                                        </video>
                                    </div>
                                    <div className="">
                                        <h3 className="mt-4 text-base lg:text-md">{service.servicesName}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <Modal
                        isOpen={modalIsOpen}
                        ariaHideApp={true}
                        className="section-container mt-20 h-[800px] w-full bg-black/100 border rounded-lg"
                        onRequestClose={closeModal}

                    >
                        <video autoPlay id="myVideo" className="h-full w-full">
                            <source src={videoSelected} type="video/mp4" />
                        </video>
                    </Modal>

                </section>
            </div>

        </div>
    )

}