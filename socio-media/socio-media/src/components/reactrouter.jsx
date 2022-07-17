import React from "react";

import MainHome from "./mainHome";
import Rightbar from "../component/mainright";
import Mainleft from "../component/mainleft";
import Feed from "../component/feed";
import Topbar from "../component/Navbar";
const ReactrouterHome = () => {
  return (
    <div>
      <Topbar />
      <div className="homeContainer">
        <Mainleft />
        <Feed />
        <Rightbar />
      </div>
    </div>
  );
};

export default ReactrouterHome;
