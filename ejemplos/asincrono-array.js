"use strict";
console.log("empiezo...");

function escribeTras2Segundos(texto, callback) {
    setTimeout(function () {
        console.log(texto);
        callback();
    }, 2000);
}

function serie(arr, fn, cb) {
    if (arr.length == 0) {
        cb();
        return;
    }
    fn("texto" + arr.shift(), function () {
        serie(arr, fn, cb);
    });
}

serie([1, 2, 3, 4, 5, 6], escribeTras2Segundos, function () {
    console.log("Terminé");
});
