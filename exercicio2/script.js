let nacionalidade = prompt("digite aqui a nacionalidade").toLowerCase();

switch(nacionalidade){
case nacionalidade === "brasileira":
    console.log("a pessoa é do Brasil!")
    break;
 case nacionalidade === "argentina":
    console.log("a pessoa é da Argentina!")
    break;
 case nacionalidade === "uruguaia":
    console.log("a pessoa é do Uruguai!")
    break;
 case nacionalidade === "chilena":
    console.log("a pessoa é do Chile!")
    break;
 case nacionalidade === "colombiana":
    console.log("a pessoa é da Colômbia!")
    break;
 default:
    console.log("nacionalidade não encontrada");
}