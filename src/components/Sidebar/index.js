import React, { Component } from 'react';

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
  render() {
    return(
      sidebarData.map((data, key) =>  (
        <li key={key}>{data}</li>
      ))
    );
  }
}


export default Sidebar;