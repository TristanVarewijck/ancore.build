import Link from "../Link";

const ContactForm = () => {
  return (
    <div className="contactFormContainer">
      <form>
        <input type="text" name="name" placeholder="Name*" required></input>
        <input type="email" name="email" placeholder="E-Mail*" required></input>
        <textarea name="message" placeholder="Message*" required></textarea>
        <Link
          text="Sent message"
          icon="send-fill"
          role="button"
          type="primary"
          href="https://www.google.com"
        />
      </form>
    </div>
  );
};

export default ContactForm;
