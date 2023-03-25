import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom'

const SearchByPopularity = (props) => {
  const [drinks, setDrinks] = useState([]);
  const [drinkByPopularity, setDrinkByPopularity] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const { nameParam } = useParams();
  const [errors, setErrors] = useState("");

  useEffect(() => {
    axios.get('https://www.thecocktaildb.com/api/json/v2/9973533/popular.php')
      .then(res => {
        setDrinks(res.data);
        setLoaded(true);
        setDrinkByPopularity(res.data.drinks)
      })
      .catch(err => console.error(err));
  }, [loaded]);

  return (
    <div className="container mx-auto my-10">
      <h1 className="text-3xl font-bold mb-5">Search by Popularity</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {drinkByPopularity.map((drink, i) =>
          <div className="bg-white rounded-lg shadow-md" key={i}>
            <Link to={`/searchbyname/${drink.strDrink}`}>
              <img className="rounded-t-lg object-cover w-full h-48" src={drink.strDrinkThumb} alt={drink.strDrink} />
            </Link>
            <div className="p-4">
              <Link to={`/searchbyname/${drink.strDrink}`} className="text-2xl font-medium">{drink.strDrink}</Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchByPopularity;
