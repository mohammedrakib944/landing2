import "./roadmap.css";
import style from "../../assets/common.module.css";
import RoadCard from "../../components/roadCard/RoadCard";
import { roadmapData } from "./roadmapData";
import videoBG from "../../assets/img/img 6.png";
import videoCircle from "../../assets/img/img 15.png";
import videoTriangle from "../../assets/img/img 8.png";

const Roadmap = () => {
  return (
    <>
      <div className="container">
        <div className="roadmap">
          <h5 className={style.barTitle}>ROADMAP</h5>
          <h2 className={style.gradientText}>KIDZ ROADMAP</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
            alias.
          </p>
          <br />
          <br />
          <div className="roadmapGrid">
            {roadmapData.map((data, index) => (
              <RoadCard key={index} data={data} />
            ))}
          </div>
        </div>
      </div>

      <br />
      <div className="videoImage">
        <img className="videoBG" src={videoBG} />
        <div className="videoPlay">
          <img src={videoCircle} />
          <img className="videoTriangle" src={videoTriangle} />
        </div>
      </div>
      <br />
    </>
  );
};

export default Roadmap;
