
const title = document.title;
console.log(title);

function datosIntegrante(idElemento) {
   
    const dl = document.getElementById(idElemento);
    const ddElements = dl.querySelectorAll('dd');
    return Array.from(ddElements).map(dd => dd.textContent.trim());
}

function formatearNombre(datos) {
    const [nombre1, nombre2, apellido1, apellido2] = datos;
    const nombres = [nombre1, nombre2].filter(n => n !== '').join(' ');

    const apellidos = [apellido1, apellido2].filter(a => a !== '').map(a => a.toUpperCase()).join(' ');

    return `${nombres} ${apellidos}`;
}

const datos1 = datosIntegrante('integrante-1');
const datos2 = datosIntegrante('integrante-2');
console.log(``);

const nombreCompleto1 = formatearNombre(datos1); 
const nombreCompleto2 = formatearNombre(datos2); 

const resultado = `
-----
Integrante 1: "${nombreCompleto1}"
Integrante 2: "${nombreCompleto2}"
-----
`;

console.log(resultado);