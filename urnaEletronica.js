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
        pin=123456;
        porcCand1=candidato1 / contadorTotal * 100,
        pocCand2= candidato2 / contadorTotal * 100,
        pocCand3= candidato3 / contadorTotal * 100,
        porcBranco=branco / contadorTotal * 100,
        porcNulo= nulo / contadorTotal * 100;


        nomeCandidato1 = prompt ("Digite o nome do candidato 1: ");
        console.log (nomeCandidato1 );
        nomeCandidato2 = prompt ("Digite o nome do candidato 2: ");
        console.log (nomeCandidato2 );
        nomeCandidato3 = prompt ("Digite o nome do candidato 3: ");
        console.log (nomeCandidato3 );
       

    do {
        opcao = parseInt(prompt("Inicio da votação" + '\n' +
            "| 1 | Candidato 1" + '\n' +
            "| 2 | Candidato 2" + '\n' +
            "| 3 | Candidato 3" + '\n' +
            "| 5 | branco " + '\n' +
            "| 8 | nulo" + '\n' + '\n' +
            "Digite a opção: "));
        contadorTotal++;
    

        if (opcao == 1) {
    
            console.log("Você votou no candidato 1");
            candidato1++;

        } else if (opcao == 2) {
            console.log("Você votou no candidato 2");
            candidato2++;

        } else if (opcao == 3) {
            console.log("Vocô votou no candidato 3");
            candidato3++;

        } else if (opcao == 5) {
            console.log("Branco");
            branco++;

        } else if (opcao == 8) {
            console.log("Nulo");
            nulo++;

        } else if (opcao == pin) {
            encerrar = prompt("Deseja encerrar a votação: s/n?")
           
            contadorTotal--;

        } else  {
            alert ("Voto inválido")
            console.log("Voto Inválido");
        }
        
    

    } while (encerrar != 's' && 'S')

    console.log("Contagem total de votos: " + contadorTotal);

    console.log("Candidato 1: " + porcCand1.toFixed(2) + " % ");
    console.log("Candidato 2: " + candidato2 / contadorTotal * 100 + " % ");
    console.log("Candidato 3: " + candidato3 / contadorTotal * 100 + " % ");
    console.log("Votos em branco: " + branco / contadorTotal * 100 + " % ");
    console.log("Votos nulos: " + nulo / contadorTotal * 100 + " % ");

    if (candidato1 > candidato2 && candidato1 > candidato3) {
        candidato1=candidato1+branco;
        console.log("Candidato 1 ganhador: " + candidato1 + " votos" + " Maria");

    } else if (candidato2 > candidato1 && candidato2 > candidato3) {
        candidato2=candidato2+branco;
        console.log("Candidato 2 ganhador: " + candidato2 + " votos" + " José");

    } else if (candidato3 > candidato1 && candidato3 > candidato2) {
        candidato3=candidato+branco;
        console.log("Candidato 3 ganhador: " + candidato1 +  " votos" + " João");

    } else if (candidato1 == candidato2) {
        console.log("Empate Maria e José: " + candidato1 + " votos " + " Maria" + candidato2 + " votos" + " José");

    } else if (candidato2 == candidato3) {
        console.log("Empate entre José e João" +" votos " + " José" + " votos " + " João");

    } else if (candidato3 == candidato1) {
        console.log("Empate entre João e Maria" +  " votos " + " João" + " votos" + " Maria");

    }

}
