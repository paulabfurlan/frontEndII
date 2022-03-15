//alert('Carregou!');

let btnSub = document.getElementById('btnSub');
let btnRes = document.getElementById('btnRes');
let txtIn = document.getElementById('txtIn');
let txt = document.getElementById('txt');
let evento = document.getElementById('evento');
let count = 0;

btnSub.addEventListener('click',function(event){
    console.log("Apertou o botao");
    event.preventDefault();
});

//window.onload = function () { alert('Carregou') };

txt.addEventListener('mouseover', function(event){
    txt.style.color = 'red';
});

txt.addEventListener('mouseout', function(event){
    txt.style.color = 'black';
});

txtIn.addEventListener('keyup', function(event){
    count++;
    evento.innerHTML = "<p>" + txtIn.value + "</p><p>" + count + "</p>";
});