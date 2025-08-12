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

function toRad(degree)
{
    return degree*(Math.PI/180);
}

function sin(x)
{
    return Number(Math.sin(toRad(x)).toFixed(10));
}


function cos(x)
{
    return Number(Math.cos(toRad(x)).toFixed(10));
}


function tan(x)
{
    return Number(Math.tan(toRad(x)).toFixed(10));
}

function calculate() 
{
    try {
        let expression = display.value.replace(/\^/g, "**");
        if (expression.includes("!")) {
        expression = expression.replace(/(\d)!/g, (_, n) => factorial(parseInt(n)));
    }
    display.value = eval(expression);
    } catch {
        display.value = "Error";
    }
}

function factorial(n) 
{
    return n <= 1 ? 1 : n * factorial(n - 1);
}

function toggleScientific() 
{
    const sci = document.getElementById("sci");
    sci.classList.toggle("show");

    const toggleBtn = document.querySelector(".toggle-btn");
    toggleBtn.innerText = sci.classList.contains("show") ? "▼ Other Operations": "▶ Other Operations";
}
