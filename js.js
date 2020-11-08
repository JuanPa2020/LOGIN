function iniciar() {
    var arrImages = new Array(3);
    arrImages[0] = document.getElementById("imagen1");
    arrImages[1] = document.getElementById("imagen2");
    arrImages[2] = document.getElementById("imagen3");
    var objOutput = document.getElementById("salida");
    var strHtml = "<ul>";
    for (var i = 0; i < arrImages.length; i++)
        strHtml += "<li>imagen" + (i + 1) +
        ": height=" + arrImages[i].height +
        ", width=" + arrImages[i].width +
        ", style.height=" + arrImages[i].style.height +
        ", style.width=" + arrImages[i].style.width +
        "<\/li>";
    strHtml += "<\/ul>";
    salida.innerHTML = strHtml;
}

let img = document.getElementById("imagen3");
img.style.height = "20px";