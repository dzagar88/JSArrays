let names = ['Alice','Bob','Marry','Joe','Hilary','Stevia','Dylan'];

let prepender = function(name){
return 'My name is: '+name;
};

let namesWithPrefix = names.map(prepender);

console.log(namesWithPrefix);