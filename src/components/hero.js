import React from "react";
import Apple from "../icons/Apple.svg";
import Spotify from "../icons/Spotify.svg";
import Soundcloud from "../icons/soundcloud.svg";
import './Hero.scss'
const Hero = () => {
  return (
    <div class="hero">
      <div class="container-hero">
        <div class="pre-title">
          <div class="line"> </div>
          <h4>WE RELEASED A NEW ALBUM</h4>
        </div>
        <h1>TIRED EYE BLEND</h1>
        <h6>New song with 12 Amazing Tracks</h6>
        <ul class="platforms">
          <li>
            <img src={Apple} />
          </li>
          <li>
            <img src={Spotify} />
          </li>
          <li>
            <img src={Soundcloud} />
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Hero;