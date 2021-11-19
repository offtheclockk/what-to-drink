import React from 'react'
import axios from 'axios';

export default props => {

          const { drinkId, successCallback } = props;

          const deleteDrink = e => {
                    axios.delete('http://localhost:8000/api/drinks/' + drinkId)
                              .then(res => {
                                        successCallback();
                              })
          }

          return (
                    <button onClick={deleteDrink} className="btn btn-error">
                              Delete
                    </button>
          )
}

