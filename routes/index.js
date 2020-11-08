const path = require("path");
const router = require("express").Router();
apiRoutes = require("./api");

router.use("/api", apiRoutes);

router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"))
});

module.exports = router;