import React from 'react';
import style from './ImageSection.module.css';



class Title extends React.Component {
    render() {
        return (
            <div>   
                <h1 className={style.Title}>Chocolate Pizza</h1>
                <p className={style.pleft}>POSTED ON 15 DEC 2013 / DESSERTS</p>
                <p className={style.pright}><img className={style.print} src = 'print-icon.png'/>PRINT</p> 
            </div>
        )
    }
}

export default class ImageSection extends React.Component {
    render() {
        return (
            <div>
                <Title/>
                <img className={style.pizza} src = 'choco-pizza.png'/>
            </div>
        )
}
}