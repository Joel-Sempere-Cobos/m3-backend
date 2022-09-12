"use strict";
console.log("empiezo...");

function escribeTras2Segundos(texto, callback) {
    setTimeout(function () {
        console.log(texto);
        callback();
    }, 2000);
}

let num = 0;
function serie(n, fn, cb) {
    if (n == 0) {
        cb();
        return;
    }
    n--;
    num++;
    fn("texto" + num, function () {
        serie(n, fn, cb);
    });
}

serie(6, escribeTras2Segundos, function () {
    console.log("Terminé");
});
