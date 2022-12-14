let prevans=0, ans=0,
    prefir=0,first_num=0,
    presec=0,second_num=0, 
    premode=0,mode=false,
    preopt='+',opt='+',
    val=1;

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
    val = 1;
    prevans = ans;
    if(opt=='X'){
        ans = multiply(first_num,second_num);
    }else if(opt=='+'){
        ans = sum(first_num,second_num);
    }else if(opt=='-'){
        ans = sub(first_num,second_num);
    }else if(opt=='/'){
        ans = divide(first_num,second_num);
    }else{
        ans = first_num%second_num;
    }
    ans = ans.toPrecision(10);
    prefir = first_num;
    first_num = ans;
    presec = second_num;
    second_num=0;
}

function controls(e){
    let key = e.target.getAttribute('data-key');
    if(key.charCodeAt(0)>=48 && key.charCodeAt(0)<=57){
        if(mode){
            if(val!=1){
                presec = second_num;
                second_num+=(key.charCodeAt(0)-48)/val;
            }else{
                presec = second_num;
                second_num*=10;
                second_num+=key.charCodeAt(0)-48;
            }
            display.textContent = first_num + ` ${opt} ` + second_num;
        }else{
            if(val!=1){
                prefir = first_num;
                first_num += (key.charCodeAt(0)-48)/val;
            }else{
                prefir = first_num;
                first_num*=10;
                first_num+=key.charCodeAt(0)-48;
            }  
            display.textContent = first_num;
        }
    }
    else if(key=='equal'){
        equals();
        display.textContent = ans;
        prefir = first_num;
        first_num = ans;
        presec = second_num;
        second_num = 0;
        premode = mode;
        mode = true;
    }else if(key=='Clear'){
        val=1;
        prevans = ans;
        ans=0;
        prefir = first_num;
        first_num=0;
        presec = second_num;
        second_num=0;
        premode = mode;
        mode = false;
        display.textContent = ans;
    }else if(key=='ANS'){
        val=1;
        display.textContent = ans;
        prefir = first_num;
        first_num = 0;
        presec = second_num;
        second_num=0;
        premode = mode;
        mode = false;
    }else if(key=='X'){
        val=1;
        if(mode){
           equals(); 
        }
        preopt = opt;
        opt = key;
        display.textContent = first_num + ' X ';
        premode = mode;
        mode = true;
    }else if(key=='/'){
        val=1;
        if(mode){
            equals(); 
         }
         preopt = opt;
         opt = key;
         display.textContent = first_num + ' / ';
         premode = mode;
         mode = true;
    }else if(key=='+'){
        val=1;
        if(mode){
            equals(); 
         }
        preopt = opt;
        opt = key;
        display.textContent = first_num + ' + ';
        premode = mode;
        mode = true;
    }else if(key=='-'){
        val=1;
        if(mode){
            equals(); 
         }
         preopt = opt;
         opt = key;
         display.textContent = first_num + ' - ';
         premode = mode;
         mode = true;
    }else if(key=='decimal'){
        val*=10;
    }else if(key=='undo'){
        ans = prevans;
        prefir = first_num;
        second_num = presec;
        mode = premode;
        opt = preopt;
        display.textContent = ans;
    }else{
        val=1;
        if(mode && second_num!=0){
            equals(); 
         }
         preopt = opt;
         opt = key;
         display.textContent = first_num + ' % ';
         premode = mode;
         mode = true;
    }
}

const buttons = document.querySelectorAll("button");
buttons.forEach( btn => btn.addEventListener('click',controls));

const display = document.querySelector('.display');
display.textContent = ans;