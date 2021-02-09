import React from 'react';
import style from './Mock-Styles.module.css';


const ingredients = [
    {
        name: 'milk',
        amount: '1 1/2 cups'
    },
    {
        name: 'mascarpone',
        amount: '1/2 cup'
    },
    {
        name: 'pink salt',
        amount: '1/2 tsp'
    },
    {
        name: 'Black Mission Figs',
        amount: '1 lb'
    },
    {
        name: 'brown sugar',
        amount: '1/2 cup'
    },
    {
        name: 'water',
        amount: '2-4 tbsp'
    },
    {
        name: 'heavy cream',
        amount: '1 1/2 cups'
    },
    {
        name: 'granulated sugar',
        amount: '1/3'
    },
    {
        name: 'egg yolks',
        amount: '2'
    },
    {
        name: 'lemon, juiced',
        amount: '1'
    },
    {
        name: 'butter',
        amount: '2 tbsp'
    },
    {
        name: 'honey roasted pecans, roughly chopped',
        amount: '1 cup'
    },
]

const ingredientList = ingredients.map(ingredient => <label for={ingredient.name}>
    <input type="checkbox" name={ingredient.name} />
    {ingredient.amount} {ingredient.name}
</label>
);

export default class IngredientList extends React.Component {
    render() {
        return (
            <div className={style.ingredientList} style={{ backgroundImage: `url(${'list-bg.png'})` }}>
                { ingredientList}
            </div >
        );
    }
}