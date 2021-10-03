import React from "react";
import "./SectionOne.scss";
import Img from "../images/img.jpg";
import Img1 from "../images/img1.jpg";
const SectionOne = () => {
  return (
    <section>
      <div class="container-section">
        <div class="description">
          <h1>WE ARE "KUBE" BAND FROM MELBOURNE </h1>
          <div class="line"> </div>
          <p>
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua, Sit amet
            aliquam id diam”.
          </p>
          <p>
            Diam volutpat commodo sed egestas egestas. Orci dapibus ultrices in
            iaculis nunc sed augue lacus viverra. Sit amet aliquam id diam. Sed
            sed risus pretium quam vulputate dignissim suspendisse in est. Enim
            nulla aliquet porttitor lacus luctus accumsan tortor posuere.
            Ullamcorper a lacus vestibulum sed arcu non. Enim sit amet venenatis
            urna
          </p>
          <div className="numbers">
            <div className="card">
              <h2>950K</h2>
              <h6>Followers</h6>
            </div>
            <div className="card">
              <h2>15+</h2>
              <h6>Awards</h6>
            </div>
            <div className="card">
              <h2>10M</h2>
              <h6>Copy Sold</h6>
            </div>
            <div className="card">
              <h2>50+</h2>
              <h6>Track Record</h6>
            </div>
          </div>
        </div>
        <div className="pictures">
          <div className="picture1"></div>
          <div className="picture2"></div>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
// 