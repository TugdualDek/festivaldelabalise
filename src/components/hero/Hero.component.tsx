import Image from 'next/image';
import HeroStyles from '../../styles/Hero.module.css';
import Info from './Info.component';

export default function Hero() {
    return (
        <div className={HeroStyles.heroContainer}>
            <div className={HeroStyles.firstLine}>
                <h1>Le Festival de la Balise</h1>
                <Info dates="23 - 25 Aout 2024" location="Lanildut, Bretagne" />
            </div>
            <div className={HeroStyles.secondLine}>
                <Image src="/logo.svg" alt="hero" width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: 'auto', height: '50px' }} />
                <h2>Plongez dans l'univers captivant du Festival de la Balise, une célébration de l'art, de la musique et du riche patrimoine culturel de Lanildut, en Bretagne.</h2>
            </div>
        </div>
    );
}
