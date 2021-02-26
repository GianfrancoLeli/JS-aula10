let Filmes = []


let filme = {
		nome, idade, nacionalidade
}
let Antigos = []
let registros = []
let cadastros = []


function registrar() {
	let nome = document.querySelector("#nome");
	let idade = document.querySelector("#idade");
	let nacionalidade = document.querySelector("#nacionalidade") 

	let filme = {
		nome: nome.value,
		idade: Number(idade.value),
		nacionalidade : nacionalidade.value,
	}

	Filmes.push(filme);
	let cadastros = document.createElement("li");
	
	cadastros.innerHTML = `${filme.nome}, estreou há, ${filme.idade} anos, de Nacionalidade ${filme.nacionalidade}`;
	let registrados = document.querySelector("#registrados");
	registrados.appendChild(cadastros);
	
	Antigos = obterMaisVelho(Filmes);

	registros = Antigos [0];

	let filmesMaisVelhos = document.querySelector("#comparar");
	filmesMaisVelhos.innerHTML =`${registros.nome}, é o filme mais velho ${registros.idade} anos`;

	nome.value = '';
	idade.value = '';
	nacionalidade.value = '';


}

//Comparação para o mais velho

function obterMaisVelho() {
	let maisVelhos = [ Filmes[0] ]
	for(let registros of Filmes.slice(1)) {
		
		if (registros.idade > maisVelhos[0].idade) {
			maisVelhos = [ registros ]
		}
		else if (registros.idade === maisVelhos[0].idade) {
			maisVelhos.push(registros)
		}
	}
	return maisVelhos

	function reiniciar() {
		let cadastros ='';
		let registrados ='';
		let pessoasMaisVelhas ='';


	}


}