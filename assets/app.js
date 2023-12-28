var window_heigth = window.innerHeight
const par = document.querySelector('infos')
var getLang = document.querySelectorAll('.lang')

window.addEventListener('scroll', reveal)
grow()

function reveal() {
    const elements = document.querySelectorAll('.hide')
    for (let i = 0; i < elements.length; i++) {
        var element_hei = elements[i].getBoundingClientRect().top
        var window = 100
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