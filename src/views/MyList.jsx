import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DrinkList from '../components/DrinkList';

const MyList = (props) => {
          const [drinks, setDrinks] = useState([]);
          const [loaded, setLoaded] = useState(false);

          useEffect(() => {
                    axios.get('http://localhost:8000/api/drinks')
                              .then(res => {
                                        setDrinks(res.data);
                                        setLoaded(true);
                              })
                              .catch(err => console.error(err));
          }, [loaded]);

          const removeFromDom = drinkId => {
                    setDrinks(drinks.filter(drink => drink._id != drinkId));
          }

          return (
                    <div className="container mx-auto">
                              <Link to="/create" className="btn btn-primary">Add A Drink </Link>
                              {loaded && <DrinkList drinks={drinks} removeFromDom={removeFromDom} loaded={setLoaded} />}
                    </div>
          );
}
export default MyList;