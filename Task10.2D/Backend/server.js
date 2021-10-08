const express = require('express');
const bodyParser = require('body-parser');
const router = require('./router')

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({limit : '300mb'}));

app.all('*', function (req, res, next)
{
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Credentials", 'true');
	res.header("Access-Control-Allow-Methods", "*");
	res.header("Access-Control-Allow-Headers", "Content-Type,Access-Token");
	res.header("Access-Control-Request-Headers: Origin, X-Requested-With, content-Type, Accept, Authorization");
	res.header("Access-Control-Expose-Headers", "*");
	next();
});

router(app)
app.listen(3001, '0.0.0.0')