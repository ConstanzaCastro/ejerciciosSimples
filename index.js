/*Lakewood
 Bridgewood  
 Ridgewood    
 Las tarifas son así:
 Lakewood - con una calificación de 3 estrellas - 
 tiene tarifas entre semana de 110 $ para clientes regulares y 80 $ para clientes frecuentes. 
 Las tarifas de fin de semana son 90 $ para clientes habituales y 80 $ para clientes frecuentes
 
 Bridgewood - con una calificación de 4 estrellas - 
 tiene tasas entre semana de 160 $ ​​para clientes regulares y 110 $ para clientes frecuentes. 
 Las tarifas de fin de semana son 60 $ para clientes habituales y 50 $ para clientes frecuentes
 
 Ridgewood - con una calificación de 5 estrellas - 
 tiene tasas entre semana de 220 $ para clientes habituales y 100 $ para clientes frecuentes. 
 Las tarifas de fin de semana son de 150 $ para clientes habituales y de 40 $ para clientes frecuentes*/


 // 1.- definicoon tipo de cliente (frecuente o regular)
 // 2.- elección del tipo de hotel, según clasificación (lakewood, bridgewood, ridgewood)
 // 3.- eleccion de los dias de estadía en el hotel (entresemana, fds)
// 4.- en caso de existeri empate, entregar info con el costo mayor*

//seelct para definir tipo de cliente

<select name="tipo de cliente" classname="selectCliente" id="selectCliente" >
<option id="frecuentClient">Cliente Frecuente</option>
<option id="regularClient">Cliente Regular</option>
</select>

//eleccion dias de la seman
 
<input id="date" type="date" value=" " min="2018-01-01" max="2022-12-31"></input>

// eleccion tipo de dias 

/*<select name="tipo de hotel" classname="selectHotel" id="selectHotel" >
<option id="lakewood">Lakewood</option>
<option id="bridgwood">Bridgewood</option>
<option id="ridgwood">Ridgewood</option>
</select>*/

// funcion para asignar hotel segun id del tipo de cliente y value con los rangos de fechas escogidos por el cliente

//condicional 
let days = 