import { useState, useRef } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false);
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");
  const validEmail = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_md6sl5x",
        "template_92hpdem",
        form.current,
        "PeMqd63ixaE07sXTX"
      )

      .then(
        (result) => {
          alert("Message successfully sent!");
          window.location.reload(false);
          setDone(true);
          form.reset(true);
        },
        (error) => {
          alert("Failed to send the message, please try again!");
        }
      );
  };

  if (name === "") {
    alert("Please Enter Your Name!");
  } else if (email === "" || email === !validEmail) {
    alert("Please Enter Valid E-mail!");
  } else if (message === "") {
    alert("Please Enter Message!");
  } else {
    return (
      <div className="contact-form" id="contact">
        <div className="w-left">
          <div className="text">
            <h1>Contact me</h1>
            <div
              className="blur s-blur"
              style={{ background: "#ABF1FF94" }}
            ></div>
          </div>
        </div>
        <div className="c-right">
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="user_name"
              className="user"
              placeholder="Name"
            />
            <input
              type="email"
              name="user_email"
              className="user"
              placeholder="Email"
            />
            <textarea name="message" className="user" placeholder="Message" />
            <input type="submit" value="send" className="button" />
            <span>{done && "Thank you for contacting me"}</span>
            <div
              className="blur c-blurl"
              style={{ background: "var(--purple)" }}
            ></div>
          </form>
        </div>
      </div>
    );
  }
};

export default Contact;
