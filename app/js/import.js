const form = document.querySelector(".import-form");

form.addEventListener("submit", function(e){
    e.preventDefault();

    const inputs = form.querySelectorAll("input, select");

    const data = {
        maVai: inputs[0].value,
        tenVai: inputs[1].value,
        loai: inputs[2].value,
        mau: inputs[3].value,
        soMet: inputs[4].value,
        gia: inputs[5].value
    };

    console.log(data);
    form.reset();
});