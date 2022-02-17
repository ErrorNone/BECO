const sidebar = document.getElementById('sidebar')
const burger = document.getElementById('burger')

console.log(burger)
burger.addEventListener('click', event => {
burger.classList.toggle('active')
sidebar.classList.toggle('active')
})