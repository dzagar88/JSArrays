let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus";
let counts = {};

for(let i = 0; i < par.length; i++){
    const letter = par[i].toLowerCase();
    if(letter === " ") continue;
    else if(counts[letter] === undefined){
        counts[letter] = 1;
    } 
    else{
        counts[letter]++;
    }
}

console.log(counts);