const tl = gsap.timeline({default : {ease : 'power2.out'}});

tl.fromTo(".slider", {x: "0%"}, {x: "-200%"}, duration = .5)