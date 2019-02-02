var formulario = document.getElementById('formulario');
var respuesta = document.getElementById('respuesta');

formulario.addEventListener('submit', function(e){
	e.preventDefault();

	var datos = new FormData(formulario);

	console.log(datos.get('usuario'));
	console.log(datos.get('pass'));

	fetch('http://localhost:3001/post',{
		method: 'POST',
		headers: {
	      'Accept': 'application/json',
	      'Content-Type': 'application/json'
	    },
		body: JSON.stringify(
				{
					usuario: datos.get('usuario'), 
					pass: datos.get('pass')
				}	
			)
	})
	.then( res => res.json())
	.then( data => {
		if( data === 'error'){
			respuesta.innerHTML = `<div class="alert alert-primary" role="alert">
		        LLena todos los campos
		      </div>`
		} else {
			respuesta.innerHTML = `<div class="alert alert-primary" role="alert">
		        ${ data }
		      </div>`
		}
	})
});