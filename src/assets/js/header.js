

const header = document.querySelector(".header")
let headerHeight = document.querySelector(".header").scrollHeight
let scrollOffSet = window.pageYOffset

CheckScroll(scrollOffSet)

window.addEventListener("scroll", event => {
    scrollOffSet = window.pageYOffset

    CheckScroll(scrollOffSet)

});

function CheckScroll(scrollOffSet) {       
    if (scrollOffSet >= headerHeight) {
        header.classList.add("fixed")
    } else {
        header.classList.remove("fixed")
    }
}