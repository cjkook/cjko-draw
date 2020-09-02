const router = require("express").Router();
const paletteRoutes = require("./palette");

// Post routes
router.use("/palettes", paletteRoutes);

module.exports = router;
