const usersMail =["francesca@icloud.com" , "sara@icloud.com" , "mariella@icloud.com" , "francesco@icloud.com"];
const mailUser = prompt("inserisci la tua mail" , "sara@icloud.com");
console.log(usersMail);
let mail = "non autorizzato";
for (let i = 0; i < usersMail.length; i++) {
    const indexMail = usersMail[i];
    //console.log(risultato); 
    if (mailUser == indexMail) {
        mail = "sei autorizzato";
        console.log(mail);
    } 
}
if (mail == "sei autorizzato") {
    alert ("welcome!");
} else {
    alert ("Login Failed");
}







