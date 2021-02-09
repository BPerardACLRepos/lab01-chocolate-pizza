import React from 'react';


class Title extends React.Component {
    render() {
        return (
            <div>   
                <h1>Chocolate Pizza</h1>
                <p>POSTED ON 15 DEC 2013 / DESSERTS</p>
                <img src = 'print-icon.png'/>
                <p>PRINT</p>
            </div>
        )
    }
}

export default class ImageSection extends React.Component {
    render() {
        return (
            <div>
                <Title/>
                <img src = 'choco-pizza.png'/>
            </div>
        )
}
}