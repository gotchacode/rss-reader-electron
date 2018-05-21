import React, {Component, Fragment} from 'react';
import feedData from "../../Utils/feedData";


class Feed extends Component {
  render() {
    let node = this.props.node;
    return(
      <div dangerouslySetInnerHTML={{__html: this.props.node.innerHTML }}></div>
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

