const router = require("express").Router();
const controller = require("../../controllers/paletteController");

// Matches with "/api/posts"
router
  .route("/")
  .get(controller.findAll)
  .post(controller.create);

// Matches with "/api/posts/:id"
router
  .route("/:id")
  .post(controller.create)
  .get(controller.findById)
  .get(controller.findAll)
  .put(controller.update)
  .delete(controller.remove);

module.exports = router;
