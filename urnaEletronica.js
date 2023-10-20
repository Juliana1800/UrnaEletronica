function urnaEletronica() {

    let
        opcao;
        contadorTotal = 0,
        candidato1 = 0,
        candidato2 = 0,
        candidato3 = 0,
        branco = 0,
        nulo = 0;
        encerrar= "",
        pin=0;
        nomeC="";
    
        
        do{
            
            pin=parseInt(prompt("Senha mesário: "));  
            nomeCandidato1= prompt("Digite o nome do candidato 1: ");
            nomeCandidato2= prompt("Digite o nome do candidato 2: ");
            nomeCandidato3=prompt("Digite o nome do candidato 3: ");
            console.log ("**NOMES DOS CANDIDATOS**");
            console.log ('Candidato 1:  ' + nomeCandidato1);
            console.log ('Candidato 2:  ' + nomeCandidato2);
            console.log ('Candidato 3:  ' + nomeCandidato3);

        }while (!confirm("Se correto clicar  'OK' se incorreto 'Cancelar'"));

    do {
        // console.clear ();
        opcao = parseInt(prompt("Inicio da votação" + '\n' +
            "| 1 | Candidato 1" + '\n' +
            "| 2 | Candidato 2" + '\n' +
            "| 3 | Candidato 3" + '\n' +
            "| 5 | branco " + '\n' + '\n' +
            "Digite a opção: "));
        contadorTotal++;
    

        if (opcao == 1) {
            console.log("Você votou na Maria");
            candidato1++;

        } else if (opcao == 2) {
            console.log("Você votou no José");
            candidato2++;

        } else if (opcao == 3) {
            console.log("Você votou no João");
            candidato3++;

        } else if (opcao == 5) {
            console.log("Branco");
            branco++;

        } else if (opcao == 123456) {
            encerrar = prompt("Deseja encerrar a votação? Digite [S] para sim e [N] para não").toUpperCase();
                if (encerrar !== 'S' && encerrar !== 'N') {
                    alert("Opção inválida");

                }
                contadorTotal--;
        }else {

            if(confirm ("ATENÇÃO: o seu voto será ANULADO"));{
                console.log ("Voto anulado")
                nulo++; 
                contadorTotal--;
            }
        }
        

    } while (encerrar !== 'S')

    console.clear();
    console.log('** BOLETIM DE URNA **');
    console.log ("Total de votos: " + contadorTotal);
    console.log("Total de votos candidato 1: " + candidato1 + " votos (" + (candidato1 / contadorTotal * 100).toFixed(2) + " % )");
    console.log("Total de votos candidato 2: " + candidato2 + " votos (" + (candidato2 / contadorTotal * 100).toFixed(2) + " % )");
    console.log("Total de votos candidato 3: " + candidato3 + " votos (" + (candidato3 / contadorTotal * 100).toFixed(2) + " % )");
    console.log("Total votos em branco: " + branco + " votos (" + (branco / contadorTotal * 100).toFixed(2) + " % )");
    console.log("Total votos nulos: " + nulo + " votos (" + (nulo / contadorTotal * 100).toFixed(2) + " % )");

    if (candidato1 > candidato2 && candidato1 > candidato3) {
        candidato1=candidato1+branco;
        console.log("Candidato 1 ganhador: " + candidato1 + " votos Maria");

    } else if (candidato2 > candidato1 && candidato2 > candidato3) {
        candidato2=candidato2+branco;
        console.log("Candidato 2 ganhador: " + candidato2 + " votos José");

    } else if (candidato3 > candidato1 && candidato3 > candidato2) {
        candidato3=candidato3+branco;
        console.log("Candidato 3 ganhador: " + candidato1 +  " votos João");

    } else if (candidato1 == candidato2) {
        console.log("Empate Maria e José: " + candidato1 + " votos  Maria " + candidato2 + " votos José");

    } else if (candidato2 == candidato3) {
        console.log("Empate entre José e João:" + candidato2 + " votos José " + candidato3 + " votos João");

    } else if (candidato3 == candidato1) {
        console.log("Empate entre João e Maria:" +  candidato3 + " votos João " + candidato1 + " votos Maria");

    }

}
