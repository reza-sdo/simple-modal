const showModalBtn = document.querySelector(".show-modal")
const modal = document.querySelector(".modal")
const backdrop = document.querySelector(".backdrop")
const close = document.querySelector(".close")
const confirm = document.querySelector(".confirm")

showModalBtn.addEventListener("click" , ()=>{
   modal.style.opacity = "1"
   modal.style.transform = "translateY(20vh)"
   backdrop.style.display = "block"
})
function closeM(){
      modal.style.opacity = "0"
      modal.style.transform = "translateY(-100vh)"
      backdrop.style.display = "none"
}

close.addEventListener("click",closeM)
backdrop.addEventListener("click",closeM)
confirm.addEventListener("click" , ()=>{
   closeM()
   alert("confirmed")
})