function main(){
haburgerMenu();
displayYear();
}
// to display year
function displayYear(){
    let yearElement = document.querySelector(".year")
    var d = new Date();
    let yearContent = yearElement.innerHTML;
    let currentYear = d.getFullYear(); 
    yearElement.innerHTML = yearContent + currentYear;
}
// hamburger menu
function haburgerMenu(){
    let hamburger = document.querySelector(".hamburger");
    let nav = document.querySelector(".nav");
        hamburger.addEventListener("click",()=>{
        hamburger.classList.toggle("active");
        nav.classList.toggle("active");
        })
    document.querySelectorAll(".nav-link").forEach(n =>n.addEventListener("click",()=>{
    hamburger.classList.remove("active");
    nav.classList.remove("active");
    }))
}
main()