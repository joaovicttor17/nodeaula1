function media3 (n1,n2,n3){
    return (n1+n2+n3)/3
}

function situacao(media){
    if(media >= 7) return "aprovado;"
    if(media >= 5) return "reprovado;"
    return "reprovado";
}

const alunos = [
    {nome: "Bruno", p1: 7, p2: 8, p3: 9},
    {nome: "Carla", p1: 5, p2: 6, p3: 7},
    {nome: "Diego", p1: 4, p2: 5, p3: 4},
]

for(let i = 0; i < alunos.length; i++){
    const m = media3(alunos[i].p1,alunos[i].p2,alunos[i].p3);
    console.log(`${alunos[i].nome} - media ${m.toFixed(1)} - ${situacao(m)}`)
}