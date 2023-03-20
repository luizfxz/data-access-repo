const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const hamburguer = document.querySelector('.hamburguer')

toggleBtn.onclick = function () {
hamburguer.classList.toggle('aberto')
const isOpen = hamburguer.classList.contains('aberto')

toggleBtnIcon.classList = isOpen
? 'fa-solid fa-xmark'
: 'fa-solid fa-bars'
}