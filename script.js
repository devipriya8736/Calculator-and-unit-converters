var k;
function update(val){
    k=document.getElementById('i').value;
    k=k+val;
    document.getElementById('i').value=k;
    updateequal();
}
function updateequal() {
    try {
        var exp=k.replace();
        //π
        exp = exp.replace(/(\d*\.?\d*)π/g, function(match, group) {
            if(group==0)
            return 1 * Math.PI;
            else
            return group*Math.PI;
        });
        //e
        exp = exp.replace(/(\d*\.?\d*)e/g, function(match, group) {
            if(group==0)
            return 1 * Math.E;
            else
            return group*Math.E;
        });
        //√
        exp = exp.replace(/(\d*\.?\d*)√(\d*\.?\d*)/g, function(match, group1,group2){
            if(group1==0)
            return 1 * Math.sqrt(group2);
            else
            return group1*Math.sqrt(group2);
        });
        exp = exp.replace(/(\d*\.?\d*)\s*Mod\s*(\d*\.?\d*)/g, function(match, group1, group2) {
            return parseFloat(group1) % parseFloat(group2);
        });
        var result =math.evaluate(exp);
        document.getElementById('i2').value = result;
    } catch (e) {
        document.getElementById('i2').value = '';
    }
}
function update_backspace() {
    k= document.getElementById('i').value;
    k = (k.toString().slice(0, -1));
    document.getElementById('i').value = k;
    updateequal();
}

function updateC(){
    document.getElementById('i').value=null;
    document.getElementById('i2').value=null;
}
document.addEventListener('keydown',function(event){
    var key =event.key;
    var vkeys=['0','1','2','3','4','5','6','7','8','9','+','-','*','/','.','(',')','%','^','!','Enter','Backspace','Delete'];
    if(vkeys.includes(key)){
        if(key.match(/[0-9+\-*/.()^!%]/)){
            update(key);
        }
        else if(key==='Enter'){
            updateequal();
        }
        else if(key==='Backspace'){
            if(document.getElementById('i').value===''){
                updateC();
            }
            else{
                update_backspace();
            }
        }
        else{
            updateC();
        }
    }
});
