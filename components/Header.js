import Link from "next/link"
import styles from '../styles/Header.module.css'

const Header = () => {
    return (
        <header id="start" className={styles.header}>
            <nav className={styles.nav}>
                <Link href="/">
                    <img src="/logo.png" alt="Logo" className={styles.logo} />
                </Link>
                <ul>
                    <li>
                        <a href="#about">ABOUT</a>
                    </li>
                    <li>
                        <a href="#howTo">HOW TO</a>
                    </li>
                    <li>
                        <Link href="/faq">
                            <a>FAQS</a>
                        </Link>
                    </li>
                    <li>
                        <a href="#contact" className={styles.btn}>CONTACT US</a>
                    </li>
                </ul>
            </nav>
            <div className={styles.titleWrap}>
                <h1 className={styles.title}>Your awesome traffic permit consultant.</h1>
                <a className={styles.btn}>GET STARTED</a>
                <div className={styles.truckWrap}>
                    <img className={styles.truck} src="/mobel.svg" alt="img" />
                </div>

            </div>





        </header>

    );
}

export default Header;

