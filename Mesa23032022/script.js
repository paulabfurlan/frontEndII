let nome = document.getElementById('nome');
let pass = document.getElementById('pass');
let tel = document.getElementById('tel');
let btn = document.querySelector('button');

let maxFour = 0;
let indCheck = [0, 0, 0, 0];
let erros = [true, true];

nome.addEventListener("keyup", function(event){
    let qtdErros = 5;

    if(nome.value.split(" ").length >= 2){
        qtdErros--;
    }

    let listaPal = nome.value.split(" ");
    let flag = 0;
    listaPal.forEach(element => {
        if(element.length > 1){
            flag++;
        }
    });

    if(flag == listaPal.length){
        qtdErros--;
    }

    if(nome.value.length <= 150){
        qtdErros--;
    }

    if(nome.value.length > 0){
        qtdErros--;
    }

    const num = /[0123456789]/g;
    let teste = num.test(nome.value);
    if(teste == false){
        qtdErros--;
    }

    if(qtdErros == 0){
        nome.classList.remove("error");
        erros[0] = false;
    }
    else if(!nome.classList.contains){
        nome.classList.add("error");
        erros[0] = true;
    }

    if(!erros[0] && !erros[1]){
        btn.disabled = false;
    }
    else{
        btn.disabled = true;
    }
});


let hobbies = document.getElementsByName("hobbies");
let erroCombH5 = document.getElementById("erroComb");
let countEvent = 0;
hobbies.forEach(element => {
    //console.log(element);
    element.addEventListener("click", event => {
        if(maxFour == 1){
            let flag = 0;
            for(let i = 0; i < 4; i++){
                if(indCheck[i] == countEvent){
                    flag = 1;
                    break;
                }
            }
            if(flag == 0)
                element.checked = false;
        }

        let countCheck = 0;
        hobbies.forEach(elementIn => {
            if(elementIn.checked){
                countCheck++;
            }
        });

        if(countCheck >= 4){
            maxFour = 1;
            let count = 0;
            let countIn = 0;
            hobbies.forEach(elementIn => {
                if(elementIn.checked){
                    indCheck[countIn] = count;
                    countIn++;
                }
                count++;
            });
        }
        else{
            maxFour = 0;
            for(let i = 0; i < 4; i++)
                indCheck[i] = 0;
        }


        let checks = [];
        hobbies.forEach(elementIn => {
            checks.push(elementIn.checked);
        });

        let erroComb = 0;
        if(element.checked && (element.id == "hobbiesVideoGame") && (checks[5])){
            element.checked = false;
            erroComb = 1;
        }
        else if(element.checked && (element.id == "hobbiesCozinha") && (checks[4])){
            element.checked = false;
            erroComb = 1;
        }

        if(element.checked && (element.id == "hobbiesLeitura") && (checks[9])){
            element.checked = false;
            erroComb = 2;
        }
        else if(element.checked && (element.id == "hobbiesGuitarra") && (checks[12])){
            element.checked = false;
            erroComb = 2;
        }

        if(element.checked && (element.id == "hobbiesNetflix") && (checks[11])){
            element.checked = false;
            erroComb = 3;
        }
        else if(element.checked && (element.id == "hobbiesCostura") && (checks[0])){
            element.checked = false;
            erroComb = 3;
        }

        if(erroComb == 0){
            erroCombH5.innerText = "";
        }
        else if(erroComb == 1){
            erroCombH5.innerText = "A combinação Video Game e Cozinha não é permitida";
        }
        else if(erroComb == 2){
            erroCombH5.innerText = "A combinação Leitura e Guitarra não é permitida";
        }
        else if(erroComb == 3){
            erroCombH5.innerText = "A combinação Netflix e Costura não é permitida";
        }

        if(!erros[0] && !erros[1]){
            btn.disabled = false;
        }
        else{
            btn.disabled = true;
        }
    });
    countEvent++;
});


let paises = document.getElementsByName("nacionalidade");
let erroRadioH5 = document.getElementById("erroRadio");
let countPais = 0;

let checks = [];
paises.forEach(element => {
    checks.push(element.checked);
});

let flag = 0;
for(let i = 0; i < checks.length; i++){
    if(checks[i]){
        flag = 1;
        break;
    }
}

if(flag == 0){
    erroRadioH5.innerText = "Esse campo é obrigatório";
    erros[1] = true;
}
else{
    erros[1] = false;
}

paises.forEach(element => {
    //console.log(element);
    element.addEventListener("click", event => {
        let checks = [];
        paises.forEach(elementIn => {
            checks.push(elementIn.checked);
        });

        for(let i = 0; i < checks.length; i++){
            if(checks[i]){
                flag = 1;
                break;
            }
        }

        if(flag == 1){
            erroRadioH5.innerText = "";
            erros[1] = true;
        }
        else{
            erros[1] = false;
        }

        if(element.checked && (element.id == "nacionalidadeBrasileira")){
            erroRadioH5.innerText = "Desculpe, ainda não estamos recrutando bruxos no Brasil, mas chegaremos em breve";
            erros[1] = true;
        }
        else{
            erroRadioH5.innerText = "";
            erros[1] = false;
        }

        if(!erros[0] && !erros[1]){
            btn.disabled = false;
        }
        else{
            btn.disabled = true;
        }
    });
});

