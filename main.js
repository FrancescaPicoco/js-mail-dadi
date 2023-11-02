const usersMail =["francesca@icloud.com" , "sara@icloud.com" , "mariella@icloud.com" , "francesco@icloud.com"];

const userMail = document.getElementById("mail")
const btn = document.getElementById("share");
const enaBle = document.getElementById("enable");

let correctEmail = false
console.log(correctEmail , "valore iniziale");

btn.addEventListener("click" , function() {
    const emailvalue = document.getElementById("mail").value;
    console.log(emailvalue);
})    
for (let i = 0; i < usersMail.length; i++) {
    const mailcontrollata = usersMail[i];
    console.log(mailcontrollata);

    if (correctEmail = true) {
        console.log("utente trovato");
        enaBle.innerHTML = ("sei autorizzato");  
    } else  {
        console.log("email non trovata")
    } 
}


/*if (mail) {
    alert("ciao" + usersMail);
}else {
    alert("non sei autorizzato");
    }*/


/*for (let i = 0 ; i < usersMail.length ; i++) {
btn.addEventListener("click" , function() {
    const email = userMail.value;
        console.log(usersMail[email]);
    
        if ( email == true) {
            console.log("utente trovato") ; 
        } else (email == false) 
             console.log("registrati");  
})*/








