'use client';

import Image from 'next/image';
import styles from './header.module.css';
import logoBfn from '@/assets/LOGO_BFN.png';
import Link from 'next/link';
import {
    useEffect,
    useRef
} from 'react';
import gsap from 'gsap';

export default function HeaderComponent() {
    const headerInicioRef = useRef(null);
    const headerAboutRef = useRef(null);
    const headerGalleryRef = useRef(null);
    const headerLocalizationRef = useRef(null);
    const headerClientRef = useRef(null);

    useEffect(() => {
        const headerInicio = headerInicioRef.current;
        const headerAbout = headerAboutRef.current;
        const headerGallery = headerGalleryRef.current;
        const headerLocalization = headerLocalizationRef.current;
        const headerClient = headerClientRef.current;

        gsap.fromTo(headerInicio, {
            opacity: 0,
            x: -500
        }, {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: 'power2.out'
        });
        gsap.fromTo(headerAbout, {
            opacity: 0,
            x: -500
        }, {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: 'power2.out',
            delay: 0.5
        });
        gsap.fromTo(headerGallery, {
            opacity: 0,
            x: -500
        }, {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: 'power2.out',
            delay: 1
        });
        gsap.fromTo(headerLocalization, {
            opacity: 0,
            x: -500
        }, {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: 'power2.out',
            delay: 1.5
        });
        gsap.fromTo(headerClient, {
            opacity: 0,
            x: -500
        }, {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: 'power2.out',
            delay: 2
        });
    }, []);
    return (
        <header className={styles.header}>
            <Link
                className={styles.linklogo}
                href={'#'}
            >
                <Image
                    src={logoBfn}
                    alt='Logo BetoFoxNet_Info'
                    width={110}
                    height={110}
                />
            </Link>
            <nav>
                <ul className={styles.navul}>
                    <li ref={headerInicioRef}>
                        <Link href='#inicio'>
                            Início
                        </Link>
                    </li>
                    <li ref={headerAboutRef}>
                        <Link href='#sobrenos'>
                            Sobre Nós
                        </Link>
                    </li>
                    <li ref={headerGalleryRef}>
                        <Link href='#galeria'>
                            Galeria
                        </Link>
                    </li>
                    <li ref={headerLocalizationRef}>
                        <Link href='#localizacao'>
                            Localização
                        </Link>
                    </li>
                    <li ref={headerClientRef}>
                        <Link
                            href='https://betofoxnetinfo.wuaze.com/index.php/mine'
                            rel='noopener'
                            target='_blank'
                        >
                            Área do Cliente
                        </Link>
                    </li>
                </ul>
            </nav>
        </header >
    );
}