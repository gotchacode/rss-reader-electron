import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Sidebar from './components/Sidebar/index';
import GetRSSFeedData from './components/List/GetRSSFeedData';
import FeedList from './components/Display/index';
import feedData from './Utils/feedData';
import { AddFeed, DeleteFeed, EditFeed, AllFeed } from './FeedCrud/index';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      xmlData: null,
      data: null,
      currentURL: null,
      error: null,
    }
    this.clickSidebarLink = this.clickSidebarLink.bind(this);
  }

  clickSidebarLink(event) {
    console.log(event);
    console.log('I am in parent');
    console.log(event.target);
    //this.setState({ currentURL: event.target.dataset.url })
    this.fetchXML(event.target.dataset.url)
  }

  componentDidMount() {
    this.fetchXML(this.state.currentURL)
    // TODO: remove this from here.Right now, just here for adding data
    // purposes
    feedData().forEach((element, key) => {
      console.log('data', element);
      AddFeed(element);
    });
    let userDataPromise = AllFeed();
    userDataPromise.then((data) => {
      console.log('data', data);
      this.setState({data: Object.values(data)})
    });
  }

  fetchXML = async term => {
    console.log('inside fetchXML', term)
    const {type, data} = await GetRSSFeedData(term);
    if (type === 'data') {
      this.setState({ xmlData: data, error: null});
    } else if (type == 'error') {
      this.setState({error: data.toString(), xmlData: null})
    }
  };

  render() {
    return (
      <Router>
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <ul>
                 {this.state.data && this.state.data.map((entry, key) => (
                    <li key={key}>
                      <a data-url={entry.doc.feedURL} href="#" onClick={this.clickSidebarLink.bind(this)}>{entry.doc.title}</a>
                    </li>
                  ))}
              </ul>
            </div>
            <div className="col-md-10">
              <div className="danger">{this.state.error}</div>
              <FeedList feed={this.state.xmlData}></FeedList>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
