import React from "react";
import "../Styles/Folder.css";

import iconcalendar from "../Static/Images/icon-calendar.png";
import icontime from "../Static/Images/icon-time.png";
import iconuser from "../Static/Images/icon-user.png";
import iconvector from "../Static/Images/icon-vector.png";
import rectanglered from "../Static/Images/rectangle-red.png";
import rectanglegray from "../Static/Images/rectangle-gray.png";

const Folder = () => {
  return (
    <div className="wrapper-folder">
      <div className="container-separators">
        <img alt="rectangle-red" src={rectanglered} />
        <img alt="rectangle-gray" src={rectanglegray} />
        <img alt="rectangle-gray" src={rectanglegray} />

        {/* <div className="separator"></div>
        <div className="separator"></div>
        <div className="separator"></div> */}
      </div>
      <div className="folder-body">
        <div className="folder-row">
          <img alt="calendar" src={iconcalendar} className="icon-calendar" />
          <p>Aún no tienes agendadas citas</p>
        </div>
        <div className="folder-row">
          <img alt="time" src={icontime} className="icon-time" />
        </div>
        <div className="folder-row">
          <img alt="user" src={iconuser} className="icon-user" />
        </div>
        <div className="folder-row">
          <img alt="vector" src={iconvector} className="icon-vector" />
        </div>
      </div>
    </div>
  );
};

export default Folder;
