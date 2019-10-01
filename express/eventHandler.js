const isgd = require("isgd");
const mcache = require("memory-cache");

exports.response = (err = false, msg = "ok", shortURL) => {
  const response = {
    url: shortURL,
    message: msg,
    error: err
  };
  return response;
};
exports.processing = (req, res) => {
  if (!req.query.url) {
    res.status(400);
    res.send(this.response(true, "Please provide URL"));
    return;
  }

  const cacheKey = `__transient__${req.query.url}`;
  const cacheTime = req.query.cache || 3600;
  const cachedBody = mcache.get(cacheKey);

  //  return cached data
  if (cachedBody && cacheTime !== "0") {
    res.status(304);
    res.send(this.response(true, cachedBody));
    return;
  }

  isgd.shorten(req.query.url, short => {
    mcache.put(cacheKey, short, cacheTime * 1000);
    if (short.startsWith("Error")) {
      res.status(400);
      res.json(this.response(true, short));
      return;
    } else {
      res.json(this.response(false, short));
    }
  });
};
