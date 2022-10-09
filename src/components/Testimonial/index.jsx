const Testimonial = ({ text, profile, name, position }) => {
  return (
    <div>
      <img src={`/assets/icons/quote-i.svg`} alt="Quote icon" />
      <p>{text}</p>
      <div>
        <section>
          <img
            src={`/assets/testimonials/${profile}`}
            alt={`${name} profile`}
          />
        </section>
        <section>
          <h3>{name}</h3>
          <p>{position}</p>
        </section>
      </div>
    </div>
  );
};

export default Testimonial;
