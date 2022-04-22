import "./metaverse.css";
import MetaCard from "../../components/metaCard/MetaCard";
import img from "../../assets/img/dummy.jpg";
import style from "../../assets/common.module.css";
import { metaData } from "./metaData";

const Metaverse = () => {
  return (
    <div className="metaverse">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="metaImgs">
              <img src={img} className="metaImg MetaMainImg" />
              <img src={img} className="metaImg" />
              <img src={img} className="metaImg" />
              <img src={img} className="metaImg" />
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
