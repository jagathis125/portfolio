 var typed= new Typed(".text" ,{
    strings:["Aspiring Software Developer" ,"Tech Enthusiast"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
 });
 function toggleMenu(){
    document.querySelector(".navbar").classList.toggle("active");
}
const elements = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    elements.forEach(el => {
        const pos = el.getBoundingClientRect().top;
        if(pos < window.innerHeight - 100){
            el.classList.add("show");
        }
    });
});
document.getElementById("darkModeToggle").onclick = function(){
    document.body.classList.toggle("light-mode");
}
window.addEventListener("scroll", function(){
    let header = document.querySelector(".header");
    header.classList.toggle("scrolled", window.scrollY > 50);
});
