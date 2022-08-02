import React from "react";

export default function MainData() {
  return (
    <div className="main-component">
      <div className="photo-div">
        <img src={require('../images/photo.png')} className="photo"/>
      </div>
      <div className="text-photo">
        <div className="photo-name">Laura Smith</div>
        <div className="photo-profession">Frontend Developer</div>
        <div className="photo-website">laurasmith.website</div><br />
        <div className="info-buttons">
          <button type="button" className="btn-email">
            <img src={require('../images/mail.png')} /> Email
          </button>
          <button type="button" className="btn-linkedin">
            <img src={require('../images/linkedin.png')} /> Linkedin
          </button>
        </div>
      </div>
    </div>
  );
};