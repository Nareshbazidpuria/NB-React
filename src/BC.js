// let spanTagYear = document.getElementById('yr');
// let date = new Date();
// let navLeftDiv = document.getElementById('navLeftDiv');
// let rightNav = document.querySelector('.r');
// let menuItems = document.getElementById('menuItems');
// let logout = document.getElementById('logout');
// let login = document.getElementById('logIn');
// let userName = localStorage.getItem('userName');
// let navSec = document.getElementById('navSec');
// let menuBtn = document.getElementById('menuBtn');
// let menuBtnIcon = document.getElementById('mbicon');
// let divNavUser = document.getElementById('navUser');
// let inavuser = document.getElementById('navuser');
// let spanTagUsrnm = document.getElementById('usrnm');

// spanTagYear.innerHTML = date.getFullYear();

// if (userName) {
//     navLeftDiv.style.display = 'none';
//     navSec.classList.remove('navSec');
//     spanTagUsrnm.innerHTML = userName;
//     login.remove();
// }
// else {
//     deletElement()
// }

// logout.addEventListener('click', () => {
//     localStorage.removeItem('userName');
//     menuItems.style.display = 'none';
//     navSec.style.display = 'none';
//     rightNav.classList.remove('r33');
//     rightNav.classList.add('r22');
//     deletElement();
//     window.location.reload();
// });

// function deletElement() {
//     navSec.remove();
//     divNavUser.remove();
//     inavuser.remove();
//     spanTagUsrnm.remove();
//     logout.remove();
//     document.getElementById('yourAccount').remove();
// };
// let burger = document.getElementById('burger');
// let line = document.getElementsByClassName('line');
// let mi = document.getElementById('mitm');

// burger.addEventListener('click', ()=>{
//     if (!menuItems.classList.contains('open')) {
//         line[0].classList.add('l-1')
//         line[1].classList.add('l-2')
//         line[2].classList.add('l-3')
//         line[1].style.opacity = '0'
//         burger.classList.add('burger')
//         menuItems.classList.add('open'); 
//         window.addEventListener('click', (e)=>{
//             let classArr = Array.from(e.target.classList);
//             if(!(classArr.includes('menuItems') || classArr.includes('menuOpen') || classArr.includes('burger') || classArr.includes('line') || classArr.includes('open') || classArr.includes('mbli') || classArr.includes('Higuys'))){
//                 closeMenuSideBar();
//             }
//         });
//     }
//     else{
//         closeMenuSideBar();
//     }
// });
// function closeMenuSideBar(){
//     line[0].classList.remove('l-1')
//     line[1].classList.remove('l-2')
//     line[2].classList.remove('l-3')
//     burger.classList.remove('burger')
//     line[1].style.opacity = '1'
//     menuItems.classList.remove('open');
// }        