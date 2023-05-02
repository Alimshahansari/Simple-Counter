function decreaseNumber() {
    let defaultValue=parseInt(document.getElementById('display').value);
    display.value=document.getElementById('display').value= defaultValue-1;
}

function addNumber() {
    let defaultValue = parseInt(document.getElementById('display').value);
    document.getElementById('display').value = defaultValue + 1;
    
}
function rest(){
    let defaultValue = parseInt(document.getElementById('display').value);
    document.getElementById('display').value=0;
}
