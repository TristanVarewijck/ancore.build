import { useContext } from "react";
import { languageSetting } from "../../App";
import Testimonial from "../../components/Testimonial";

const Reviews = () => {
  const content = useContext(languageSetting);
  const testimonialElements = content.Home.Reviews.testimonials.map((i) => {
    return (
      <li>
        <Testimonial
          text={i.text}
          profile={i.profile}
          name={i.name}
          position={i.position}
        />
      </li>
    );
  });

  return (
    <div className="reviews">
      <ul>{testimonialElements}</ul>
    </div>
  );
};

export default Reviews;
