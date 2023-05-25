window.addEventListener("DOMContentLoaded", () =>{
    const loader = document.querySelector('.loader')

    setTimeout(() =>{
        loader.style.opacity = '0'
        loader.style.display = 'none'
    }, 2000)
})