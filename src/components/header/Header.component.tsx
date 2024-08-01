import Image from 'next/image';
import HeaderStyles from "../../styles/Header.module.css";

export default function Header() {
    return (
        <div className={HeaderStyles.navbarContainer}>
            <nav className={HeaderStyles.navbar}>
                <a href="#" className={`${HeaderStyles.navLink} ${HeaderStyles.navLinkActive}`}>Accueil</a>
                <a href="#" className={HeaderStyles.navLink}>A propos</a>
                <div className="logo">
                    <Image src="/logo.svg" alt="logo" width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: 'auto', height: '50px' }} />
                </div>
                <a href="#" className={HeaderStyles.navLink}>Programme</a>
                <a href="#" className={HeaderStyles.navLink}>Contact</a>
            </nav>
        </div>
    );
}
