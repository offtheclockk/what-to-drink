import React, { useState } from 'react'

export default props => {
          const { initialName, initialIngredients, initialInstructions, initialImage, onSubmitProp } = props;
          const [name, setName] = useState(initialName);
          const [ingredients, setIngredients] = useState(initialIngredients);
          const [instructions, setInstructions] = useState(initialInstructions);
          const [image, setImage] = useState(initialImage);
          const [errors, setErrors] = useState("");

          const onSubmitHandler = e => {
                    e.preventDefault();
                    onSubmitProp({ name, ingredients, instructions, image, errors })
                    setName("")
                    setIngredients("")
                    setInstructions("")
                    setImage("");
          }

          const handleName = (e) => {
                    setName(e.target.value);

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

          const handleIngredients = (e) => {
                    setIngredients(e.target.value);

                    if (e.target.value.length < 2 && e.target.value.length !== 0) {
                              setErrors({
                                        image: {
                                                  message: "Ingredients has to be minimum 2 characters!(Front-end)"
                                        }
                              })
                    }
                    else {
                              setErrors({});
                    }
          }

          const handleInstructions = (e) => {
                    setInstructions(e.target.value);

                    if (e.target.value.length < 10 && e.target.value.length !== 0) {
                              setErrors({
                                        instructions: {
                                                  message: "The instructions have to be minimum 10 characters!(Front-end)"
                                        }
                              })
                    }
                    else {
                              setErrors({});
                    }
          }

          const handleImage = (e) => {
                    setImage(e.target.value);

                    if (e.target.value.length < 2 && e.target.value.length !== 0) {
                              setErrors({
                                        image: {
                                                  message: "The image has to be minimum 2 characters!(Front-end)"
                                        }
                              })
                    }
                    else {
                              setErrors({});
                    }
          }


          return (
                    <div className="container">
                              <form onSubmit={onSubmitHandler}>
                                        <h1 className="text-4xl m-1">Add a Drink below:</h1>
                                        <p>
                                                  <label className="form-label">Name</label><br />
                                                  <input className="w-full input input-primary input-bordered" type="text" onChange={handleName} />
                                        </p>
                                        {errors?.name && (
                                                  <p style={{ color: "red" }}>{errors.name?.message}</p>
                                        )}
                                        <p>
                                                  <label className="form-label">Ingredients</label><br />
                                                  <input className="w-full input input-primary input-bordered" type="text" onChange={handleIngredients} />
                                        </p>
                                        {errors?.ingredients && (
                                                  <p style={{ color: "red" }}>{errors.ingredients?.message}</p>
                                        )}
                                        <p>
                                                  <label className="form-label">Instructions</label><br />
                                                  <input className="w-full input input-primary input-bordered" type="text" onChange={handleInstructions} />
                                        </p>
                                        {errors?.instructions && (
                                                  <p style={{ color: "red" }}>{errors.instructions?.message}</p>
                                        )}
                                        <p>
                                                  <label className="form-label">Image</label><br />
                                                  <input className="w-full input input-primary input-bordered" type="text" onChange={handleImage} />
                                        </p>
                                        {errors?.image && (
                                                  <p style={{ color: "red" }}>{errors.image?.message}</p>
                                        )}
                                        <input className="btn btn-primary mt-2" type="submit" />
                              </form>
                    </div>
          )
}