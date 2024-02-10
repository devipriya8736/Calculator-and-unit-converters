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
        "0": [760.0002229150602429472351, 1, 101.325, 101.325/1000, 101.325/100], // Millimetre of mercury (mmHg) to all other units
        "1": [7.500617,0.00986923,1, 0.001, 0.01], // Standard atmospher (atm) to all other units
        "2": [7.500617*1000,0.00986923*1000,1000,1, 10], // Kilopascal (kPa) to all other units
        "3": [1, 0.001315789087751047274043,0.1333223653467441, 0.1333223653467441/1000, 0.1333223653467441/100], // Megapascal (MPa) to all other units
        "4": [750.06168270417, 0.986923, 100, 0.1, 1] // Bar to all other units
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