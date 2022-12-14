let prevans=0, 
    ans=0,
    first_num=0,
    second_num=0, 
    mode=false,
    opt='+';

function sum(num1, num2){
    return num1 + num2;
}

function sub(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1*num2;
}

function divide(num1, num2){
    return num1/num2;
}

function equals(){
    if(opt=='X'){
        ans = multiply(first_num,second_num);
    }else if(opt=='+'){
        ans = sum(first_num,second_num);
    }else if(opt=='-'){
        ans = sub(first_num,second_num);
    }else if(opt=='/'){
        ans = divide(first_num,second_num);
    }
    first_num = ans;
    second_num=0;
}

function controls(e){
    let key = e.target.getAttribute('data-key');
    if(key.charCodeAt(0)>=48 && key.charCodeAt(0)<=57){
        if(mode){
            second_num*=10;
            second_num+=key.charCodeAt(0)-48;
            display.textContent = second_num;
        }else{
            first_num*=10;
            first_num+=key.charCodeAt(0)-48;
            display.textContent = first_num;
        }
    }
    else if(key=='equal'){
        equals();
        display.textContent = ans;
        first_num = ans;
        second_num = 0;
        mode = true;
    }else if(key=='Clear'){
        prevans = ans;
        ans=0;
        first_num=0;
        second_num=0;
        mode = false;
        display.textContent = ans;
    }else if(key=='ANS'){
        display.textContent = ans;
        second_num = ans;
    }else if(key=='X'){
        if(mode){
           equals(); 
        }
        opt = key;
        display.textContent = first_num + ' X ';
        mode = true;
    }else if(key=='/'){
        if(mode){
            equals(); 
         }
         opt = key;
         display.textContent = first_num + ' / ';
         mode = true;
    }else if(key=='+'){
        if(mode){
            equals(); 
         }
         opt = key;
         display.textContent = first_num + ' + ';
         mode = true;
    }else if(key=='-'){
        if(mode){
            equals(); 
         }
         opt = key;
         display.textContent = first_num + ' - ';
         mode = true;
    }
}

const buttons = document.querySelectorAll("button");
buttons.forEach( btn => btn.addEventListener('click',controls));

const display = document.querySelector('.display');