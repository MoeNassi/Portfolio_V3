var index = 0;
var window_heigth = window.innerHeight
console.log(window_heigth)
const par = document.querySelector('infos')
var getLang = document.querySelectorAll('.lang')
const cont_ = document.querySelectorAll('.circle')
const icons = document.querySelectorAll('.content .icons')
const aboutme = document.getElementById('zero')

window.addEventListener('scroll', reveal)
grow()

function reveal() {
    const elements = document.querySelectorAll('.hide')
    for (let i = 0; i < elements.length; i++) {
        var element_hei = elements[i].getBoundingClientRect().top
        var window = 150
        if (element_hei < window_heigth - window)
            elements[i].classList.add('reveal')
        else
            elements[i].classList.remove('reveal')
    }
}

function grow() {
    const circles = document.querySelectorAll('.circle')

    getLang.forEach(lang => {
        (lang.textContent === "● css") ? lang.style.color = "rgb(117, 41, 168)" :
        (lang.textContent === "● C++") ? lang.style.color = "rgb(196, 48, 72)" :
        (lang.textContent === "● Javascript") ? lang.style.color = "rgb(241, 241, 105)" : lang.style.color = "white";
    });

    circles.forEach(circle => {
        circle.addEventListener('click', ()=> {
            for (let i = 0; i < circles.length; i++) {
                circles[i].classList.remove('active')
                circles[i].querySelector('.pre').style.fontSize = "15px"
                circles[i].querySelector('.content').classList.remove('show_content')
            }
            circle.classList.add('active')
            style_it(circle)
        })
    })
}

function style_it(circle) {
    var parent = document.getElementById(circle.id)
    var id = parent.querySelector('.content')
    parent.querySelector('.pre').style.fontSize = "25px"
    id.classList.add('show_content')
}

// icons.forEach(icon => {
//     icon.addEventListener('mousedown', ()=> {
//         cont_.style.cursor = "grabbing"
//         drag(icon)
//     })
// });

// function drag(icon, e) {
//     pos = cont_.style.innerHeight
//     console.log(pos)
// }

var text = document.getElementById('s')

aboutme.addEventListener('click', ()=> {
    var selected = getComputedStyle(document.documentElement)
    selected.getPropertyValue('--content_height')
    selected.getPropertyValue('--content_width')
    text.style.opacity = "0"
    document.documentElement.style.setProperty('--content_height', '900px')
    for (let i = 1; i < cont_.length; i++)
    cont_[i].classList.add('hide_it')
    setTimeout(()=> {
        document.documentElement.style.setProperty('--content_height', '900px')
        document.documentElement.style.setProperty('--content_width', '1448px')
        document.querySelector('.infos').classList.add('slider')
    }, 1500)
    setTimeout(()=> window.location.href = '../aboutme.html', 2000)
})

function copy() {
	var text = "MedAitSwa#2746"
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
	document.querySelector('.infos').appendChild(element)
	element.classList.add('show')
	setTimeout(()=> element.classList.remove('show'), 2000)
}