import TextBlock from "../TextBlock";
import ContactForm from "../ContactForm";
import { useContext } from "react";
import { languageSetting } from "../../App";

const Contact = () => {
  const content = useContext(languageSetting);
  const contactElements = content.Home.Contact.methods.map((i, index) => {
    return (
      <li key={index}>
        <TextBlock
          title={i.title}
          subtitle={i.subtitle}
          index={index + 1}
        ></TextBlock>
      </li>
    );
  });

  return (
    <div className="contact">
      <h2>Feel free to send message</h2>
      <ul className="contact-options">{contactElements}</ul>
      <ContactForm />
    </div>
  );
};

export default Contact;
