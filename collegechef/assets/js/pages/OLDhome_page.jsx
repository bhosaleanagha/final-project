import React, {Component} from 'react';
import Form from '../components/form';




class Home extends Component {
    getRecipeWithIngredients =  async (ev) => {
        const ingredientName = ev.target.elements.ingredientName.value;
        ev.preventDefault();
        try {
            const resp = await fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?number=5&ranking=1&ignorePantry=false&ingredients=appl`, {
                'method': 'GET',
                'headers': {
                    'x-rapidapi-host': API_HOST,
                    'x-rapidapi-key': API_KEY
                }
            }).then(resp => {
                return resp.json();
            })
            console.log(resp)
        } catch (error) {
            console.log(error);

        }
    }

    render(){
        return (
            <div>
                <h1>
                    Welcome To College Chef
                </h1>
                <Form getRecipeWithIngredients={this.getRecipeWithIngredients} />
            </div>
        )
    }
}

export default Home;