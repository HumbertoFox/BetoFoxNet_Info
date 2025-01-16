import Image from 'next/image';
import styles from './header.module.css';
import logoBfn from '@/assets/LOGO_BFN.png';
import Link from 'next/link';

export default function HeaderComponent() {
    return (
        <header className={styles.header}>
            <Link href={'#'}
                className={styles.linklogo}
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
                    <li>
                        <Link href='#inicio'>
                            Início
                        </Link>
                    </li>
                    <li>
                        <Link href='#sobrenos'>
                            Sobre Nós
                        </Link>
                    </li>
                    <li>
                        <Link href='#galeria'>
                            Galeria
                        </Link>
                    </li>
                    <li>
                        <Link href='#localizacao'>
                            Localização
                        </Link>
                    </li>
                    <li>
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