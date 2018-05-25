import React, {Component, Fragment} from 'react';
import feedData from "../../Utils/feedData";


class Feed extends Component {
  render() {
    let node = this.props.node;
    console.log(this.props.node.childNodes);
    let dataObject = {};
    this.props.node.childNodes.forEach((item) => {
      if (item.nodeName !== 'content') {
        dataObject[item.nodeName] = item.innerHTML;
      } else {
        dataObject[item.nodeName] = item.textContent;
      }
    });
    let contentHTML = { __html: dataObject.content };
    return(
      <div>
        <h1>{dataObject.title}</h1>
        <p><strong>TLDR: </strong>{dataObject.summary}</p>
        <a href={dataObject.id}><small>{dataObject.published}</small></a>
        <div dangerouslySetInnerHTML={contentHTML}></div>
      </div>
    );
  }
}

export default class FeedList extends Component {
  render() {
    let feedContainer = [];
    let feedList = [];
    if (this.props.feed) {
      let feedData = this.props.feed.getElementsByTagName('entry');
      feedList = Object.values(feedData);

      feedList.map((feed, key) => {
        feedContainer.push(<Feed key={key} node={feed} />);
      })
    }
    return(
      <Fragment>
        {feedContainer}
      </Fragment>
    );
  }
}

