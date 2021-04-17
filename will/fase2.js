function escolha(){
    
    var opcao = prompt("Faça sua escolha:\n1.\n2.");

    while (opcao != 1 && opcao != 2){
        alert("Essa opção não existe.");
        opcao = prompt("Faça sua escolha:\n1.\n2.");
    }

    if (opcao == 1){
        document.write(`
        <p> <style> p {display: flex;
            font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
            color: red;
            font-size: 40px;
            justify-content: center;
            margin-top: 20%;} </style> Escolha errada, você perdeu.</p>

        <a href="/projeto-modulo1/index.html">Recomeçar</a>`)
    }

    else if(opcao == 2){
        document.write(`<h1> <style> h1{text-align: center;
            font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
            margin: 150px;
            color: mediumpurple} </style>Você passou para a próxima fase.</h1>

        <a href="secreto.html">Continuar</a>`)
            
    }
}

escolha();