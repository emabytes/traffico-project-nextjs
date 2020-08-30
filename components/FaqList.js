import React from "react";
import styles from "../styles/FaqCard.module.css";
import FaqCard from "./FaqCard";
import data from "./data.js";

const FaqList = () => {
    return (
        <section className={styles.faqSection}>
            {data.map((element, index) => (
                <FaqCard
                    key={index}
                    question={element.question}
                    answer={element.answer}
                />
            ))}
        </section>
    );
};

export default FaqList;
