import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Sidebar from './components/Sidebar/index';
import GetRSSFeedData from './components/List/GetRSSFeedData';
import FeedList from './components/Display/index';
import { AddFeed, DeleteFeed, EditFeed, AllFeed} from './FeedCrud/index';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'xmlData': null
    }
  }

  componentDidMount() {
    this.fetchXML();
    AddFeed({'title': 'Vinit', 'description': 'One good boy'});
    AllFeed();
  }

  fetchXML = async term => {
    const feed = await GetRSSFeedData(term);
    this.setState({ xmlData: feed});
  };

  render() {
    return (
      <Router>
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <ul>
                <Sidebar></Sidebar>
              </ul>
            </div>
            <div className="col-md-10">
              <FeedList feed={this.state.xmlData}></FeedList>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
