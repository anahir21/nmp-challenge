import React, { Component } from "react";

import CardInterviews from "../assets/CardInterviews";

import iconcalendar from "../Static/Images/icon-calendar.png";
import icontime from "../Static/Images/icon-time.png";
import iconuser from "../Static/Images/icon-user.png";
import iconvector from "../Static/Images/icon-vector.png";

import "../Styles/Folder.css";

const imagesPath = {
  red: "https://i.postimg.cc/vZW44kDh/rectangle-red.png",
  gray: "https://i.postimg.cc/g2PJbs4Z/rectangle-gray.png",
};

class Folder extends Component {
  state = {
    open1: true,
    open2: false,
    open3: false,
  };

  toggleImage1 = () => {
    this.setState((state) => ({ open1: true, open2: false, open3: false }));
  };

  toggleImage2 = () => {
    this.setState((state) => ({ open1: false, open2: true, open3: false }));
  };

  toggleImage3 = () => {
    this.setState((state) => ({ open1: false, open2: false, open3: true }));
  };

  getImageName = () => (this.state.open1 ? "red" : "gray");
  getImageName2 = () => (this.state.open2 ? "red" : "gray");
  getImageName3 = () => (this.state.open3 ? "red" : "gray");

  render() {
    const imageName = this.getImageName();
    const imageName2 = this.getImageName2();
    const imageName3 = this.getImageName3();

    return (
      <div className="wrapper-folder">
        <div className="container-separators">
          <img
            alt="rectangle-red"
            src={imagesPath[imageName]}
            onClick={this.toggleImage1}
          />
          <img
            alt="rectangle-gray"
            src={imagesPath[imageName2]}
            onClick={this.toggleImage2}
          />
          <img
            alt="rectangle-gray"
            src={imagesPath[imageName3]}
            onClick={this.toggleImage3}
          />
        </div>

        <div className="folder-body">
          <div className="folder-row">
            <img alt="calendar" src={iconcalendar} className="icon-calendar" />
            {this.state.open1 ? (
              <CardInterviews interviewfalse="Aún no tienes agendadas citas" />
            ) : null}
          </div>
          <div className="folder-row">
            <img alt="time" src={icontime} className="icon-time" />
            {this.state.open2 ? (
              <CardInterviews
                date="Lunes 21 de septiembre de 2020"
                time="10:00am"
                recruiter="Lic. Ana María"
                zoom="www.zoom.us/nmp/0108037"
              />
            ) : null}
          </div>
          <div className="folder-row">
            <img alt="user" src={iconuser} className="icon-user" />
            {this.state.open3 ? (
              <CardInterviews
                date="Martes 22 de septiembre de 2020"
                time="12:00pm"
                recruiter="Lic. Ana María"
                zoom="www.zoom.us/nmp/0108037"
              />
            ) : null}
          </div>
          <div className="folder-row">
            <img alt="vector" src={iconvector} className="icon-vector" />
          </div>
        </div>
      </div>
    );
  }
}

export default Folder;
