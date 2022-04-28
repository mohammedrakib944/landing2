import "./metaverse.css";
import MetaCard from "../../components/metaCard/MetaCard";
import img1 from "../../assets/img/img 17.png";
import img2 from "../../assets/img/img 18.png";
import img3 from "../../assets/img/img 19.png";
import img4 from "../../assets/img/image 14.png";

import style from "../../assets/common.module.css";
import { metaData } from "./metaData";

const Metaverse = () => {
  return (
    <div className="metaverse">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="metaImgs">
              <img src={img1} className="metaImg MetaMainImg" />
              <img src={img2} className="metaImg" />
              <img src={img3} className="metaImg" />
              <img src={img4} className="metaImg" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="metaverseRight">
              <p>METAVERSE</p>
              <h2 className={style.gradientText}>
                CURATED DIGITAL EXPERIENCES
              </h2>
              <br />

              <div className="metaCards">
                {metaData.map((data, index) => (
                  <MetaCard key={index} data={data} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Metaverse;
