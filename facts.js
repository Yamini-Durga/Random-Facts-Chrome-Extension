
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b4833cf298msh443983ff9b2e848p19ac89jsn26e9cf0f4dc8',
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