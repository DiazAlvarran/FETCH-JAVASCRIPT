const express = require('express');
const app = express();

const path = require('path');

// hacer pública la carpeta 'public'
app.use(express.static(__dirname + '/public'));

// mostrar el 'index.html' en la ruta '/'
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname+'/index.html'));
});

app.listen(3001, (err) => {
	if(err){
		return err;
	} else {
		console.log(`Server on port 3001`);
	}
});