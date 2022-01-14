const Parser = require("rss-parser");
const express = require("express");

const app = express();
const port = process.env.PORT || 5001;

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get("/feed", async (req, res) => {
  const parser = new Parser();
  const feed = await parser.parseURL("https://www.reddit.com/.rss");

  res.send(feed);
});
