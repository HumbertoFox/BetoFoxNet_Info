'use client';

import {
    useEffect,
    useRef
} from 'react';
import styles from './localization.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function LocalizationComponent() {
    const localizationsectionRef = useRef(null);
    const localizationtitle = useRef(null);
    const localizationiframeRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const section = localizationsectionRef.current;
        const title = localizationtitle.current;
        const iframe = localizationiframeRef.current;

        gsap.fromTo(iframe, {
            opacity: 0,
            scale: 0.5
        }, {
            opacity: 1,
            scale: 1,
            duration: 1,
            scrollTrigger: {
                trigger: section,
                start: 'top 90%'
            }
        });
        gsap.fromTo(title, {
            opacity: 0,
            y: 200
        }, {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
                trigger: section,
                start: 'top 90%'
            }
        });
    }, []);
    return (
        <section
            className={styles.localization}
            ref={localizationsectionRef}
        >
            <h4 ref={localizationtitle}>
                Nossa Localização
            </h4>
            <iframe
                className={styles.iframe}
                id='localizacao'
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.131224813806!2d-34.83498742499393!3d-7.881336192141105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2399e9dd291fd0d7%3A0x160e028698300d2f!2sBetoFoxNet_Info!5e0!3m2!1spt-BR!2sbr!4v1698025252449!5m2!1spt-BR!2sbr'
                title='localização BetoFoxNet_Info'
                loading='lazy'
                width={1536}
                height={500}
                ref={localizationiframeRef}
            />
        </section>
    );
}