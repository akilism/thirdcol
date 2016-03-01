import { default as React, Component } from "react";
import ReactDOM from "react-dom";
import Header from './header.js';

import openWaterFull from "../assets/open-water.jpg";
import jungle from "../assets/jungle.jpg";

const newest = [{
    title: `My Escape From Syria: Europe or Die`,
    date: Date(2016, 1, 19, 10, 0, 0),
    url: `https://news.vice.com/video/my-escape-from-syria-europe-or-die`,
    topics: [`migrants`, `refugees`, `syria`, `war`, `boat`, `migrant crisis`, `germany`, `immigration`, `balkan route`, `greece`, `dinghy`, `europe`, `short-form docs`],
    type: `video`,
    byline: `VICE News`,
    dek: `This year's death toll of refugees and migrants desperately trying to reach Europe's shores has already started to rise, with a toddler drowning yesterday and 27 bodies recovered today.`
  },
  {
    title: `My Escape From Syria: Europe or Die`,
    date: Date(2016, 1, 19, 10, 0, 0),
    url: `https://news.vice.com/video/my-escape-from-syria-europe-or-die`,
    topics: [`migrants`, `refugees`, `syria`, `war`, `boat`, `migrant crisis`, `germany`, `immigration`, `balkan route`, `greece`, `dinghy`, `europe`, `short-form docs`],
    type: `video`,
    byline: `VICE News`,
    dek: `This year's death toll of refugees and migrants desperately trying to reach Europe's shores has already started to rise, with a toddler drowning yesterday and 27 bodies recovered today.`
  },
  {
    title: `In Photos: Dunkirk's Refugee Wasteland, Even Worse Than the Calais Jungle`, /* ' */
    date: Date(2015, 10, 6, 19, 0, 0),
    url: `https://news.vice.com/article/in-photos-dunkirks-refugee-wasteland-even-worse-than-the-calais-jungle`,
    topics: [`migrants`, `refugees`, `syria`, `war`, `boat`, `migrant crisis`, `germany`, `immigration`, `balkan route`, `greece`, `dinghy`, `europe`, `short-form docs`],
    type: `gallery`,
    image: jungle,
    dek: `VICE News visited the refugee and migrant camp in Dunkirk, France, where more than 2,500 people are living in total squalor. The frozen mudbath is home to many families and young children.`,
    byline: `VICE News`
  },
  {
    title: `In Photos: Dunkirk's Refugee Wasteland, Even Worse Than the Calais Jungle`, /* ' */
    date: Date(2015, 10, 6, 19, 0, 0),
    url: `https://news.vice.com/article/in-photos-dunkirks-refugee-wasteland-even-worse-than-the-calais-jungle`,
    topics: [`migrants`, `refugees`, `syria`, `war`, `boat`, `migrant crisis`, `germany`, `immigration`, `balkan route`, `greece`, `dinghy`, `europe`, `short-form docs`],
    type: `gallery`,
    image: jungle,
    dek: `VICE News visited the refugee and migrant camp in Dunkirk, France, where more than 2,500 people are living in total squalor. The frozen mudbath is home to many families and young children.`,
    byline: `VICE News`
  }];


class StoryItem extends Component {
  render() {
    const {title, date, url, topics, type, dek, byline, image} = this.props.story,
          imageEl = (image) ? (<img className="image" src={image} />) : "";

    return (
      <div className="story">
        <div className="media">
          {imageEl}
        </div>
        <h3 className="title">{title}</h3>
        <div className="byline">By {byline}</div>
        <div className="dek">{dek}</div>
        <div className="date">{date}</div>
      </div>
    )
  }
}

class StoryList extends Component {
  render() {
    const stories = this.props.stories.map((s) => {
      return (<li className="story-list-item"><StoryItem story={s} /></li>);
    });

    return (
      <ul className="story-list">
        {stories}
      </ul>
    )
  }
}

//insert a map into the page.
//add a bunch of markers to the map that are each story geo-located.
//search box? like an autocomplete over topics.
//
export default class MapLayout extends Component {
  constructor(props) {
    super(props);
    this.map = null;
  }

  componentDidMount() {
    this.map = L.map(this.refs["mapElem"]).setView([ 50.973325, 1.883172 ], 18);


// http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}
    L.tileLayer('http://khm3.google.com/kh/v=198&x={x}&y={y}&z={z}&s=Galileo ',
                { maxZoom: 18,
                  subdomains:['mt0','mt1','mt2','mt3']
                })
      .addTo(this.map);
  }

  render() {
    return (
      <div className="map-layout">
        <Header />
        <div className="map-elements">
          <div className="map-tray">
            <ul className="story-filters">
              <li className="filter-item">VICE News Articles</li>
              <li className="filter-item">VICE News Dispatches</li>
              <li className="filter-item">VICE News Documentaries</li>
              <li className="filter-item">VICE News Features</li>
            </ul>
          </div>
          <div className="map" ref="mapElem"></div>
        </div>
      </div>
    );
  }
}
