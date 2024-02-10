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
        "0": [0.0001, 1, 2.471e-8, 1e-10, 0.000119599, 0.00107639],
        "1": [1, 10000, 0.000247105, 1e-6, 1.19599, 10.7639],  
        "2": [4046.86, 40469445.56859571024, 1, 0.00404686, 4840, 43560], 
        "3": [1000000, 1e10, 247.105, 1, 1195990, 10763910.41671], 
        "4": [0.836127, 8361.27, 0.000206612, 8.36127e-7, 1, 9],  
        "5": [0.092903, 929.03, 2.2957e-5, 9.2903e-8, 0.111111, 1] 
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