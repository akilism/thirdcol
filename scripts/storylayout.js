import { default as React, Component } from 'react';
import ReactDOM from 'react-dom';
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

export default class StoryLayout extends Component {

  render() {
    return (
      <div className="stories-layout">
        <Header />
        <div className="stories">
          <div className="newest-stories">
            <h3 className="section-title">Newest</h3>
            <StoryList stories={newest} />
          </div>
          <div className="featured-stories">
            <h3 className="section-title">Featured</h3>
            <StoryList stories={newest} />
          </div>
          <div className="popular-stories">
            <h3 className="section-title">Most Popular</h3>
            <StoryList stories={newest} />
          </div>
        </div>
      </div>
    );
  }
}
