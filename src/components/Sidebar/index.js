import React, { Component, Fragment} from 'react';
import { AllFeed } from '../../FeedCrud/index';
import { Route, Link } from 'react-router-dom';


const sidebarData = [
  'Ars',
  'Vienna support',
  'Apple News',
  'Trash',
  'Vinit Kumar',
  'James Long',
  'Armin Ronacher'
];


class Sidebar extends Component {
  constructor(props) {
    super(props);
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

  render() {
    let sideBarContainer = [];
    return(
      <Fragment>
        {this.state.data && this.state.data.map((entry, key) => (
          <li key={key}>
            <a data-url={entry.doc.feedURL} href="#">{entry.doc.title}</a>
          </li>
        ))}
      </Fragment>
    );
  }
}


export default Sidebar;