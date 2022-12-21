import "./Destination.css";
import Mountain1 from "./assets/1.jpg";
import Mountain2 from "./assets/2.jpg";
import Mountain3 from "./assets/3.jpg";
import Mountain4 from "./assets/4.jpg";

function DestinationData(props) {
  return (
    <div className={props.className}>
      <div className="desc-text">
        <h2>{props.heading}</h2>
        <p>{props.text}</p>
      </div>
      <div className="image">
        <img alt="img" src={props.img1} />
        <img alt="img" src={props.img2} />
        {/* <img alt="img" src={Mountain3} />
      <img alt="img" src={Mountain4} /> */}
      </div>
    </div>
  );
}

export default DestinationData;
