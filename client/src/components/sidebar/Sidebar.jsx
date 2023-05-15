import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
import React from "react";
import axios from "axios";
// import { axiosInstance } from "../../config";

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://img.freepik.com/premium-vector/businessman-profile-cartoon_18591-58479.jpg?w=360"
          alt="" style={{width:"250px",height:"270px"}}
        />
        <p>
          My name is Deva Mhatre. I am from VIIT, Pune.<br /> And This is a Beautiful & Simple, <br /> "Blogging Application".
        </p>
      </div>  
      <div className="sidebarItem"> 
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
            <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
}
