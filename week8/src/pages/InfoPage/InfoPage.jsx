import React from "react";
import "./InfoPage.css";
import poohImage from "../../assets/Pooh.JPG";

function InfoPage() {
  return (
    <div className="info-page-main">
        <img src={poohImage} alt="pooh" />
        <div className="circle-container">
          <div className="circle degree">degree</div>
          <div className="circle project">project</div>
          <div className="circle skills">skills</div>
          <div className="circle awards">awards</div>
        </div>
      </div>
  );
}

export default InfoPage;
