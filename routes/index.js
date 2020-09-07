const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res, next) {
  console.log(req.originalUrl, req.accepts('html'));
  if (process.env.NODE_ENV === 'production' && /get/i.test(req.method) && req.accepts('html')) {
    try {
      return res.sendFile(path.join(__dirname, '../../client/build/index.html'));
    } catch (err) {
      console.log('404 failed to serve index.html -', err);
    }
  }
  if (req.accepts('json')) {
    return res.json({
      status: 404,
      statusText: 'Not Found',
    });
  }
  res.type('txt').send('Not found');
});

module.exports = router;
