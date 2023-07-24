let Pnum = document.querySelector('.check_num');

const Num = () => {
    let FindNum =document.querySelector('#find_numwrap');
    Pnum.style.display ="block";
}

const Email = () => {
    let FindEmail = document.querySelector('#find_emailwrap');
    let CheckEmail = document.querySelector('.c_number');
    let Main = document.querySelector('.main');
    let Mainbox = document.querySelector('.main-box');
    Pnum.style.display='none';
    CheckEmail.style.display="block";
    Main.style.height="780px";
    Mainbox.style.height="630px";
}
