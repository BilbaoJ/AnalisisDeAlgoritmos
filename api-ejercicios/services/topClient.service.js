/**
 * 
 * @param {*} sales Arreglo obtenido de la consulta de base de datos
 * @param {*} cont Controlador para que el método tenga un final
 * @returns cliente con más ventas
 */
const topClient = (sales, cont) => 
{
    let higherId = 0;
    let higherSum = 0;
    let array = [];
    array.length = 90000;
    array.fill(0);
    let id_cliente = 0;
    let i = 0;
    let res = 0;
    res = sort(sales, cont, higherId, higherSum, array, id_cliente, i);
    return res;
    
};


/**
 * 
 * @param {*} sales Arreglo obtenido de la consulta de base de datos
 * @param {*} cont Controlador para que el método tenga un final
 * @param {*} higherId Id del cliente con más ventas
 * @param {*} higherSum Suma del número de compras del cliente con más compras
 * @param {*} array Arreglo auxiliar para guardar las sumas
 * @param {*} id_cliente 
 * @param {*} i 
 * @returns higherId
 */
const sort = (sales, cont, higherId, higherSum, array, id_cliente, i) => {
    
    id_cliente = sales[i].id_cliente;
    array[id_cliente] += 1;
  
    if (higherSum < array[id_cliente]) {

        higherId = sales[i].id_cliente;
        
        higherSum = array[id_cliente];
    }
    
    if(cont == sales.length)
    {
        
        return higherId;
    }

    return sort(sales, ++cont, higherId, higherSum, array, id_cliente, ++i);
};
module.exports = topClient;