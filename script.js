const display = document.getElementById ("display");

function clearDisplay(){
    display.value = '';

}

function appendToDisplay(input){
    display.value += input;
}

function toggleSign(){
    if (display.value){
        
        if(display.value.startsWith('-')){
            display.value = display.value.slice(1);

        }
        else {
            display.value = '-' + display.value
        }
    }
}

function calculate(){
     try{
        let expression = display.value;

        expression = expression.replace(/%/g, '/100');

        display.value = eval(expression);
     }
     catch (error){
        display.value ='Error'
     }
}