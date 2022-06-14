
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'key',
		'X-RapidAPI-Host': 'random-facts2.p.rapidapi.com'
	}
};

fetch('https://random-facts2.p.rapidapi.com/getfact', options)
	.then(response => response.json())
	.then(response => {
        const fact = response.Fact;
        let div = document.querySelector('div');
        div.innerText = fact;
    })
	.catch(err => console.error(err));
