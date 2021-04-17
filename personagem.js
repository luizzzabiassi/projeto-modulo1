function escolha(personagem){
    
    personagem = prompt("Escolha o seu personagem:\n1. Eris\n2. Harry\n3. Will");

    while (personagem != 1 && personagem != 2 && personagem != 3) {
        alert("O personagem que você escolheu não existe.");
        personagem = prompt("Escolha o seu personagem:\n1. Eris\n2. Harry\n3. Will");
    }

    if(personagem == 1){
        document.write(`
            <h1> <style> h1{text-align: center;
                font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
                margin: 150px;
                color: lightskyblue} </style>Você escolheu a Eris.</h1>

            <a href="/projeto-modulo1/eris/ajuda.html">Começar</a>`)
}

    else if(personagem == 2){
        document.write(`
            <h1> <style> h1{text-align: center;
                font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
                margin: 150px;
                color: lightgreen} </style>Você escolheu o Harry.</h1>

            <a href="/projeto-modulo1/harry/procura.html">Começar</a>`)
    }

    else if(personagem == 3){
        document.write(`
            <h1> <style> h1{text-align: center;
                font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
                margin: 150px;
                color: mediumpurple;} </style>Você escolheu o Will.</h1>

            <a href="/projeto-modulo1/will/vinganca.html">Começar</a>`)
    }
}

escolha();