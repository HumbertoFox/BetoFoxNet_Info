import Icon from '@/components/Icons';
import styles from './footer.module.css';
import Link from 'next/link';
import Image from 'next/image';
import ReclameAquiStart from '@/assets/logo-reclame-aqui-512.png';
import ReclameAquiMedia from '@/assets/emojiskyReclameAqui.png';

const anoatual = new Date().getFullYear();

export default function FooterComponent() {
    return (
        <footer className={styles.footer}>
            <address className={styles.address}>
                <p>Endereço:</p>
                <p>PE-022, 344-Box-B, Nossa senhora da Conceição, Paulista-PE.</p>
                <p>Paulista, 53.421-420, BR.</p>
                <p>Contato: 81 98807-5408 - WhatsApp.</p>
                <p>E-Mail: betofoxnettelecom@gmail.com.</p>
            </address>
            <address className={styles.addressyear}>
                <Link
                    href='https://www.reclameaqui.com.br/empresa/betofoxnet-solucoes-em-informatica-e-telecom/'
                    target='_blank'
                >
                    <Image
                        className={styles.imgstart}
                        src={ReclameAquiStart}
                        alt='Logo ReclameAqui'
                        width={100}
                        height={70}
                    />
                    <Image
                        className={styles.imgmedia}
                        src={ReclameAquiMedia}
                        alt='Logo ReclameAqui'
                        width={70}
                        height={60}
                    />
                </Link>
                <p>&copy; 2015 - {anoatual} por BetoFoxNet_Info</p>
            </address>
            <div className={styles.social}>
                <Link
                    href='https://www.instagram.com/betofoxnet_info/'
                    target='_blank'
                >
                    <Icon
                        className={styles.icon}
                        icon='fa-brands fa-instagram'
                    />
                </Link>
                <Link
                    href='https://www.facebook.com/BetofoxnetInfo'
                    target='_blank'
                >
                    <Icon
                        className={styles.icon}
                        icon='fa-brands fa-facebook-f'
                    />
                </Link>
                <Link
                    href='https://www.linkedin.com/company/betofoxnetinfo/'
                    target='_blank'
                >
                    <Icon
                        className={styles.icon}
                        icon='fa-brands fa-linkedin-in'
                    />
                </Link>
                <Link
                    href='https://twitter.com/betofoxnet_info'
                    target='_blank'
                >
                    <Icon
                        className={styles.icon}
                        icon='fa-brands fa-twitter'
                    />
                </Link>
                <Link
                    href='https://api.whatsapp.com/send/?phone=5581988075408&text&type=phone_number&app_absent=0'
                    target='_blank'
                >
                    <Icon
                        className={styles.icon}
                        icon='fa-brands fa-whatsapp'
                    />
                </Link>
                <Link
                    href='https://www.sejda.com/call/%2B5581988075408'
                    target='_blank'
                >
                    <Icon
                        className={styles.iconphone}
                        icon='fa-solid fa-phone'
                    />
                </Link>
            </div>
        </footer>
    );
}