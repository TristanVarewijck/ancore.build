const Testimonial = ({ text, profile, name, position }) => {
  return (
    <div className="testimonial">
      {/* 1 */}
      <img src={`/assets/icons/comma.svg`} alt="Quote icon" />
      {/* 2 */}
      <p>{text}</p>
      {/* 3 */}
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
