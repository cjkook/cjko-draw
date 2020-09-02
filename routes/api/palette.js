const router = require("express").Router();
const controller = require("../../controllers/paletteController");

// Matches with "/api/palettes"
router
  .route("/")
  .get(controller.findAll)
  .post(controller.create);

// Matches with "/api/palettes/:id"
router
  .route("/:id")
  .post(controller.create)
  .get(controller.findById)
  .get(controller.findAll)
  .put(controller.update)
  .delete(controller.remove);

module.exports = router;
 