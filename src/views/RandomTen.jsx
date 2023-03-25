import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as DrinkSVG } from '../components/undraw_beer_xg5f.svg';

const RandomTen = (props) => {
  const [drinks, setDrinks] = useState([]);
  const [randomTen, setRandomTen] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const removeFromDom = (drinkId) => {
    setDrinks(drinks.filter((drink) => drink._id !== drinkId));
  };

  useEffect(() => {
    axios
      .get('https://www.thecocktaildb.com/api/json/v2/9973533/randomselection.php')
      .then((res) => {
        setTimeout(function () {
          setDrinks(res.data);
          setLoaded(true);
          setRandomTen(res.data.drinks);
        }, 2000);
      })
      .catch((err) => console.error(err));
  }, []);

  const showRandomTen = () => {
    axios
      .get('https://www.thecocktaildb.com/api/json/v2/9973533/randomselection.php')
      .then((response) => {
        console.log(response.data.drinks);
        setRandomTen(response.data.drinks);
        setLoaded(true);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="container mx-auto mt-6">
      <h2 className="text-center text-3xl font-semibold mb-4">Ten Random Drinks</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {loaded ? (
          randomTen.map((drink, i) => (
            <div key={i} className="bg-white shadow-md rounded-lg overflow-hidden">
              <Link to={`/searchbyname/${drink.strDrink}`}>
                <img
                  className="object-cover w-full h-44"
                  src={drink.strDrinkThumb}
                  alt={drink.strDrink}
                />
              </Link>
              <div className="p-4">
                <Link
                  to={`/searchbyname/${drink.strDrink}`}
                  className="block text-lg font-semibold mb-2"
                >
                  {drink.strDrink}
                </Link>
                <p className="text-gray-700">{drink.strCategory}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="flex justify-center col-span-full">
            <DrinkSVG className="animate-bounce w-24 h-24 text-gray-600" />
          </div>
        )}
      </div>
    </div>
  );
};

export default RandomTen;
