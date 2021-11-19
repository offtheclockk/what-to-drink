import React from 'react';
import { Link } from "react-router-dom";
import { themeChange } from 'theme-change';
import { useEffect } from 'react';


const Navbar = () => {
          useEffect(() => {
                    themeChange(false)
          }, []);

          return (
                    <div class="container navbar mb-2 shadow-lg bg-primary text-neutral-content mx-auto">
                              <div class="flex-none px-2 mx-2">
                                        <span class="text-lg font-bold text-neutral-content">
                                                  WhatToDrink
                                        </span>
                              </div>
                              <div class="flex-1 px-2 mx-2">
                                        <div class="items-stretch lg:flex md:flex sm:flex">
                                                  <Link to="/" className="m-1 btn">
                                                            Home
                                                  </Link>
                                                  <Link to="/randomten" className="m-1 btn">
                                                            RandomTen
                                                  </Link>
                                                  <div class="dropdown">
                                                            <div tabindex="0" className="m-1 btn">Search By</div>
                                                            <ul tabindex="0" className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52 text-accent">
                                                                      <li>
                                                                                <Link to="/searchbyname">Name</Link>
                                                                      </li>
                                                                      <li>
                                                                                <Link to="/searchbyingredient">Ingredient</Link>
                                                                      </li>
                                                                      <li>
                                                                                <Link to="/searchbypopularity">Popularity</Link>
                                                                      </li>
                                                            </ul>
                                                  </div>
                                                  <Link to="/mylist" className="m-1 btn">
                                                            MyList
                                                  </Link>
                                                  <select data-choose-theme className="select select-bordered bg-neutral text-neutral-content m-1 btn">
                                                            <option disabled="disabled" selected="selected">Choose your theme</option>
                                                            <option value="">Default</option>
                                                            <option value="dark">Dark</option>
                                                            <option value="bumblebee">Bumblebee</option>
                                                            <option value="emerald">Emerald</option>
                                                            <option value="corporate">Corporate</option>
                                                            <option value="synthwave">Synthwave</option>
                                                            <option value="retro">Retro</option>
                                                            <option value="cyberpunk">Cyberpunk</option>
                                                            <option value="valentine">Valentine</option>
                                                            <option value="halloween">Halloween</option>
                                                            <option value="garden">Garden</option>
                                                            <option value="forest">Forest</option>
                                                            <option value="aqua">Aqua</option>
                                                            <option value="lofi">Lofi</option>
                                                            <option value="pastel">Pastel</option>
                                                            <option value="fantasy">Fantasy</option>
                                                            <option value="wireframe">Wireframe</option>
                                                            <option value="black">Black</option>
                                                            <option value="dracula">Dracula</option>
                                                            <option value="cmyk">CMYK</option>
                                                  </select>
                                        </div>
                              </div>
                    </div>
          );
}
export default Navbar;