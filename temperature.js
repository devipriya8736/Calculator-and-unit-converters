var fromUnit;
var toUnit ;
function update(val){
    k=document.getElementById('i1').value;
    k=k+val;
    document.getElementById('i1').value=k;
    updateequal();
}

function updateequal() {
    var inputTemperature = Number(k);

    if (!isNaN(inputTemperature)) {
        var fromUnit = document.getElementById("s1").value;
        var toUnit = document.getElementById("s2").value;
        var convertedTemperature;
        
        switch(fromUnit.toString() + toUnit.toString()) {
            case "11": convertedTemperature = inputTemperature;
                      break;
            case "12": convertedTemperature = (inputTemperature * 9/5) + 32;
                      break;
            case "13": convertedTemperature = (inputTemperature * 4)/5;
                      break;        
            case "14": convertedTemperature = (inputTemperature * 9)/5 + 491.67;
                      break;             
            case "15": convertedTemperature = inputTemperature + 273.15;
                      break;
            case "21": convertedTemperature = (inputTemperature -32) * 5/9;
                      break;
            case "22": convertedTemperature = inputTemperature;
                      break;
            case "23": convertedTemperature = (inputTemperature -32)/2.25;
                      break;        
            case "24": convertedTemperature = inputTemperature + 459.67;
                      break;             
            case "25": convertedTemperature = (inputTemperature + 459.67)/1.8;
                      break;
            case "31": convertedTemperature = (inputTemperature) * 5/4;
                      break;
            case "32": convertedTemperature = (inputTemperature * 9)/4 +32;
                      break;
            case "33": convertedTemperature = inputTemperature;
                      break;        
            case "34": convertedTemperature = (inputTemperature/ 0.8 + 273.15) * 1.8;
                      break;             
            case "35": convertedTemperature = (inputTemperature * 5)/4 + 273.15;
                      break;
            case "41": convertedTemperature = (inputTemperature - 491.67)/1.8;
                      break;
            case "42": convertedTemperature = (inputTemperature - 459.67);
                      break;
            case "43": convertedTemperature = ((inputTemperature - 491.67)/1.8)*0.8;
                      break;        
            case "44": convertedTemperature = inputTemperature;
                      break;             
            case "45": convertedTemperature = (inputTemperature)/1.8;
                      break;                          
            case "51": convertedTemperature = (inputTemperature - 273.15);
                      break;
            case "52": convertedTemperature = (inputTemperature*1.8)-459.67;
                      break;
            case "53": convertedTemperature = (inputTemperature - 273.15)*4/5;
                      break;        
            case "54": convertedTemperature = inputTemperature *1.8;
                      break;             
            case "55": convertedTemperature = inputTemperature;
                      break;                                                        
        }
        var textValue1 = convertedTemperature.toString();
        document.getElementById('i2').value = textValue1;
    } else {
        document.getElementById('i2').value = "Invalid input";
    }
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

