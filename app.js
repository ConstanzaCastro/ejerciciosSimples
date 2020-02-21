/* Objetos */


let anabelle = {
    name: "anabel",
    job: "comunications",
    age: 31,
  }
  let mati = {
    name: "matias",
    job: "director",
    age: 30,
  }
  let carla = {
    name: "carlali",
    job: "administration",
    age: 32
  }
  let ale = {
    name: "ale",
    job: "training manager",
    age: 33
  }
  let ezequiel = {
    name: "eze",
    job: "bussiness developer manager",
    age: 29
  }
  let domi = {
    name: "domi",
    job: "coach",
    age: 29
  }
  let alpi = {
    name: "alpi",
    job: "coach",
    age: 55
  }
  let marcia = {
    name: "marcia",
    job: "coach",
    age: 10
  }
  let fanny = {
    name: "fanny",
    job: "coach",
    age: 33
  }
  let dani = {
    name: "dani",
    job: "culture director",
    age: 27
  }
  /* Array donde pondremos cada objeto */

  let peopleOfLaboratoria = ["anabelle", "mati", "carla", "ale", "ezequiel", "domi", "alpi", "marcia", "fanny", "dani"];
  //let peopleOfLaboratoria = [];


  /* push al array de personas */
  peopleOfLaboratoria.push(anabelle, mati, carla, ale, ezequiel, domi, alpi, marcia, fanny, dani);


  /* 1.- Recorrer e imprimir cada objeto usando forEach */
  peopleOfLaboratoria.forEach(object => console.log(object));


  /* 2.- Recorrer e imprimir cada nombre usando forEach */
  //name.peopleOfLaboratoria
  peopleOfLaboratoria.forEach(peopleOfLaboratoria => console.log(peopleOfLaboratoria.name));
  
  
  //let namePeopleOfLaboratoria = peopleOfLaboratoria.forEach(object => console.log(object.age*10));

  //return namePeopleOfLaboratoria


  /* 3.- Recorrer e imprimir cada edad miltiplicandola por 10 usando map */

  peopleOfLaboratoria.map(peopleOfLaboratoria => console.log(peopleOfLaboratoria.age));
  
  
  let agePeopleOfLaboratoria = peopleOfLaboratoria.map(object => console.log(object.age*10));




  /* 4.- Recorrer e imprimir cada nombre con MAYÚSCULAS (toda la palabra) usando map */

  peopleOfLaboratoria.map(object => console.log(object.toUpperCase()));


  /* 5.- Recorrer e imprimir sólo a los coaches usando filter */
  const coachesPeopleOfLaboratoria = peopleOfLaboratoria.filter(objects => (objects.job === 'coach'));
  console.log(coachesPeopleOfLaboratoria)

  /* 6.- Recorrer e imprimir sólo a qui enes NO son coaches usando filter */
  const noCoachesPeopleOfLaboratoria = peopleOfLaboratoria.filter(objects => (objects.job != 'coach'));
  console.log(noCoachesPeopleOfLaboratoria)