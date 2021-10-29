/**
 * PROBLEMA

    La empresa Ventas&Ventas posee un contenedor que se encuentra en el puerto de Buenaventura, 
    esta empresa exporta diferentes artículos para Europa. Ellos lo contratan a usted para poder 
    optimizar los artículos que se van ha enviar y poder ser más rentables teniendo en cuenta que:

    1.El contenedor tiene un peso máximo de 24 toneladas.
    2. La información que se tiene de los artículos son el código, el peso y el valor.  
    NOTA: los artículos se pueden fraccionar por ejemplo de un bulto de café se puede enviar el 
    80% del bulto. 
    3. La empresa desea maximizar el valor del contenedor. 
 */

const articles = [{
        cod: 0,
        weight: 8,
        value: 10,
    },
    {
        cod: 1,
        weight: 10,
        value: 40,
    },
    {
        cod: 2,
        weight: 5,
        value: 30,
    },
    {
        cod: 3,
        weight: 4,
        value: 20,
    },
    {
        cod: 4,
        weight: 6,
        value: 15,
    },
    {
        cod: 5,
        weight: 5,
        value: 12,
    }
];

/**
 * 
 * @param {objects} articles 
 * @returns optimal array
 */
const fillContainer = (articles) => {

    let aux = articles;

    //Se calcula la rentabilidad de cada articulo de acuerdo a la relación valor/peso guardando el resultado en value
    for (let i of articles) {
        aux[i.cod].value = i.value / i.weight;
    }

    //Se ordena el arreglo auxiliar del articulo más, al menos rentable
    aux.sort((a, b) => b.value - a.value);

    //Se modica el arreglo auxiliar con el respectivo valor inicial
    /**
     * for (let j of aux) {
        aux[j.cod].value = articles[j.cod].value;
    }
     */



    let maxWeight = 24;
    let actualWeight = 0;
    let solution = [];
    solution.length = articles.length;
    solution.fill(0);

    //Se recorre el arreglo auxiliar metiendo al contenedor los articulos hasta llenarlo
    for (let k of aux) {
        if (actualWeight < maxWeight) {
            if ((actualWeight + k.weight) < maxWeight) {
                solution[k.cod] = 1;
                actualWeight += k.weight;
            } else {
                //Se fracciona el peso del articulo para terminar de llenar el contenedor
                solution[k.cod] = (maxWeight - actualWeight) / k.weight;
                actualWeight += ((maxWeight - actualWeight) / k.weight) * k.weight;
            }
        }
    }
    return solution;
};

/**
 * 
 * @param {pbjects} articles 
 */
const showOptimalContainer = (articles) => {

    let result = fillContainer(articles);
    for (let i = 0; i < result.length; i++) {
        console.log("Del articulo " + i + " puede llevar " + Math.round(result[i] * 100) + "%");
    }
};

showOptimalContainer(articles);