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

import InstagramSection from "../components/InstagramSection";
import Footer from "../components/Footer";


export const Photos = (title) => {

    const photos = [
        { servicesName: 'Memorial Day BBQ', servicesDescription: "My vlogs from all my trips. Im trying to travel more this year but heres a calm luh vlog to caputure more mems.", servicesImage: servicesImg1, alt: 'Photo Shooting image' },
        { servicesName: 'Andys Bday', servicesDescription: "Im practicing cutting hair so I just needed a place to dump all the progress. Not even trying to be a barber i just want to be able to give my self haircuts just so I know how to. I have an extensive clientelle base (five people)", servicesImage: servicesImg2, alt: 'Video Shooting image' },
        { servicesName: 'Mimis Bday brunch', servicesDescription: "Trying to get more into fashion and stuff so its basically just a whole lot of outfits/inspo for me to look at in the future. (Added my 6 foot tall pic)", servicesImage: servicesImg3, alt: 'Photo Shooting image', },
        { servicesName: 'Memorial Day BBQ', servicesDescription: "My vlogs from all my trips. Im trying to travel more this year but heres a calm luh vlog to caputure more mems.", servicesImage: servicesImg1, alt: 'Photo Shooting image' },
      ];


    return (
        <div>
            <div className="relative">
                {/******************************************** Photos */}
                {/* <section id="cta-section" className="relative">
                    <div style={{ backgroundImage: `url(${ctaImage})` }} className="absolute top-0 left-0 bg-cover h-full w-full -z-[2]"></div>
                    <div className="section-container max-w-2xl text-center py-[50px] md:py-[100px] text-white z-[3]">
                        <h2 className="">Photos</h2>
                        <Link to='' className="btn my-8">Digital Pics</Link>
                    </div>
                    <div className="bg-black/50 absolute top-0 left-0 right-0 bottom-0 -z-[1]"></div>
                </section> */}
            </div>


            <section id="">
          <div className="section-container pt-[50px] md:pt-[100px] pb-[25px] md:pb-[100px]">
            <div className="grid grid-cols-3 gap-20">
              {photos.map((service, index) => (
                <div key={index} className="flex flex-col text-center">
                  <div className={'mt-5 bg-slate-100 h-[300px] md:h-[400px] absolute bottom-[25px] md:bottom-auto max-w-[90%] md:max-w-[40%] w-full -z-10 ' + (index % 2 === 0 ? '-left-4 md:-left-0' : '-right-4 md:-right-0')}></div>
                  <div className="w-full  relative h-[250px] md:h-[350px]">
                    <img className="border rounded-lg shadow-xl hover:scale-125" src={service.servicesImage} alt={service.alt} />
                  </div>

                </div>
              ))}
            </div>
          </div>
        </section>

        </div>
    )

}