const menuBar = document.getElementById('menuBar');
const innerMenu = document.getElementById('innerMenu')

let toggleStatus = false;
menuBar.addEventListener('click', () =>{
    innerMenu.classList.toggle('active')
    
    if(toggleStatus){
        menuBar.innerHTML = `<img src="./assets/icons/menu.svg" id="menuBarIcon" alt="">`
        toggleStatus=false
        menuBar.style.rotate =0+'deg'
    }else{
        menuBar.innerHTML = `<img src="./assets/icons/x.svg" id="menuBarIcon" alt="">`
        toggleStatus=true
        menuBar.style.rotate =90+'deg'
    }
})