import { useState } from "react";

const ContactForm = () => {
  const [feedbackInput, setFeedbackInput] = useState(
    "/assets/icons/check-gray.svg"
  );
  const [feedbackSubmit, setFeedbackSubmit] = useState({
    message: "",
    icon: "",
  });
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: "",
  });
  const [chaCount, setChaCount] = useState(150);
  const validEmailCheck = new RegExp(
    /^[A-Za-z0-9_!#$%&'*+=?`{|}~^.-]+@[A-Za-z0-9.-]+$/,
    "gm"
  );

  // handle states on input
  function handleFormData(e) {
    const { name, value } = e.target;
    if (feedbackSubmit.message) {
      setFeedbackSubmit({});
    }

    if (name === "email") {
      switch (true) {
        case !value.includes("@"):
          setFeedbackInput("/assets/icons/check-gray.svg");
          console.log("need have a @");
          break;
        case value.includes("@") && !value.match(validEmailCheck):
          setFeedbackInput("/assets/icons/check-gray.svg");
          console.log("This is a invalid email");
          break;
        default:
          setFeedbackInput("/assets/icons/check-green.svg");
          console.log("email is great!");
      }
    }

    setFormData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }

  // handle states on submit
  function submitHandler(e) {
    e.preventDefault();
    switch (true) {
      case formData.username === "" ||
        formData.email === "" ||
        formData.message === "":
        setFeedbackSubmit((prevState) => {
          return {
            ...prevState,
            message: "Fill in all inputs please!",
            icon: "/assets/icons/warning-red.svg",
          };
        });
        break;
      case !formData.email.includes("@"):
        setFeedbackSubmit((prevState) => {
          return {
            ...prevState,
            message: "Your email must contain a @ sign.",
            icon: "/assets/icons/warning-red.svg",
          };
        });
        break;
      case formData.email.includes("@") &&
        !formData.email.match(validEmailCheck):
        setFeedbackSubmit((prevState) => {
          return {
            ...prevState,
            message: "You entered a invalid email adress.",
            icon: "/assets/icons/warning-orange.svg",
          };
        });
        break;
      default:
        setHasSubmitted(true);
        console.log("submitted");
    }
  }

  // handle characther count of textarea
  function characterCount(e) {
    const maxCha = 150;
    const currentLength = e.target.value.length;
    if (currentLength >= maxCha) {
      setFormData((prevState) => {
        return {
          ...prevState,
          message: formData.message.substring(0, maxCha),
        };
      });
      setChaCount((prevState) => prevState - prevState);
    } else {
      setChaCount(maxCha - currentLength);
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
            autoComplete="off"
            required
          ></input>
          <input
            type="email"
            name="email"
            placeholder="name@example.com"
            value={formData.email}
            onChange={handleFormData}
            autoComplete="off"
            style={{
              backgroundImage: `url(${feedbackInput})`,
            }}
            required
          ></input>
          <textarea
            type="message"
            name="message"
            placeholder="Message*"
            onChange={handleFormData}
            value={formData.message}
            autoComplete="off"
            maxlength="150"
            minlength="1"
            onKeyUp={characterCount}
            required
          ></textarea>
          <small className="textarea-count">{chaCount}/150</small>
          <div className="submit-container">
            {feedbackSubmit.message && (
              <div>
                <p>{feedbackSubmit.message}</p>
                <img src={feedbackSubmit.icon} alt="submit validation icon" />
              </div>
            )}
            <button
              className="btn btn-primary"
              onClick={submitHandler}
              type="submit"
            >
              Sent Message
              <i className="bi bi-send-check-fill"></i>
            </button>
          </div>
        </form>
      ) : (
        <div>
          <p>Thanks for your message we will reply as soon as possible!</p>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
