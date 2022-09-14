const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(jsonServer.bodyParser)

server.post('/auth', (req, res) => {
	console.log(req.body)
	if (req.body.username === "jens" && req.body.password === "1234") {
		res.status(201)
		res.jsonp({token: "sfdcnhlisgnchg"})
	} else {
		res.status(400)
		res.end()
	}
})

server.use((req, res, next) => {
	if (req.headers.authorization !== "Bearer sfdcnhlisgnchg") {
		res.status(401)
		res.end()
		return
	}
	next()
})
server.use((req, res, next) => {
  if (req.method === 'POST') {
    req.body.createdAt = Date.now()
  }
  next()
})

server.use(router)
server.listen(3001, () => {
  console.log('JSON Server is running')
})