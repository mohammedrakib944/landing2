import React, { useState } from "react";
import style from "../../assets/common.module.css";
import img4 from "../../assets/img/image 14.png";
import img12 from "../../assets/img/img 12.png";
import img13 from "../../assets/img/img 13.png";
import img14 from "../../assets/img/img 14.png";
import img1 from "../../assets/img/img 17.png";
import img2 from "../../assets/img/img 18.png";
import img3 from "../../assets/img/img 19.png";
import MetaCard from "../../components/metaCard/MetaCard";
import { metaData } from "./metaData";
import "./metaverse.css";



const Metaverse = () => {
  const [imgB, setImgB] = useState(img1);
  return (
    <div className="metaverse">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="metaImgs">
              <img alt="" src={imgB} className="metaImg MetaMainImg" />
              <img alt=""
                src={img2}
                className="metaImg"
                onClick={() => setImgB(img14)}
              />
              <img alt=""
                src={img3}
                className="metaImg"
                onClick={() => setImgB(img12)}
              />
              <img alt=""
                src={img4}
                className="metaImg"
                onClick={() => setImgB(img13)}
              />
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
