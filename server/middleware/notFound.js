const notFound = (req, res) => res.status(500).send("Route Doesn't Found");
module.exports = notFound;
