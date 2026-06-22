'use client';

import styles from './gallery.module.css';
import Gallery0 from '@/assets/Project_Login.png';
import Gallery1 from '@/assets/Project_Admin.png';
import Gallery2 from '@/assets/Project_User.png';
import Gallery3 from '@/assets/Project_settings.png';
import Gallery4 from '@/assets/Project_Aquarela.png';
import Gallery5 from '@/assets/Project_Mlu.png';
import Gallery6 from '@/assets/Project_Dolbytec.png';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import { Autoplay, Keyboard } from 'swiper/modules';

export default function GalleryComponent() {
    const gallerySectionRef = useRef(null);
    const galleryTitleRef = useRef(null);
    const gallerySwiperRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const gallerySection = gallerySectionRef.current;
        const galleryTitle = galleryTitleRef.current;
        const gallerySwiper = gallerySwiperRef.current;

        gsap.fromTo(galleryTitle, {
            opacity: 0,
            y: 200
        }, {
            opacity: 1.5,
            y: 0,
            duration: 1,
            scrollTrigger: {
                trigger: gallerySection,
                start: 'top 90%'
            }
        });
        gsap.fromTo(gallerySwiper, {
            opacity: 0,
            y: -200
        }, {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: 0.5,
            scrollTrigger: {
                trigger: gallerySection,
                start: 'top 90%'
            }
        });
    }, []);
    return (
        <section className={styles.gallery} id='galeria' ref={gallerySectionRef}>
            <h3 ref={galleryTitleRef}>Galeria</h3>
            <Swiper
                className={styles.mySwiper}
                slidesPerView={1}
                spaceBetween={50}
                loop={true}
                grabCursor={true}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                keyboard={{ enabled: true }}
                modules={[Keyboard, Autoplay]}
                ref={gallerySwiperRef}
            >
                <SwiperSlide>
                    <Image src={Gallery0} alt='Imagem Projeto Laravel' />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={Gallery5} alt='Imagem Projeto Laravel' />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={Gallery6} alt='Imagem Projeto Laravel' />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={Gallery1} alt='Imagem Projeto Next Js 1' />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={Gallery2} alt='Imagem Projeto Next Js 2' />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={Gallery3} alt='Imagem Projeto Next Js 3' />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={Gallery4} alt='Imagem Projeto Laravel' />
                </SwiperSlide>
            </Swiper>
        </section>
    );
}