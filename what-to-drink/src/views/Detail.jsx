import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, Link, useHistory } from "react-router-dom";

const Detail = (props) => {
          const [drink, setDrink] = useState({})
          const { id } = useParams();
          const history = useHistory();

          useEffect(() => {
                    axios.get('http://localhost:8000/api/drinks/' + id)
                              .then(res => setDrink(res.data))
                              .catch(err => console.error(err));
          }, []);

          const { removeFromDom } = props;
          const deleteDrink = (drinkId) => {
                    axios.delete('http://localhost:8000/api/drinks/' + drinkId)
                              .then(res => {
                                        removeFromDom(drinkId)
                              })
                              .catch(err => console.error(err));
                    history.push('/');
          }

          return (
                    <div className="container mx-auto">
                              <div>
                                        <p>{drink.name}</p>
                              </div>
                              <div className="flex justify-center">
                                        <div>
                                                  <img className="rounded-lg" src={drink.image} />
                                        </div>
                              </div>
                              <div>
                                        <p>Ingredients: {drink.ingredients}</p>
                              </div>
                              <div>
                                        <p>Instructions: {drink.instructions}</p>
                              </div>
                              <Link to={"/"} className="btn btn-primary mr-2">
                                        Home
                              </Link>
                              <button className="btn btn-warning" onClick={(e) => { deleteDrink(drink._id) }}>
                                        Delete
                              </button>
                    </div>
          )
}

export default Detail;

