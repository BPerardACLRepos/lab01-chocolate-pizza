import React from 'react';
import Header from './App-Header.js';
import ImageSection from './ImageSection.js';
import Recipe from './Recipe.js';
import Footer from './Footer.js';
import style from './Mock-Styles.module.css';
import './App.css';

export default class Page extends React.Component {
  render() {
    return (
      <div className={style.bodyWidth}>
        <Header />
        <ImageSection />
        <Recipe />
        <Footer />
      </div>
    );
  }
}
