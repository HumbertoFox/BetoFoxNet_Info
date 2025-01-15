import styles from './footer.module.css';

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
                <p>&copy; 2015 - {anoatual} por BetoFoxNet_Info</p>
            </address>
        </footer>
    );
}