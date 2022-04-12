const icons =[
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

function getRandomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
	  color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}
icons.forEach((icona)=>{
	icona.color = getRandomColor();
})

let container = document.querySelector(".row")
stampa(icons)

function stampa(icons){
	let div = "";
	icons.forEach((element) =>{
			div += 
			`
			<div class="col-12 col-sm-12 col-md-6 col-lg-3">
				<div class="square"><i style= "color:${element.color}" class="${element.prefix}solid fa-${element.name}"></i><span>${element.name.toUpperCase()}</span></div>
			</div>
			`
	})
	container.innerHTML += div
}


let select = document.querySelector(".form-select");

select.addEventListener("change", function(){
	//Questo this si riferisce al select qua sopra! Potevi usarlo al posto di richiamare select.value
	console.log(this)

	let tipo = select.value;
	if(tipo === "animal"){
		container.innerHTML = "";
		stampa(icons.filter((icone) => icone.type === "animal"));
	} else if(tipo === "vegetable"){
		container.innerHTML = "";
		stampa(icons.filter((icone)=> icone.type === "vegetable"));
	}else if(tipo === "user"){
		container.innerHTML = "";
		stampa(icons.filter((icone)=> icone.type === "user")); 
	}else if(tipo === "0"){
		container.innerHTML = "";
		stampa(icons);
}})






