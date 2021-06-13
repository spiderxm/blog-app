import classes from "./contact-form.module.css";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
function ContactForm() {
  const emailRef = useRef();
  const nameRef = useRef();
  const messageRef = useRef();
  const [showNotification, setShowNotification] = useState(false);
  const [message, setMessage] = useState(null);
  useEffect(() => {
    let id;
    if (message != null) {
      id = setTimeout(function () {
        setMessage(null);
      }, 3000);
    }
    return function () {
      clearTimeout(id);
    };
  }, [message]);
  function SendMessageHandler(event) {
    setShowNotification(true);
    setMessage(null);
    event.preventDefault();
    const body = {
      message: messageRef.current.value,
      name: nameRef.current.value,
      email: emailRef.current.value,
    };
    fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw Error(res.json());
        }
      })
      .then((data) => {
        messageRef.current.value = "";
        nameRef.current.value = "";
        emailRef.current.value = "";
        setShowNotification(false);
        setMessage("Message sent successfully");
      })
      .catch((error) => {
        setShowNotification(false);
        setMessage("There was some error please try again later");
      });
  }
  return (
    <section className={classes.contact}>
      <Head>
        <title>Contact Me</title>
      </Head>
      <h1>Leave a message for me</h1>
      <form className={classes.form} onSubmit={SendMessageHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              required
              minLength={5}
              ref={emailRef}
            ></input>
          </div>
          <div className={classes.control}>
            <label htmlFor="email">Name</label>
            <input
              type="text"
              id="name"
              required
              minLength={3}
              ref={nameRef}
            ></input>
          </div>
        </div>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Message</label>
            <textarea
              rows={5}
              id="message"
              ref={messageRef}
              minLength={5}
              required
            ></textarea>
          </div>
        </div>
        <div className={classes.actions}>
          <button className={classes.button} type="submit">
            Submit
          </button>
        </div>
      </form>
      <div style={{ textAlign: "center" }}>
        {showNotification === true ? (
          <Loader type="Circles" color="black" height={40} width={40} />
        ) : null}
      </div>

      <div style={{ textAlign: "center" }}>
        {message != null ? (
          <p style={{ fontFamily: "monospace" }}>{message}</p>
        ) : null}
      </div>
    </section>
  );
}

export default ContactForm;
