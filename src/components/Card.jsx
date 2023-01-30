import "./Card.css";
// import avatarUrl from "../assets/katie-zaferes.png";
// import starUrl from "../assets/star.png";

export default function Card(props) {
  // console.log(props);
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="card">
      <div className="img--container">
        {(props.openSpots === 0 || badgeText) && (
          <div className="status">
            <p className="status--text">{badgeText }</p>
          </div>
        )}
        <img
          className="avatar"
          src={`../public/assets/${props.img}`}
          alt="avatar"
        />
      </div>
      <div className="text--container">
        <div className="rating--container">
          <img
            className="star"
            src="../public/assets/star.png"
            alt="red star"
          />
          <div className="rating">{props.rating}</div>
          <div className="greyed-out flex-row">
            <span className="votes">({props.reviewCount})</span>
            <span>&bull;</span>
            <span className="country">{props.location}</span>
          </div>
        </div>
        <h2 className="card-header">{props.title}</h2>
        <div className="price--container">
          <b>
            From <span>${props.price}</span>
          </b>
          / person
        </div>
      </div>
    </div>
  );
}
