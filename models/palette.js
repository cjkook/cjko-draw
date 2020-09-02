const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const paletteSchema = new Schema({
  palette: { type: String, required: true },
  user: { type: String, required: false },
});

const Palette = mongoose.model("Palette", paletteSchema);

module.exports = Palette;
