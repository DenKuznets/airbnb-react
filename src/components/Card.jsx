import "./Card.css";
import avatarUrl from "../assets/katie-zaferes.png";
import starUrl from "../assets/star.png";

export default function Card() {
  return (
    <div className="card">
      <div className="img--container">
        <div className="status">
          <p className="status--text">SOLD OUT</p>
        </div>
        <img className="avatar" src={avatarUrl} alt="avatar" />
      </div>
      <div className="text--container">
        <div className="rating--container">
          <img className="star" src={starUrl} alt="red star" />
          <div className="rating">5.0</div>
          <div className="greyed-out flex-row">
            <div className="votes">(6)</div>
            <div>&bull;</div>
            <div className="country">USA</div>
          </div>
        </div>
        <h2 className="card-header">Life lessons with Katie Zaferes</h2>
        <div className="price--container">
          <b>
            From <i>$136</i>
          </b>{" "}
          / person
        </div>
      </div>
    </div>
  );
}
