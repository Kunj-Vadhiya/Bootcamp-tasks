const display = document.getElementById("display");

function appendValue(val) 
{
    display.value += val;
}

function appendFunc(func) 
{
    display.value += func;
}

function clearDisplay() 
{
    display.value = "";
}

function deleteLast() 
{
    display.value = display.value.slice(0, -1);
}

function factorial(n) 
{
    return n <= 1 ? 1 : n * factorial(n - 1);
}

function calculate()
{
    try{
        display.value = eval(display.value);
    }catch{
        display.value = "Error";
    }
}