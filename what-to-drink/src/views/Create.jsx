import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DrinkForm from '../components/DrinkForm';
import { useHistory } from 'react-router-dom';

const Create = (props) => {
          const [drinks, setDrinks] = useState([]);
          const [loaded, setLoaded] = useState(false);
          const [errors, setErrors] = useState("");
          const history = useHistory();

          useEffect(() => {
                    axios.get('http://localhost:8000/api/drinks')
                              .then(res => {
                                        setDrinks(res.data);
                                        setLoaded(true);
                              })
                              .catch(err => console.error(err));
          }, [loaded]);

          const createDrink = drink => {
                    axios.post('http://localhost:8000/api/drink', drink)
                              .then(res => {
                                        setDrinks([...drinks, res.data]);
                                        history.push("/");
                              })
                              .catch(err => {
                                        setErrors(err.response.data.errors);
                              })
          }

          return (
                    <div className="container mx-auto">
                              {errors?.name && (
                                        <p style={{ color: "red" }}>{errors.name?.message}</p>
                              )}
                              {errors?.ingredients && (
                                        <p style={{ color: "red" }}>{errors.ingredients?.message}</p>
                              )}
                              {errors?.instructions && (
                                        <p style={{ color: "red" }}>{errors.instructions?.message}</p>
                              )}
                              {errors?.image && (
                                        <p style={{ color: "red" }}>{errors.image?.message}</p>
                              )}
                              <DrinkForm onSubmitProp={createDrink} initialName="" initialIngredients="" initialInstructions="" initialImage="" loaded={setLoaded} errors={errors} />
                    </div>
          );
}
export default Create;