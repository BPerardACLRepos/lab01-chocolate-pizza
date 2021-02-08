import React from 'react';
import Left from './App-LeftHeader.js';
import Right from './Header-RightHeader.js';

export default class Header extends React.Component {
    render () {
    return (
        <div>
            <Left/>
            <Right/>
        </div>
    ) 
    
}
}