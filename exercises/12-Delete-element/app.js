let people = ['juan','ana','michelle','daniella','stefany','lucy','barak', 'emilio'];

//your code below
function deletePerson(personToDelete) {
    let newPeople = people.filter((person) => person !== personToDelete);
    return newPeople;
  }
console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));
