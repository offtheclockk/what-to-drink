import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { themeChange } from 'theme-change';
import { ReactComponent as DrinkSVG } from "../components/undraw_coding_re_iv62.svg"

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
                              .catch(err =>
                                        console.error(err));
          }, [loaded]);

          const showRandomDrink = (() => {
                    setDrinkLoaded(false)
                    axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
                              .then(response => {
                                        console.log(response.data.drinks[0])
                                        setRandomDrink(response.data.drinks[0])
                                        setDrinkLoaded(true)
                              })
          });

          return (
                    <div className="container mx-auto flex-col items-stretch bg-neutral text-neutral-content font-serif">
                              <button className="btn btn-primary btn-liquid m-1 justify-center h-24 w-100" onClick={(event) => { showRandomDrink() }}>Generate Drink</button>
                              {drinkLoaded ? (
                                        <>
                                                  <div className="text-4xl m-1">
                                                            {randomDrink.strDrink}
                                                  </div>
                                                  <div>
                                                            {randomDrink.strCategory}
                                                  </div>
                                                  <div>
                                                            <div className="flex justify-center">
                                                                      <img className="rounded-lg img" src={randomDrink.strDrinkThumb} />
                                                            </div>
                                                  </div>
                                                  <div>
                                                            <div className="text-4xl m-1">
                                                                      Ingredients:
                                                            </div>
                                                            <div>
                                                                      {randomDrink.strMeasure1} {randomDrink.strIngredient1}
                                                            </div>
                                                            <div>
                                                                      {randomDrink.strMeasure2}  {randomDrink.strIngredient2}
                                                            </div>
                                                            <div>
                                                                      {randomDrink.strMeasure3} {randomDrink.strIngredient3}
                                                            </div>
                                                            <div>
                                                                      {randomDrink.strMeasure4} {randomDrink.strIngredient4}
                                                            </div>
                                                            <div>
                                                                      {randomDrink.strMeasure5} {randomDrink.strIngredient5}
                                                            </div>
                                                            <div>
                                                                      {randomDrink.strMeasure6} {randomDrink.strIngredient6}
                                                            </div>
                                                            <div>
                                                                      {randomDrink.strMeasure7} {randomDrink.strIngredient7}
                                                            </div>
                                                            <div>
                                                                      {randomDrink.strMeasure8} {randomDrink.strIngredient8}
                                                            </div>
                                                            <div>
                                                                      {randomDrink.strMeasure9} {randomDrink.strIngredient9}
                                                            </div>
                                                            <div>
                                                                      {randomDrink.strMeasure10} {randomDrink.strIngredient10}
                                                            </div>
                                                            <div>
                                                                      {randomDrink.strMeasure11} {randomDrink.strIngredient11}
                                                            </div>
                                                            <div>
                                                                      {randomDrink.strMeasure12} {randomDrink.strIngredient12}
                                                            </div>
                                                            <div>
                                                                      {randomDrink.strMeasure13} {randomDrink.strIngredient13}
                                                            </div>
                                                            <div>
                                                                      {randomDrink.strMeasure14} {randomDrink.strIngredient14}
                                                            </div>
                                                            <div>
                                                                      {randomDrink.strMeasure15} {randomDrink.strIngredient15}
                                                            </div>
                                                  </div>
                                                  <div>
                                                            <div className="text-4xl m-1">
                                                                      Instructions:
                                                            </div>
                                                            <div>
                                                                      {randomDrink.strInstructions}
                                                            </div>
                                                  </div>
                                        </>
                              ) : (
                                        <div className="flex justify-center col-span-5">
                                                  <DrinkSVG className="animate-pulse mt-60" />
                                        </div>
                              )}
                    </div>
          );
}
export default Main;