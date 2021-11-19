import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

export default props => {
          const { initialName, setDrinkByIngredient, setDrinkLoaded, onSubmitProp } = props;
          const [name, setName] = useState(initialName);
          const [errors, setErrors] = useState("");
          const { nameParam } = useParams();
          const [param, setParam] = useState(nameParam);

          useEffect(() => {
                    setDrinkByIngredient(nameParam);
          }, []);

          const onSubmitHandler = e => {
                    e.preventDefault();
                    onSubmitProp({ name })
                    setDrinkByIngredient(param)
                    setName("")
          }

          const handleName = (e) => {
                    setDrinkLoaded(false)
                    setDrinkByIngredient(e.target.value.replace(/\s/g, ""))

                    if (e.target.value.length < 2 && e.target.value.length !== 0) {
                              setErrors({
                                        name: {
                                                  message: "The ingredient has to be minimum 2 characters!(Front-end)"
                                        }
                              })
                    }
                    else {
                              setErrors({});
                    }
          }


          return (
                    <div className="container mx-auto">
                              <form onSubmit={onSubmitHandler}>
                                        <p>
                                                  <div class="form-control">
                                                            <div class="flex space-x-2">
                                                                      <input type="text" placeholder="Type in an ingredient here..." className="w-full input input-primary input-bordered" onChange={handleName}></input>
                                                                      <button class="btn btn-primary" type="submit">go</button>
                                                            </div>
                                                  </div>
                                        </p>
                                        {errors?.name && (
                                                  <p style={{ color: "red" }}>{errors.name?.message}</p>
                                        )}
                              </form>
                    </div>
          )
}