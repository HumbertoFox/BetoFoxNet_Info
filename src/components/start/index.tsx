'use client';

import LogoBfn from '@/assets/LOGO_BFN.png';
import Image from 'next/image';
import styles from './start.module.css';
import {
    useEffect,
    useRef
} from 'react';
import gsap from 'gsap';

export default function StartComponent() {
    const startimgRef = useRef(null);
    const starth1Ref = useRef(null);
    const startpRef = useRef(null);

    useEffect(() => {
        const startImg = startimgRef.current;
        const startH1 = starth1Ref.current;
        const startText = startpRef.current;

        gsap.fromTo(startImg, {
            opacity: 0,
            scale: 0.5,
        }, {
            opacity: 1,
            scale: 1,
            duration: 1.5,
            ease: 'power2.out'
        });
        gsap.fromTo(startH1, {
            opacity: 0,
            y: 200,
        }, {
            opacity: 1,
            y: 0,
            duration: 1.5,
            delay: 0.5,
            ease: 'power2.out'
        });
        gsap.fromTo(startText, {
            opacity: 0,
            y: -200,
        }, {
            opacity: 1,
            y: 0,
            duration: 1.5,
            delay: 1,
            ease: 'power2.out'
        });
    }, []);
    return (
        <div className={styles.start}>
            <Image
                src={LogoBfn}
                alt='Logo BetoFoxNet_Info'
                width={500}
                height={500}
                ref={startimgRef}
            />
            <div className={styles.divtext}>
                <h1 ref={starth1Ref}>Bem Vindo a <strong>BetoFoxNet_Info</strong></h1>
                <p ref={startpRef}>
                    Desenvolvimento de Sistemas Web, App, Banco de Dados
                    Montagem, Manutenção em informática, Rede de Computadores
                    Ensino e Educação em Informática...
                </p>
            </div>
        </div>
    );
}