import React from 'react';
import style from './Mock-Styles.module.css';

export default class FooterTop extends React.Component {
    render() {
        return (
            <div className={style.footerTop}>
                <img src={'van-pic.png'} alt='Vanessa Stevenson' />
                <div>
                    <h3 className={style.footerTopInner}>Vanessa Stevenson</h3>
                    <p>Food enthusiast, photography fan. Add a pinch of raw foodism and that's pretty much who I am.</p>
                </div>
                <button>SHARE RECIPE</button>
            </div>
        );
    }
}