const sections=document.querySelectorAll(".section")
const navLinks=document.querySelectorAll(".nav-link")
const progressBars=document.querySelectorAll(".progress")
const scrollBtn=document.getElementById("scrollTop")
const scrollProgress=document.querySelector(".scroll-progress")
const themeToggle=document.getElementById("themeToggle")
const hamburger=document.querySelector(".hamburger")
const navMenu=document.querySelector(".nav-links")
const filterBtns=document.querySelectorAll(".filter-buttons button")
const projects=document.querySelectorAll(".project-card")
const modal=document.querySelector(".modal")
const closeModal=document.querySelector(".close")
const openModalBtns=document.querySelectorAll(".openModal")

hamburger.onclick=()=>navMenu.classList.toggle("show")

window.addEventListener("scroll",()=>{
let scrollTop=document.documentElement.scrollTop
let scrollHeight=document.documentElement.scrollHeight-document.documentElement.clientHeight
scrollProgress.style.width=(scrollTop/scrollHeight)*100+"%"

sections.forEach(sec=>{
if(sec.getBoundingClientRect().top<window.innerHeight-100){
sec.classList.add("show")
progressBars.forEach(bar=>bar.classList.add("active"))
}
})

if(scrollTop>300){scrollBtn.style.display="block"}else{scrollBtn.style.display="none"}

sections.forEach(sec=>{
let top=window.scrollY
let offset=sec.offsetTop-150
let height=sec.offsetHeight
let id=sec.getAttribute("id")
if(top>=offset&&top<offset+height){
navLinks.forEach(link=>link.classList.remove("active"))
document.querySelector('a[href="#'+id+'"]').classList.add("active")
}
})
})

scrollBtn.onclick=()=>window.scrollTo({top:0,behavior:"smooth"})

themeToggle.onclick=()=>{
document.body.classList.toggle("dark")
themeToggle.textContent=document.body.classList.contains("dark")?"☀":"🌙"
}

let texts=["Full Stack Developer","Problem Solver","Tech Enthusiast"]
let count=0,index=0,currentText="",letter=""
;(function type(){
if(count===texts.length)count=0
currentText=texts[count]
letter=currentText.slice(0,++index)
document.getElementById("typing").textContent=letter
if(letter.length===currentText.length){count++;index=0}
setTimeout(type,150)
})()

filterBtns.forEach(btn=>{
btn.onclick=()=>{
let filter=btn.getAttribute("data-filter")
projects.forEach(card=>{
if(filter==="all"||card.getAttribute("data-category")===filter){
card.style.display="block"
}else{card.style.display="none"}
})
}
})

openModalBtns.forEach(btn=>btn.onclick=()=>modal.style.display="flex")
closeModal.onclick=()=>modal.style.display="none"
window.onclick=e=>{if(e.target===modal)modal.style.display="none"}
