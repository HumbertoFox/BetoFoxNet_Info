import FooterComponent from '@/components/footer';
import styles from './page.module.css';
import HeaderComponent from '@/components/header';
import StartComponent from '@/components/start';
import LocalizationComponent from '@/components/localization';
import GalleryComponent from '@/components/gallery';
import AboutComponent from '@/components/about';

export default function Home() {
  return (
    <div className={styles.page}>
      <HeaderComponent />
      <main className={styles.main}>
        <StartComponent />
        <AboutComponent />
        <GalleryComponent />
        <LocalizationComponent />
      </main>
      <FooterComponent />
    </div>
  );
}