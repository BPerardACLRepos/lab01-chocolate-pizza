import React from 'react';
import Header from './App-Header.js';
import ImageSection from './ImageSection.js';
import './App.css';

export default class Page extends React.Component {
  render () {
  return (
    <div>
      <Header/>
      <ImageSection/>
    </div>
  );
}
}
