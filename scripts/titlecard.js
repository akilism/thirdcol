import { default as React, Component } from 'react';
import { default as ReactDOM } from 'react-dom';

import openWaterFull from "../assets/open-water.jpg";

export default class TitleCard extends Component {

  render() {
    let titleInlineStyle = { backgroundImage: `url(${openWaterFull})` };
    return (
      <div className="title-card" style={titleInlineStyle}>
        <h1 className="title"> Open Water </h1>
        <h2 className="subtitle">The Vice News blog covering the internation migrant crisis.</h2>
      </div>
    );
  }
}
