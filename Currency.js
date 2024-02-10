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
        "0": [1, 1.32, 0.012, 0.018, 0.0096], // 1 Indian Rupee (INR) = 1 Indian Rupee (INR), 1 INR = 0.85 Bangladeshi Taka (BDT), 1 INR = 0.014 US Dollar (USD), and so on.
        "1": [0.76, 1, 0.0091, 0.014, 0.0072], // 1 Bangladeshi Taka (BDT) = 1.18 Bangladeshi Taka (BDT), 1 BDT = 1 Bangladeshi Taka (BDT), 1 BDT = 0.017 US Dollar (USD), and so on.
        "2": [82.97,109.76, 1, 1.53, 0.79], // 1 US Dollar (USD) = 73.23 Indian Rupee (INR), 1 USD = 57.84 Bangladeshi Taka (BDT), 1 USD = 1 US Dollar (USD), and so on.
        "3": [54.1, 71.56, 0.65, 1, 0.52], // Conversion factors for Australian Dollar (AUD)
        "4": [104.77, 138.6, 1.26, 1.94, 1] // Conversion factors for UK Pound Sterling (GBP)
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