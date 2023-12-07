const { Router } = require('express');

const FullCycleController = require('./app/controllers/FullcycleController.js');

const router = Router();
const middlewares = Router();

middlewares.get(
  '/',
  FullCycleController.store,
);
router.get(
  '/',
  FullCycleController.index,
);

module.exports = {
  router,
  middlewares,
};
