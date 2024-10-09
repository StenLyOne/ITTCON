import "./Reviews.css";

function Review({ img, name, job, text }) {
  return (
    <div className="cream-bg review-wraper">
      <div className="review-top">
        <img className="review-img" src={img} alt="" />
        <div className="review-info">
            <h5 className="black-color">{name}</h5>
            <p className="black-color">{job}</p>
        </div>
      </div>
      <div className="review-bottom">
        <p className="black-color">{text}</p>
      </div>
    </div>
  );
}

export default Review;