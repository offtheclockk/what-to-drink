import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { themeChange } from 'theme-change';
import { ReactComponent as DrinkSVG } from "../components/undraw_coding_re_iv62.svg";

const Main = (props) => {
  const [drinks, setDrinks] = useState([]);
  const [randomDrink, setRandomDrink] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [errors, setErrors] = useState("");
  const [drinkLoaded, setDrinkLoaded] = useState(false);

  useEffect(() => {
    themeChange(false)
    axios.get('http://localhost:8000/api/drinks')
      .then(res => {
        setDrinks(res.data);
        setLoaded(true);
      })
      .catch(err => {
        console.error(err);
      });
  }, [loaded]);

  const showRandomDrink = (() => {
    setDrinkLoaded(false)
    axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
      .then(response => {
        console.log(response.data.drinks[0])
        setRandomDrink(response.data.drinks[0])
        setDrinkLoaded(true)
      })
      .catch(err => {
        console.error(err);
      });
  });

  return (
    <div className="container mx-auto flex-col items-center bg-gray-100 text-gray-800 font-serif">
      <div className="flex flex-col items-center space-y-4 mt-10">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-lg shadow-lg" onClick={(event) => { showRandomDrink() }}>
          Generate Drink
        </button>
        {drinkLoaded ? (
          <div className="flex flex-col items-center space-y-4">
            <h1 className="text-4xl font-bold text-blue-500">{randomDrink.strDrink}</h1>
            <p className="text-lg font-bold">{randomDrink.strCategory}</p>
            <div className="flex justify-center">
              <img className="w-72 h-72 rounded-lg shadow-lg" src={randomDrink.strDrinkThumb} alt={randomDrink.strDrink} />
            </div>
            <div className="text-lg">
              <h2 className="text-xl font-bold text-blue-500">Ingredients:</h2>
              <ul className="list-disc ml-8">
                {Object.entries(randomDrink)
                  .filter(([key, value]) => key.startsWith('strIngredient') && value)
                  .map(([key, value]) => (
                    <li key={key}>{randomDrink['strMeasure' + key.slice(-1)]} {value}</li>
                  ))}
              </ul>
            </div>
            <div className="text-lg">
              <h2 className="text-xl font-bold text-blue-500">Instructions:</h2>
              <p>{randomDrink.strInstructions}</p>
            </div>
          </div>
        ) : (
          <div className="flex justify-center">
            <DrinkSVG className="animate-pulse w-24 h-24 mt-16" />
          </div>
        )}
      </div>
    </div>
  );
}

export default Main;
