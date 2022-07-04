const mongoose = require('mongoose');

const techniqueSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  book: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  category: String,
  rank: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },
  ring: {
    type: String,
    required: true,
    enum: ['Air', 'Terre', 'Feu', 'Eau', 'Vide']
  },
  activation: {
    type: String,
    required: true
  },
  effect: {
    type: String,
    required: true
  },
  opportunity: {
    type: String,
    required: true
  }
});

mongoose.model('Technique', techniqueSchema);