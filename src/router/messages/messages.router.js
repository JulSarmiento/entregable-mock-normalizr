const express = require('express');
const router = express.Router();
const Container = require('../../../classes/container.messages');
const messages = new Container('messages');


// PORT route
router.post('/', async (req, res, next) => {
  try{
    await messages.saveProduct(req.body);
    // res.status(200).json({
    //   success: true, 
    //   data
    // })
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
    res.status(200).json({
      success: true,
      data: await messages.getAll()
    });
  }
  catch (err) {
    next(err);
  }
});



module.exports = router;