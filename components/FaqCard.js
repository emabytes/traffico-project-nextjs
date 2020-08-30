import styles from "../styles/FaqCard.module.css";
import React, { Component } from 'react';

class FaqCard extends Component {
  state = {
    isOpened: false,
  }

  collapse = () => {
    this.setState({ isOpened: !this.state.isOpened })
  }

  render() {
    return (
      <article className={styles.faqCard}>
        <div className={styles.wrap} onClick={this.collapse}>
          <h3>{this.props.question}</h3>
          <input type="button" value={this.state.isOpened ? '-' : '+'} className={styles.btn} />
        </div>
        <div className={styles.wrap}>
          <p className={this.state.isOpened ? styles.show : styles.hide}>
            {this.props.answer}
          </p>
        </div>
      </article>
    );
  }
}

export default FaqCard;



// const FaqCard = () => {
//   const [isOpened, setExpand] = useState(false);
//   return (
//     <article className={styles.faqCard}>
//       <div className={styles.wrap}>
//         <h3>{this.props.question}</h3>
//         <input
//           value={isOpened ? "-" : "+"}
//           onClick={() => setExpand(!isOpened)}
//           type="button"
//           className={styles.btn}
//         />
//       </div>
//       <div>
//         <p className={isOpened ? styles.show : styles.hide}>
//         {this.props.answer}
//         </p>
//       </div>
//       </article>
//   );
// };

// export default FaqCard;
