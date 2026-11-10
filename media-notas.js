//medias-notas -calculando e media de um aluno

//Um objeto guarda dados relacionadas sobre uma coisa(aqui, o aluno)
const aluno = {
    nome: "Ana Paula",
    nota1 : 7.5,
    nota2 : 8.0
};

//A função soma duas notas e devolve a media

function media (n1,n2){
    return (n1+n2)/2
}

const mediaFinal = media(aluno.nota1, aluno.nota2);

console.log(mediaFinal);
console.log(media.toFixed(1));

