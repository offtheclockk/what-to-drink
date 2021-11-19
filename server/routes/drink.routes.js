const DrinkController = require('../controllers/drink.controller');
module.exports = function (app) {
          app.get('/api', DrinkController.index);
          app.post('/api/drink', DrinkController.createDrink);
          app.get('/api/drinks', DrinkController.getAllDrinks);
          app.get('/api/drinks/:id', DrinkController.getDrink);
          app.put('/api/drinks/:id', DrinkController.updateDrink);
          app.delete('/api/drinks/:id', DrinkController.deleteDrink);
}