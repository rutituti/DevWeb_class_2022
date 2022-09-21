const express = require('express');

const router = express.Router();

const utiles = require('../models/utiles.model');

/* SINTAXIS
router.get('/ruta', (request, response, next) => {
    response.send('Respuesta de la ruta "/modulo/ruta"'); 
});
*/

let precios = new Map();

precios.set("lapiz",16);
precios.set("goma",12);
precios.set("sacapuntas",12);
precios.set("libreta",28);
precios.set("hojas",1);

router.get('/', (request, response, next) => {
    let html = '<!DOCTYPE html>';
    html += "<h1>COMPRAR</h1>";
    html += '<a href="/utiles">Lista de utiles</a>'
    html += '<table>';
    html += '<thead>';
    html += '<tr> <th>Cantidad</th> <th>Articulo</th> <th>Precio Unitario</th> <th>Importe</th>  </tr>';
    html += "</thead>";
    for (let i of utiles.escolares) {
        html +=("<tr>"+'<td> <input id="id_art'+i+'" size="100" value="0" type="number" max="50" min="1"> </td>'+ "<td>"+ i +"</td>"+'<td>$<span id="id_precio_lapiz">'+precios.get(i)+'</span></td> <td> <span id="id_imp1"></span></td>'+"</tr>");
    }

    html += '<tfoot>';
    html += '<tr><td></td><td></td>  <td>TOTAL</td> <td><span id="id_total"></span></td></tr>';
    html += '<tr><td></td><td><button id="id_buton_calc">Calcular</button></td>  <td>TOTAL + IVA</td> <td><span id="id_total_IVA"></span></td></tr>';
    html += '<tfoot>';
    html += '</table>';
    response.send(html); 
    
});

module.exports = router;
