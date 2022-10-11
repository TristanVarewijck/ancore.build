import { useState, useEffect } from "react";
import Link from "../Link";

const ContactForm = () => {
  // const [feedbackInput, setFeedbackInput] = useState();
  const [feedbackSubmit, setFeedbackSubmit] = useState({});
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [emails, setEmails] = useState();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: "",
  });
  const validEmailCheck = new RegExp(
    /^[A-Za-z0-9_!#$%&'*+=?`{|}~^.-]+@[A-Za-z0-9.-]+$/,
    "gm"
  );

  function handleFormData(e) {
    setFormData(function (prevState) {
      const { name, value, type } = e.target;

      if (feedbackSubmit.message) {
        setFeedbackSubmit({});
      }

      // if (name === "email") {
      //   if (!value.includes("@")) {
      //     setFeedbackInput("/assets/mail-red.svg");
      //   } else if (value.includes("@") && !value.match(validEmailCheck)) {
      //     setFeedbackInput("/assets/mail-orange.svg");
      //   } else if (value.match(validEmailCheck)) {
      //     setFeedbackInput("/assets/mail-green.svg");
      //   }
      // }

      return {
        ...prevState,
        [name]: value,
      };
    });
  }

  function submitHandler(e) {
    e.preventDefault();
    switch (true) {
      case formData.username == "" ||
        formData.email == "" ||
        formData.message == "":
        setFeedbackSubmit((prevState) => {
          return {
            ...prevState,
            message: "Fill in all inputs please!",
          };
        });
        break;
      case !formData.email.includes("@"):
        setFeedbackSubmit((prevState) => {
          return {
            ...prevState,
            message: "Your email must contain a @ sign.",
          };
        });
        break;
      case formData.email.includes("@") &&
        !formData.email.match(validEmailCheck):
        setFeedbackSubmit((prevState) => {
          return {
            ...prevState,
            message: "You entered a invalid email adress.",
          };
        });
        break;
      default:
        setHasSubmitted(true);
        console.log("submitted");
    }
  }

  return (
    <div className="contactFormContainer">
      {!hasSubmitted ? (
        <form>
          <input
            type="text"
            name="username"
            placeholder="Name*"
            onChange={handleFormData}
            value={formData.username}
            required
          ></input>
          <input
            type="email"
            name="email"
            placeholder="name@example.com"
            value={formData.email}
            onChange={handleFormData}
            required
          ></input>
          <textarea
            type="message"
            name="message"
            placeholder="Message*"
            onChange={handleFormData}
            value={formData.message}
            required
          ></textarea>
          <div className="submit-container">
            <p>{feedbackSubmit.message}</p>
            <button
              className="btn btn-primary"
              onClick={submitHandler}
              type="submit"
            >
              Sent Message
              <i class="bi bi-send-check-fill"></i>
            </button>
          </div>
        </form>
      ) : (
        <div>
          <p></p>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
