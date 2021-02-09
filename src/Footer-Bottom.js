import { logDOM } from '@testing-library/react';
import React from 'react';
import style from './Mock-Styles.module.css';

export default class FooterBottom extends React.Component {
    render() {
        return (
            <div className={style.footerBottom}>
                <img className={style.footerImg} src={'small-logo.png'} alt='small logo' />
                <p>Delicious &copy; 2013 &#8226; All Rights Reserved.</p>
                <p>Proudly published with Ghost.</p>
            </div>
        );
    }
}