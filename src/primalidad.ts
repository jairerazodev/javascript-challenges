const trialDivision = (number) => {
    let i: number = 1;
    let counter: number = 0;
    while (i <= number) {
        if (number % i === 0) {
            counter = counter + 1;
        }
        return i = i + 1;
    }
    if (counter === 2 ) {
        console.log(number + ' Es primo');
    }
    else {
        console.log(number + ' No es primo');
    }
  }
  
  module.exports = trialDivision;