function DataHora () {
    const dataHora = new Date ();
    return `Data: ${dataHora.getDate()}/${dataHora.getMonth() +1}/${dataHora.getFullYear()} ${dataHora.getHours()}:${dataHora.getMinutes()}:${dataHora.getSeconds()}`;
}

async function verificarIntegridadeUrna() {

    let hashUrnaAtual,
        hashVerificado;

        await fetch('./urnaEletronica.js')
                .then (conteudo => conteudo.text()) // função anonima parametro de entrada na esquerda e o corpo a direita
                .then (conteudo => CryptoJS.SHA256(conteudo).toString())
                .then (conteudo => hashUrnaAtual = conteudo);

        await fetch ('./hashVerificado')
                .then(conteudo =>conteudo.text())
                .then(conteudo =>hashVerificado = conteudo);

            return {
            status: hashUrnaAtual === hashVerificado,
            hashUrnaAtual: hashUrnaAtual,
            hashVerificado: hashVerificado,
        };
}

async function urnaEletronica() {

    let
        voto;
        contadorTotal = 0,
        candidato1 = 0,
        candidato2 = 0,
        candidato3 = 0,
        candidato4 = 0,
        candidato5 = 0,
        branco = 0,
        nulo = 0;
        encerrar= "",
        pin=0;
        dataAtual = new Date();
        DadoC = [
            [70,"Matilde", "AB"], 
            [60,"Ester", "CD"], 
            [50,"João", "EF"],
            [40,"José", "GH"],
            [30,"Maria", "IJ"],
            [10, "Branco"]
        ];
        
      

        
        for (let i = 0; i < DadoC.length; i++) {
                console.log('Candidato: ' + DadoC[i][0] + " " + DadoC[i][1] + " " + DadoC[i][2]);
        }
        do {
        
            pin=parseInt(prompt("Senha mesário: "));  
 

        }while (!confirm("Se correto clicar  'OK' se incorreto 'Cancelar'"));

        dataInicial = DataHora();
    do {

        voto = prompt ("Entre seu voto:");
        contadorTotal++;
        
        if (voto == DadoC[0][0]) {
            console.log(`Você votou:  ${DadoC[0][1]}`);
            if (confirm(`você votou no ${DadoC[0][1]}, clique 'Ok' para confirmar ou 'cancel' para cancelar.`)) {
                let audio = new Audio('confirmacao.mp3');
                    audio.play();
                candidato1++;
            } else {
                contadorTotal--;
            }
            
        } else if (voto == DadoC[1][0]) {
            console.log(`Você votou:  ${DadoC[1][1]}`);
            if (confirm("você votou no Ester, clique 'Ok' para confirmar ou 'cancel' para cancelar.")){
                candidato2++;
            }else {
                contadorTotal--;
            }

        } else if (voto == DadoC[2][0]) {
            console.log(`Você votou:  ${DadoC[2][1]}`);
            if (confirm("você votou no João, clique 'Ok' para confirmar ou 'cancel' para cancelar.")) {
                candidato3++;
            }else {
                contadorTotal--;
            }
        } else if (voto == DadoC[3][0]) {
            console.log(`Você votou:  ${DadoC[3][1]}`);
            if (confirm("você votou no José, clique 'Ok' para confirmar ou 'cancel' para cancelar.")) {
                candidato4++;
            }else {
                contadorTotal--;
            }
        } else if (voto == DadoC[4][0]) {
            console.log(`Você votou:  ${DadoC[4][1]}`);
            if (confirm("você votou no Maria, clique 'Ok' para confirmar ou 'cancel' para cancelar.")) {
                candidato5++;
            }else {
                contadorTotal--;
            }

        } else if (voto == DadoC[5][0]) {
            console.log(`Você votou:  ${DadoC[5][1]}`);
            
            branco++;

        } else if (voto == 123456) {
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

    // console.clear();

    dataFinal = DataHora();
    console.log ("**Boletim de votação**");
    console.log (`**Inicío da votação** ${dataInicial}`);
    console.log (`**Fim da Votação** ${dataFinal}`);

    console.log (`Total de votos: ${contadorTotal}`);
    console.log("Total de votos candidato 1: " + DadoC[0][1] + " votos (" + (candidato1 / contadorTotal * 100).toFixed(2) + " % )");
    console.log("Total de votos candidato 2: " + DadoC[1][1] + " votos (" + (candidato2 / contadorTotal * 100).toFixed(2) + " % )");
    console.log("Total de votos candidato 3: " + DadoC[2][1] + " votos (" + (candidato3  / contadorTotal * 100).toFixed(2) + " % )");
    console.log("Total de votos candidato 3: " + DadoC[3][1] + " votos (" + (candidato4  / contadorTotal * 100).toFixed(2) + " % )");
    console.log("Total de votos candidato 3: " + DadoC[4][1] + " votos (" + (candidato5 / contadorTotal * 100).toFixed(2) + " % )");
    console.log("Total votos em branco: " + DadoC[5][1] + " votos (" + (branco / contadorTotal * 100).toFixed(2) + " % )");
    console.log("Total votos nulos: " + nulo + " votos (" + (nulo / contadorTotal * 100).toFixed(2) + " % )");

    
    if (DadoC[0][1] > DadoC[1][1] && DadoC[0][1] > DadoC[2][1] && DadoC[0][1] > DadoC[3][1] && DadoC[0][1] > DadoC[4][1]) {
        candidato1=candidato1+branco
        console.log(`Candidato: ${DadoC[0][1]} ganhador`);

    } else if (DadoC[1][1] > DadoC[0][1] && DadoC[1][1] > DadoC[2][1] && DadoC[1][1] > DadoC[3][1] && DadoC[1][1] > DadoC[4][1]) {
            candidato2=candidato2 + branco;
            console.log(`Candidato: ${DadoC[1][1]} ganhador candidato2`); 

    }else if (DadoC[2][1] > DadoC[0][1] && DadoC[2][1] > DadoC[1][1] && DadoC[2][1] > DadoC[3][1] && DadoC[2][1] > DadoC[4][1]) {
        candidato3=candidato3+branco;
        console.log(`Candidato: ${DadoC[2][1]} ganhador`);

    } else if (DadoC[3][1] > DadoC[0][1] && DadoC[3][1] > DadoC[1][1] && DadoC[3][1] > DadoC[2][1] && DadoC[3][1] > DadoC[4][1]) { 
        candidato4=candidato4+branco;
        console.log(`Candidato: ${DadoC[3][1]} ganhador`);

    } else if (DadoC[4][1] > DadoC[0][1] && DadoC[4][1] > DadoC[1][1] && DadoC[4][1] > DadoC[2][1] && DadoC[4][1] > DadoC[3][1]) { 
        candidato5=candidato5+branco;
        console.log(`Candidato: ${DadoC[4][1]} ganhador`);
    }
       
    await verificarIntegridadeUrna()
        .then (verificacao => {
            if (verificacao.status) {
                console.log (`Hashes verificado, urna íntegra`);
            }else {
                console.log (`URNA ADULTERADA!`)
                console.log (`Hashes da urna: ${verificacao.hashUrnaAtual}`);
                console.log (`Hash esperado: ${verificacao.hashVerificado}`);
            }
            console.log (`**Fim do programa**`)
        });

}
