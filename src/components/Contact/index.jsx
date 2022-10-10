import TextBlock from "../TextBlock";
import Link from "../Link";

const Contact = () => {
  const contactForm = (
    <div className="contactFormContainer">
      <form>
        <input type="text" name="name" placeholder="Name*" required></input>
        <input type="email" name="email" placeholder="E-Mail*" required></input>
        <textarea name="message" placeholder="Message*" required></textarea>
        <input type="submit" value="Send" />
      </form>
    </div>
  );

  return (
    <div className="contactform">
      <h2>Feel free to send message</h2>
      <ul>
        <li>
          <TextBlock
            title={"title"}
            subtitle={"subtitle"}
            index={1}
          ></TextBlock>
        </li>

        <li>
          <TextBlock
            title={"title"}
            subtitle={"subtitle"}
            index={1}
          ></TextBlock>
        </li>

        <li>
          <TextBlock
            title={"title"}
            subtitle={"subtitle"}
            index={1}
          ></TextBlock>
        </li>

        <li>
          <TextBlock
            title={"title"}
            subtitle={"subtitle"}
            index={1}
          ></TextBlock>
        </li>

        <li>
          <TextBlock
            title={"title"}
            subtitle={"subtitle"}
            index={1}
            text={contactForm}
          ></TextBlock>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
