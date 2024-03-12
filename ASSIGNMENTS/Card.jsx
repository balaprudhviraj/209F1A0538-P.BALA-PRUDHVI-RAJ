import React  from "react";
import "./Card.css";
export const Card = () =>{

  return (
  <div className="Card-container">
    <img src='https://w0.peakpx.com/wallpaper/967/570/HD-wallpaper-ms-dhoni-caption-cool-dhoni-thala.jpg' alt=" Card Image" className="Card-img"/>
    <h1 className="Card-Title">Mahendra Singh Dhoni</h1>
    <p className="Card-Description">Mahendra Singh Dhoni is an Indian professional cricketer. He is a right handed batter and a wicket-keeper.Dhoni was born on 7 July 1981 in Ranchi, Bihar (now in Jharkhand) in a Hindu Rajput family to Pan Singh and Devaki Devi.  </p>
    <a href="Cardpage" className="Card-btn">Click Here</a>

  </div>
  );
};
