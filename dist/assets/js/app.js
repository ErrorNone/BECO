!function(){const e=document.querySelector(".header");let t=document.querySelector(".header").scrollHeight,c=window.pageYOffset;function n(c){c>=t?e.classList.add("fixed"):e.classList.remove("fixed")}n(c),window.addEventListener("scroll",(e=>{c=window.pageYOffset,n(c)}))}(),function(){const e=document.getElementById("sidebar"),t=document.getElementById("burger");console.log(t),t.addEventListener("click",(c=>{t.classList.toggle("active"),e.classList.toggle("active")}))}();