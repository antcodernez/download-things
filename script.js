const fileInput = document.querySelector(".url");
const dowloadBtn = document.querySelector(".button");

dowloadBtn.addEventListener("click", e => {
    e.preventDefault() // Previene el formulario de ser enviado

    //Manera de validar el campo de un input con JS
    if (fileInput.value == "")
        {
            alert("Debes rellenar el campo Cabrón ñ.ñ");        
            return false
        }
    fetchFile(fileInput.value);     
});

function fetchFile(url)
    {
        //Fetching el archivo y regresando la respuesta con blob
        fetch(url).then(res => res.blob())
        .then(file => {
                    let tempUrl = URL.createObjectURL(file);
                    let aTag = document.createElement("a");
                    aTag.href = tempUrl;
                    aTag.download = "filename";
                    document.body.appendChild(aTag);
                    aTag.click();
                    aTag.remove();
                });
    }