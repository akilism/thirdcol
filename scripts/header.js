import { default as React, Component } from 'react';
import ReactDOM from 'react-dom';

import openWaterFull from "../assets/open-water.jpg";

export default class Header extends Component {

  render() {
    const titleInlineStyle = { backgroundImage: `url(${openWaterFull})` };

    return (
      <div className="page-header" style={titleInlineStyle}>
        <h1 className="title">Open Water</h1>
        <h2 className="subtitle">The VICE News blog covering the international migrant crisis.</h2>
      </div>
    );
  }
}
