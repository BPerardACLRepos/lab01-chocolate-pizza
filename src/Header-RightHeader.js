import React from 'react';
import style from './Header-RightHeader.module.css';

const imgButtons = [
    {
        image: 'fb-icon.png',
        alt: 'fb img'
    },
    {
        image: 'twit-icon.png',
        alt: 'twit img'
    },
    {
        image: 'gp-icon.png',
        alt: 'gp img'
    },
    {
        image: 'insta-icon.png',
        alt: 'insta img'
    },
    {
        image: 'flic-icon.png',
        alt: 'flic img'
    },
    {
        image: 'pint-icon.png',
        alt: 'flic img'
    },
    {
        image: 'rss-icon.png',
        alt: 'rss img'
    },
    {
        image: 'mail-icon.png',
        alt: 'mail img'
    },
]

const iconList = imgButtons.map(icon => <div>
    <img src={icon.image} alt={icon.alt} />
</div>
);

export default class RightHeader extends React.Component {
    render() {
        return (
            <div className={style.right}>
                {iconList}
            </div>
        );
    }
}