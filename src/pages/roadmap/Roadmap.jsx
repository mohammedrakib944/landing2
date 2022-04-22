import "./roadmap.css";
import style from "../../assets/common.module.css";
import RoadCard from "../../components/roadCard/RoadCard";
import { roadmapData } from "./roadmapData";

const Roadmap = () => {
  return (
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
  );
};

export default Roadmap;
