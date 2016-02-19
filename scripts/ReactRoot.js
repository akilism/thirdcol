import { default as React, Component } from 'react';
import ReactDOM from 'react-dom';
import StoryLayout from './storylayout.js';
import MapLayout from './maplayout.js';
import TitleCard from './titlecard.js';


import navbar from "../assets/navbar.png";

export default class Root extends Component {

  render() {
    return (
      <div className="root">
        <img src={navbar} className="navbar" />
        <MapLayout />
      </div>
    );
  }
}
