let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];

let result = "";

for(let i in pronoun){
    for(let j in adj){
        for(let k in noun){
            result += pronoun[j]+adj[i]+noun[k]+".com"+`\n`
        }
    }
}

console.log(result);