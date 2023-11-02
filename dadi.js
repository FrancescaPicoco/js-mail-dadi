
//const mynumb = parseInt(prompt("put your number"));
//const numericasuali = Math.floor(Math.random() * 6) ;
//const numericasualiValue = numericasuali.value
//
rndNumb.addEventListener("click" , function() {
    
    const num1 = Math.round(Math.random()* 6) +1;
    console.log(num1);      
})
rndNumb2.addEventListener("click" , function(){
    const num2 = Math.round(Math.random()*6) +1;
    console.log(num2);
})

if(num1 > num2) {
    console.log("hai vinto");
    }else if (num1 < num2){
        alert("hai perso");
    }else if (num1 = num2) {
        alert("pareggio");
    }else{
        console.log("error");
    }
