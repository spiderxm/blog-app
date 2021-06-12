import classes from "./hero.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-solid-svg-icons";
import Head from "next/head";
import { Fragment } from "react";

function Hero() {
  return (
    <Fragment>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
          crossorigin="anonymous"
        />
      </Head>
      <section className={classes.hero}>
        <div className={classes.image}>
          <Image src="/image.jpg" alt="user image" width={300} height={300} />
        </div>
        <h1>👋🏼 Hello, I am Mrigank Anand</h1>
        <p>Software Developer | Student | CSE, NITH</p>
        <div>
          <a
            href={"https://github.com/spiderxm"}
            target={"_blank"}
            className={classes.icon}
          >
            <i className="fab icon fa-github"></i>
          </a>
          <a
            href={"https://www.linkedin.com/in/mrigankanand/"}
            className={classes.icon}
            target={"_blank"}
          >
            <i className="fab icon fa-linkedin"></i>
          </a>
        </div>
      </section>
    </Fragment>
  );
}

export default Hero;
