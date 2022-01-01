const hamburgerBtn = document.querySelector('.nav__hamburger');


hamburgerBtn.addEventListener('click', ()=>{
    if(hamburgerBtn.classList.contains('open')){
        hamburgerBtn.classList.remove('open')
    }else{
        hamburgerBtn.classList.add('open')
    }
    
})
