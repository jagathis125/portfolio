 var typed= new Typed(".text" ,{
    strings:["Aspiring Software Developer" ,"Tech Enthusiast" , "Quick Learner"],
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
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});
const popup = document.getElementById("resumePopup");

/* OPEN */
function openResume(){
    popup.classList.add("show");
}

/* CLOSE */
function closeResume(){
    popup.classList.remove("show");
}

/* FULLSCREEN */
function toggleFullScreen(){
    popup.classList.toggle("fullscreen");
}

/* OUTSIDE CLICK CLOSE */
window.addEventListener("click", function(e){
    if(e.target === popup){
        closeResume();
    }
});
