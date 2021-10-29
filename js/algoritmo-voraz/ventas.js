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

    --> Jessica Bilbao Restrepo <--
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

    //Se calcula la rentabilidad de cada articulo de acuerdo a la relación valor/peso guardando el resultado en value
    for (let i of articles) {
        articles[i.cod].value = i.value / i.weight;
    }

    //Se ordena el arreglo del articulo más, al menos rentable
    articles.sort((a, b) => b.value - a.value);

    let maxWeight = 24;
    let actualWeight = 0;
    let container = [];
    container.length = articles.length;
    container.fill(0);
    let totalValue = 0;

    //Se recorre el arreglo metiendo al contenedor los articulos hasta llenarlo
    for (let k of articles) {
        if (actualWeight < maxWeight) {
            if ((actualWeight + k.weight) < maxWeight) {
                container[k.cod] = 1;
                actualWeight += k.weight;
                totalValue += (k.value * k.weight);
            } else {
                //Se fracciona el peso del articulo para terminar de llenar el contenedor
                container[k.cod] = (maxWeight - actualWeight) / k.weight;
                actualWeight += ((maxWeight - actualWeight) / k.weight) * k.weight;
                totalValue += (k.value * container[k.cod] * k.weight);
            }
        }
    }
    console.log("Valor del contenedor: " + totalValue);
    return container;
};

/**
 * 
 * @param {objects} articles 
 */
const showOptimalContainer = (articles) => {

    let result = fillContainer(articles);
    for (let i = 0; i < result.length; i++) {
        console.log("Del articulo " + i + " debería llevar " + Math.round(result[i] * 100) + "%");
    }
};

showOptimalContainer(articles);