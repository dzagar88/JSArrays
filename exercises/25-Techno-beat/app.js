function lyricsGenerator(arr) {
    let output = "";
    let count = 0;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 0) {
        output += "Boom ";
      } else if (arr[i] === 1) {
        output += "Drop the base ";
        count++;
        if (count === 3) {
          output += "!!!Break the base!!! ";
          count = 0;
        }
      }
    }
  
    return output.trim();
  }
  
  console.log(lyricsGenerator([0,0,1,1,0,0,0])); // Boom Boom Drop the base Drop the base Boom Boom Boom
  console.log(lyricsGenerator([0,0,1,1,1,0,0,0])); // Boom Boom Drop the base Drop the base Drop the base !!!Break the base!!! Boom Boom Boom
  console.log(lyricsGenerator([0,0,0])); // Boom Boom Boom
  console.log(lyricsGenerator([1,0,1])); // Drop the base Boom Drop the base
  console.log(lyricsGenerator([1,1,1])); // Drop the base Drop the base Drop the base !!!Break the base!!!