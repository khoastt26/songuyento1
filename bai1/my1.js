function checkSNT(){
    let SNT = document.getElementById('SNT').value;
    let count = 1;
    for(let i = 2;i <= SNT; i++){
        if(SNT % i == 0){
            count +=1;
        }
    }
    if(count == 2){
        document.getElementById('check').innerHTML = SNT + ' là số nguyên tố';
    } else {
        document.getElementById('check').innerHTML = SNT + ' không phải số nguyên tố';  
    }
}