const mongoose = require('mongoose');
const Tech = mongoose.model('Technique');

const techniquesRead = (req, res) => {
  Tech
    .find() // find all techniques in database
    .exec((err, techniques) => {
      if (!techniques) {
        return res
          .status(404)
          .json({ "message": "No techniques found" });
      } else if (err) {
        return res
          .status(404)
          .json(err);
      } else {
        return res
          .status(200)
          .json(techniques);
      }
    });
}

const techniquesReadOne = (req, res) => {
  Tech
    .findById(req.params.techniqueid)
    .exec((err, technique) => {
      if (!technique) {
        return res
          .status(404)
          .json({ "message": "Technique not found" });
      } else if (err) {
        return res
          .status(404)
          .json(err);
      } else {
        return res
          .status(200)
          .json(technique);
      }
    });
}

module.exports = {
  techniquesRead,
  techniquesReadOne
};