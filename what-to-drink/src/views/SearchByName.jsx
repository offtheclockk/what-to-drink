import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NameForm from '../components/NameForm';

const SearchByName = (props) => {
          const [drinkByName, setDrinkByName] = useState([]);
          const [loaded, setLoaded] = useState(false);
          const [errors, setErrors] = useState("");
          const [drinkLoaded, setDrinkLoaded] = useState(false);
          const { nameParam } = useParams();

          useEffect(() => {
                    axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${nameParam}`)
                              .then(response => {
                                        console.log(drinkByName)
                                        console.log(response.data)
                                        setDrinkByName(response.data.drinks[0])
                                        setDrinkLoaded(true)
                              })
                              .catch(err => console.error(err));
          }, []);

          const showDrinkByName = (() => {
                    axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkByName}`)
                              .then(response => {
                                        console.log(drinkByName)
                                        console.log(response.data)
                                        setDrinkByName(response.data.drinks[0])
                                        setDrinkLoaded(true)
                              })
          });

          return (
                    <div className="container mx-auto">
                              <NameForm onSubmitProp={showDrinkByName} initialName="" setDrinkByName={setDrinkByName} loaded={setLoaded} errors={errors} />
                              {drinkLoaded ? (
                                        <>
                                                  <div className="text-4xl m-1">
                                                            {drinkByName.strDrink}
                                                  </div>
                                                  <div>
                                                            {drinkByName.strCategory}
                                                  </div>
                                                  <div className="flex justify-center">
                                                            <div>
                                                                      {drinkByName.strDrinkThumb ? <img className="rounded-lg img" src={drinkByName.strDrinkThumb} /> : null}
                                                            </div>
                                                  </div>
                                                  <div>
                                                            <div className="text-4xl m-1">
                                                                      {drinkByName.strMeasure1 ? "Ingredients:" : null}
                                                            </div>
                                                            <div>
                                                                      {drinkByName.strMeasure1} {drinkByName.strIngredient1}
                                                            </div>
                                                            <div>
                                                                      {drinkByName.strMeasure2} {drinkByName.strIngredient2}
                                                            </div>
                                                            <div>
                                                                      {drinkByName.strMeasure3} {drinkByName.strIngredient3}
                                                            </div>
                                                            <div>
                                                                      {drinkByName.strMeasure4} {drinkByName.strIngredient4}
                                                            </div>
                                                            <div>
                                                                      {drinkByName.strMeasure5} {drinkByName.strIngredient5}
                                                            </div>
                                                            <div>
                                                                      {drinkByName.strMeasure6} {drinkByName.strIngredient6}
                                                            </div>
                                                            <div>
                                                                      {drinkByName.strMeasure7} {drinkByName.strIngredient7}
                                                            </div>
                                                            <div>
                                                                      {drinkByName.strMeasure8} {drinkByName.strIngredient8}
                                                            </div>
                                                            <div>
                                                                      {drinkByName.strMeasure9} {drinkByName.strIngredient9}
                                                            </div>
                                                            <div>
                                                                      {drinkByName.strMeasure10} {drinkByName.strIngredient10}
                                                            </div>
                                                            <div>
                                                                      {drinkByName.strMeasure11} {drinkByName.strIngredient11}
                                                            </div>
                                                            <div>
                                                                      {drinkByName.strMeasure12} {drinkByName.strIngredient12}
                                                            </div>
                                                            <div>
                                                                      {drinkByName.strMeasure13} {drinkByName.strIngredient13}
                                                            </div>
                                                            <div>
                                                                      {drinkByName.strMeasure14} {drinkByName.strIngredient14}
                                                            </div>
                                                            <div>
                                                                      {drinkByName.strMeasure15} {drinkByName.strIngredient15}
                                                            </div>
                                                  </div>
                                                  <div>
                                                            <div className="text-4xl m-1">
                                                                      {drinkByName.strInstructions ? "Instructions:" : null}
                                                            </div>
                                                            <div>
                                                                      {drinkByName.strInstructions}
                                                            </div>
                                                  </div>
                                        </>
                              ) : (
                                        <div>
                                                  <svg src="what-to-drink\public\undraw_beer_xg5f.svg">Loading...</svg>
                                        </div>
                              )}
                    </div>
          );
}
export default SearchByName;