'use client';

import LogoBfnAzul from '@/assets/LOGO-BFN-SIGLA-AZUL.png';
import Image from 'next/image';
import styles from './about.module.css';
import {
    useEffect,
    useRef
} from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

export default function AboutComponent() {
    const aboutSectionRef = useRef(null);
    const aboutTitleRef = useRef(null);
    const aboutTextRef = useRef(null);
    const aboutLogoRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const aboutSection = aboutSectionRef.current;
        const aboutTitle = aboutTitleRef.current;
        const aboutText = aboutTextRef.current;
        const aboutLogo = aboutLogoRef.current;

        gsap.fromTo(aboutTitle, {
            opacity: 0,
            y: -200,
            x: -200
        }, {
            opacity: 1,
            y: 0,
            x: 0,
            duration: 1,
            scrollTrigger: {
                trigger: aboutSection,
                start: 'top 90%'
            }
        });
        gsap.fromTo(aboutText, {
            opacity: 0,
            y: -200
        }, {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
                trigger: aboutSection,
                start: 'top 90%'
            }
        });
        gsap.fromTo(aboutLogo, {
            rotation: -180,
            opacity: 0,
            x: -500
        }, {
            rotation: 0,
            opacity: 1,
            x: 0,
            duration: 1.5,
            scrollTrigger: {
                trigger: aboutSection,
                start: 'top 70%'
            }
        });
    }, []);
    return (
        <section
            className={styles.about}
            id='sobrenos'
            ref={aboutSectionRef}
        >
            <div className={styles.text}>
                <h2 ref={aboutTitleRef}>Sobre Nós</h2>
                <p ref={aboutTextRef}>
                    Trabalhamos dês de 2006 com montagem e manutenção em
                    computadores Desktop, 2010 com Rede de computadores, 2016 com
                    Telecomunicações, 2017 com reparos em placas de Desktop, 2021 com
                    Desenvolvimento de web front e back and, 2022 com reparos em placas de
                    Notebooks, 2023 com cópia, impressão, Lan house com entretenimento com
                    acesso à internet!
                </p>
            </div>
            <Image
                src={LogoBfnAzul}
                alt='Baner BetoFoxNet_Info'
                width={500}
                height={500}
                ref={aboutLogoRef}
            />
        </section>
    );
}