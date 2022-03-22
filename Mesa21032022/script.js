let nome = document.getElementById("nome");
let sobrenome = document.getElementById("sobrenome");

let button = document.getElementById("button");

let trim = document.getElementById("trim");
let upper = document.getElementById("upper");
let lower = document.getElementById("lower");
let concat = document.getElementById("concat");
let replace = document.getElementById("replace");

button.addEventListener("click", function(event) { 
    event.preventDefault()
    trim.innerText = nome.value.trim()
    upper.innerText = sobrenome.value.toUpperCase()
    lower.innerText = sobrenome.value.toLowerCase()
    
    let s = '';
    concat.innerText = s.concat(nome.value," ",sobrenome.value);

    let substituir = '';
    substituir = substituir.concat(nome.value," ",sobrenome.value);

    let chars = {'a':'@','e':'3'};
    substituir = substituir.replace(/[ae]/g, m => chars[m]);
    replace.innerText = substituir;
});