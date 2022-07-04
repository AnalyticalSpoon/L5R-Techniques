const express = require('express');
const router = express.Router();

// import controllers
const ctrlTechniques = require('../controllers/techniques');

// techniques
router
  .route('/techniques')
  .get(ctrlTechniques.techniquesRead);

router
  .route('/techniques/:techniqueid')
  .get(ctrlTechniques.techniquesReadOne);

module.exports = router;