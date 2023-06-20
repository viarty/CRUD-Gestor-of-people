var btnSidebar = document.querySelectorAll('#btnSidebar');
var slidebar = document.querySelector('.slidebar');
var mainSlideBar = document.querySelector('.main')
var btnSideBarMobile = document.querySelectorAll('#btnSideBarMobile')
var menuMobile = document.querySelector('.menu_mobile')
var btnSairMenuMobile = document.querySelectorAll('#btnSairMenuMobile')

btnSidebar.forEach(function(btnSidebar) {
    btnSidebar.addEventListener('click', function(){
        if(!slidebar.classList.contains("slidebar-hide")){
            slidebar.classList.add("slidebar-hide")
            mainSlideBar.classList.add('mainSlideBar-hide')
        }
        else {
            slidebar.classList.remove("slidebar-hide");
            mainSlideBar.classList.remove('mainSlideBar-hide')
        }
    })
})

btnSideBarMobile.forEach(function(btnSideBarMobile) {
    btnSideBarMobile.addEventListener('click', function(){
        if (!menuMobile.classList.contains("open-menu-mobile")) {
            menuMobile.classList.add("open-menu-mobile")
        }
        else {
            menuMobile.classList.remove("open-menu-mobile")
        }
    })
})
btnSairMenuMobile.forEach(function(btnSairMenuMobile) {
    btnSairMenuMobile.addEventListener('click', function(){
        if (menuMobile.classList.contains("open-menu-mobile")) {
            menuMobile.classList.remove("open-menu-mobile")
        }
    })
})

function verificarTamanhoTela() {
    if (window.matchMedia("(max-width: 1023px)").matches) {
        console.log('menor')

        if(!slidebar.classList.contains("slidebar-hide")){
            slidebar.classList.add("slidebar-hide")
            mainSlideBar.classList.add('mainSlideBar-hide')
        }

    }
    if (window.matchMedia("(min-width: 1024px)").matches) {
        console.log('maior')

        if(slidebar.classList.contains("slidebar-hide")){
            slidebar.classList.remove("slidebar-hide")
            mainSlideBar.classList.remove('mainSlideBar-hide')
        }
    }    
}


window.addEventListener("resize", verificarTamanhoTela);
verificarTamanhoTela(); // Verifica o tamanho da tela ao carregar a página
