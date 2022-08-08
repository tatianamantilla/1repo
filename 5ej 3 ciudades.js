
var km_Mede= 415.8
var km_Cali= 460.9
var km_Barran= 1.000
var km_Carta= 1.038
var km_Sole= 995.8

 /*Para convertir de Km a decamentros se tiene que multiplicar
 por 1000 m y dividirlos en 1 km, ademas multiplicarlos por 1 dam
 (debido a que 1 dam corresponde a 1000m)y dividirlos en 10 metros 
 (debido a que 1km corresponde a 10m*/ 

 /* Para convertir Km en metros se multiplica los  km por 1.000
 y divirlos entre 1km*/

 /*Para convertir Km a Centimetros se debe de multiplicar los km 
 por 1.000 y divirlos entre 1km, luego multiplicarlos por 100 cm 
 que corresponden a 1.000 m, ademas dividirlos por 1 m que coresponde 
 a 1 km */

var km=1
var mdam=10
var m= 1000
var cm= 100
var dam= 1
var mcm=1

console.log ('De Bogota a Medellin hay una distancia de')
console.log ('415.8 KM')
var bm_dam = km_Mede*(m/km)*(dam/mdam)
console.log (+bm_dam,'Decametros')
var bm_m =km_Mede*(m/km)
console.log (+bm_m,'Metros')
var bm_cm=km_Mede*(m/km)*(cm/mcm)
console.log(+bm_cm,'Centimetros')
console.log('')
console.log('')


console.log ('De Bogota a Cali hay una distancia de')
console.log ('460,9 KM')
var bc_dam = km_Cali*(m/km)*(dam/mdam)
console.log (+bc_dam,'Decametros')
var bc_m =km_Cali*(m/km)
console.log (+bc_m,'Metros')
var bc_cm=km_Cali*(m/km)*(cm/mcm)
console.log(+bc_cm,'Centimetros')
console.log('')
console.log('')


console.log ('De Bogota a Barranquilla hay una distancia de')
console.log ('1.000 KM')
var bb_dam = km_Barran*(m/km)*(dam/mdam)
console.log (+bb_dam,'Decametros')
var bb_m =km_Barran*(m/km)
console.log (+bb_m,'Metros')
var bb_cm=km_Barran*(m/km)*(cm/mcm)
console.log(+bb_cm,'Centimetros')
console.log('')
console.log('')


console.log ('De Bogota a Cartagena hay una distancia de')
console.log ('1.038 KM')
var bcar_dam = km_Carta*(m/km)*(dam/mdam)
console.log (+bcar_dam,'Decametros')
var bcar_m =km_Carta*(m/km)
console.log (+bcar_m,'Metros')
var bcar_cm=km_Carta*(m/km)*(cm/mcm)
console.log(+bcar_cm,'Centimetros')
console.log('')
console.log('')


console.log ('De Bogota a Soledad hay una distancia de')
console.log ('995.8 KM')
var bs_dam = km_Sole*(m/km)*(dam/mdam)
console.log (+bs_dam,'Decametros')
var bs_m = km_Sole*(m/km)
console.log (+bs_m,'Metros')
var bs_cm= km_Sole*(m/km)*(cm/mcm)
console.log(+bs_cm,'Centimetros')


