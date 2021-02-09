import React from 'react';
import style from './App-LeftHeader.module.css';

export default class LeftHeader extends React.Component {
render() {
return ( 
<div>
    <img className={style.logo} src="https://raw.githubusercontent.com/alchemycodelab/foundations-i-january-2021/main/curriculum/10-review-day/LAB-10/LAB-10a-CHOCOLATE-PIZZA/lab-assets/logo.png?token=ARME27CCGDIQ2QOWQIXO3HDAFL4E6" />
    <div className={style.title}>Delicious</div>
    <p className={style.sub}>THE BEST FOOD BLOG ON THE WEB</p>
    </div>
);
}
}
