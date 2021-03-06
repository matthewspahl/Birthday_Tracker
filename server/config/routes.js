// require userHandler, listHandler
let userHandler = require('../users/userHandler.js');



// export function
module.exports = function(app, express){
  app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
  
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
  
    // Pass to next layer of middleware
    next();
  });
  app.post('/api/signup', userHandler.signup);
  app.get('/api/signin', userHandler.signin);
  // app.put('/api/addItem', userHandler.addItem);
  // app.put('/api/removeItem', userHandler.removeItem);
  // app.get('/api/getItems', userHandler.getItems);
  // app.get('/api/getRecipes', userHandler.getRecipes);
  // app.put('/api/updateItem', userHandler.updateItem);
  // app.put('/api/addRecipe', userHandler.addRecipe);
  // app.get('/api/getSavedRecipes', userHandler.getSavedRecipes);
  // app.put('/api/removeRecipe', userHandler.removeRecipe);
  app.put('/api/addBirthday', userHandler.addBirthday);
  app.put('/api/removeBirthday', userHandler.removeBirthday);
  app.get('/api/getBirthdays', userHandler.getBirthdays);
  app.put('/api/updateBirthday', userHandler.updateBirthday);
  // Add headers

};