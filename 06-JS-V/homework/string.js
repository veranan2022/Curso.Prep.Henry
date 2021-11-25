   
  String.prototype.reverse = function () {
    var stringInvertida = '';
    for(var i = this.length - 1; i >= 0; i--) {
      
      stringInvertida = stringInvertida + this[i];
      
    }
    return stringInvertida;
  }

  var miString = "hola como estas?"
  var invertida = miString.reverse()
  console.log (invertida)