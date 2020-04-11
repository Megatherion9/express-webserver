// Importar Parciales
const hbs = require('hbs');

// Helper para Obtener el Año actual
hbs.registerHelper('getAnio', () => {
	return new Date().getFullYear()
});


// Helper para Convertir primer letra a Mayuscula y las demas a Minusculas
hbs.registerHelper('capitalizar', (texto) => {
	let palabras = texto.split(' ');
	palabras.forEach((palabra, idx) => {
		palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase()
	});

	return palabras.join(' ');
});