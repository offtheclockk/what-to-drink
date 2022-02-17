import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import IngredientForm from '../components/IngredientForm';

const SearchByIngredient = (props) => {
          const [drinkByIngredient, setDrinkByIngredient] = useState([]);
          const [loaded, setLoaded] = useState(false);
          const [errors, setErrors] = useState("");
          const [drinkLoaded, setDrinkLoaded] = useState(false);
          const history = useHistory();
          const { nameParam } = useParams();

          useEffect(() => {
                    axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${nameParam}`)
                              .then(response => {
                                        console.log(drinkByIngredient)
                                        console.log(response.data)
                                        setDrinkByIngredient(response.data.drinks[0])
                                        setDrinkLoaded(true)
                              })
                              .catch(err => console.error(err));
          }, []);

          const showDrinkByIngredient = (() => {
                    axios.get(`https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=${drinkByIngredient}`)
                              .then(response => {
                                        console.log(drinkByIngredient)
                                        console.log(response.data)
                                        setDrinkByIngredient(response.data.drinks)
                                        setDrinkLoaded(true)
                              })
                              .catch(err => (history.push("/error")));
          });

          return (
                    <>
                              <p>Separate multiple ingredients with a comma ","</p>
                              <IngredientForm onSubmitProp={showDrinkByIngredient} initialName="" setDrinkByIngredient={setDrinkByIngredient} loaded={setLoaded} errors={errors} setDrinkLoaded={setDrinkLoaded} />
                              <div className="container grid grid-flow-row grid-cols-1 grid-rows-1 md:grid-cols-3 lg:grid-cols-5 md:grid-rows-3 lg:grid-rows-5 gap-4 place-items-center mx-auto">
                                        {drinkLoaded ? (
                                                  drinkByIngredient.map((drink, i) =>
                                                            <div>
                                                                      <Link to={`/searchbyname/${drink.strDrink}`} className="text-4xl m-1">
                                                                                {drink.strDrink}
                                                                      </Link>
                                                                      <div>
                                                                                {drink.strCategory}
                                                                      </div>
                                                                      <div className="flex justify-center">
                                                                                <Link to={`/searchbyname/${drink.strDrink}`} className="text-4xl m-1">
                                                                                          <div>
                                                                                                    {drink.strDrinkThumb ? <img className="rounded-lg" src={drink.strDrinkThumb} /> : null}
                                                                                          </div>
                                                                                </Link>
                                                                      </div>
                                                                      <div>
                                                                                <div className="text-4xl m-1">
                                                                                          {drink.strMeasure1 ? "Ingredients:" : null}
                                                                                </div>
                                                                                <div>
                                                                                          {drink.strMeasure1} {drink.strIngredient1}
                                                                                </div>
                                                                                <div>
                                                                                          {drink.strMeasure2} {drink.strIngredient2}
                                                                                </div>
                                                                                <div>
                                                                                          {drink.strMeasure3} {drink.strIngredient3}
                                                                                </div>
                                                                                <div>
                                                                                          {drink.strMeasure4} {drink.strIngredient4}
                                                                                </div>
                                                                                <div>
                                                                                          {drink.strMeasure5} {drink.strIngredient5}
                                                                                </div>
                                                                                <div>
                                                                                          {drink.strMeasure6} {drink.strIngredient6}
                                                                                </div>
                                                                                <div>
                                                                                          {drink.strMeasure7} {drink.strIngredient7}
                                                                                </div>
                                                                                <div>
                                                                                          {drink.strMeasure8} {drink.strIngredient8}
                                                                                </div>
                                                                                <div>
                                                                                          {drink.strMeasure9} {drink.strIngredient9}
                                                                                </div>
                                                                                <div>
                                                                                          {drink.strMeasure10} {drink.strIngredient10}
                                                                                </div>
                                                                                <div>
                                                                                          {drink.strMeasure11} {drink.strIngredient11}
                                                                                </div>
                                                                                <div>
                                                                                          {drink.strMeasure12} {drink.strIngredient12}
                                                                                </div>
                                                                                <div>
                                                                                          {drink.strMeasure13} {drink.strIngredient13}
                                                                                </div>
                                                                                <div>
                                                                                          {drink.strMeasure14} {drink.strIngredient14}
                                                                                </div>
                                                                                <div>
                                                                                          {drink.strMeasure15} {drink.strIngredient15}
                                                                                </div>
                                                                      </div>
                                                                      <div>
                                                                                <div className="text-4xl m-1">
                                                                                          {drink.strInstructions ? "Instructions:" : null}
                                                                                </div>
                                                                                <div>
                                                                                          {drink.strInstructions}
                                                                                </div>
                                                                      </div>
                                                            </div>
                                                  )
                                        ) : (
                                                  <div>
                                                            <svg src="what-to-drink\public\undraw_beer_xg5f.svg">Loading...</svg>
                                                  </div>
                                        )}
                              </div>
                    </>
          );
}
export default SearchByIngredient;