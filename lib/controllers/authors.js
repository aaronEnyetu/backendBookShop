const { Router } = require('express');
const Author = require('../models/Author');
module.exports = Router()


  .get('/', async (req, res, next) => {
    try {
      const authorsData = await Author.getAll();
      res.json(authorsData);
    }
    catch (error) {
      next (error);
    }
  });
