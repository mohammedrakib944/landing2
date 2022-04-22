import "./properties.css";
import img from "../../assets/img/dummy.jpg";

const Properties = () => {
  return (
    <div className="properties">
      <img src={img} />
      <div className="titleAndTile">
        <p>2 bedroom</p>
        <p>5 min ago</p>
      </div>
      <h3>LOREM IPSUM</h3>
    </div>
  );
};

export default Properties;
