import "./Portfolio.css";
import Button from "../button/Button";

function Portfolio() {
  return (
    <div className="portfolio-wrap">
      <div className="item item-1">
        <p className="portfolio-p">
          Optimizing International Trade Operations for a Forestry Sector Client
        </p>
        <Button text="" />
      </div>
      <div className="item item-2">
        <p className="portfolio-p">
          Expanding Market Reach for a Timber Exporter
        </p>
        <Button text="" />
      </div>
      <div className="item item-3">
        <p className="portfolio-p">
          Implementing Sustainable Schemes for a Bioenergy Producer
        </p>
        <Button text="" />
      </div>
      <div className="item item-4">
        <p className="portfolio-p">
          Attracting Impact Investors for a Forestry Conservation Initiative
        </p>
        <Button text="" color="" />
      </div>
      <div className="item item-5">
        <p className="portfolio-p">
          Accelerating Growth for a Wood Processing Startup
        </p>
        <Button text="" color="" />
      </div>
    </div>
  );
}

export default Portfolio;
