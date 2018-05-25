import React, {Component, Fragment} from 'react';
import feedData from "../../Utils/feedData";
import { format, formatDistance, formatRelative, subDays } from 'date-fns'


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
    dataObject["updated"] = format(new Date(dataObject["updated"]), 'ddd, DD/MMM/YY')
    dataObject["published"] = format(new Date(dataObject["published"]), 'ddd, DD MMM YYYY')

    let contentHTML = { __html: dataObject.content };
    return(
      <div>
        <h1>{dataObject.title}</h1>
        <p><strong>TLDR: </strong>{dataObject.summary}</p>
        <a href={dataObject.id} target='_blank'><small>{dataObject.published}</small></a>
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

