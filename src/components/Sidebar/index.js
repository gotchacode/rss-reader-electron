import React, { Component, Fragment} from 'react';
import { AllFeed } from '../../FeedCrud/index';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.clickSidebarLink = this.clickSidebarLink.bind(this);
    this.state = {
      data: null
    }
  }

  componentDidMount() {
    let userDataPromise = AllFeed();
    userDataPromise.then((data) => {
      console.log('data', data);
      this.setState({data: Object.values(data)})
    });
  }

  clickSidebarLink(event) {
    console.log(event);
    console.log(event.target);
  }

  render() {
    let sideBarContainer = [];
    return(
      <Fragment>
        {this.state.data && this.state.data.map((entry, key) => (
          <li key={key}>
            <a data-url={entry.doc.feedURL} href="#" onClick={this.clickSidebarLink.bind(this)}>{entry.doc.title}</a>
          </li>
        ))}
      </Fragment>
    );
  }
}


export default Sidebar;