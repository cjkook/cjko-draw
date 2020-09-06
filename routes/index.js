const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res, next) {
  if (/\/.+\..+$/i.test(req.originalUrl)) return next();
  if (process.env.NODE_ENV === 'production' && /get/i.test(req.method) && req.accepts('html')) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  }
});

module.exports = router;
