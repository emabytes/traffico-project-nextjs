import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FaqList from '../components/FaqList';
import styles from "../styles/FaqCard.module.css";

const faq = () => {
    return (
        <div className={styles.faqPage}>
            <Head>
                <title>Traffico FAQ</title>
                <link rel="icon" href="/favicon.svg" />
            </Head>
            <Header />
            <article id="faq" className={styles.faqIntro}>
                <div >
                    <h5>FAQ</h5>
                    <h2>Questions and Answers on Professional Traffic Permits:</h2>
                </div>
                <div></div>
            </article>
            <div className={styles.faqSectionWrap}>
                <FaqList className={styles.faqSectionLeft} />
                <FaqList className={styles.faqSectionRight} />
            </div>
            <Footer />
        </div>
    );
}

export default faq;
