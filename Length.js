var fromUnit;
var toUnit ;
function update(val){
    k=document.getElementById('i1').value;
    k=k+val;
    document.getElementById('i1').value=k;
    updateequal();
}
function updateequal() {
    fromUnit = document.getElementById("s1").value;
    toUnit = document.getElementById("s2").value;
    var input = (document.getElementById("i1").value);
    var result;
    var conversionFactors = {
        "0": [0.001, 1, 10, 100, 1000, 1e6, 1e9],
        "1": [1, 0.001, 1000, 1000000, 0.00001, 0.000001],
        "2": [0.001, 0.000001, 1, 1000, 1e-8, 1e-9],
        "3": [1e-6, 1e-9, 0.001, 1, 1e-11, 1e-12],
        "4": [100000, 100, 100000000, 100000000000, 1, 0.1],
        "5": [1000000, 1000, 1000000000, 1000000000000, 10, 1],
        "6": [0.000001, 0.000000001, 0.001, 1, 1e-9, 1e-12] // Kilometers to all other units
    };
    
    result = input * conversionFactors[fromUnit][toUnit];
    document.getElementById("i2").value = result;
}
function update_backspace() {
    var currentNumber = document.getElementById('i1').value;
    currentNumber = (currentNumber.toString().slice(0, -1));
    document.getElementById('i1').value = currentNumber;
    updateequal();
}
function updateC(){
    document.getElementById('i1').value=null;
    document.getElementById('i2').value=null;
}
document.addEventListener('keydown',function(event){
    var key=event.key;
    var keys=['0','1','2','3','4','5','6','7','8','9','.','Backspace','Delete','Enter'];
    if(keys.includes(key)){
        if(key.match(/[0-9\.]/)){
            update(key);
        }
        else if(key==='Enter'){
            updateequal();
        }
        else if(key==='Backspace'){
            update_backspace();
        }
        else{
            updateC();
        }
    }
});