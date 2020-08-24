const FaqCards = () => {
  return (
    <section>
      <article>
        <div>
          <h5>FAQ</h5>
          <h2>Questions and Answers on Professional Traffic Permits:</h2>
        </div>
        <div className="bg3"></div>
      </article>

      <style jsx>
        {`
          section {
            margin: 35vh 10%;
          }
          section article {
            padding: 20vh 0;
            display: grid;
            grid-template-columns: 1fr 1fr;
            background: url(/Group14.svg) right/contain no-repeat;
          }
          section article div:nth-of-type(1) {
          }
          section article h5 {
            font-family: "Rubik", sans-serif;
            color: #ee4d47;
            font-size: 1em;
          }
          section article h2 {
            font-family: "DM Serif Display", serif;
            font-size: 2.5em;
            color: #402b2b;
            line-height: 2;
            width: 80%;
          }
        `}
      </style>
    </section>
  );
};

export default FaqCards;
