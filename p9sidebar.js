let ctrlBtn = document.querySelector('.ctrlbtn');
let sideBar = document.querySelector('.sidebar');

ctrlBtn.addEventListener('click',function(){
    sideBar.classList.toggle('show');
    ctrlBtn.classList.toggle('open')
})