const express = require("express");
const articleRoutes = require('./Article');
const adminRoutes = require('./Admin');

const apiRoutes = express.Router();

apiRoutes.get(
    "/", (req, res) => res.json({ api: "is-working" })
);
apiRoutes.use('/articles', articleRoutes);
apiRoutes.use('/admin', adminRoutes)

module.exports = apiRoutes;