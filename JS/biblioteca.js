let titulo = document.getElementById("titulo").value;
let autor = document.getElementById("autor").value;
let ano = document.getElementById("ano").value;
let genero = document.getElementById("genero").value;

let btnCadastrar = document.getElementById("btnCadastrar");

let estante = document.getElementById("estante");

let livros = [];
btnCadastrar.addEventListener("click", cadastrar);

function cadastrar(){
    
    let livro = {
        titulo : titulo.value,
        autor : autor.value,
        ano : ano.value,
        genero: genero.value
    };

    livro.push(livro);

}