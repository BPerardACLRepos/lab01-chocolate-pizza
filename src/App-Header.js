import React from 'react';
import Left from './App-LeftHeader.js';
import Right from './Header-RightHeader.js';
import style from './Mock-Styles.module.css';

export default class Header extends React.Component {
    render() {
        return (
            <div className={style.header}>
                <Left />
                <Right />
            </div>
        )

    }
}