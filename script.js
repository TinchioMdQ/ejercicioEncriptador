
function alternarModo() {
    var body = document.body;

    if (body.classList.contains('modo-diurno')) {
        body.classList.remove('modo-diurno');
        body.classList.add('modo-nocturno');
    } else {
        body.classList.remove('modo-nocturno');
        body.classList.add('modo-diurno');
    }
}

function breakText() {
    var input = document.getElementById("inputTexto");
    input.addEventListener("input", function() {
        this.style.height = "auto";
        this.style.height = (this.scrollHeight) + "px";
    });
}

window.onload = function() {
    breakText();
};

function encriptar() {
    var texto = document.getElementById("inputTexto").value.toLowerCase();
    var txtCifrado = texto.replace(/e/g, "enter");
    txtCifrado = txtCifrado.replace(/o/g, "ober");
    txtCifrado = txtCifrado.replace(/i/g, "imes");
    txtCifrado = txtCifrado.replace(/a/g, "ai");
    txtCifrado = txtCifrado.replace(/u/g, "ufat");

    document.getElementById("imgDer").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto2").value = txtCifrado;
    document.getElementById("copiar").style.display = "block";

    document.getElementById("inputTexto").value = "";
}

function desencriptar() {
    var texto = document.getElementById("inputTexto").value;
    var txtCifrado = texto.replace(/enter/g, "e");
    txtCifrado = txtCifrado.replace(/ober/g, "o");
    txtCifrado = txtCifrado.replace(/imes/g, "i");
    txtCifrado = txtCifrado.replace(/ai/g, "a");
    txtCifrado = txtCifrado.replace(/ufat/g, "u");

    document.getElementById("imgDer").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto2").value = txtCifrado;
    document.getElementById("copiar").style.display = "block";

    document.getElementById("inputTexto").value = "";
}

function copiar() {
    var contenido = document.querySelector("#texto2");
    contenido.select();
    document.execCommand("copy");
    alert("¡Se copió el texto!");
    document.getElementById("inputTexto").value = "";
    contenido.value = "";
}