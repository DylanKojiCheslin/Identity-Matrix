function identityMatrix(num) {
  'use strict';
  var lineString = "";
  for (var R = 0; R <= num; R++) {
    for (var C = 0; C <= num; C++) {
      if ( R == C ) {
        lineString = lineString + "1";
      }else{
        if ( C < num ) {
          lineString = lineString + "0";

        }else{
          if (  C == num ) {
            console.log(lineString);
            lineString = "";
          }
        }
      }
    }
  }
}
