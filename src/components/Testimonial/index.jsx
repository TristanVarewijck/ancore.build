const Testimonial = ({ text, profile, name, position }) => {
  return (
    <div className="testimonial">
      <img src={`/assets/icons/comma.svg`} alt="Quote icon" />
      <p>{text}</p>
      <div className="profile">
        <section>
          <img
            src={`/assets/testimonials/${profile}`}
            alt={`${name} profile`}
          />
        </section>
        <section>
          <p>{name}</p>
          <small>{position}</small>
        </section>
      </div>
    </div>
  );
};

export default Testimonial;
