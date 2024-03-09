const tl = gsap.timeline({default : {ease : 'power2.out'}});

tl.fromTo(".slider", {x: "0%"}, {x: "-200%"}, duration = .5)

function copy() {
	var text = "sngp567@gmail.com"
	navigator.clipboard.writeText(text)
	.then(()=> {
		element.textContent = "copied"
		element.classList.add('copy')
	})
	.catch(()=> {
		element.textContent = "failed"
		element.classList.add('err')
	})
	var element = document.createElement('div')
	document.body.appendChild(element)
	element.classList.add('show')
	setTimeout(()=> element.classList.remove('show'), 1000)
}