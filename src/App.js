import React, { Component } from 'react';
import { Button } from 'reactstrap';
import PouchDB from 'pouchdb';
import Sidebar from './components/Sidebar/index';
import GetRSSFeedData from './components/List/GetRSSFeedData';
import logo from './logo.svg';
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
  }

  fetchXML = async term => {
    const feed = await GetRSSFeedData(term);
    this.setState({ xmlData: feed});
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <ul>
              <Sidebar></Sidebar>
            </ul>
          </div>
          <div className="col-md-10">
            body
          </div>
        </div>
      </div>

    );
  }
}

export default App;
