//Funciones

//Declaradas
function estoEsUnaFuncion() 
{
    console.log("Uno");
    console.log("Dos");
    console.log("Tres");
}

//Invocacion de funciones
estoEsUnaFuncion();

console.log("============================================")

function unFuncionQueDevuelveValor ()
{
    console.log("Chavarry");
    return 20;
    console.log("Jordi");
    console.log("De La Cruz");
    return "La funcion a retornado una cadena de texto";
}

let valorDeFuncion = unFuncionQueDevuelveValor();

console.log(valorDeFuncion);

console.log("============================================");

function saludar (nombre = "Desconocido", edad = 0)
{
    console.log(`Hola mi nombre es ${nombre} tengo ${edad} años`);
}

saludar("Jordi",22)
saludar();

console.log("============================================");

funcionDeclarada();
// Funciones declaradas Vs Funciones Expresadas
function funcionDeclarada () 
{
    console.log("Esto es una funcion declarada, puede invocarse en cualquier parte de nuestro codigo, incluso antes de que la funcion sea declarada")
}

funcionDeclarada();

console.log("============================================");
//Funcion anonima
// functionExpresada();
const functionExpresada = function () {
    console.log("Esto es una funcion expresada, es decir, una function que se le ha asignado como valor a una variable, si invocamos esta funcion antes de su definicion JS nos dira... Cannot access 'functionExpresada' before initialization");
}

functionExpresada();