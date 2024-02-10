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
        "0": [0.001, 1000, 1e6, 1, 100, 1000], // Litre to all other units
        "1": [1e-5, 10, 10000, 0.01, 1, 10], // Centilitre to all other units
        "2": [1e-6, 1, 1000, 1e-3, 1e-1, 1], // Millilitre to all other units
        "3": [1, 1000000, 1e9, 1000, 100000, 1000000], // Cubic metre to all other units
        "4": [1e-6,1, 1e3, 1e-3, 0.1, 1], // Cubic centimetre to all other units
        "5": [1e-9,0.001, 1,1e-6, 0.0001, 0.001] // Cubic millimetre to all other units
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