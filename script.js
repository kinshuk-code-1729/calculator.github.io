const calc =  ()=> {
    let op = document.querySelector("#operation").value;
    let x = document.querySelector("#n1").value;
    let y = document.querySelector("#n2").value;

    if(x === '' || y === ''){
        alert("One or More Fields are empty !!!!!!");
        return;
    }
    
    x = parseFloat(x);
    y = parseFloat(y);
    let z = 0.0;

    if(op === 'add'){
        z = x + y;
    }
    else if(op === 'sub'){
        z = x - y;
    }
    else if(op === 'mul'){
        z = x * y;
    }
    else if(op === 'div'){
        z = x / y;
    }

    document.querySelector("#result").innerHTML =`Result value is : ${Math.round(z*1000)/1000}`;
}
