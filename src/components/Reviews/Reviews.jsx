import "./Reviews.css";
import Button from "../button/Button";
import Review from "./Review";
import { useState } from "react";

function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      img: "src/assets/Sarah.png",
      name: "Sarah M.",
      job: "Forestry Manager",
      text:
        '"The expertise provided by ITTCON transformed our sustainable timber production approach. Their guidance was crucial in navigating regulations and securing long-term trade agreements—a partner we deeply trust."',
    },
    {
      img: "src/assets/Michael.png",
      name: "Michael T.",
      job: "CEO of Energy Corp",
      text:
        '"Securing our first round of green investments was pivotal, and ITTCON played a critical role. Their strategic insights and commitment to sustainability put us on the path to success."',
    },
    {
      img: "src/assets/Emma.png",
      name: "Emma L.",
      job: "Startup Founder",
      text:
        '"We couldn’t have scaled so quickly without their support. From market analysis to venture capital acquisition, ITTCON was instrumental in our startup’s rapid growth."',
    },
    {
      img: "src/assets/John.png",
      name: "John D.",
      job: "Trade Director",
      text:
        '"Expanding our market presence globally was made possible by ITTCON’s deep industry knowledge and global reach. Their tailored solutions led to a 25% increase in our export volume."',
    },
    {
      img: "src/assets/John.png",
      name: "John D.",
      job: "Trade Director",
      text:
        '"Expanding our market presence globally was made possible by ITTCON’s deep industry knowledge and global reach. Their tailored solutions led to a 25% increase in our export volume."',
    },
    {
      img: "src/assets/John.png",
      name: "John D.",
      job: "Trade Director",
      text:
        '"Expanding our market presence globally was made possible by ITTCON’s deep industry knowledge and global reach. Their tailored solutions led to a 25% increase in our export volume."',
    },
  ];

  const itemsToShow = 3;
  const totalReviews = reviews.length;

  const nextSlide = () => {
    if (currentIndex < totalReviews - itemsToShow) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="reviews-container">
      <div className="reviews-novigation">
        <h2 className="black-color">What our clients are saying</h2>
        <div className="reviews-buttons">
          <div className="reviews-buttons-left" onClick={prevSlide}>
            <Button />
          </div>
          <div className="reviews-buttons-right" onClick={nextSlide}>
            <Button />
          </div>
        </div>
      </div>
      <div className="reviews-container-wraper">
        <div
          className="reviews-container-items"
          style={{ transform: `translateX(-${currentIndex * 22.5}rem)` }}
        >
          {reviews.map((review, index) => (
            <Review
              key={index}
              img={review.img}
              name={review.name}
              job={review.job}
              text={review.text}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Reviews;
