var trialDivision = function (number) {
    var i = 1;
    var counter = 0;
    while (i <= number) {
        if (number % i === 0) {
            counter = counter + 1;
        }
        return i = i + 1;
    }
    if (counter === 2) {
        console.log(number + ' Es primo');
    }
    else {
        console.log(number + ' No es primo');
    }
};
module.exports = trialDivision;
