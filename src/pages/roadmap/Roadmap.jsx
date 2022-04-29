// external import
import VideoPlayer from "react-video-js-player";

// inernal imports
import "./roadmap.css";
import style from "../../assets/common.module.css";
import RoadCard from "../../components/roadCard/RoadCard";
import { roadmapData } from "./roadmapData";
import videoCircle from "../../assets/img/img 15.png";
import videoTriangle from "../../assets/img/img 8.png";

import Video from "../../assets/video/bg.mp4";
import VideoPoster from "../../assets/img/img 6.png";

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

      {/* video section */}
      <br />
      <div className="videoImage">
        {/* <img className="videoBG" src="" />
        <div className="videoPlay">
          <img src={videoCircle} />
          <img className="videoTriangle" src={videoTriangle} />
        </div> */}
        <VideoPlayer src={Video} poster={VideoPoster} />
      </div>
      <br />
    </>
  );
};

export default Roadmap;
