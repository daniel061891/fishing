const header = document.querySelector('header')
const headerA = document.querySelectorAll('header nav ul li a')
function scrollHandler(e) { 
    if (window.pageYOffset!=0) {
        header.style.backgroundColor = 'rgb(0,0,0,0.6)';
        header.style.color = 'white';
        headerA.forEach((a)=>{
            a.style.color ='white';
        })
    }
    else {
        header.style = '';
        headerA.forEach((a)=>{
            a.style.color ='rgb(26, 48, 148)';
        })
    }
}
window.addEventListener('scroll',scrollHandler)
