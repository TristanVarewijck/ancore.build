import { useContext } from "react";
import { languageSetting } from "../../App";
import Testimonial from "../../components/Testimonial";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
    partialVisibilityGutter: 45,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    partialVisibilityGutter: 30,
  },
  tablet: {
    breakpoint: { max: 1024, min: 695 },
    items: 2,
    partialVisibilityGutter: 25,
  },
  mobile: {
    breakpoint: { max: 695, min: 0 },
    items: 1,
    partialVisibilityGutter: 10,
  },
};

const Reviews = () => {
  const content = useContext(languageSetting);
  const testimonialElements = content.Home.Reviews.testimonials.map(
    (i, index) => {
      return (
        <div key={i.name}>
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
        keyBoardControl={false}
        transitionDuration={500}
        draggable={false}
        swipeable={false}
        partialVisible={true}
      >
        {testimonialElements}
      </Carousel>
    </div>
  );
};

export default Reviews;
