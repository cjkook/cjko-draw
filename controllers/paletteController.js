const db = require("../models");
// console.log(db)

// Defining methods for the paletteController
module.exports = {
  findAll: function(req, res) {
    // console.log("find all")
    // console.log(req.body)
    db.Palette.find({})
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    // console.log(req.body)
    // console.log("find id")
    db.Palette.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    // console.log(req.body)
    // console.log("create")
    db.Palette.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => {
        console.log(err)
        res.status(422).json(err)
      });
  },
  update: function(req, res) {
    // console.log(req)
    // console.log("find one and update")
    db.Palette.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    // console.log(req)
    // console.log("remove by id")
    db.Palette.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
