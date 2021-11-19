const mongoose = require('mongoose');
const DrinkSchema = new mongoose.Schema({
          name: {
                    type: String,
                    required: [true, "Name is a required parameter."],
                    minlength: [2, "Name has to be at least 2 characters long."]
          },
          ingredients: {
                    type: String,
                    required: [true, "Ingredients is a required parameter."],
          },
          instructions: {
                    type: String,
                    required: [true, "Instructions is a required parameter."],
                    minlength: [10, "Instructions has to be at least 10 characters long."]
          },
          image: {
                    type: String,
                    required: [true, "Image is a required parameter."],
          }
}, { timestamps: true });
module.exports.Drink = mongoose.model('Pirate', DrinkSchema);