let display = document.getElementById('display');
let buttons = document.querySelectorAll('button');

let flag = false;

buttons.forEach(button=> {
    button.addEventListener('click', (e)=> {

        if(flag) {
            display.innerText = '';
            flag=false;
        }

        switch(e.target.innerText) {
            case 'AC':
                display.innerText = '';
                break;

            case 'Del':
                display.innerText = display.innerText.slice(0, -1);
                break;   

            case '=':
                try {
                    display.innerText = eval(display.innerText);
                } catch (error) {
                    display.innerText = 'Error!';
                    flag=true;
                }
                break;   
                
            default:

                if(display.innerText.charAt(display.innerText.length-1) == '+' || display.innerText.charAt(display.innerText.length-1) == '-' ||
                   display.innerText.charAt(display.innerText.length-1) == '/' || display.innerText.charAt(display.innerText.length-1) == '*' ||
                   display.innerText.charAt(display.innerText.length-1) == '.') {

                    if(e.target.innerText == '+' || e.target.innerText == '/' || e.target.innerText == '-' || e.target.innerText == '*' || 
                    e.target.innerText == '.') {

                    } else{
                        display.innerText += e.target.innerText;
                    }
                    
                }
                else{
                    display.innerText += e.target.innerText;
                }


        }

    })
})