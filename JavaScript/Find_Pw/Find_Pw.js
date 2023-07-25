let Pnum = document.querySelector('.check_num');
let CheckEmail = document.querySelector('.c_number');
let Main = document.querySelector('.main');
let Mainbox = document.querySelector('.main-box');
let InputWrap1 = document.querySelector('.input_wrap1');
let InputWrap2 = document.querySelector('.input_wrap2');


const Num = () => {
    if(Num){
        InputWrap1.style.display='block';
        InputWrap2.style.display='none';
    }
    Pnum.style.display ="block";
    CheckEmail.style.display ='none';
    Main.style.height='430px';
    Mainbox.style.height='330px';
}

const Email = () => {
    if(Email){
        InputWrap2.style.display='block';
        InputWrap1.style.display='none';
    }
    Pnum.style.display='none';
    CheckEmail.style.display="block";
    Main.style.height="750px";
    Mainbox.style.height="630px";
}
