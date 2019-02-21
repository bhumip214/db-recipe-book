const express = require("express");
const helmet = require("helmet");
const knex = require("knex");
const knexConfig = require("./knexfile");

const db = knex(knexConfig.development);
const server = express();

server.use(helmet());
server.use(express.json());

server.get("/", async (req, res, next) => {
  res.send(`<h2>Lambda Recipe Book API</h2>`);
});

const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`\n Server running on Port: ${port}\n`));
