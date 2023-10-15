function urnaEletronica() {

let
    opcao;
    contadorTotal=0;
    candidato1=0;
    candidato2=0;
    candidato3=0;
    branco=0;
    nulo=0;
    nomeCandidato1 = 'Maria';
    nomeCandidato2 = 'Jenovaldo';
    nomeCandidato3 = 'Marionete';    

 
   
    do {
        opcao = parseInt(prompt("Inicio da votação" +'\n' +
                                "| 1 | Candidato 1" + '\n' +
                                "| 2 | Candidato 2" + '\n' +
                                "| 3 | Candidato 3" + '\n' +
                                "| 5 | branco " + '\n' +
                                "| 8 | nulo" + '\n' + '\n' +
                               "Digite a opção: "));
        contadorTotal++;

        if (opcao==1) {
            console.log ("Você votou no candidato 1");
            // alert("O nome do candidato é: " + nomeCandidato1 );
            candidato1++;

        }else if (opcao==2) {
            console.log ("Você votou no candidato 2");
            // alert("O nome do candidato é: " + nomeCandidato2 );
            candidato2++;

        }else if (opcao==3) {
            console.log ("Vocô votou no candidato 3");
            // alert("O nome do candidato é: " + nomeCandidato2 );
            candidato3++;

        }else if (opcao==5) {
            console.log ("Branco");
            branco++;

        }else if (opcao==8) {
            console.log ("Nulo");
            nulo++;

        }else if (opcao==0) {
            alert ("Votação encerrada");
            contadorTotal--;

        }else{
            console.log ("Voto Inválido");
            contadorTotal--;
        }

    } while (opcao !==0);
    
    console.log ("Contagem total de votos: " + contadorTotal);
    console.log ("Candidato 1: " + candidato1/contadorTotal*100 + " % " );
    console.log ("Candidato 2: " + candidato2/contadorTotal*100 + " % " );
    console.log ("Candidato 3: " + candidato3/contadorTotal*100 + " % ");
    console.log ("Votos em branco: " + branco/contadorTotal*100 + " % ");
    console.log ("Votos nulos: " + nulo/contadorTotal*100 + " % ");
    if (candidato1 > candidato2 && candidato1> candidato3) {
        console.log ("Candidato 1 ganhador: " + nomeCandidato1);

        }else if (candidato2 > candidato1 && candidato2> candidato3) {
        console.log ("Candidato 2 ganhador: " + nomeCandidato2);

        }else if (candidato3 > candidato1 && candidato3> candidato2) {
        console.log ("Candidato 3 ganhador: " + nomeCandidato1);

        }else if (candidato1==candidato2)  {
            console.log ("Empate entre Maria e Jenovaldo");
        }else if (candidato2==candidato3) {
            console.log ("Empate entre Jenovaldo e Marionete");

        }else if (candidato3==candidato1) {
            console.log ("Empate entre Maria e Marionete");

        }else if (candidato1==candidato2==candidato3){
            console.log ("Empate entre todos os candidatos");
        }
    
    porcentagem=contadorTotal/100;
    // console.log("Resultado Final: " + porcentagem);

}