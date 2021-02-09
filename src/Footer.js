import React from 'react';
import Top from './Footer-Top.js';
import Bottom from './Footer-Bottom.js';

export default class Footer extends React.Component {
    render() {
        return (
            <div>
                <Top />
                <Bottom />
            </div>
        );
    }
}