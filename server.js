const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

// hacer pública la carpeta 'public'
app.use(express.static(__dirname + '/public'));

// mostrar el 'index.html' en la ruta '/'
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname+'/index.html'));
});

app.post('/post', (req, res) => {
	var usuario = req.body.usuario;
	var pass = req.body.pass;

	if( usuario === '' || pass === ''){
		return res.json('error');
	} else {
		return res.json(`Correcto: <br>Usuario: ${ usuario }<br>Pass: ${ pass }`)
	}
});

app.listen(3001, (err) => {
	if(err){
		return err;
	} else {
		console.log(`Server on port 3001`);
	}
});