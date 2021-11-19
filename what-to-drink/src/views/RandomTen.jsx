import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as DrinkSVG } from "../components/undraw_beer_xg5f.svg"

const RandomTen = (props) => {
          const [drinks, setDrinks] = useState([]);
          const [randomTen, setRandomTen] = useState([]);
          const [loaded, setLoaded] = useState(false);

          const removeFromDom = drinkId => {
                    setDrinks(drinks.filter(drink => drink._id != drinkId));
          }

          useEffect(() => {
                    axios.get('https://www.thecocktaildb.com/api/json/v2/9973533/randomselection.php')
                              .then(res => {
                                        setTimeout(function () {
                                                  setDrinks(res.data);
                                                  setLoaded(true);
                                                  setRandomTen(res.data.drinks)
                                        }, 2000)
                              })
                              .catch(err => console.error(err));
          }, []);

          const showRandomTen = (() => {
                    axios.get('https://www.thecocktaildb.com/api/json/v2/9973533/randomselection.php')
                              .then(response => {
                                        console.log(response.data.drinks)
                                        setRandomTen(response.data.drinks)
                                        setLoaded(true)
                              })
                              .catch(err => console.error(err));
          });

          return (
                    <div className="container grid grid-flow-col grid-cols-2 grid-rows-5 gap-4 place-items-center mx-auto">
                              {loaded ? (
                                        randomTen.map((drink, i) =>
                                                  <div key={i}>
                                                            <div>
                                                                      <Link to={`/searchbyname/${drink.strDrink}`} className="text-2xl m-1">{drink.strDrink}</Link>
                                                            </div>
                                                            <div className="flex justify-center mx-auto">
                                                                      <div>
                                                                                <img className="rounded-lg" src={drink.strDrinkThumb} />
                                                                      </div>
                                                            </div>
                                                  </div>
                                        )
                              ) : (
                                        <div className="flex justify-center col-span-5">
                                                  <DrinkSVG className="animate-bounce mt-60 sm:w-30 sm:h-30" />
                                        </div>
                              )}
                    </div>
          );
}
export default RandomTen;