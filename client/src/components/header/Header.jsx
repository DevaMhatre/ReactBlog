import "./header.css";
import React from "react";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Open-Up & Explore</span>
        <span className="headerTitleLg">Bloggy</span>
      </div>
      <img
        className="headerImg"
        src="https://cdn.wallpapersafari.com/84/35/l85BYI.jpg"
        alt=""
      />
    </div>
  );
}
