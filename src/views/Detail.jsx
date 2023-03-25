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
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{drink.name}</h1>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 mb-4 md:mb-0 md:pr-4">
          <img className="rounded-lg" src={drink.image} alt={drink.name} />
        </div>
        <div className="md:w-1/2">
          <p className="text-lg mb-4"><strong>Ingredients:</strong> {drink.ingredients}</p>
          <p className="text-lg mb-4"><strong>Instructions:</strong> {drink.instructions}</p>
          <div className="flex justify-end">
            <Link to={"/"} className="btn btn-primary mr-2">
              Home
            </Link>
            <button className="btn btn-warning" onClick={(e) => { deleteDrink(drink._id) }}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail;
