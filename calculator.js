let result = document.getElementById("inputext");

let calculate= (number) => {
    result.value+=number;
}

let Result= () => {
    try{
        result.value=eval(result.value)
    }
    catch{
        alert("Enter The Valid Input");
    }
}

function clr(){
    result.value = '';
}

function del(){
    result.value = result.value.slice(0,-1);
}