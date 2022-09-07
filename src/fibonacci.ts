const fibonacci = (n) => {
    let rArray: number[] = [0];

    let n1: number = n;
    let n2: number = n + n1;
    let resultado: number;
    
    for(let i = 0; i < n*n2; i++) {
        resultado = n1 + n2; n1 = n2; n2 = resultado;
    }
    return rArray;
  }

  console.log(fibonacci);
  
  module.exports = fibonacci;