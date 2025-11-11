// server.js
const jsonServer = require("json-server");
const path = require("path");

// Cargar variables de entorno
require("dotenv").config();

const server = jsonServer.create();
const middlewares = jsonServer.defaults();

server.use(middlewares);

// Middleware CORS explícito
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE, OPTIONS"
  );
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

// Rutas y base de datos
const router = jsonServer.router(path.join(__dirname, "db.json"));
server.use(router);

// Puerto
const PORT = process.env.PORT || 5005;
server.listen(PORT, () => {
  console.log(`Server Active and listening on port: ${PORT}`);
});
