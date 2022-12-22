const express = require('express');
const router = express.Router();
const Container = require('../../../classes/container.messages');
const messages = new Container('messages');


// PORT route
router.post('/', async (req, res, next) => {
  try{
    await messages.saveProduct(req.body);
    res.redirect("/public");
  }
  catch (err) {
    next(err);
  }
});


// GET all or GET by ID
router.get('/',async (req, res, next) => {
  console.log('params in get products messages', req.params)
  try{
    const data = await messages.getAll();
    res.status(200).json({
      data
    });
  }
  catch (err) {
    next(err);
  }
});



module.exports = router;