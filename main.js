const usersMail =["francesca@icloud.com" , "sara@icloud.com" , "mariella@icloud.com" , "francesco@icloud.com"];
//let  = usersMail.every(i => usersMail.includes(i));
//console.log();
//let user2 = usersMail.every(i => usersMail.includes(i));
//console.log(user2);
//let user3 = usersMail.every(i => usersMail.includes(i));
//console.log(user3);
//let user4 = usersMail.every(i => usersMail.includes(i));
//console.log(user4);
let user = usersMail.every(i=> usersMail.includes("email"))
console.log(user);
//const IncludesD = usersMail.includes('email');
//console.log(IncludesD , 'nontrovato'); 

const userMail = document.getElementById("mail")
const btn = document.getElementById("share");

btn.addEventListener("click" , function() {
    const email = userMail.value;
        //console.log(email);
    for (let i = 0 ; i < usersMail.length ; i++) {
        if ( user == true) {
            console.log("utente trovato") ; 
        } else (user == false) 
            console.log("registrati");
        
    }  
})






