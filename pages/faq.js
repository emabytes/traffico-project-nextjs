import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FaqCards from '../components/FaqCards';


const faq = () => {
    return (
        <div>
            <Head>
                <title>Traffico FAQ</title>
                <link rel="icon" href="/favicon.svg" />
            </Head>
            {/* <Header /> */}
            <FaqCards />
            {/* <Footer /> */}
        </div>
    );
}

export default faq;
