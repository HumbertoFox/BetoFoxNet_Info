import Image from 'next/image';
import styles from './header.module.css';
import logoBfn from '@/assets/LOGO_BFN.png';
import Link from 'next/link';

export default function HeaderComponent() {
    return (
        <header className={styles.header}>
            <Link href={'/'}
                className={styles.linklogo}
            >
                <Image
                    src={logoBfn}
                    alt='Logo BetoFoxNet_Info'
                    width={110}
                />
            </Link>
        </header>
    );
}