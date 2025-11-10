try {
  // loads the variables in the .env for us to use here
  process.loadEnvFile()
} catch (error) {
  console.log("error")
}

// NO ES6 Syntax :(

// import => require
// export default => module.exports

const jsonServer = require("json-server")

// creating the server
const server = jsonServer.create()

// creates all the default configurations of the server
const middlewares = jsonServer.defaults()

// applying all the default configurations to the server
server.use(middlewares)

// create all the routes (ALL URLS AND METHODS) and the DB in json format
const router = jsonServer.router("db.json")

// apply all the routes and db to the server
server.use(router)

// we assign a PORT for the server to comunicate with clients
const PORT = process.env.PORT || 5005

// will make the server actively lister for requests from clients
server.listen(PORT, () => {
  console.log(`Server Active and listening on port: ${PORT}`)
})
