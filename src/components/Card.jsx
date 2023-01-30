import "./Card.css";
// import avatarUrl from "../assets/katie-zaferes.png";
// import starUrl from "../assets/star.png";

export default function Card(props) {
  // console.log(props);
  return (
    <div className="card">
      <div className="img--container">
        <div className="status">
          <p className="status--text">SOLD OUT</p>
        </div>
        <img className="avatar" src='../public/assets/katie-zaferes.png' alt="avatar" />
      </div>
      <div className="text--container">
        <div className="rating--container">
          <img className="star" src='../public/assets/star.png' alt="red star" />
          <div className="rating">{ props.rating }</div>
          <div className="greyed-out flex-row">
            <span className="votes">{ props.reviewCount }</span>
            <span>&bull;</span>
            <span className="country">{ props.country}</span>
          </div>
        </div>
        <h2 className="card-header">{props.title }</h2>
        <div className="price--container">
          <b>
            From <span>${props.price }</span>
          </b>
          / person
        </div>
      </div>
    </div>
  );
}
