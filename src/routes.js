import { Router } from "express";

const routes = new Router();

routes.get("/", (req, res) => {
  return res.json({ menssage: "hello World" });
});

module.exports = routes;
