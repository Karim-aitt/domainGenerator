let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];

let result = "";

for(let i in pronoun){
    for(let j in adj){
        for(let k in noun){
            result += pronoun[j]+adj[i]+noun[k]+".com"+`\n`+"<br>"
        }
    }
}

console.log(result);

// Paso 4 del ejercicio:  run el código con: "$ node app.js"   en la terminal 

document.getElementById("domain").innerHTML = `${result}`