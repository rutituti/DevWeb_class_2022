const filesystem = require ('fs');
const http = require('http');

//const html = filesystem.readFileSync("../html/index.html"); 

const utiles_escolares = ["lapiz", "goma", "sacapuntas", "libreta", "hojas"];
const precios = new Map();
precios.set("lapiz",16);
precios.set("goma",12);
precios.set("sacapuntas",12);
precios.set("libreta",28);
precios.set("hojas",1);

const server = http.createServer( (request, response) => {    
    console.log(request.url);
    if (request.url == "/utiles") {
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html>');
        response.write("<h1>Utiles escolares</h1>");
        response.write('<a href="/comprar">COMPRAR</a>');

        response.write("<ul>");
        for (let i of utiles_escolares) {
            response.write("<li>" + i +"</li>");
        }
        response.write("</ul>");
        response.end();
    } else if (request.url == "/utiles/new" && request.method == "GET") { 
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html>');
        response.write("<h1>Registrar nuevo articulo escolar</h1>");
        response.write('<form action="/utiles/new" method="POST">');
        response.write('<label for="nombre">Articulo: </label>');
        response.write('<input type="text" id="nombre" name="nombre">');
        response.write("<br>");
        response.write("<br>");
        response.write('<input type="submit" id="enviar" name="enviar" value="Registrar">');
        response.write("</form>");
        response.end();
    } 
    else if (request.url == "/comprar") {
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html>');
        response.write("<h1>COMPRAR</h1>");

        response.write("<table>");
        response.write("<thead>");
        response.write("<tr> <th>Cantidad</th> <th>Articulo</th> <th>Precio Unitario</th> <th>Importe</th>  </tr>")
        response.write("</thead>");
        for (let i of utiles_escolares) {
            response.write("<tr>"+'<td> <input id="id_num_lapiz" size="100" value="0" type="number" max="50" min="1"> </td>'+ "<td>"+ i +"</td>"+'<td>$<span id="id_precio_lapiz">'+precios.get(i)+'</span></td> <td> <span id="id_imp1"></span></td>'+"</tr>");
        }
        response.write("<tfoot>");
        response.write('<tr><td></td><td></td>  <td>TOTAL</td> <td><span id="id_total"></span></td></tr>');
        response.write('<tr><td></td><td><button id="id_buton_calc">Calcular</button></td>  <td>TOTAL + IVA</td> <td><span id="id_total_IVA"></span></td></tr>');
        response.write("</tfoot>");
        response.write("</table>");
     

    } else if (request.url == "/utiles/new" && request.method == "POST") {
        const datos = [];
        request.on('data', (dato) => {
            console.log(dato);
            datos.push(dato);
        });
        return request.on('end', () => {
            const datos_completos = Buffer.concat(datos).toString();
            console.log(datos_completos);
            const nuevo_articulo = datos_completos.split('&')[0].split('=')[1];
            utiles_escolares.push(nuevo_articulo);
            precios.set(nuevo_articulo,0);
            response.setHeader('Content-Type', 'text/html');
            response.write('<!DOCTYPE html>');
            response.write("<h1>El nuevo articulo fue registrado.</h1>");
            response.end();
        });
    } else if (request.url == "/") {
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html>');
        response.write("<h1>Bienvenido a mi tienda!</h1>");
        response.end();
    } else {
        response.statusCode = 404;
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html>');
        response.write("<h1>Error 404: El recurso solicitado no existe</h1>");
        response.end();
    }
    
});

server.listen(3000); //Numero de puerto