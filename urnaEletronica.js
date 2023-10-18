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
        pin=123456,
        // let confC2 = nomeCandidato2;
        
        for (let i=false; i!=true;) {
            nomeCandidato1
            i=confirm("maria joao jose")
        }
        nomeCandidato1 = prompt ("Digite o nome do candidato 1: ");
        // let confC1 = confirm (nomeCandidato1);

        // if (! confC1) {
        //     nomeCandidato1 = prompt ("Digite o nome do candidato 1: ");
        // }
        

    do {
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

        } else if (opcao == pin) {
            encerrar = prompt("Deseja encerrar a votação: s/n?")
        
        }else {

            let confirmacao = confirm ("Anular o voto?"); 

            if(confirmacao){
                console.log ("Voto anulado")
                nulo++; 
                contadorTotal--;
            }

        }
        

    } while (encerrar != 's' && 'S')

    console.log("Contagem total de votos: " + contadorTotal);

    console.log("Candidato 1: " + (candidato1 / contadorTotal * 100).toFixed(2) + " % ");
    console.log("Candidato 2: " + (candidato2 / contadorTotal * 100).toFixed(2) + " % ");
    console.log("Candidato 3: " + (candidato3 / contadorTotal * 100).toFixed(2) + " % ");
    console.log("Votos em branco: " + (branco / contadorTotal * 100).toFixed(2) + " % ");
    console.log("Votos nulos: " + (nulo / contadorTotal * 100).toFixed(2) + " % ");

    if (candidato1 > candidato2 && candidato1 > candidato3) {
        candidato1=candidato1+branco;
        console.log("Candidato 1 ganhador: " + candidato1 + " votos Maria");

    } else if (candidato2 > candidato1 && candidato2 > candidato3) {
        candidato2=candidato2+branco;
        console.log("Candidato 2 ganhador: " + candidato2 + " votos José");

    } else if (candidato3 > candidato1 && candidato3 > candidato2) {
        candidato3=candidato+branco;
        console.log("Candidato 3 ganhador: " + candidato1 +  " votos João");

    } else if (candidato1 == candidato2) {
        console.log("Empate Maria e José: " + candidato1 + " votos  Maria " + candidato2 + " votos José");

    } else if (candidato2 == candidato3) {
        console.log("Empate entre José e João:" + candidato2 + " votos José " + candidato3 + " votos João");

    } else if (candidato3 == candidato1) {
        console.log("Empate entre João e Maria:" +  candidato3 + " votos João " + candidato1 + " votos Maria");

    }

}
