var userSurname = prompt('inserire nome utente')
var arraySurname = ["luca", "dario", "andrea", "simone"]

userSurname = userSurname[0.].toUpperCase() +  userSurname.slice(1);
arraySurname.push(userSurname);
console.log(arraySurname);
arraySurname.sort();
console.log(arraySurname);
var position = arraySurname.indexOf(userSurname) + 1;
console.log(position);