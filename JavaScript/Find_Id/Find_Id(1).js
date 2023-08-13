let CheckPhone = document.querySelector('.c_num1');
let CheckEmail = document.querySelector('.c_num2');
let Main = document.querySelector('.main');
let Mainbox = document.querySelector('.main-box');
let InputWrap1 = document.querySelector('.input_wrap1');
let InputWrap2 = document.querySelector('.input_wrap2');


const Phone_Number = () => {
    if(Phone_Number){
        InputWrap1.style.display ='block';
        InputWrap2.style.display ='none';
    }
    CheckPhone.style.display ="block";
    CheckEmail.style.display ='none';
    Main.style.height='430px';
    Mainbox.style.height='330px';
}

const E_mail = () => {
    if(E_mail){
        InputWrap2.style.display ='block';
        InputWrap1.style.display ='none';
    }
    CheckPhone.style.display ='none';
    CheckEmail.style.display ="block";
    Main.style.height ="750px";
    Mainbox.style.height ="630px";
}
