// import Link from "next/link"
import styles from '../styles/About.module.css'

const About = () => {
    return (
        <main className="container" id="about">
            <div className={styles.aboutGrid}>
                <article>
                    <h3>ABOUT US</h3>
                    <p>The occupational traffic permit is one of the most important things in the company when carrying out freight transport.  In fact, it is a prerequisite for doing business traffic at all. </p>

                    <div className={styles.textCard}>
                        <h4>How do you do when you need to obtain
a commercial traffic permit for freight transport to your business?</h4>
                    </div>
                </article>


                <div className={styles.bg1}></div>
            </div>


            <div className={styles.applyGrid} id="howTo">
                <div className={styles.bg2}></div>
                <article>
                    <h3>HOW TO APPLY</h3>
                    <p>When applying for a traffic permit, there are certain requirements that you must meet that are included in the examination: requirements for professional knowledge, solid establishment, good reputation and financial resources. Important to remember is to confirm your application for a traffic permit by the company's company signer or CEO.</p>
                </article>
            </div>



        </main>
    );
}

export default About;
