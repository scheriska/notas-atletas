class Atletas{
    constructor(listaAtletas){
        this.atletas = listaAtletas
    }
    
    retornarDados(){
        let mensagem = ``;
         for (let i = 0; i < this.atletas.length; i++) {
            mensagem += `
Atleta: ${this.atletas[i].nome}
Notas Obtidas: ${this.atletas[i].notas.join(", ")}
Média Válida: ${this.obterMedia(this.atletas[i].notas)}  
                        `
         }
        //console.log(mensagem);
      return mensagem;
    }
    
    obterMedia(notasAtleta){        
            let soma = 0;
            let notas = notasAtleta;
            notas = notas.sort((a, b) => b - a);
            let notasValidas = notas.slice(1,4);
            
            notasValidas.forEach(function(nota){
                soma += nota;
            });
            return (soma / notasValidas.length).toFixed(5);
    }
}

let atletas = [
 {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 },
 {
   nome: "Fernando Puntel",
   notas:  [8, 10, 10, 7, 9.33]
 },
 {
   nome: "Daiane Jelinsky",
   notas: [7, 10, 9.5, 9.5, 8]
 },
 {
   nome: "Bruno Castro",
   notas: [10, 10, 10, 9, 9.5]
 }
];

let enviarLista = new Atletas(atletas);

console.log(enviarLista.retornarDados());

