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
                    <div className="container grid grid-flow-col grid-cols-5 grid-rows-4 gap-4 place-items-center mx-auto">
                              {drinkByPopularity.map((drink, i) =>
                                        <div key={i}>
                                                  <div className="mb-2">
                                                            <Link to={`/searchbyname/${drink.strDrink}`} className="text-3xl m-1">{drink.strDrink}</Link>
                                                  </div>
                                                  <div>
                                                            <div className="flex justify-center mx-auto">
                                                                      <img className="rounded-lg" src={drink.strDrinkThumb} />
                                                            </div>
                                                  </div>
                                        </div>
                              )}
                    </div>
          );
}
export default SearchByPopularity;