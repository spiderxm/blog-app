import classes from "./contact-form.module.css";
import Head from "next/head"
function ContactForm() {
  return (
    <section className={classes.contact}>
      <Head>
        <title>Contact Me</title>
      </Head>
      <h1>Leave a message for me</h1>
      <form className={classes.form}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email"></input>
          </div>
          <div className={classes.control}>
            <label htmlFor="email">Name</label>
            <input type="text" id="name"></input>
          </div>
        </div>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Message</label>
            <textarea rows={5} id="message"></textarea>
          </div>
        </div>
        <div className={classes.actions}>
          <button className={classes.button}>Submit</button>
        </div>
      </form>
    </section>
  );
}

export default ContactForm;
