
const title = document.title;
console.log(title);
  
const dd = document.getElementsByClassName("lista")
console.log(dd);



function datos(idElemento) {
    const dl = document.getElementById(idElemento);
    
    if (!dl) {
        console.error(`Elemento no enconteado ID "${idElemento}" not found.`);
        return { valores: [], ids: [] };
    }
    const ddElements = dl.querySelectorAll('dd');
    return {
       
        valores: Array.from(ddElements).map(dd => dd.textContent.trim()),
        ids: Array.from(ddElements).map(dd => dd.id)
    };
  }


 function optimizarNombre(datos) {
    const [nombre1, nombre2, apellido1, apellido2] = datos;
    
    const nombres = [nombre1, nombre2].filter(n => n !== '').join(' ');

    const apellidos = [apellido1, apellido2].filter(a => a !== '').map(a => a.toUpperCase()).join(' ');
   
    return `${nombres} ${apellidos}`.trim().replace(/\s\s+/g, ' ');
 }

  
 function comparar(comparar, datos1, datos2, elementos1, elementos2) {
    
    const datos1Lower = datos1.filter(d => d !== '').map(d => d.toLowerCase());
    const datos2Lower = datos2.filter(d => d !== '').map(d => d.toLowerCase());
    
    let coincidencias = [];

    for (const dato of datos1Lower) {
       
        if (datos2Lower.includes(dato) && dato !== '') {
            coincidencias.push(dato);
        }
    }
    coincidencias = [...new Set(coincidencias)];

    if (coincidencias.length > 0) {
        console.log(`Hubo coincidencias en los ${comparar}.`);

        const color = window.prompt(`¡Hubo coincidencias en los ${comparar}! Por favor, ingrese un color para destacarlos: `);
       
        if (color) {
            
            elementos1.forEach((el, index) => {
                const valor = el.textContent.trim().toLowerCase();
                if (coincidencias.includes(valor)) {
                    el.style.color = color; 
                    el.style.fontWeight = 'bold';
                }
            });

            
            elementos2.forEach((el, index) => {
                const valor = el.textContent.trim().toLowerCase();
                if (coincidencias.includes(valor)) {
                    el.style.color = color; 
                    el.style.fontWeight = 'bold';
                }
            });
        }
    } else {
        console.log(`No hubo coincidencias en los ${tipoComparacion}.`);
    }
}


const data1 = datos('integrante-1');
const data2 = datos('integrante-2');


const nombreCompleto1 = optimizarNombre(data1.valores);
const nombreCompleto2 = optimizarNombre(data2.valores);

const resultado = `
-----
Integrante 1: "${nombreCompleto1}"
Integrante 2: "${nombreCompleto2}"
-----
`;
console.log(resultado); 


const nombres1 = data1.valores.slice(0, 2); 
const nombres2 = data2.valores.slice(0, 2);
const elementosNombres1 = data1.elementos.slice(0, 2); 
const elementosNombres2 = data2.elementos.slice(0, 2);


comparar('nombres', nombres1, nombres2, elementosNombres1, elementosNombres2);

const compararApellidos = confirm('¿Desea comparar los apellidos de los integrantes?');

if (compararApellidos) {
   
    const apellidos1 = data1.valores.slice(2); 
    const apellidos2 = data2.valores.slice(2);
    const elementosApellidos1 = data1.elementos.slice(2); 
    const elementosApellidos2 = data2.elementos.slice(2);

    
    comparar('apellidos', apellidos1, apellidos2, elementosApellidos1, elementosApellidos2);
}
