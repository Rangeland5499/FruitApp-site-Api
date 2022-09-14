# Et API

Et simpelt JSON-server API med meget enkelt bruger-beskyttelse.

Send en POST request til `http://localhost:3000/auth` med følgende body for at få et access token.

```
{
	username: "jens",
	password: "1234"
}
```

Brug dette access token i alle andre requests som et Bearer Token i en Authorization header.


## Installation
```
npm install
```

## Kør
```
npm start
```