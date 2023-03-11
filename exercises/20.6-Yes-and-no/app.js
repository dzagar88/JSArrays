let theBools = [0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1];

let mappedBools = theBools.map(function(bool) {
  if(bool === 1) {
    return "wiki";
  } else {
    return "woko";
  }
});

console.log(mappedBools);