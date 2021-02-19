function check(a){
    let count = 1;
    for(let i = 2;i <= a; i++){
        if(a % i == 0)
        count ++;
    }
    if(count == 2)
    return 1;
    return 0;
}
function sum20First(){
    let sum = 0;
    let count = 0;
    for(let i = 2;count <= 20 ; i++ ){
        if(check(i)== 1){
            sum += i;
            document.write(i + ' ');
            count ++;
        }
        
    }
    document.getElementById('result').innerHTML = sum;
   
}
