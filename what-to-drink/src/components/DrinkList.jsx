import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import DeleteButton from './DeleteButton';

const DrinkList = (props) => {
          const [drinks, setDrinks] = useState([]);
          const { removeFromDom } = props;

          useEffect(() => {
                    axios.get(`http://localhost:8000/api/drinks`)
                              .then(res => setDrinks(res.data));
          }, [props.drinks])

          return (
                    <div>
                              {drinks.map((drink, i) => {
                                        return (
                                                  <p key={i}>
                                                            <Link to={"/drinks/" + drink._id}>
                                                                      <p>{drink.name}</p>
                                                            </Link>
                                                            <div className="flex justify-center">
                                                                      <img className="rounded-lg" src={drink.image} />
                                                            </div>
                                                            <p>Ingredients: {drink.ingredients}</p>
                                                            <p>Instructions: {drink.instructions}</p>
                                                            <Link to={"/drinks/" + drink._id} className="btn btn-primary m-1">
                                                                      View Drink
                                                            </Link>
                                                            <DeleteButton drinkId={drink._id} successCallback={() => removeFromDom(drink._id)} />
                                                  </p>
                                        )
                              })}
                    </div>
          );
}

export default DrinkList;