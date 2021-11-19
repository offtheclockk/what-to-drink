const { Drink } = require('../models/drink.model');
module.exports.index = (request, response) => {
          response.json({
                    message: "Hello World"
          });
}

module.exports.createDrink = (request, response) => {
          const { name, ingredients, instructions, image } = request.body;
          Drink.create({
                    name,
                    ingredients,
                    instructions,
                    image
          })
                    .then(drink => response.json(drink))
                    .catch(err => response.status(400).json(err));
}

module.exports.getAllDrinks = (request, response) => {
          Drink.find().collation({ locale: 'en', strength: 2 }).sort({ name: 1 })
                    .then(drinks => response.json(drinks))
                    .catch(err => response.json(err))
}

module.exports.getDrink = (request, response) => {
          Drink.findOne({ _id: request.params.id })
                    .then(drink => response.json(drink))
                    .catch(err => response.json(err))
}

module.exports.updateDrink = (request, response) => {
          Drink.findOneAndUpdate({ _id: request.params.id }, request.body, { new: true })
                    .then(updatedDrink => response.json(updatedDrink))
                    .catch(err => response.json(err))
}

module.exports.deleteDrink = (request, response) => {
          Drink.deleteOne({ _id: request.params.id })
                    .then(deleteConfirmation => response.json(deleteConfirmation))
                    .catch(err => response.json(err))
}



