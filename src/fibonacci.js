var fibonacci = function (n) {
    var rArray = [0];
    var n1 = n;
    var n2 = n + n1;
    var resultado;
    for (var i = 0; i < n * n2; i++) {
        resultado = n1 + n2;
        n1 = n2;
        n2 = resultado;
    }
    return rArray;
};
console.log(fibonacci);
module.exports = fibonacci;
