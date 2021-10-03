import React from "react";
import Logo from '../images/logo.svg'
import FacebookIcon from '../icons/Facebook.svg'
import TwitterIcon from '../icons/Twitter.svg'
import InstagramIcon from '../icons/Instagram.svg'
import YoutubeIcon from '../icons/Youtube.svg'
import './header.scss'
const Header = ({}) => {
  const menuItems = [
    "Home",
    "Biography",
    "Discography",
    "Tours",
    "Media",
    "Album",
    "Contact",
  ];
  return (
    <div class="container">
      <header>
        <img src={Logo} alt="kube" />
        <ul class="icons">
          <li>
            <img src={FacebookIcon} />
          </li>
          <li>
            <img src={TwitterIcon} />
          </li>
          <li>
            <img src={InstagramIcon}/>
          </li>
          <li>
            <img src={YoutubeIcon} />
          </li>
        </ul>
        <ul class="links">
          {menuItems.map((item, index) => {
            return <li key={index}> {item}</li>;
          })}
        </ul>
      </header>
    </div>
  );
};

export default Header;
