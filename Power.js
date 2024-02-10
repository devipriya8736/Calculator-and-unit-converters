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
        "0": [1000,1,1000,1000,1.3596216],
        "1": [1,0.001,1,1,1.3596216/1000],
        "2": [1,0.001,1,1,1.3596216/1000],
        "3": [1,0.001,1,1,1.3596216/1000],
        "4": [735.49875936069271,735.49875936069271/1000,735.49875936069271,735.49875936069271,1]
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