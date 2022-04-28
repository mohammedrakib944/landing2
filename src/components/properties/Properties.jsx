import "./properties.css";
import img from "../../assets/img/dummy.jpg";

const Properties = ({ data }) => {
  return (
    <div className="properties">
      <img src={data.img} />
      <div className="titleAndTile">
        <p>{data.qu}</p>
        <p>{data.time}</p>
      </div>
      <h3>{data.title}</h3>
    </div>
  );
};

export default Properties;
