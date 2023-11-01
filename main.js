const usersMail =["francesca@icloud.com" , "sara@icloud.com" , "mariella@icloud.com" , "francesco@icloud.com"];
//let user = usersMail.every(i=> usersMail.includes("email"))
//console.log(user);

const frst = ("francesca@icloud.com")

const userMail = document.getElementById("mail")
const btn = document.getElementById("share");

/*btn.addEventListener("click" , function() {
    const email = userMail.value;
    console.log(usersMail[email]);
})        
for (let i = 0 ; i < usersMail.length ; i++) {
    if ( email == true) {
        console.log("utente trovato") ; 
    } else (email == false) 
         console.log("registrati");  
}*/

/*for (let i = 0 ; i < usersMail.length ; i++) {
btn.addEventListener("click" , function() {
    const email = userMail.value;
        console.log(usersMail[email]);
    
        if ( email == true) {
            console.log("utente trovato") ; 
        } else (email == false) 
             console.log("registrati");  
})
}*/
btn.addEventListener("click" , function(){
    const email = userMail.value;
    console.log(usersMail[email]);
    for (let i = 0 ; i < usersMail.length ; i++){
        if(email == true) {
            console.log("utente trovato");
        } else if(email == false){ 
            console.log("registrati");
        }
    }
})

/*if(usersMail.indexOf("frst") !== -1){
    alert("Yes, the value exists!");  
}   
else  
{  
    alert("No, the value is absent.");  
}*/  







