import Link from "next/link";

const Footer = () => {
  return (
    <footer id="contact">
      <img className="truck" src="/Group35.svg" alt="" />
      <article>
        <div className="flex">
          <h4>
            How do you do when you need to obtain a commercial traffic permit
            for freight transport to your business?
          </h4>
          <h5>
            <a className="redBtn">GET STARTED</a>
          </h5>
        </div>

        <nav>
          <Link href="/">
            <img src="/logo.png" alt="Logo" />
          </Link>
          <ul>
            <li>
              <Link href="/#about">
                <a href="#about">ABOUT</a>
              </Link>
            </li>
            <li>
              <Link href="/#howTo">
                <a href="#howTo">HOW TO</a>
              </Link>
            </li>
            <li>
              <Link href="/faq#faq">
                <a href="#faq">FAQS</a>
              </Link>
            </li>
            <li>
              <a href="#">CONTACT US</a>
            </li>
            <li>
              <ul className="social">
                <li>
                  <a href="">
                    <img src="/t.svg" alt="" />
                  </a>
                </li>
                <li>
                  <a href="">
                    <img src="/f.svg" alt="" />
                  </a>
                </li>
                <li>
                  <a href="">
                    <img src="/i.svg" alt="" />
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </article>

      <style jsx>
        {`
          footer {
            background: url("/line.svg") center/cover no-repeat, #0f264c;
            font-family: "Rubik", sans-serif;
            position: relative;
            padding-top: 15vh;
            padding-bottom: 2vh;
          }
          .truck {
            position: absolute;
            top: -11em;
          }
          .flex {
            color: white;
            display: flex;
            justify-content: space-around;
            align-items: center;
            margin-top: 5vh;
            padding: 5vh 0 20vh 0;
          }
          footer article div h4 {
            line-height: 2;
            font-size: 1.1em;
            font-weight: 300;
            width: 25%;
            border-left: 10px solid #ee4d47;
            border-radius: 5px;
            padding-left: 2%;
          }
          .redBtn {
            background: #ee4d47;
            color: white;
            padding: 0.9em 1.5em;
            border-radius: 5px;
            font-size: 1.1em;
          }
          .social {
            display: flex;
            justify-content: flex-end;
            list-style: none;
          }
          .social li {
            margin-left: 10px;
          }
          .social a img {
            transition: all 0.5s;
          }
          .social a img:hover {
            transform: scale(1.1);
          }
          nav {
            width: 75%;
            margin: 0 auto;
            display: flex;
            align-items: center;
            color: white;
          }
          nav ul {
            display: flex;
            list-style-type: none;
            width: 60%;
            margin: 0 auto;
            justify-content: space-between;
            align-items: center;
          }
          nav ul li {
            transition: all 0.5s;
          }
          nav ul li:hover {
            color: rgba(252, 221, 212, 0.5);
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;
