import { useContext } from "react";
import { languageSetting } from "../../App";
import Testimonial from "../../components/Testimonial";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 475, min: 0 },
    items: 1,
  },
};

const Reviews = () => {
  const content = useContext(languageSetting);
  const testimonialElements = content.Home.Reviews.testimonials.map(
    (i, index) => {
      return (
        <div key={`Testimonial: ${index}`}>
          <Testimonial
            text={i.text}
            profile={i.profile}
            name={i.name}
            position={i.position}
          />
        </div>
      );
    }
  );

  return (
    <div className="reviews">
      <Carousel
        showDots={false}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2500}
        keyBoardControl={true}
        // customTransition="all .5"
        transitionDuration={500}

        // deviceType={this.props.deviceType}

        // stopOnHover={true}
      >
        {testimonialElements}
      </Carousel>
    </div>
  );
};

export default Reviews;
