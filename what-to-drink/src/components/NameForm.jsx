import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

export default props => {
          const { initialName, setDrinkByName, onSubmitProp } = props;
          const [name, setName] = useState(initialName);
          const [errors, setErrors] = useState("");
          const { nameParam } = useParams();
          const [param, setParam] = useState(nameParam);

          useEffect(() => {
                    setDrinkByName(nameParam);
          }, []);

          const onSubmitHandler = e => {
                    e.preventDefault();
                    onSubmitProp({ name })
                    setDrinkByName(param)
                    setName("")
          }

          const handleName = (e) => {
                    setParam(e.target.value);
                    setDrinkByName(param)

                    if (e.target.value.length < 2 && e.target.value.length !== 0) {
                              setErrors({
                                        name: {
                                                  message: "The name has to be minimum 2 characters!(Front-end)"
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
                                                                      <input type="text" placeholder="Type in a cocktail name here..." className="w-full input input-primary input-bordered" onChange={handleName} value={param}></input>
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